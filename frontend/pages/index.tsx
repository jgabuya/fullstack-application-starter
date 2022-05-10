import * as React from 'react'
import Head from 'next/head'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { CompaniesTable, CompanySearchInput, SpecialtiesFilter } from '@/modules/companies'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Fullstack Application Starter</title>
        <meta name='description' content='Fullstack app in React and Node' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxWidth='sm'>
        {/* search and filtering */}
        <Grid container spacing={3} className={''}>
          <Grid item xs={12}>
            <CompanySearchInput />
          </Grid>

          <Grid item xs={12}>
            <SpecialtiesFilter />
          </Grid>
        </Grid>

        {/* companies table */}
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12}>
            <CompaniesTable />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
