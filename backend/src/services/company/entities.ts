export interface Company {
  name: string
  logoUrl: string
  specialty: string
  city: string
}

export interface CompanyQuery {
  name: string
  specialties: string[]
}
