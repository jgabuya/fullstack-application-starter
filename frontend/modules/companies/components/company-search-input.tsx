import { FormGroup, TextField } from '@material-ui/core'
import useCompaniesFilter from '@/modules/companies/hooks/use-companies-filter'

const CompanySearchInput = () => {
  const { handleCompaniesFilterNameChange } = useCompaniesFilter()

  return (
    <FormGroup row>
      <TextField
        id='outlined-basic'
        label='Search companies'
        variant='outlined'
        onChange={(e) => handleCompaniesFilterNameChange(e.target.value)}
        fullWidth
      />
    </FormGroup>)
}

export default CompanySearchInput
