import type { Express } from 'express'
import { companyService } from '@app/services/company'
import { specialtyService } from '@app/services/specialty'
import { CompanyQuery } from '@app/services/company/entities'

const initRoutes = (app: Express) => {
  app.get('/companies', (req, res) => {
    res.json(companyService.listCompanies(req.query as unknown as CompanyQuery))
  })

  app.get('/specialties', (req, res) => {
    res.json(specialtyService.listSpecialties())
  })

  return app
}

export default initRoutes
