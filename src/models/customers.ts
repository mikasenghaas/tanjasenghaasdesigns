export interface Customer {
  name: string,
  location?: string
}

const DATA: Customer[] = [
  { name: "Gruner + Jahr", location: "Hamburg" },
  { name: "Motor Presse", location: "Stuttgart" },
  { name: "Deutsche Medienmanufaktur", location: "Münster" },
  { name: "Jahreszeitenverlag", location: "Hamburg" },
  { name: "Burda", location: "Offenburg" },
  { name: "Narrative Impact", location: "Berlin/ Hamburg" },
  { name: "Salzwassermedien", location: "Hamburg" },
  { name: "Arztpraxis Nowak", location: "München" },
  { name: "CondeNast", location: "New York" },
  { name: "Mineralum", location: "Hamburg" },
  { name: "Töpper Consulting", location: "Hamburg" },
]

export default DATA;
