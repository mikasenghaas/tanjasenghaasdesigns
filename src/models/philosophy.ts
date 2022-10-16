export interface Philosophy {
  name: string
  description: string[]
}

const DATA: Philosophy[] = [
  {
    name: 'Editorial Design',
    description: [
      'Rhythmus – Charakter – leichtes Erfassen komplexer Zusammenhänge:',
      'Durch den Blick auf das große Ganze unterstützt und bestimmt das Visuelle den Inhalt und prägt wie nebenbei das gesamte Erscheinungsbild.'
    ]
  },
  {
    name: 'Artdirektion',
    description: [
      'Stilbewusstsein – Komplexität – hohe Qualität und deren Kontrolle:',
      'Die kreative Umsetzung und Begleitung aller Produktionsvorgänge fußt auf einer künstlerischen Verantwortung.'
    ]
  },
  {
    name: 'Grafikdesign',
    description: [
      'Typographie – Bildsprache – Farbenvielfalt – Materialität:',
      'Deren Komposition lässt gedankliche Zusammenhänge in visuell erfahrbarem Kontext entstehen und erlebbar machen'
    ]
  }
]

export default DATA
