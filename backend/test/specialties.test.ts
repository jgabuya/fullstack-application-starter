import supertest from 'supertest'
import server from '@app/api/server'
import { forIn } from 'lodash'
import { string } from 'yup'
import { Specialty } from '@app/services/specialty'

const request = supertest(server)

describe('/specialties endpoint', () => {
  const specialtyModel = string().strict().required()

  const isValidSpecialty = (specialty: Specialty) => specialtyModel.isValidSync(specialty)

  test('get: no query', async () => {
    const response = await request.get('/specialties')

    const specialties = JSON.parse(response.text)

    forIn(specialties, (specialty) => {
      expect(isValidSpecialty(specialty)).toBe(true)
    })

    expect(response.status).toBe(200)
  })
})
