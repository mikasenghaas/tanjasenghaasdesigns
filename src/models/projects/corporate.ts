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
  'spengler-fox': {
    id: 'spengler-fox',
    name: 'SpenglerFox Website',
    date: new Date('2022'),
    position: 'Kreativ Direktion',
    company: 'SpenglerFox/ Narrative Impact',
    description: ['Optische Neuausrichtung des Webauftritts der Executive Search Agentur SpenglerFox, um Modernität und Agilität der Agentur stärker sichtbar zu machen.'],
    numImages: 3
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
  'landlust-website': {
    id: 'landlust-website',
    name: 'Landlust Website',
    date: new Date('2022'),
    position: 'Art Direktion',
    company: 'Deutsche Medien-Manufaktur',
    description: ['Optisches Konzept für den Aus- und Umbau der Website von Landlust. Aufgabe war es, den Digitalauftritt des erfolgreichen Landmagazins stärker am Look des Heftes auszurichten und nutzerinnenfreundlicher zu gestalten.'],
    numImages: 3
  },
  'horton': {
    id: 'horton',
    name: 'Horton Consulting Website',
    date: new Date('2022'),
    position: 'Art Direktion',
    company: 'Horton Consulting/ Narrative Impact',
    description: ['Optisches Konzept für den Ausbau der Website von Horton Consulting, dem internationalen Executive-Search- und Management-Consulting-Firma.'],
    numImages: 3
  }
}

export default DATA
