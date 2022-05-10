import { writeFileSync } from 'fs'
import generateSpecialties from './generators/specialties'
import generateCompanies from './generators/companies'
import { forIn } from 'lodash'

/**
 * Generate JSON mock files
 */
const SPECIALTY_COUNT = parseInt(process.env.SPECIALTY_COUNT || '10', 10)
const COMPANY_COUNT = parseInt(process.env.COMPANY_COUNT || '100', 10)

const dataPath = `${process.env.NODE_PATH}/mocks/data`

const specialties = generateSpecialties(SPECIALTY_COUNT)

const data = {
  specialties,
  companies: generateCompanies(COMPANY_COUNT, specialties),
}

forIn(data, (value, key) => {
  writeFileSync(`${dataPath}/${key}.json`, JSON.stringify(value), 'utf-8')
})
