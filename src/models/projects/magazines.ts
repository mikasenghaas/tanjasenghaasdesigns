import type { ProjectsById } from '@/models/projects';

const DATA: ProjectsById = {
  'gesund-leben':
  {
    id: 'gesund-leben',
    name: "Gesund Leben",
    date: new Date("2004"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Die Idee für dieses Heft ist aus einer Gesundheitsserie des Magazins STERN entstanden. Alle Themen rund um die menschliche Gesundheit werden mit fundierten Texten beleuchtet und mit großzügigen, beeindruckenden Infografiken ergänzt. Das Layout bricht mit den üblichen textlastigen Gesundheitsratgebern und zeigt sich bilderreich und mit vielen Zusatzkästen und -Informationen."],
    numImages: 6
  },
  'wolf': {
    id: 'wolf',
    name: "Wolf",
    date: new Date("2016"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Das innovative Heftkonzept von WOLF steht für Entschleunigung, Achtsamkeit und Inspiration – für Männer. Das Magazin ist ein Special von FLOW und ist in der Verlagsgruppe Deutsche Medien-Manufaktur (DMM), einer Tochter von Gruner + Jahr und dem Landwirtschaftsverlag Münster erschienen. WOLF setzt auf Slow Journalism statt digitaler Eile. Das Magazin ist ein haptisches und visuelles Erlebnis, arbeitet mit aufwendigen, großformatigen Illustrationen und Fotografien sowie Papierwechseln. Als Extra enthält diese erste Ausgabe ein Retro-Autoquartett zum Herausnehmen sowie die preisgekrönte Reportage der New York Times „Verschollen im Ozean“ in Buchform."],
    numImages: 6
  },
  'hygge': {
    id: 'hygge',
    name: "Hygge",
    date: new Date("2017"),
    position: "Creative Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Es sind die einfachen Dinge des Lebens, die wirklich glücklich machen: Zeit mit Familie und Freunden, Sonne im Gesicht, ein Stück Blaubeerkuchen. Die Dänen wissen, was gemeint ist. Das  Magazin HYGGE bringt dieses Lebensgefühl nach Deutschland. Es feiert die Freude am Zusammensein und den Moment des einfachen Glücks. Optisch besticht HYGGE durch emotionale Fotografie und moderne klare Layouts."],
    numImages: 6
  },
  'holly': {
    id: 'holly',
    name: "Holly",
    date: new Date("2019"),
    position: "Art Direktion | Neuentwicklung",
    company: "Deutsche Medien-Manufaktur",
    description: ["Immer mehr Verlage setzen auf einen neuen Trend im Printgeschäft: Influencer-Magazine. Der Verlag startete mit der Bloggerin Holly Becker als Testimonial den neuen Einrichtungstitel Living at Home + Holly. Das Magazin spiegelt die persönliche Note von Holly Becker wider. Sie lässt in vielen Beiträgen ihre Meinung und Sichtweise einfließen. Das Magazin besticht durch seine opulenten Aufmacher und einen ganz eigenen Look."],
    numImages: 6
  },
  'wohllebens-welt': {
    id: 'wohllebens-welt',
    name: "Wohllebens Welt",
    date: new Date("2019"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Gemeinsam mit dem Förster und Bestseller-Autor Peter Wohlleben bringt G+J  die Heftreihe Wohllebens Welt auf den Markt. Peter Wohlleben wurde dank seiner Bücher “Das geheime Leben der Bäume” (über 700.000 verkaufte Exemplare) und “Das Seelenleben der Tiere”  zum Bestseller-Autor. Das neue Magazin richtet sich an eine natur- und umweltinteressierte Zielgruppe. Das Layout spielt mit sinnlichen und opulenten Bildern und klaren Infografiken."],
    numImages: 6
  },
  'robb': {
    id: 'robb',
    name: "Robb",
    date: new Date("2020"),
    position: "Art Direktion | Redesign",
    company: "Jahreszeitenverlag",
    description: ["Robb Report ist die weltweit erfolgreichste Medienmarke im Luxussegment. Das Luxusmagazin spürt der Frage nach, wie sich ein zeitgemäßer Luxusbegriff in seiner Vielfalt definiert. Das Layout ist elegant und zeitlos. Das Titelkonzept wurde dahingehend geändert, dass es jetzt immer illustrativ gelöst wird."],
    numImages: 6
  },
  'landlust-zuhaus': {
    id: 'landlust-zuhaus',
    name: "Landlust Zuhaus",
    date: new Date("2021"),
    position: "Art Direktion | Redesign",
    company: "Deutsche Medien-Manufaktur ",
    description: ["Landlust Zuhaus ist das Wohnmagazin der Zeitschrift LANDLUST. Mit der Ausgabe 01/2021 wurde das Wohnmagazin Landlust Zuhaus mit modernem Layout frisch renoviert und erweitertem Themenspektrum ergänzt."],
    numImages: 6
  },
  'einfach-hausgemacht': {
    id: 'einfach-hausgemacht',
    name: "Einfach Hausgemacht",
    date: new Date("2021"),
    position: "Art Direktion | Redesign",
    company: "Deutsche Medien-Manufaktur",
    description: ["Einfach Hausgemacht ist ein Magazin mit kreativen Rezeptideen, Do-It-Yourself-Bastel- und Dekotipps und praktischem Haushaltswissen aus der Landlust-Familie. Schwerpunkt von Einfach Hausgemacht ist Kochen und Essen. Es ist eine hochwertige, detailverliebt gestaltete und getexte, eigenständige Zeitschrift. "],
    numImages: 5
  },
  'hygge-spezial': {
    id: 'hygge-spezial',
    name: "Hygge Spezial",
    date: new Date("2021"),
    position: "Art Direktion | Neuentwicklung",
    company: "Deutsche Medien-Manufaktur",
    description: ["Line Extension von HYGGE zum Thema Wohnen. In dieser Extra-Ausgabe dreht sich alles um ein hyggeliges Zuhause: Was ist das Geheimnis skandinavischer Gemütlichkeit, wie holt man sich den Hygge-Stil ins Haus und was gehört alles dazu? Außerdem schnelle und unkomplizierte DIY-Ideen zum Nachmachen. Das Layout orientiert sich an dem Mutterheft HYGGE- hat aber ein paar eigenständige und spielerische Elemente dazu bekommen."],
    numImages: 6
  }
}

export default DATA;
