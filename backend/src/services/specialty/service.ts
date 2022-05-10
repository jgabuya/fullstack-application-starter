import { Store } from './store'

const listSpecialties = (store: Store) => () => store.listSpecialties()

const serviceFactory = (store: Store) => ({
  listSpecialties: listSpecialties(store),
})

export default serviceFactory
