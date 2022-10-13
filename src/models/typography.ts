import { Project } from '@/models/projects';

export interface Typography extends Project {
  link?: string
};
export type typographyById = Record<string, Typography>
const DATA: typographyById = {
  'jayjays': {
    id: 'jayjays',
    name: "JayJay's",
    date: new Date("2021"),
    description: ["Logoentwicklung für die PokeBowl Restaurant-Kette von Jayjay´s in Hamburg."],
    link: 'https://www.jayjays-food.com/',
    position: "Logoentwicklung",
    company: "JayJay's | Bowls, Juices and more",
  },
  'hygge-wortbildmarke': {
    id: 'hygge-wortbildmarke',
    name: "Hygge Wortbildmarke",
    date: new Date("2019"),
    description: ["Entwicklung einer Wortbildmarke für das Magazin Hygge."],
    position: "Logoentwicklung",
    company: "Medienmanufaktur Münster"
  },
  'mineralum': {
    id: 'mineralum',
    name: "Mineralum",
    date: new Date("2022"),
    description: ["Logo Redesign und Werbemittelgestaltung für den Handwerksbetrieb und Produkthandel von Mineralum und seiner Schwesterfirma Produktum.", "Fugenlose Wand und Bodengestaltung - Made in Germany."],
    link: "https://mineralum.de/",
    position: "Logoweiterentwicklung",
    company: "Mineralum"
  },
  'kristin-nowak-logo': {
    id: 'kristin-nowak-logo',
    name: "Kristin Nowak Logo",
    date: new Date("2018"),
    description: ["Logogestaltung und CI für die Neurologische Praxis von Kristin Nowak in München.", "Neurologische Praxis Kristin Nowak München."],
    position: "Logoentwicklung",
    company: "Neurologische Praxis Kristin Nowak"
  },
  'gj-gin': {
    id: 'gj-gin',
    name: "G+J Gin",
    date: new Date("2019"),
    description: ["Etikettgestaltung für einen hauseigenen Gin anlässlich einer Firmenfeier von Gruner + Jahr Hamburg."],
    position: "Labelgestaltung",
    company: "Verlag Gruner+Jahr"
  },
  'landlust-zuhaus-logo': {
    id: 'landlust-zuhaus-logo',
    name: "Landlust Zuhaus Logo",
    date: new Date("2021"),
    description: ["Entwicklung eines neuen zeitgemäßen Logos für die Zeitschrift „Landlust Zuhaus“. Ein Heft der Landlust Gruppe."],
    position: "Logoentwicklung",
    company: "Verlag Gruner+Jahr"
  },
  'landlust-shop': {
    id: 'landlust-shop',
    name: "Landlust Shop",
    date: new Date("2022"),
    description: [""],
    position: "Logoentwicklung",
    company: "Verlag Gruner+Jahr"
  }
}

export default DATA;
