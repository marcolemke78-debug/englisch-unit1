/**
 * Unit 1 (Buch S. 187): drei kurze Lektionen zum Üben der Vokabeln im Satz.
 * Alle Sätze selbst geschrieben, keine Buchsätze.
 */
window.LESSON_DATA = (window.LESSON_DATA || []).concat([
  // ------------------------------------------------------------------ L1
  {
    id: 1,
    title: 'Jobs',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie Namensschilder:</strong> Viele Berufe erkennst du an der Endung. <strong>-ist</strong> (receptionist, telephonist, physiotherapist) und <strong>-ian</strong> (electrician) sind wie das Namensschild am Kittel: Sie sagen, dass hier eine Person gemeint ist.</div>
        <table class="info-table">
          <tr><th>Englisch</th><th>Deutsch</th></tr>
          <tr><td>receptionist</td><td>Empfangschef; Empfangschefin</td></tr>
          <tr><td>electrician</td><td>Elektriker; Elektrikerin</td></tr>
          <tr><td>travel agent</td><td>Reisebürokaufmann; Reisebürokauffrau</td></tr>
          <tr><td>physiotherapist</td><td>Physiotherapeut; Physiotherapeutin</td></tr>
          <tr><td>plumber</td><td>Installateur(in); Klempner(in)</td></tr>
          <tr><td>telephonist</td><td>Telefonist; Telefonistin</td></tr>
          <tr><td>bike courier</td><td>Fahrradkurier; Fahrradkurierin</td></tr>
        </table>
        <div class="tip-box"><strong>Ein Wort für beide:</strong> Im Englischen gibt es meist nur ein Wort für Mann und Frau. <em>She is a plumber.</em> und <em>He is a plumber.</em></div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Bei <strong>plumber</strong> spricht man das b nicht: [plʌmə]. Bei <strong>physiotherapist</strong> schreibt man <strong>ph</strong> und <strong>th</strong>, auch wenn es wie f und t klingt.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> In Unit 1 geht es um Jobs und Bewerbungen. Wer über Berufe sprechen will, braucht diese Wörter zuerst.</div>`
    },
    example: {
      title: 'Wer ist das? Den Beruf aus der Beschreibung erraten',
      steps: [
        { label: 'Lies den Satz', html: '<p><em>This person repairs the lights and the cables in your house.</em></p>' },
        { label: 'Schlüsselwörter', html: '<p><strong>lights</strong> (Lampen) und <strong>cables</strong> (Kabel) haben mit Strom zu tun.</p>' },
        { label: 'Lösung', html: '<p>Das ist ein <strong>electrician</strong>. Endung -ian, wie bei musician.</p>' }
      ]
    },
    exercises: [
      {
        type: 'matching',
        question: 'Wer macht was? Ordne zu.',
        pairs: [
          { left: 'receptionist', right: 'welcomes guests at the front desk of a hotel' },
          { left: 'plumber', right: 'repairs showers, toilets and water pipes' },
          { left: 'travel agent', right: 'books holidays and flights for you' },
          { left: 'bike courier', right: 'brings letters and parcels by bike' }
        ],
        explanation: 'Achte auf die Schlüsselwörter: guests/hotel, water pipes, holidays/flights, by bike.'
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze den Beruf auf Englisch.',
        text: 'After a football injury Tom goes to a {{blank}}. The {{blank}} answers the phone and connects you to the right person.',
        blanks: [{ correct: 'physiotherapist' }, { correct: 'telephonist' }],
        explanation: 'physiotherapist = Physiotherapeut(in), telephonist = Telefonist(in). Beide enden auf -ist.'
      },
      {
        type: 'fill-in-blank',
        question: 'Wie heißt der Beruf? Achte auf die Schreibung.',
        text: 'Elektrikerin: {{blank}} · Klempner: {{blank}}',
        blanks: [{ correct: 'electrician' }, { correct: 'plumber' }],
        explanation: 'electrician mit c am Anfang und -cian am Ende. plumber mit stummem b.'
      },
      {
        type: 'multiple-choice',
        question: 'Your hotel room is cold and the heating does not work. Who do you call first?',
        explanation: 'An der Rezeption meldest du Probleme im Hotel. Die receptionist schickt dann Hilfe.',
        options: ['a travel agent', 'the receptionist', 'a bike courier', 'a physiotherapist'],
        correct: 1,
        wrongExplanations: {
          0: 'Ein travel agent bucht Reisen. Im Hotel kann er dir nicht helfen.',
          2: 'Ein bike courier bringt Briefe und Pakete.',
          3: 'Ein physiotherapist hilft bei Verletzungen, nicht bei der Heizung.'
        }
      }
    ]
  },

  // ------------------------------------------------------------------ L2
  {
    id: 2,
    title: 'Bewerbung und Arbeit',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie eine Bewerbungsmappe:</strong> Stell dir vor, du bewirbst dich. In die Mappe kommen dein <strong>CV</strong> (Lebenslauf) und deine <strong>certificates</strong> (Zeugnisse). Darin zeigst du deine <strong>skills</strong> (Fähigkeiten) und deine <strong>experience</strong> (Erfahrung). Die Firma <strong>offers</strong> (bietet) dir <strong>training</strong> (Ausbildung) und ein <strong>salary</strong> (Gehalt).</div>
        <table class="info-table">
          <tr><th>Englisch</th><th>Deutsch</th></tr>
          <tr><td>to deal with</td><td>umgehen mit; sich befassen mit; sich kümmern um</td></tr>
          <tr><td>efficient ↔ inefficient</td><td>effizient; leistungsfähig ↔ ineffizient</td></tr>
          <tr><td>candidate</td><td>Kandidat(in); Bewerber(in)</td></tr>
          <tr><td>experience</td><td>Erfahrung; Erlebnis</td></tr>
          <tr><td>customer service</td><td>Kundendienst; Kundenbetreuung</td></tr>
          <tr><td>skill</td><td>Kenntnis; Fertigkeit; Fähigkeit</td></tr>
          <tr><td>native speaker</td><td>Muttersprachler; Muttersprachlerin</td></tr>
          <tr><td>certificate</td><td>Zertifikat; Bescheinigung; Urkunde; Zeugnis</td></tr>
          <tr><td>to offer</td><td>bieten; anbieten</td></tr>
          <tr><td>salary</td><td>Gehalt</td></tr>
          <tr><td>training</td><td>Ausbildung</td></tr>
          <tr><td>CV (curriculum vitae)</td><td>Lebenslauf</td></tr>
        </table>
        <div class="tip-box"><strong>Unregelmäßig:</strong> to deal with, <strong>dealt</strong> with, <strong>dealt</strong> with. Gesprochen [delt], also anders als deal [diːl].</div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> certificate schreibt man mit <strong>c</strong> in der Mitte und <strong>-cate</strong> am Ende: certifi<strong>cate</strong>. Nicht &bdquo;certifikat&ldquo; wie im Deutschen.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Mit diesen Wörtern kannst du eine Stellenanzeige lesen und dich selbst vorstellen, zum Beispiel für ein Praktikum.</div>`
    },
    example: {
      title: 'Eine kurze Stellenanzeige verstehen',
      steps: [
        { label: 'Die Anzeige', html: '<p><em>We are looking for a receptionist. You need good English skills and some experience. We offer training and a good salary.</em></p>' },
        { label: 'Was wollen sie?', html: '<p><strong>skills</strong> = Kenntnisse, <strong>experience</strong> = Erfahrung. Sie suchen also jemanden mit guten Englischkenntnissen und etwas Erfahrung.</p>' },
        { label: 'Was bekommst du?', html: '<p><strong>We offer</strong> = Wir bieten: eine <strong>Ausbildung</strong> (training) und ein gutes <strong>Gehalt</strong> (salary).</p>' }
      ]
    },
    exercises: [
      {
        type: 'fill-in-blank',
        question: 'Ergänze das passende Wort.',
        text: 'Please send us your {{blank}} (Lebenslauf). Our company {{blank}} (bietet) a good {{blank}} (Gehalt).',
        blanks: [{ correct: 'CV', alternatives: ['curriculum vitae'] }, { correct: 'offers' }, { correct: 'salary' }],
        explanation: 'CV = Lebenslauf, offers = bietet (he/she/it: mit -s), salary = Gehalt.'
      },
      {
        type: 'matching',
        question: 'Ordne zu.',
        pairs: [
          { left: 'candidate', right: 'Bewerberin' },
          { left: 'skill', right: 'Fähigkeit' },
          { left: 'experience', right: 'Erfahrung' },
          { left: 'training', right: 'Ausbildung' },
          { left: 'customer service', right: 'Kundendienst' }
        ],
        explanation: 'Tipp zum Merken: skill klingt kurz und knackig wie eine Fähigkeit, die man schnell zeigt.'
      },
      {
        type: 'fill-in-blank',
        question: 'Schreib das Gegenteil und die Vergangenheit.',
        text: 'efficient ↔ {{blank}} · Yesterday I {{blank}} with a difficult problem.',
        blanks: [{ correct: 'inefficient' }, { correct: 'dealt' }],
        explanation: 'Das Gegenteil bekommt die Vorsilbe in-. deal with ist unregelmäßig: dealt with.'
      },
      {
        type: 'multiple-choice',
        question: 'Mia was born in London and has spoken English all her life. She is a …',
        explanation: 'Wer eine Sprache von klein auf spricht, ist native speaker (Muttersprachlerin).',
        options: ['candidate', 'customer service', 'native speaker', 'receptionist'],
        correct: 2,
        wrongExplanations: {
          0: 'candidate heißt Bewerberin. Das hat nichts mit der Sprache zu tun.',
          1: 'customer service ist der Kundendienst, keine Person.',
          3: 'receptionist ist ein Beruf. Gefragt ist, wie man jemanden mit Englisch als Muttersprache nennt.'
        }
      },
      {
        type: 'free-text',
        question: '<strong>Finde den Fehler:</strong> Ben schreibt: <em>Last year I dealed with many customers and got a certifikate.</em> Finde die zwei Fehler und schreib den Satz richtig.',
        minWords: 8,
        placeholder: 'Fehler 1 … Fehler 2 … Richtig: …',
        compareHint: 'Hast du dealt (unregelmäßig) und certificate (mit c und -cate) gefunden?',
        modelAnswer: 'deal ist unregelmäßig, die Vergangenheit heißt dealt. certificate schreibt man mit c. Richtig: Last year I dealt with many customers and got a certificate.'
      }
    ]
  },

  // ------------------------------------------------------------------ L3
  {
    id: 3,
    title: 'Weitere Wörter',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie Gegensätze beim Anziehen:</strong> <strong>to take off</strong> ist das Ausziehen, <strong>to put on</strong> das Anziehen. Merke dir die beiden als Paar, wie Jacke aus und Jacke an.</div>
        <table class="info-table">
          <tr><th>Englisch</th><th>Deutsch</th></tr>
          <tr><td>closed</td><td>geschlossen</td></tr>
          <tr><td>priest</td><td>Priester</td></tr>
          <tr><td>to realise</td><td>erkennen; realisieren</td></tr>
          <tr><td>to take off ↔ to put on</td><td>abnehmen; ausziehen; herunternehmen</td></tr>
          <tr><td>to look up</td><td>nachschlagen; nachschauen</td></tr>
          <tr><td>climb</td><td>Aufstieg</td></tr>
          <tr><td>seat</td><td>Sitz; Sitzplatz</td></tr>
        </table>
        <div class="tip-box"><strong>Britisch und amerikanisch:</strong> to realise (BE) und to realize (AE) sind beide richtig. Der Trainer nimmt beides.</div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Bei <strong>climb</strong> spricht man das b nicht: [klaɪm]. Wie bei plumber.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Diese Wörter kommen in den Texten von Unit 1 vor. Wer sie kennt, versteht die Texte und kann im Test Sätze bilden.</div>`
    },
    example: {
      title: 'Phrasal verbs: Ein Wort bekommt eine neue Bedeutung',
      steps: [
        { label: 'Grundwort', html: '<p><strong>to look</strong> = schauen, <strong>to take</strong> = nehmen.</p>' },
        { label: 'Mit Zusatz', html: '<p><strong>to look up</strong> = nachschlagen, <strong>to take off</strong> = ausziehen, abnehmen.</p>' },
        { label: 'Merke', html: '<p>Lerne solche Verben immer <strong>mit</strong> dem kleinen Wort dahinter. Ohne up oder off stimmt die Bedeutung nicht.</p>' }
      ]
    },
    exercises: [
      {
        type: 'fill-in-blank',
        question: 'Ergänze das Wort.',
        text: 'I do not know this word. I will {{blank}} it {{blank}} in a dictionary.',
        blanks: [{ correct: 'look' }, { correct: 'up' }],
        explanation: 'to look up = nachschlagen. Das up steht oft hinter dem Wort: look it up.'
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze das Gegenteil.',
        text: 'It is hot in here. I will take {{blank}} my jumper. When I go outside, I will put it {{blank}} again.',
        blanks: [{ correct: 'off' }, { correct: 'on' }],
        explanation: 'take off = ausziehen, put on = anziehen.'
      },
      {
        type: 'matching',
        question: 'Ordne zu.',
        pairs: [
          { left: 'closed', right: 'geschlossen' },
          { left: 'seat', right: 'Sitzplatz' },
          { left: 'climb', right: 'Aufstieg' },
          { left: 'priest', right: 'Priester' },
          { left: 'to realise', right: 'erkennen' }
        ],
        explanation: 'Bei climb und plumber bleibt das b stumm.'
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Satz passt zu: &bdquo;Mir wurde klar, dass ich meinen Schlüssel vergessen hatte.&ldquo;',
        explanation: 'to realise = erkennen, klar werden. In der Vergangenheit: realised.',
        options: ['I looked up that I had forgotten my key.', 'I took off that I had forgotten my key.', 'I closed that I had forgotten my key.', 'I realised that I had forgotten my key.'],
        correct: 3,
        wrongExplanations: {
          0: 'look up heißt nachschlagen, nicht klar werden.',
          1: 'take off heißt ausziehen oder abnehmen.',
          2: 'closed heißt geschlossen. Damit sagt man nicht, dass einem etwas klar wird.'
        }
      }
    ]
  }
]);
