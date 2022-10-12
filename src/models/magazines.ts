import type Project from '@/models/projects';

export interface Magazine extends Project {
  description: string[] | undefined,
  numImages: number | undefined
}

export interface MagazineByIdProps { [key: string]: Magazine }
const DATA: MagazineByIdProps = {
  'gesund-leben':
  {
    id: 'gesund-leben',
    name: "Gesund Leben",
    date: new Date("2004"),
    position: "Art Direktion | Neuentwicklung",
    company: "Motor Presse Stuttgart",
    description: ["Die Idee für dieses Heft ist aus einer Gesundheitsserie des Magazins STERN entstanden. Alle Themen rund um die menschliche Gesundheit werden mit fundierten Texten beleuchtet und mit großzügigen, beeindruckenden Infografiken ergänzt. Das Layout bricht mit den üblichen textlastigen Gesundheitsratgebern und zeigt sich bilderreich und mit vielen Zusatzkästen und -Informationen."],
    numImages: 1
  },
  'wolf': {
    id: 'wolf',
    name: "Wolf",
    date: new Date("2016"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlagsgruppe Deutsche Medien-Manufaktur (DMM)",
    description: ["Das innovative Heftkonzept von WOLF steht für Entschleunigung, Achtsamkeit und Inspiration – für Männer. Das Magazin ist ein Special von FLOW und ist in der Verlagsgruppe Deutsche Medien-Manufaktur (DMM), einer Tochter von Gruner + Jahr und dem Landwirtschaftsverlag Münster erschienen.WOLF setzt auf Slow Journalism statt digitaler Eile. Das Magazin ist ein haptisches und visuelles Erlebnis, arbeitet mit aufwendigen, großformatigen Illustrationen und Fotografien sowie Papierwechseln. Als Extra enthält diese erste Ausgabe ein Retro-Autoquartett zum Herausnehmen sowie die preisgekrönte Reportage der New York Times „Verschollen im Ozean“ in Buchform."],
    numImages: 9
  },
  'hygge': {
    id: 'hygge',
    name: "Hygge",
    date: new Date("2017"),
    position: "Creative Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Es sind die einfachen Dinge des Lebens, die wirklich glücklich machen: Zeit mit Familie und Freunden, Sonne im Gesicht, ein Stück Blaubeerkuchen. Die Dänen wissen, was gemeint ist. Das  Magazin HYGGE bringt dieses Lebensgefühl nach Deutschland. Es feiert die Freude am Zusammensein und den Moment des einfachen Glücks. Optisch besticht HYGGE durch emotionale Fotografie und moderne klare Layouts."],
    numImages: 12
  },
  'holly': {
    id: 'holly',
    name: "Holly",
    date: new Date("2019"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlagsgruppe Deutsche Medien-Manufaktur (DMM)",
    description: ["Immer mehr Verlage setzten auf einen neuen Trend im Printgeschäft: Influencer-Magazine. Der Verlag startete mit der Bloggerin Holly Becker als Testimonial den neuen Einrichtungstitel Living at Home + Holly. Das Magazin spiegelt die persönliche Note von Holly Becker wider. Sie lässt in vielen Beiträgen ihre Meinung und Sichtweise einfließen. Das Magazin besticht durch seine opulenten Aufmacher und einen ganz eigenen Look."],
    numImages: 6
  },
  'wohllebens-welt': {
    id: 'wohllebens-welt',
    name: "Wohllebens Welt",
    date: new Date("2019"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Gemeinsam mit dem Förster und Bestseller-Autor Peter Wohlleben bringt G+J  die Heftreihe Wohllebens Welt auf den Markt. Peter Wohlleben wurde dank seiner Bücher “Das geheime Leben der Bäume” (über 700.000 verkaufte Exemplare) und “Das Seelenleben der Tiere”  zum Bestseller-Autor. Das neue Magazin ist für eine natur- und umweltinteressierte Zielgruppe. Das Layout spielt mit sinnlichen und opulenten Bildern und klaren Infografiken."],
    numImages: 1
  },
  'robb': {
    id: 'robb',
    name: "Robb",
    date: new Date("2020"),
    position: "Art Direktion | Redesign",
    company: "Verlag Gruner+Jahr",
    description: ["Robb Report ist die weltweit erfolgreichste Medienmarke im Luxussegment. Das Luxusmagazin spürt der Frage nach, wie sich ein zeitgemäßer Luxusbegriff in seiner Vielfalt definiert. Das Layout ist elegant und zeitlos. Das Titelkonzept wurde dahingehend geändert, dass es jetzt immer illustrativ gelöst wird."],
    numImages: 10
  },
  'landlust-zuhaus': {
    id: 'landlust-zuhaus',
    name: "Landlust Zuhaus",
    date: new Date("2021"),
    position: "Art Direktion | Redesign",
    company: "Verlagsgruppe Deutsche Medien-Manufaktur (DMM) ",
    description: ["Landlust Zuhaus ist das Wohnmagazin der Zeitschrift LANDLUST. Mit der Ausgabe 01/2021 wurde das Wohnmagazin Landlust Zuhaus mit modernem Layout frisch renoviert und erweitertem Themenspektrum ergänzt."],
    numImages: 12
  },
  'einfach-hausgemacht': {
    id: 'einfach-hausgemacht',
    name: "Einfach Hausgemacht",
    date: new Date("2021"),
    position: "Art Direktion | Redesign",
    company: "Verlagsgruppe Deutsche Medien-Manufaktur (DMM) ",
    description: ["Einfach Hausgemacht ist ein Magazin mit kreativen Rezeptideen, Do-It-Yourself-Bastel- und Dekotipps und praktischem Haushaltswissen aus der Landlust-Familie. Schwerpunkt von Einfach Hausgemacht ist Kochen und Essen. Es ist eine hochwertige, detailverliebt gestaltete und getexte, eigenständige Zeitschrift. "],
    numImages: 12
  },
  'hygge-spezial': {
    id: 'hygge-spezial',
    name: "Hygge Spezial",
    date: new Date("2021"),
    position: "Art Direktion | Neuentwicklung",
    company: "Verlag Gruner+Jahr",
    description: ["Line Extension von HYGGE zum Thema Wohnen. In dieser Extra-Ausgabe dreht sich alles um ein hyggeliges Zuhause: Was ist das Geheimnis skandinavischer Gemütlichkeit, wie holt man sich den Hygge-Stil ins Haus und was gehört alles dazu? Außerdem schnelle und unkomplizierte DIY-Ideen zum Nachmachen. Das Layout orientiert sich an dem Mutterheft HYGGE- hat aber ein paar eigenständige und spielerische Elemente dazu bekommen."],
    numImages: 12
  },
  'white-paper': {
    id: 'white-paper',
    name: "White Paper",
    date: new Date("2021"),
    position: "Art Direktion",
    company: "Hager Consulting / Narrative Impact",
    description: ["Wer sind die Entscheiderinnen und Entscheider des Jahres 2030? Um diese Frage zu beantworten, hat die Hager Unternehmensberatung mit einem der namhaftesten Zukunfts-Institute Deutschlands zusammengearbeitet: dem Thinktank 2bAHEAD mit Sitz in Leipzig. Sie beantragte die Agentur Narrative Impact mit dem Herausarbeiten des Inhalts. Daraus entstand ein interessantes und optisch anspruchsvolles Whitepaper."],
    numImages: 4
  },
  'pro-bono': {
    id: 'pro-bono',
    name: "Pro Bono",
    date: new Date("2022"),
    position: "Creative Direktion | Neuentwicklung",
    company: "Ehrenamtlich",
    description: ["Weil es mir wichtig ist, habe ich 20 Prozent meiner Arbeitszeit für Pro-Bono-Aktivitäten reserviert. Mein Engagement umfasst grafische Arbeiten für soziale Projekte, geht aber auch über Design hinaus. Im Jahr 2022 engagiere ich mich etwa in der Hilfe für ukrainische Flüchtlinge. Ich empfinde meine Arbeit als Art Direktorin als sehr privilegiert: Mein Wissen ist gefragt, um Dinge schöner zu machen. Mir macht die Arbeit Freude, ich treffe interessante Menschen und erhalte anspruchsvolle Aufgaben. Das erfüllt 80 Prozent meiner Zeit – was für ein Geschenk! In den verbleibenden 20 Prozent schenke ich. Weil es mir wichtig ist."],
    numImages: 1
  }
}

export default DATA;
