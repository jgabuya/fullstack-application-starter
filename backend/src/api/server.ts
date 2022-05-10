'use strict'

import express from 'express'
import cors from 'cors'
import initRoutes from './routes'
import type * as http from 'http'

const port = process.env.PORT || 4000

// server singleton
let server: http.Server

if (!server) {
  const app = express()

  app.use(cors())

  server = initRoutes(app).listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}

export default server
