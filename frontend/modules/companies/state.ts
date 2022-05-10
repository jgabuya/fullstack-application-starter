import { atom } from 'recoil'
import type { Company, Specialty } from '@/modules/companies/types'

export const companiesState = atom({
  key: 'companies/companies',
  default: [] as Company[]
})

export const specialtiesState = atom({
  key: 'companies/specialties',
  default: [] as Specialty[]
})

export const companiesNameFilterState = atom({
  key: 'companies/companies-name-filter',
  default: '' as string
})

export const companiesSpecialtiesFilterState = atom({
  key: 'companies/companies-specialties-filter',
  default: [] as Specialty[]
})
