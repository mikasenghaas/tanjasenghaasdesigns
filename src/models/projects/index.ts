import magazinesById from '@/models/projects/magazines'
import corporateById from '@/models/projects/corporate'
import typographyById from '@/models/projects/typography'

export interface Project {
  id: string
  name: string
  date: Date
  description: string[]
  position: string
  company: string
  numImages?: number
  link?: string
}

export interface ProjectsById {
  [key: string]: Project
}

const projectsById: ProjectsById = {
  ...magazinesById,
  ...corporateById,
  ...typographyById
}
export default projectsById
