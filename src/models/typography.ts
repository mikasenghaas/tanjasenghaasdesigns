import { Project } from '@/models/projects';

export interface Typography extends Project { };
export type typographyById = Record<string, Typography>
const DATA: typographyById = {
  'jayjays': {
    id: 'jayjays',
    name: "JayJay's",
    date: new Date("2021"),
    position: "Logoentwicklung",
    company: "JayJay's | Bowls, Juices and more",
  },
  'hygge-wortbildmarke': {
    id: 'hygge-wortbildmarke',
    name: "Hygge Wortbildmarke",
    date: new Date("2019"),
    position: "Logoentwicklung",
    company: "Verlag Gruner+Jahr"
  },
  'mineralum': {
    id: 'mineralum',
    name: "Mineralum",
    date: new Date("2022"),
    position: "Logoweiterentwicklung",
    company: "Mineralum"
  },
  'kristin-nowak-logo': {
    id: 'kristin-nowak-logo',
    name: "Kristin Nowak Logo",
    date: new Date("2018"),
    position: "Logoentwicklung",
    company: "Neurologische Praxis Kristin Nowak"
  },
  'gj-gin': {
    id: 'gj-gin',
    name: "G+J Gin",
    date: new Date("2019"),
    position: "Labelgestaltung",
    company: "Verlag Gruner+Jahr"
  },
  'landlust-zuhaus-logo': {
    id: 'landlust-zuhaus-logo',
    name: "Landlust Zuhaus Logo",
    date: new Date("2021"),
    position: "Logoentwicklung",
    company: "Verlag Gruner+Jahr"
  }
}

export default DATA;
