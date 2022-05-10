import server from '@app/api/server'

afterAll(() => {
  if (server) server.close()
})
