/**
 * Vokabeltrainer Unit 1 (Buch S. 187). Deutsch -> Englisch wird getippt; sitzt ein Wort (ab Fach 2), kommt auch Englisch -> Deutsch dran.
 * id fest, nie ändern (Lernstand hängt daran). Beispielsätze selbst geschrieben, nicht aus dem Buch.
 * "to" vorn ist beim Tippen egal (trainer.js entfernt es).
 */
const CARDS = {
  title: 'Vokabeltrainer',
  speak: 'en-GB',
  reverse: true,
  mode: 'type',
  typePlaceholder: 'englisches Wort …',
  items: [
    // Station 2: Jobs
    { id: 'v08', front: 'Empfangschef; Empfangschefin', back: 'receptionist', example: 'The receptionist gave us the key to our room.' },
    { id: 'v09', front: 'Elektriker; Elektrikerin', back: 'electrician', example: 'An electrician repaired the lights in our kitchen.' },
    { id: 'v10', front: 'Reisebürokaufmann; Reisebürokauffrau', back: 'travel agent', example: 'The travel agent found a cheap flight to London.' },
    { id: 'v11', front: 'Physiotherapeut; Physiotherapeutin', back: 'physiotherapist', example: 'After my knee injury I went to a physiotherapist.' },
    { id: 'v12', front: 'Installateur(in); Klempner(in)', back: 'plumber', example: 'The plumber fixed our shower.' },
    { id: 'v13', front: 'Telefonist; Telefonistin', back: 'telephonist', example: 'The telephonist answers all calls for the company.' },
    { id: 'v14', front: 'Fahrradkurier; Fahrradkurierin', back: 'bike courier', example: 'In the city a bike courier is often faster than a car.' },
    // p. 16: Bewerbung und Arbeit
    { id: 'v15', front: 'umgehen mit; sich befassen mit; sich kümmern um', back: 'to deal with', alt: ['deal with'], example: 'A nurse has to deal with lots of different people.' },
    { id: 'v16', front: 'to deal with: Simple Past', back: 'dealt with', alt: ['dealt'], example: 'Yesterday I dealt with an angry customer.' },
    { id: 'v17', front: 'effizient; leistungsfähig', back: 'efficient', example: 'Our new washing machine is very efficient.' },
    { id: 'v18', front: 'ineffizient (Gegenteil von efficient)', back: 'inefficient', example: 'Driving to school alone in a big car is inefficient.' },
    { id: 'v19', front: 'Kandidat(in); Bewerber(in)', back: 'candidate', example: 'There were five candidates for the job.' },
    { id: 'v20', front: 'Erfahrung; Erlebnis', back: 'experience', example: 'Working in a café was a good experience.' },
    { id: 'v21', front: 'Kundendienst; Kundenbetreuung', back: 'customer service', example: 'I called customer service because my phone did not work.' },
    { id: 'v22', front: 'Kenntnis; Fertigkeit; Fähigkeit', back: 'skill', example: 'Speaking two languages is a useful skill.' },
    { id: 'v23', front: 'Muttersprachler; Muttersprachlerin', back: 'native speaker', example: 'Our English assistant is a native speaker from Ireland.' },
    { id: 'v24', front: 'Zertifikat; Bescheinigung; Urkunde; Zeugnis', back: 'certificate', example: 'I got a certificate for my first aid course. (Achtung: certifi-CATE)' },
    { id: 'v25', front: 'bieten; anbieten', back: 'to offer', alt: ['offer'], example: 'The hotel offers free breakfast.' },
    { id: 'v26', front: 'Gehalt', back: 'salary', example: 'A good plumber can earn a high salary.' },
    { id: 'v27', front: 'Ausbildung', back: 'training', example: 'She is doing her training as an electrician.' },
    { id: 'v28', front: 'Lebenslauf', back: 'CV', alt: ['curriculum vitae', 'C.V.', 'a CV'], example: 'Do not forget to send your CV with your application.' },
    // p. 13 bis 15: weitere Wörter
    { id: 'v01', front: 'geschlossen', back: 'closed', example: 'The shop is closed on Sundays.' },
    { id: 'v02', front: 'Priester', back: 'priest', example: 'The priest said hello to everyone after the wedding.' },
    { id: 'v03', front: 'erkennen; realisieren', back: 'to realise', alt: ['realise', 'to realize', 'realize'], example: 'I did not realise it was so late.' },
    { id: 'v04', front: 'abnehmen; ausziehen; herunternehmen', back: 'to take off', alt: ['take off'], example: 'Take off your wet jacket and put on a dry one.' },
    { id: 'v05', front: 'nachschlagen; nachschauen', back: 'to look up', alt: ['look up'], example: 'I looked up the word on my phone.' },
    { id: 'v06', front: 'Aufstieg', back: 'climb', alt: ['the climb'], example: 'The climb to the top of the hill took two hours.' },
    { id: 'v07', front: 'Sitz; Sitzplatz', back: 'seat', alt: ['the seat'], example: 'Excuse me, is this seat free?' }
  ]
};
