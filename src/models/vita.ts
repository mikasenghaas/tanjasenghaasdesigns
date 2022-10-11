export interface VitaItem {
  startDate?: Date,
  endDate?: Date,
  title: string,
  description?: string[],
  company?: string
}

const DATA: VitaItem[] = [
  {
    startDate: new Date("2019"),
    title: "Tanja Senghaas Designs: Freiberufliche Tätigkeit",
    description: ["Neuentwicklung und Redesigns von Magazinen und Broschüren, Erstellung Whitepaper, Logoentiwcklung, Design Workshops, Designberatung"],
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Naturmagazins Wohllebens Welt. Leitung der Grafik- und Bildredaktion."],
    company: "Gruner+Jahr, Hamburg"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Lifestylemagazins Living at Home - Holly. Leitung der Grafik- und Bildredaktion."],
    company: "Deutsche Medienmanufaktur, Münster"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Lifestylemagazins Hygge. Leitung der Grafik- und Bildredaktion."],
    company: "Deutsche Medienmanufaktur, Münster"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des neuen Lifestylemagazins Wolf. Leitung der Grafik- und Bildredaktion."],
    company: "Gruner+Jahr, Hamburg"
  },
  {
    title: "Stellvertrende Art Direktion",
    description: ["Stellvertretende Leitung der Grafik- und Bildabteilung des stern. Grafischer Relaunch des Magazins.", "Währenddessen: Grafische und konzeptionelle Entwicklung des Gesundheitsmagazins stern Gesund Leben / Grafische Leitung des stern eMags / Online Magazin / Entwicklung mehrer Onlinemagazine in Zusammenarbeit mit der Print- und Oblineabteilung des stern"],
    company: "Gruner+Jahr, Hamburg"
  },
  {
    title: "Art Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des Lifestylemagazins Modern Living. Leitung der Grafik- und Bilredaktion"],
    company: "Motorpresse, Stuttgart"
  },
  {
    startDate: new Date("1997"),
    endDate: new Date("1999"),
    title: "Stellvertrende Direktion",
    description: ["Grafische und konzeptionelle Entwicklung des Lifestylemagazins Womens Sports and Fitness. Leitung der Grafik- und Bilredaktion"],
    company: "Conde Nast Publications, New York, USA"
  },
  {
    startDate: new Date("1997"),
    endDate: new Date("1999"),
    title: "Grafik Design",
    description: ["Grafische Gestaltung der deutschen Ausgabe von dem Männermagazin Men's Health"],
    company: "Motorpresse, Stuttgart"
  },
  {
    startDate: new Date("1995"),
    endDate: new Date("1997"),
    title: "Studium Kommunikationsdesign (Diplom)",
    company: "U5, Akademie an der Einsteinstraße, München"
  },
  {
    startDate: new Date("1990"),
    endDate: new Date("1995"),
    title: "Studium (Auslandssemester)",
    company: "Camberwell College of Arts, London Institute"
  },
  {
    startDate: new Date("1989"),
    endDate: new Date("1995"),
    title: "Abitur",
  },
]

export default DATA;
