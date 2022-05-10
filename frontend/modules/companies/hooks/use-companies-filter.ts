import { useCallback } from 'react'
import type { Specialty } from '@/modules/companies'
import { useRecoilState } from 'recoil'
import { companiesNameFilterState, companiesSpecialtiesFilterState } from '@/modules/companies/state'

const useCompaniesFilter = () => {
  const [companiesNameFilter, setCompaniesNameFilter] = useRecoilState(companiesNameFilterState)
  const [companiesSpecialtiesFilter, setCompaniesSpecialtiesFilter] = useRecoilState(companiesSpecialtiesFilterState)

  /**
   * event handlers
   */
  const handleCompaniesFilterNameChange = useCallback((name: string) => {
    return setCompaniesNameFilter(name)
  }, [])

  const handleCompaniesFilterSpecialtiesChange = useCallback(
    (specialty: Specialty, isChecked: boolean) => {

      let newSpecialties

      if (isChecked) {
        newSpecialties = Array.from(new Set([...companiesSpecialtiesFilter, specialty]))
      } else {
        newSpecialties = companiesSpecialtiesFilter.filter((item) => item !== specialty)
      }

      return setCompaniesSpecialtiesFilter(newSpecialties)
    },
    [],
  )

  return {
    companiesNameFilter,
    companiesSpecialtiesFilter,
    handleCompaniesFilterNameChange,
    handleCompaniesFilterSpecialtiesChange,
  }
}

export default useCompaniesFilter
