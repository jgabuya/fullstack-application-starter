import serviceFactory from './service'
import store from './store'

const service = serviceFactory(store)

export { service as companyService }

export * from './entities'
