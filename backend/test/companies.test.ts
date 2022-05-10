import supertest from 'supertest'
import { forIn } from 'lodash'
import * as queryString from 'query-string'
import { object, string } from 'yup'
import server from '@app/api/server'
import type { Company } from '@app/services/company'

const request = supertest(server)

describe('/companies endpoint', () => {
  const companyModel = object({
    name: string().strict().required(),
    logoUrl: string().url(),
    specialty: string().strict().required(),
    city: string().strict().required(),
  })

  const isValidCompany = (company: Company) => companyModel.isValidSync(company)

  test('get: no query', async () => {
    const response = await request.get('/companies')

    const companies = JSON.parse(response.text)

    forIn(companies, (company) => {
      expect(isValidCompany(company)).toBe(true)
    })

    expect(response.status).toBe(200)
  })

  test('get: with query', async () => {
    const query = {
      name: 'amor',
      specialties: ['Metrics'],
    }

    const response = await request.get(
      `/companies?${queryString.stringify(query)}`,
    )

    const companies = JSON.parse(response.text)

    forIn(companies, (company) => {
      expect(isValidCompany(company)).toBe(true)
      expect(company.name.toLowerCase().includes(query.name.toLowerCase())).toBe(true)
      expect(query.specialties.includes(company.specialty)).toBe(true)
    })

    expect(response.status).toBe(200)
  })
})
