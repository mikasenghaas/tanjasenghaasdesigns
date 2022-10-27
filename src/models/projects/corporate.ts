import type { ProjectsById } from '@/models/projects'

const DATA: ProjectsById = {
  'white-paper': {
    id: 'white-paper',
    name: 'White Paper',
    date: new Date('2021'),
    position: 'Art Direktion',
    company: 'Hager Consulting / Narrative Impact',
    description: [
      'Wer sind die Entscheiderinnen und Entscheider des Jahres 2030? Um diese Frage zu beantworten, hat die Hager Unternehmensberatung mit einem der namhaftesten Zukunfts-Institute Deutschlands zusammengearbeitet: dem Thinktank 2bAHEAD mit Sitz in Leipzig. Sie beantragte die Agentur Narrative Impact mit dem Herausarbeiten des Inhalts. Daraus entstand ein interessantes und optisch anspruchsvolles Whitepaper.'
    ],
    numImages: 4
  },
  'landlust-shop-beihefter': {
    id: 'landlust-shop-beihefter',
    name: 'Landlust Shop Beihefter',
    date: new Date('2022'),
    position: 'Art Direktion',
    company: 'Deutsche Medien-Manufaktur',
    description: ["Um in der Weihnachtszeit auf die Angebote des Landlust Shops aufmerksam zu machen, entstand ein 8-seitiger Beihefter, der in Landlust 6/22 eingeheftet war."],
    numImages: 4
  },
  'landlust-shop-anzeige': {
    id: 'landlust-shop-anzeige',
    name: 'Landlust Shop Anzeige',
    date: new Date('2022'),
    position: 'Art Direktion',
    company: 'Deutsche Medien-Manufaktur',
    description: ["Überarbeitung der Eigenanzeige des Landlust-Shops inklusive neuem Landlust-Shop Logo."],
    numImages: 2
  }
}

export default DATA
