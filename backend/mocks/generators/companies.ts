import { faker } from '@faker-js/faker'
import { random, times } from 'lodash'
import { Specialty } from '@app/services/specialty/entities'
import { Company } from '@app/services/company/entities'

const generateCompanies = (count: number, specialties: Specialty[]): Company[] =>
  times(count, () => ({
    name: faker.company.companyName(),
    logoUrl: `${faker.image.business()}?q=${faker.datatype.uuid()}`,
    specialty: specialties[random(0, specialties.length - 1, false)],
    city: faker.address.city(),
  }))

export default generateCompanies
