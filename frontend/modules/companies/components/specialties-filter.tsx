import * as React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import useSpecialties from '@/modules/companies/hooks/use-specialties'
import useCompaniesFilter from '@/modules/companies/hooks/use-companies-filter'

const SpecialtiesFilter = () => {
  const { specialties } = useSpecialties()
  const { companiesSpecialtiesFilter, handleCompaniesFilterSpecialtiesChange } = useCompaniesFilter()

  return (
    <FormGroup row>
      {specialties &&
      specialties.map((specialty) => (
        <FormControlLabel
          key={JSON.stringify(specialty)}
          control={
            <Checkbox
              checked={companiesSpecialtiesFilter.includes(specialty)}
              onChange={(_, isChecked: boolean) => handleCompaniesFilterSpecialtiesChange(specialty, isChecked)}
              name='specialty'
              color='primary'
            />
          }
          label={specialty}
        />
      ))}
    </FormGroup>
  )
}

export default SpecialtiesFilter
