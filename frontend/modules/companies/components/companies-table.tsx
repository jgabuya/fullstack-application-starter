import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import useCompanies from '@/modules/companies/hooks/use-companies'

const CompaniesTable = () => {
  const { companies } = useCompanies()

  return (
    <TableContainer component={Paper}>
      <Table aria-label="companies table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Specialty</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={JSON.stringify(company)}>
              <TableCell>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box mr={1}>
                    <Avatar
                      alt={company.name}
                      variant="rounded"
                      src={company.logoUrl}
                    />
                  </Box>

                  <Typography variant="body1">{company.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{company.specialty}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{company.city}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CompaniesTable
