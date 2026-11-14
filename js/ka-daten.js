/**
 * HIER pro Paket anpassen. Wird von der App UND von den Druckseiten in pdf/ gelesen.
 * Quelle: Vokabelliste Unit 1 (Buch S. 187: p. 13 bis 16, Station 2). Wortpaare übernommen, Beispielsätze selbst geschrieben.
 */
const KA = {
  id: 'englisch-unit1-2627',
  subject: 'Englisch',
  title: 'Englisch: Vokabeln Unit 1',
  date: '2026-11-16',
  topics: [
    { title: 'Jobs (Station 2)', page: 'Buch S. 187', lessons: [1] },
    { title: 'Bewerbung und Arbeit (p. 16)', page: 'Buch S. 187', lessons: [2] },
    { title: 'Weitere Wörter (p. 13 bis 15)', page: 'Buch S. 187', lessons: [3] },
    { title: 'Alle Vokabeln', page: '', trainer: true }
  ],
  links: [
    { label: 'Wortliste (1 Seite)', href: 'pdf/spickzettel.html' },
    { label: 'Probe-Test', href: 'pdf/probe-arbeit.html' },
    { label: 'Lernplan (füllt sich selbst)', href: 'pdf/lernplan.html' },
    { label: 'Lernblatt und Faltkarten', href: 'pdf/karten.html' },
    { label: 'So lerne ich am schnellsten', href: 'pdf/so-lerne-ich.html' }
  ]
};

// Überschriften der Lektionsgruppen in der Seitenleiste
const MODULES = { u1: 'Unit 1' };

const LESSONS = [
  { id: 1, title: 'Jobs', module: 'u1' },
  { id: 2, title: 'Bewerbung und Arbeit', module: 'u1' },
  { id: 3, title: 'Weitere Wörter', module: 'u1' }
];
