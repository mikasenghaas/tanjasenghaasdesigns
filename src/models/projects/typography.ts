import { ProjectsById } from '@/models/projects';

const DATA: ProjectsById = {
  'jayjays': {
    id: 'jayjays',
    name: "JayJay's",
    date: new Date("2021"),
    description: ["Logoentwicklung für die Restaurant-Kette Jayjay´s in Hamburg."],
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
    company: "Deutsche Medien-Manufaktur"
  },
  'mineralum': {
    id: 'mineralum',
    name: "Mineralum",
    date: new Date("2022"),
    description: ["Logo-Redesign und Werbemittelgestaltung für den Handwerksbetrieb und Produkthandel Mineralum und seiner Schwesterfirma Produktum.", "Fugenlose Wand und Bodengestaltung."],
    link: "https://mineralum.de/",
    position: "Logoweiterentwicklung",
    company: "Mineralum, Hamburg"
  },
  'kristin-nowak-logo': {
    id: 'kristin-nowak-logo',
    name: "Kristin Nowak Logo",
    date: new Date("2018"),
    description: ["Logogestaltung und CI für die Neurologische Praxis von Kristin Nowak in München."],
    position: "Logoentwicklung",
    company: "Neurologische Praxis Kristin Nowak, München"
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
    description: ["Entwicklung eines neuen zeitgemäßen Logos für die Zeitschrift 'Landlust Zuhaus'."],
    position: "Logoentwicklung",
    company: "Deutsche Medien-Manufaktur"
  },
  'landlust-shop': {
    id: 'landlust-shop',
    name: "Landlust Shop",
    date: new Date("2022"),
    description: ["Neugestaltung des Logos des Landlust-Onlineshops."],
    position: "Logoentwicklung",
    company: "Deutsche Medien-Manufaktur"
  }
}

export default DATA;
