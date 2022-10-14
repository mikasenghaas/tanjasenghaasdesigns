export interface VitaItem {
  startDate?: Date,
  endDate?: Date | string,
  title: string,
  description?: string[],
  company?: string
}

const vitaItems: VitaItem[] = [
  {
    startDate: new Date("2019"),
    endDate: 'Heute',
    title: "Selbstständige Kreativ Direktorin (Tanja Senghaas Designs.)",
    description: ["Ausgewählte Projekte in den letzten Jahren:"]
  },
  {
    title: "Art Direktion",
    description: ["Redesign des Magazins 'Landlust Zuhaus'.", "Leitung der Grafik- und Bildredaktion."],
    company: "Deutsche Medienmanufaktur, Hamburg/ Münster"
  },
  {
    title: "Art Direktion",
    description: ["Entwicklung und Umsetzung des Whitepapers für Hager Unternehmensberatung"],
    company: "Frankfurt"
  },
  {
    title: "Art Direktion",
    description: ["Entwicklung und Umsetzung des Magazins 'Hygge Spezial'.", "Leitung der Bildredaktion."],
    company: "Deutsche Medienmanufaktur, Hamburg/ Münster"
  },
  {
    title: "Art Direktion",
    description: ["Redesign des Luxusmagazins 'Robb Report'."],
    company: "Jahreszeiten Verlag, Hamburg"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Naturmagazins Wohllebens Welt.", "Leitung der Grafik- und Bildredaktion."],
    company: "Gruner+Jahr, Hamburg"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Lifestylemagazins 'Living at Home - Holly'.", "Leitung der Grafik- und Bildredaktion."],
    company: "Deutsche Medienmanufaktur, Münster"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Lifestylemagazins 'Hygge'. Leitung der Grafik- und Bildredaktion."],
    company: "Deutsche Medienmanufaktur, Münster"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Lifestylemagazins 'Wolf'. Leitung der Grafik- und Bildredaktion."],
    company: "Gruner+Jahr, Hamburg"
  },
  {
    startDate: new Date("2001"),
    endDate: new Date("2015"),
    title: "Stellvertrende Art Direktion",
    description: ["Stellvertretende Leitung der Grafik- und Bildabteilung des stern. Grafischer Relaunch des Magazins.", "Währenddessen: Grafische und konzeptionelle Entwicklung des Gesundheitsmagazins stern Gesund Leben / Grafische Leitung des stern eMags / Online Magazin / Entwicklung mehrer Onlinemagazine in Zusammenarbeit mit der Print- und Oblineabteilung des stern"],
    company: "Gruner+Jahr, Hamburg"
  },
  {
    startDate: new Date("1999"),
    endDate: new Date("2000"),
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des Lifestylemagazins 'Modern Living'.", "Leitung der Grafik- und Bilredaktion"],
    company: "Motorpresse, Stuttgart"
  },
  {
    startDate: new Date("1997"),
    endDate: new Date("1999"),
    title: "Stellvertretende Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des Lifestylemagazins 'Womens Sports and Fitness'.", "Leitung der Grafik- und Bilredaktion"],
    company: "Conde Nast Publications, New York, USA"
  },
  {
    startDate: new Date("1997"),
    endDate: new Date("1999"),
    title: "Grafik Design",
    description: ["Grafische Gestaltung der deutschen Ausgabe von dem Männermagazin Men's Health"],
    company: "Motorpresse, Stuttgart"
  }
]

const educationItems: VitaItem[] = [
  {
    startDate: new Date("1990"),
    endDate: new Date("1995"),
    title: "Studium Kommunikationsdesign (Diplom)",
    company: "U5, Akademie für Kommunikationsdesign, München"
  },
  {
    startDate: new Date("1992"),
    endDate: new Date("1993"),
    title: "Studium (Auslandssemester)",
    company: "Camberwell College of Arts, London Institute, England"
  },
  {
    startDate: new Date("1989"),
    title: "Abitur",
    company: "Gymnasium an der Hamburger Straße, Bremen"
  },
]

export { vitaItems, educationItems };
