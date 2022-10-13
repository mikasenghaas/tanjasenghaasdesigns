import { Project } from '@/models/projects';

export interface Corporate extends Project {
  numImages: number
}

export interface CorporateByIdProps { [key: string]: Corporate }
const DATA: CorporateByIdProps = {
  'white-paper': {
    id: 'white-paper',
    name: "White Paper",
    date: new Date("2021"),
    position: "Art Direktion",
    company: "Hager Consulting / Narrative Impact",
    description: ["Wer sind die Entscheiderinnen und Entscheider des Jahres 2030? Um diese Frage zu beantworten, hat die Hager Unternehmensberatung mit einem der namhaftesten Zukunfts-Institute Deutschlands zusammengearbeitet: dem Thinktank 2bAHEAD mit Sitz in Leipzig. Sie beantragte die Agentur Narrative Impact mit dem Herausarbeiten des Inhalts. Daraus entstand ein interessantes und optisch anspruchsvolles Whitepaper."],
    numImages: 4
  },
}

export default DATA;
