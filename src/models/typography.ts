import type Project from '@/models/projects';

export interface Typography extends Project { };

const DATA: Typography[] = [
  {
    name: "JayJay's",
    date: new Date(2021),
    position: "Logoentwicklung",
    company: "JayJay's | Bowls, Juices and more",
  },
  {
    name: "Hygge Wortbildmarke",
    date: new Date(2019),
    position: "Logoentwicklung",
    company: "Verlag Gruner+Jahr"
  },
  {
    name: "Mineralum",
    date: new Date(2022),
    position: "Logoweiterentwicklung",
    company: "Mineralum"
  },
  {
    name: "Neurologische Praxis Kristin Nowak",
    date: new Date(2018),
    position: "Logoentwicklung",
    company: "Neurologische Praxis Kristin Nowak"
  },
  {
    name: "G+J Gin",
    date: new Date(2019),
    position: "Labelgestaltung",
    company: "Verlag Gruner+Jahr"
  },
  {
    name: "Landlust Zuhaus Logo",
    date: new Date(2021),
    position: "Logoentwicklung",
    company: "Verlag Gruner+Jahr"
  }
]

export default DATA;
