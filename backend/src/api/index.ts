'use strict'

import 'dotenv/config'
import './server'

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
