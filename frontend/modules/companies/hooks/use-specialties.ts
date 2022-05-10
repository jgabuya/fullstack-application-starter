import { useCallback, useEffect } from 'react'
import { API_URL } from '@/constants'
import { useRecoilState } from 'recoil'
import { specialtiesState } from '@/modules/companies/state'

const useSpecialties = () => {
  const [specialties, setSpecialties] = useRecoilState(specialtiesState)

  const fetchSpecialties = useCallback((signal: AbortSignal) => {
    fetch(`${API_URL}/specialties`)
      .then(response => response.json())
      .then(specialties => setSpecialties(specialties))
  }, [setSpecialties])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSpecialties(signal)

    return () => {
      controller.abort()
    }
  }, [])

  return {
    specialties
  }
}

export default useSpecialties
