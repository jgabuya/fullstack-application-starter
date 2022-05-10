import { CompanyQuery } from './entities'
import { Store } from './store'

const listCompanies = (store: Store) => (query: CompanyQuery) => {
  return store.listCompanies(query)
}

const serviceFactory = (store: Store) => ({
  listCompanies: listCompanies(store),
})

export default serviceFactory
