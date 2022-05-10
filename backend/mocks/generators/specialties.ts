import { faker } from '@faker-js/faker'
import { Specialty } from '@app/services/specialty/entities'

const generateSpecialties = (count: number): Specialty[] => {
  const specialties: Specialty[] = []

  while (specialties.length < count) {
    const specialty = faker.name.jobArea()

    // ensure uniqueness of data
    if (specialties.includes(specialty)) {
      continue
    }

    specialties.push(specialty)
  }

  return specialties
}

export default generateSpecialties
