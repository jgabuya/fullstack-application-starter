import { useCallback, useEffect } from 'react'
import queryString from 'query-string'
import { API_URL } from '@/constants'
import { useRecoilState } from 'recoil'
import useCompaniesFilter from './use-companies-filter'
import { companiesState } from '@/modules/companies/state'

const useCompanies = () => {
  const [companies, setCompanies] = useRecoilState(companiesState)
  const { companiesNameFilter, companiesSpecialtiesFilter } = useCompaniesFilter()

  const fetchCompanies = useCallback((signal: AbortSignal) => {
    const qString = queryString.stringify({
      name: companiesNameFilter,
      specialties: companiesSpecialtiesFilter,
    })

    fetch(`${API_URL}/companies?${qString}`, {signal})
      .then(response => response.json())
      .then(companies => setCompanies(companies))
  }, [companiesNameFilter, companiesSpecialtiesFilter, setCompanies])

  /**
   * fetch/refetch companies from API when filter values change
   */
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchCompanies(signal)

    return () => {
      controller.abort()
    }
  }, [companiesNameFilter, companiesSpecialtiesFilter, fetchCompanies])

  return {
    companies,
    companiesNameFilter,
    companiesSpecialtiesFilter,
  }
}

export default useCompanies
