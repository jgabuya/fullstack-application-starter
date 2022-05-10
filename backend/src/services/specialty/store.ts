import specialties from '@app/mocks/data/specialties.json'
import { Specialty } from './entities'

type ListSpecialties = () => Specialty[]

export interface Store {
  listSpecialties: ListSpecialties
}

const listSpecialties: ListSpecialties = () => specialties

const store: Store = {
  listSpecialties,
}

export default store
