import companies from '@app/mocks/data/companies.json'
import { Company } from './entities'

type ListCompanies = (params: { name: string, specialties: string[] }) => Company[]

export interface Store {
  listCompanies: ListCompanies
}

const listCompanies: ListCompanies = ({ name = '', specialties = [] }) =>
  companies.filter((company) => {
    if (name.length > 0) {
      const hasName = company.name.toLowerCase().includes(name.toLowerCase())

      if (!hasName) return false
    }

    if (specialties.length > 0) {
      const hasSpecialty = specialties.includes(company.specialty)

      if (!hasSpecialty) return false
    }

    return true
  })

const store: Store = {
  listCompanies,
}

export default store
