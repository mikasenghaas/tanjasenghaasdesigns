export interface Service {
  name: string
  description: string
}

const DATA: Service[] = [
  {
    name: 'Branding',
    description: 'Entwicklung von Logos, Corporate Design, Webauftritt'
  },
  {
    name: 'Magazindesign',
    description:
      'Neuentwicklung und Überarbeitung von Magazinen, Broschüren und White Paper'
  },
  {
    name: 'Workshops',
    description:
      'Vorträge und Workshops rund um das Thema Gestaltung und Magazinentwicklung. Online und Offline'
  },
  {
    name: 'Consulting',
    description:
      'Beratung zu grafischen und den damit relevanten organisatorischen Fragen in Ihrem Unternehmen.'
  },
  {
    name: 'Pro Bono',
    description:
      'Auch soziale Projekte brauchen Konzeption und Gestaltung. Dafür spende ich 10% meiner Arbeitszeit. Sprechen Sie mich an!'
  }
]

export default DATA
