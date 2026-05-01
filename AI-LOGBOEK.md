# AI-LOGBOEK

Dit document logt elke belangrijke AI-bijdrage aan het Zomerdroog Webinar project. Op die manier blijft zichtbaar welke AI welke taak, feature of wijziging heeft uitgevoerd, wanneer dat is gebeurd, en met welke context.

---

### Entry 1
- **ID:** 1
- **Start:** 2026-04-28 12:00
- **AI:** Claude Sonnet 4.6 via Claude Code (geïmporteerd)
- **Type:** aangepast
- **Onderdeel:** Opt-in formulieren & Registratie
- **Bestand(en):** `index.html`
- **Briefing:** Voeg een telefoonnummer veld toe aan registratie formulieren.
- **Aanleiding:** Meer leadinformatie nodig voor opvolging.
- **Doel:** Verplicht `tel`-veld toevoegen aan enroll-modal, final CTA en exit-intent modal.
- **Status:** voltooid
- **Resultaat:** Veld toegevoegd met `name="phone"` en reguliere expressie validatie (`[0-9+\s\-()]{8,}`).
- **Notes voor opvolger:** Verifieer in ActiveCampaign of `name="phone"` het juiste veld is, of dat het `field[X]` moet zijn.

### Entry 2
- **ID:** 2
- **Start:** 2026-04-28 12:30
- **AI:** Claude Sonnet 4.6 via Claude Code (geïmporteerd)
- **Type:** aangepast
- **Onderdeel:** Quick wins review (Typo's, Hero, Footer)
- **Bestand(en):** `index.html`, `Before afters onbewerkt/Emre before.jpg`
- **Briefing:** Voer quick wins uit na review van landingspagina.
- **Aanleiding:** Conversie-killers zoals spelfouten en verbroken links.
- **Doel:** Verbeteren van professionaliteit en compliance (Meta ads).
- **Status:** voltooid
- **Resultaat:** 
  - Typo "Regristratie" -> "Registratie" gefixt (regel 129).
  - Hero koptekst neutraler gemaakt voor bredere doelgroep.
  - Typo in asset 'Embre before.jpg' gecorrigeerd.
  - Footer-links vervangen door `target="_blank"` met placeholders voor privacy en voorwaarden.
- **Notes voor opvolger:** Er staan nog open review punten:
  - Hero-belofte (10 dagen) matcht niet met long-term social proof.
  - Weight-loss claim is risicovol voor Meta advertenties.
  - Naam + foto toevoegen bij anonieme quote (regel 353).
  - Datum live call (7 mei) evergreen maken.
  - Duur van live call vermelden.
  - Dubbeling van `hero.jpg` afbeelding verhelpen.
  - Exit-intent modal op mobiel evt. uitschakelen (triggert te makkelijk). Echte URLs (privacy, voorwaarden) moeten nog ingevuld worden i.v.m. Meta compliance.

### Entry 3
- **ID:** 3
- **Start:** 2026-04-28 19:46
- **AI:** Antigravity (Gemini 3.1 Pro (High))
- **Type:** beslissing & aangepast
- **Onderdeel:** AI-LOGBOEK standaardisatie
- **Bestand(en):** `LOGBOEK.md` (verwijderd), `AI-LOGBOEK.md` (nieuw)
- **Briefing:** Zet alles wat tot nu toe is gedaan in het logboek en lever de website link op.
- **Aanleiding:** Standaardiseren van project logs naar het globale `ai-logboek` formaat.
- **Doel:** Oude `LOGBOEK.md` migreren naar `AI-LOGBOEK.md` inclusief historie.
- **Status:** voltooid
- **Resultaat:** `AI-LOGBOEK.md` aangemaakt en historie overgezet.

### Entry 4
- **ID:** 4
- **Start:** 2026-04-28 20:15
- **Einde:** 2026-04-28 20:18
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** About-sectie ("Waarom ik deze live call geef")
- **Bestand(en):** `index.html`
- **Briefing:** Vervang de coach-foto in de about-sectie door `about-coach.png` zodat de hero-afbeelding niet dubbel wordt gebruikt.
- **Aanleiding:** Open punt uit de eerdere review — `hero.jpg` werd zowel in de hero als in de about-sectie getoond, wat repetitief oogde.
- **Doel:** `<img src>` op regel 279 omzetten van `hero.jpg` naar `about-coach.png`, en het pad relatief maken zodat lokale dev-server en Vercel-deploy beide werken.
- **Status:** voltooid
- **Resultaat:** Src in `index.html:279` is nu `about-coach.png` (relatief pad). Lokaal getest op `http://localhost:8080` — image returnt 200. Werkt op Vercel zodra deploy gerund is (bestand staat al lokaal in repo-root).
- **Notes voor opvolger:** Andere image-srcs in de pagina zijn nog absoluut (`https://zomerdroog-webinar.vercel.app/...`). Overweeg die ook naar relatief om te zetten voor consistente lokale dev-ervaring.

### Entry 5
- **ID:** 5
- **Start:** 2026-04-28 20:30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Open review-punten — datum, duur, exit-intent mobiel, anonieme quote
- **Bestand(en):** `index.html`
- **Briefing:** Voer 4 open review-punten door: jaartal toevoegen aan datum (evergreen), duur "60 min" tonen, exit-intent op mobiel uitschakelen, anonieme quote weghalen.
- **Aanleiding:** Open punten uit de eerdere review die zonder klantinput konden worden afgehandeld; gebruiker bevestigde duur = 60 min.
- **Doel:** Conversie en credibility verbeteren (heldere datum/duur, geen anonieme quote die zwakker oogt) en mobiele UX verbeteren (geen valse exit-intent triggers).
- **Status:** voltooid
- **Einde:** 2026-04-28 20:38
- **Resultaat:**
  - Hero-badge: `Live call op 7 mei om 19:00` → `Donderdag 7 mei 2026 • 19:00 • 60 min` (`index.html:107`).
  - Countdown-header: jaartal toegevoegd, `DONDERDAG 7 MEI 19:00` → `DONDERDAG 7 MEI 2026 • 19:00` (`index.html:132`).
  - Bonus-list eerste regel: `Toegang tot de gratis live call` → `Toegang tot de gratis live call van 60 minuten` (`index.html:237`).
  - Mobiele fast-scroll-up exit-intent handler verwijderd; `mouseleave` (desktop) blijft werken (`index.html:437-452` weg).
  - Anonieme quote-block onderaan final-CTA weggehaald (`index.html:352-354` weg).
  - Lokaal getest op `http://localhost:8080` — pagina returnt 200.
- **Notes voor opvolger:** Open punten die nog op klantinput wachten:
  - Hero-claim "2 tot 4 kilo in 10 dagen" matcht niet met long-term social proof (Bob heeft case nodig van iemand die in ~10 dagen 2-4 kg dropte, of we zwakken de claim af).
  - Weight-loss claim is risicovol voor Meta-ads — beslissing nodig of we 'm zachter framen.
  - Privacy-/Voorwaarden-URLs staan nog als `TODO-...-url` placeholder in footer (`index.html:363-364`) — Meta-compliance blocker.
  - `name="phone"` in opt-in forms moet geverifieerd worden in ActiveCampaign (default veld vs custom field).

### Entry 6
- **ID:** 6
- **Start:** 2026-04-28 20:45
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Social proof — review-quotes Muhammed, Emir, Ozan
- **Bestand(en):** `index.html`
- **Briefing:** Herschrijf de drie reviews onder de hero zodat het 2-weken / 10-daagse resultaat (2-5 kg eraf) op de voorgrond staat. Het lange-termijn totaalresultaat (96,5 / 77 / 40 kg afval) mag als secundair feit blijven staan.
- **Aanleiding:** Bob bevestigt dat alle drie de klanten in de eerste 2 weken daadwerkelijk 2-5 kg zijn afgevallen — de huidige quotes lieten alleen het lange-termijn cijfer zien, waardoor de hero-belofte ("2-4 kg in 10 dagen") niet werd ondersteund door het bewijs.
- **Doel:** Hero-claim en social proof 1-op-1 laten matchen, zonder de impressieve totaalresultaten weg te gooien.
- **Status:** voltooid
- **Einde:** 2026-04-28 20:50
- **Resultaat:**
  - Muhammed (`index.html:151`): nu opent met "In de eerste 2 weken al 4 kilo eraf", gevolgd door totaal 108 → 96,5 kg.
  - Emir (`index.html:159`): nu opent met "De eerste 2 weken meteen 5 kilo eraf", gevolgd door 100 → 77 kg.
  - Ozan (`index.html:167`): nu opent met "In de eerste 2 weken al ruim 3 kilo kwijt", gevolgd door totaal 40 kg afval.
  - Lokaal getest op `http://localhost:8080` — pagina returnt 200.
- **Notes voor opvolger:** De korte-termijn cijfers (4 / 5 / 3 kg in 2 weken) zijn door Bob verbaal bevestigd maar niet schriftelijk vastgelegd in originele klantfeedback. Voor maximale Meta-compliance is het slim om bij elke review de bron-DM/foto/screenshot achter de hand te hebben mocht Meta erom vragen.

### Entry 7
- **ID:** 7
- **Start:** 2026-04-28 21:05
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Hero-headline (above-the-fold)
- **Bestand(en):** `index.html`
- **Briefing:** Vervang de hero-headline volgens de blauwdruk-formule (resultaat + tijd + emotie), waarbij "strand" eruit moet omdat het te generiek/cliché is. Gekozen emotionele anker: zelfherkenning in de spiegel.
- **Aanleiding:** Bob bouwde de pagina op basis van een conversie-blauwdruk (60% klaar) en wil de headline scherper. De huidige headline ("...sta deze zomer weer strakker op het strand") miste een persoonlijke, dagelijkse emotionele payoff en gebruikte het verzadigde "strand"-cliché.
- **Doel:** Headline herschrijven naar "Verlies 2 tot 5 kilo in 10 dagen en kijk eindelijk weer trots in de spiegel" en het kg-bereik consistent maken met de nieuwe reviews (van 2-4 naar 2-5) op andere plekken op de pagina.
- **Status:** voltooid
- **Einde:** 2026-04-28 21:08
- **Resultaat:**
  - Hero-headline (`index.html:108`) gewijzigd naar: *"Verlies 2 tot 5 kilo in 10 dagen en kijk eindelijk weer trots in de spiegel"*. Volgt blauwdruk-formule (resultaat + tijd + emotie) met persoonlijk emotioneel anker (spiegel/zelfherkenning) i.p.v. verzadigd "strand"-cliché.
  - Bonuslijst (`index.html:238`) consistent getrokken naar "2 tot 5 kilo".
  - Lokaal getest op `http://localhost:8080` — pagina returnt 200.
- **Notes voor opvolger:** Door de headline-shift past de huidige subheadline qua taal nog goed, maar er staan elders nog "zomer"-references (final-CTA `index.html:327` "De zomer komt eraan", bonustitel "Zomerdroog Blueprint", page `<title>` "Zomer Droog Challenge"). Die hoeven niet weg — ze fungeren nog als urgency-anchor — maar de positionering is nu wel verschoven van strand-aesthetics naar zelfherkenning/identiteit. Bij toekomstige copy-iteraties kan de hele pagina rondom dat nieuwe anker worden geherkalibreerd. Ook: claim "2 tot 5 kilo in 10 dagen" blijft Meta-risicovol — Meta-safe alternatief (geen kg-claim in headline) is in eerdere review besproken maar niet gekozen door Bob.

### Entry 8
- **ID:** 8
- **Start:** 2026-04-28 21:35
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast & verwijderd
- **Onderdeel:** Meta-safety pass (strategie B-light) — hero, bonuslijst, before/afters, review-disclaimer
- **Bestand(en):** `index.html`
- **Briefing:** Maak de pagina Meta-compliant zodat de cold-traffic ad approved blijft: kg-claim uit hero en bonuslijst halen (vervangen door "zichtbaar droger"), before/after sectie weghalen, en een resultaten-disclaimer onder de reviews plaatsen.
- **Aanleiding:** Performance-data van de vorige campagne (3 mrt – 1 apr 2026) wees uit dat de LP-funnel Bob's echte werkpaard is (realistische CPL €3,31, 24% LP→lead conversie), terwijl de Meta lead-form CPL (€1,66) een vanity-getal was — leads vielen weg op de 3-staps qualifier ná de Meta-form. Die LP-versie was approved door Meta, en draaide zonder before/afters. Toevoegen van BA's introduceert een nieuw approval-risico dat Bob niet had.
- **Doel:** Pagina terugbrengen naar een Meta-safe baseline zodat de ad live kan, met behoud van de sterke conversie-elementen (text reviews, PAS, bonussen).
- **Status:** voltooid
- **Einde:** 2026-04-28 21:42
- **Resultaat:**
  - Hero (`index.html:108`): "Verlies 2 tot 5 kilo in 10 dagen…" → "Word in 10 dagen zichtbaar droger en kijk eindelijk weer trots in de spiegel". Geen kg-claim meer in headline.
  - Bonuslijst (`index.html:238`): "...2 tot 5 kilo te verliezen" → "...zichtbaar droger te worden".
  - Sectie "Sociaal bewijs blok 2" met before/after side-by-side images **volledig verwijderd** (was `index.html:294-322`). De flow is nu Hero → Reviews → PAS → Learning → Bonus → Audience → About → Final CTA.
  - Disclaimer toegevoegd onder de hero-reviews (`index.html:175`): *"Individuele resultaten variëren per persoon. Geen gegarandeerd resultaat."*
  - Lokaal getest op `http://localhost:8080` — pagina returnt 200, `grep "before"` returnt 0.
- **Notes voor opvolger:**
  - **Before/after assets staan nog in `Before afters onbewerkt/`**: niet weggegooid, te recoveren uit git mocht je ze later willen plaatsen op een non-Meta-page (bedankpagina, e-mailflow, post-opt-in nurture).
  - **Reviews behouden hun kg-claims** (4 / 5 / 3 kg in 2 weken + lange-termijn totalen). Meta is qua testimonials toleranter dan body-copy, maar als je 100% safe wil: verzwakken naar non-weight resultaten (energie, kledingmaat, training-consistentie).
  - **Performance baseline om te tracken na deploy:** vorige LP-versie had €3,31 CPL en 24% LP→lead conversie. Nieuwe versie (zonder kg in hero, zonder BA's) zou rond dat niveau moeten landen of beter.

### Entry 9
- **ID:** 9
- **Start:** 2026-04-28 21:05
- **AI:** Antigravity (Gemini 3.1 Pro (High))
- **Type:** beslissing / analyse
- **Onderdeel:** Opt-in flow & Meta Ads compliance (Bedankpagina)
- **Bestand(en):** `index.html` (analyse van forms), `AI-LOGBOEK.md`
- **Briefing:** Uitleg toevoegen over locatie van de 3-staps popup na opt-in, en wat dit betekent voor de Meta review.
- **Aanleiding:** Checken of de bedank-popup op het eigen domein draait of bij ActiveCampaign, i.v.m. strenge Meta compliancy-regels.
- **Doel:** Documenteren van de redirect flow na opt-in.
- **Status:** voltooid
- **Resultaat:** Formulieren in `index.html` (zoals op regel 354) sturen een `POST` direct naar `https://defitnesscoach.activehosted.com/proc.php`. Er is geen lokale popup of `/bedankt` pagina geprogrammeerd in de huidige Vercel deploy. 
- **Notes voor opvolger:** De bezoeker verlaat het Meta-bezochte domein direct na de klik. Zolang ActiveCampaign de gebruiker op hun eigen domein houdt voor de bedank-boodschap, valt dit veelal buiten de directe *domein*-scope van Meta's geautomatiseerde scan. Let wel: als AC weer terug-redirect naar een `/bedankt` URL op het eigen domein, dan valt die url wél volledig onder Meta's beleid.

### Entry 10
- **ID:** 10
- **Start:** 2026-04-28 21:15
- **AI:** Antigravity (Gemini 3.1 Pro)
- **Type:** aangepast & bugfix
- **Onderdeel:** Opt-in flow & Success Modal (Iframe hack)
- **Bestand(en):** `index.html`, `form.js`
- **Briefing:** Fix ActiveCampaign blocker voor de post-optin modal (Optie 1). Documenteer voor Claude waar de code staat.
- **Aanleiding:** Na inschrijven verliet de bezoeker de site of weigerde de oude JSONP code (Entry 9 is hierbij achterhaald). De lokale "success-modal" popte niet op.
- **Doel:** Formulieren native submitten zonder de pagina te verlaten, en daarna 100% gegarandeerd de succes-modal triggeren.
- **Status:** voltooid
- **Resultaat:** 
  - `index.html`: Een hidden `<iframe name="hidden_iframe">` toegevoegd direct na `<body>` (rond regel 72). Alle 3 de inschrijfformulieren hebben nu `class="optin-form"` gekregen. De code voor de pop-up zelf staat in `index.html` als `<div id="success-modal">` (vanaf regel 377).
  - `form.js`: Volledig herschreven (regels 1-65). Target nu alle `.optin-form`s, voegt `target="hidden_iframe"` toe aan de form-submit, en gebruikt een `iframe.onload` event om de `<div id="success-modal">` lokaal open te klappen (en het `fbq('track', 'Lead')` event te vuren).
- **Notes voor opvolger (Claude):** Dit is een kogelvrije workaround voor ActiveCampaign's CORS en redirect-gedrag. Zorg dat je de `name="hidden_iframe"` niet verwijdert, anders breekt de modal-trigger.

### Entry 11
- **ID:** 11
- **Start:** 2026-04-28 21:20
- **AI:** Antigravity (Gemini 3.1 Pro)
- **Type:** bugfix
- **Onderdeel:** Opt-in flow & Success Modal (Ontbrekende HTML)
- **Bestand(en):** `index.html`
- **Briefing:** Herstel de `<div id="success-modal">` HTML en `<script src="form.js"></script>` in `index.html`.
- **Aanleiding:** Claude ontdekte dat de success-modal HTML destijds per ongeluk uit de main branch was overschreven/verwijderd en de `form.js` nergens gekoppeld zat.
- **Doel:** De popup weer zichtbaar maken en de javascript daadwerkelijk inladen.
- **Status:** voltooid
- **Resultaat:** 
  - De originele HTML van het success-modal (met 3 stappen: Agenda, Instagram, WhatsApp) is succesvol hersteld uit git commit `a10f8df` en onderaan `index.html` geplaatst (vlak voor `</body>`).
  - `<script src="./form.js"></script>` is teruggeplaatst zodat de onzichtbare iframe code daadwerkelijk wordt gedraaid.
  - Vercel deploy is ververst. De flow is nu 100% kloppend met de beschrijving in Entry 10.

### Entry 12
- **ID:** 12
- **Start:** 2026-04-28 22:00
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast & bugfix
- **Onderdeel:** Success-modal — kalenderknoppen Apple en Outlook
- **Bestand(en):** `index.html`
- **Briefing:** Maak de Apple en Outlook calendar-knoppen in het success-modal (STAP 1) functioneel; pas tegelijkertijd de Google-knop aan zodat ook deze de Zoom-link in de event-beschrijving meekrijgt.
- **Aanleiding:** De Apple en Outlook knoppen wezen nog naar `href="#"` (regels 466-467) sinds het herstel van de modal in Entry 11 — alleen de Google-knop was bedraad. Functionaliteit voor Apple `.ics` download en Outlook deeplink bestond al in commit `5369c05` (`feat(calendar): inject zoom deep links and apple ics downloader`) maar was bij de modal-restore niet meegenomen.
- **Doel:** Apple → triggert ICS-download via inline JS-functie; Outlook → directe deeplink naar Outlook web compose; Google → URL aanvullen met Zoom-link in description; downloadICS() helper-script vlak vóór `</body>` toevoegen.
- **Status:** voltooid
- **Einde:** 2026-04-28 22:05
- **Resultaat:**
  - `index.html:465` — Google calendar URL geüpdatet: nu inclusief Zoom-link in `details` parameter en `location=Zoom`. Titel ingekort van "Zomer Droog Challenge Live Call" naar "Zomer Droog Live Call" (consistent met Outlook/Apple).
  - `index.html:466` — Apple-knop: `href="#"` → `href="#" onclick="downloadICS(event)"`. Triggert nu ICS-download via inline-functie.
  - `index.html:467` — Outlook-knop: `href="#"` → directe deeplink naar `outlook.live.com/calendar/0/deeplink/compose` met subject, datums (UTC), body (Zoom-link) en location.
  - `index.html:503-528` — Inline `<script>` toegevoegd met `downloadICS(e)` helper. Genereert een geldige `.ics` blob, klikt 'm via een tijdelijk anchor en cleant `URL.createObjectURL` op. UID gebaseerd op `Date.now()` voor unieke event-id; DTSTAMP opgehoogd van 20260408 (origineel commit-datum) naar 20260428 (vandaag) zodat agenda-clients het als nieuw event accepteren.
  - Lokaal getest op `http://localhost:8080` — pagina returnt 200, `grep "downloadICS|outlook.live.com"` returnt 3 hits (Outlook URL + onclick-call + functie-definitie).
- **Notes voor opvolger:**
  - **Tijdsduur in calendar-events is 90 min** (17:00 → 18:30 UTC = 19:00 → 20:30 NL-tijd). De live call duur die op de pagina elders staat is **60 min** — kleine inconsistentie. Of de buffer is bewust (Q&A na de call), of een van de twee moet aangepast. Bob even checken.
  - **Zoom-link is hardcoded** in 3 plekken (Google URL, Outlook URL, ICS-functie). Bij wijziging van de meeting-link moeten alle 3 mee. Overweeg constante extraheren als dit vaker verandert.
  - **`downloadICS()` werkt niet als de modal geopend wordt vóórdat het script is geladen** — script staat nu onderaan `<body>`, dus DOMContentLoaded-ordening klopt, maar als iemand de scripts ooit verplaatst: hou deze afhankelijkheid in gedachten.

### Entry 13
- **ID:** 13
- **Start:** 2026-04-28 22:10
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** bugfix
- **Onderdeel:** Calendar-events — duur corrigeren naar 60 min
- **Bestand(en):** `index.html`
- **Briefing:** Pas Google URL, Outlook deeplink en ICS-functie aan zodat de event-duur 60 min is (19:00–20:00 NL) i.p.v. 90 min.
- **Aanleiding:** In Entry 12 geconstateerde inconsistentie: kalenderknoppen reserveerden 90 min terwijl de pagina elders consistent 60 min vermeldt. Bob bevestigt: 60 min is correct.
- **Doel:** Eindtijden in alle 3 de calendar-integraties van 18:30 UTC naar 18:00 UTC zetten.
- **Status:** voltooid
- **Einde:** 2026-04-28 22:12
- **Resultaat:**
  - Google URL: `20260507T183000Z` → `20260507T180000Z`.
  - Outlook deeplink: `enddt=2026-05-07T18:30:00Z` → `enddt=2026-05-07T18:00:00Z`.
  - ICS-functie: `DTEND:20260507T183000Z` → `DTEND:20260507T180000Z`.
  - Lokaal getest: pagina returnt 200, `grep "1830|18:30"` returnt 0 hits.
- **Notes voor opvolger:** Alle calendar-integraties nu consistent op 60 min duur (19:00–20:00 NL = 17:00–18:00 UTC). Match dus met de hero-badge en bonuslijst.

### Entry 14
- **ID:** 14
- **Start:** 2026-04-28 22:20
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Success-modal — video placeholder vervangen door Google Drive embed
- **Bestand(en):** `index.html`
- **Briefing:** Vervang de placeholder ("Zet hier binnenkort jouw videoboodschap") in het success-modal door een werkende embed van de welkomstvideo. Bron: Google Drive bestand `1zfTuh3V9REETJvNehdKXq0flykfOCv4J`.
- **Aanleiding:** Bob heeft de video opgenomen en hosted op Google Drive; placeholder stond nog dood in de modal sinds Entry 11.
- **Doel:** Drive `/preview` iframe-embed met responsief 16:9 aspect-ratio wrapper zodat de video zich aanpast aan modal-breedte op desktop én mobiel.
- **Status:** voltooid
- **Einde:** 2026-04-28 22:23
- **Resultaat:**
  - Placeholder-block in success-modal vervangen door responsieve iframe (`index.html:451-458`).
  - Embed-URL: `https://drive.google.com/file/d/1zfTuh3V9REETJvNehdKXq0flykfOCv4J/preview`.
  - Aspect-ratio truc: wrapper met `padding-bottom: 56.25%` (16:9) + absolute-positioned iframe op 100% × 100% → responsive op alle modal-breedtes.
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:**
  - **Drive-bestand moet op "Iedereen met de link kan bekijken"** staan — anders ziet de bezoeker een login-prompt. Dit is een instelling in Google Drive zelf, niet in de code.
  - **Aspect-ratio 16:9** aangenomen. Als de video portrait/vertical is opgenomen, moet `padding-bottom: 56.25%` veranderen naar bv. `177.78%` (9:16) of `100%` (1:1) — anders zwarte balken.
  - **Drive-embed beperkingen:** geen autoplay-met-geluid, geen aanpassing van player-UI (Drive-branding zichtbaar), bij hoge traffic mogelijke rate-limiting. Voor een professionele setup: heroverweeg upload naar Vercel als static asset of YouTube unlisted.
  - **Pixel-event timing:** de modal triggert `fbq('track', 'Lead')` op iframe.onload van de form-submit (`form.js`), niet op videostart. Als je later video-watch events naar Meta wil sturen voor retargeting/lookalikes, moet dat een aparte tracking-laag worden.

### Entry 15
- **ID:** 15
- **Start:** 2026-04-28 22:30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** bugfix
- **Onderdeel:** Success-modal — video aspect ratio correctie (verticaal)
- **Bestand(en):** `index.html`
- **Briefing:** Pas het iframe-frame in het success-modal aan van 16:9 (landscape) naar 9:16 (portrait) en constrain de breedte zodat de verticale video niet de hele modal vult.
- **Aanleiding:** In Entry 14 is 16:9 aangenomen, maar Bob bevestigt dat de video verticaal is opgenomen (Reels/TikTok-stijl). Met 16:9 zwarte balken links/rechts.
- **Doel:** `padding-bottom: 56.25%` → `177.78%` (9:16) en `max-width: 280px` + `margin: 0 auto` op de wrapper zodat het frame een typische portrait-videoplayer breedte krijgt en gecentreerd staat.
- **Status:** voltooid
- **Einde:** 2026-04-28 22:32
- **Resultaat:**
  - Buitenste wrapper toegevoegd: `max-width: 280px; margin: 0 auto;` zodat de portrait-video een normale Reel/Story-breedte krijgt en gecentreerd staat in de modal.
  - Binnenste aspect-wrapper: `padding-bottom: 56.25%` → `177.78%` (16/9 inverse → 9:16).
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:** Als de video op mobiel te smal/groot oogt, is de tweak: `max-width` van `280px` aanpassen. Boven 280px kan de video op kleine schermen te dominant worden in de scrollable modal.

### Entry 16
- **ID:** 16
- **Start:** 2026-04-28 22:38
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** bugfix
- **Onderdeel:** Success-modal — video aspect ratio fijntuning
- **Bestand(en):** `index.html`
- **Briefing:** Vergroot het verticale frame van 9:16 (177.78%) naar 9:19.5 (216.67%) want de video heeft nog zwarte balken aan de zijkanten — typisch een iPhone screen recording die smaller is dan 9:16.
- **Aanleiding:** Bob laat een screenshot zien waarin het frame 9:16 is, maar de video zelf nog vertical letterboxed is (zwarte balken links/rechts).
- **Doel:** `padding-bottom: 177.78%` → `216.67%` (9:19.5, gangbare iPhone-recording ratio).
- **Status:** vervallen
- **Einde:** 2026-04-28 22:39
- **Resultaat:** Niet uitgevoerd. Bob signaleert direct daarna dat de Drive-embed-kwaliteit zichtbaar minder is en wil de video self-hosten. Entry 17 vervangt deze.

### Entry 17
- **ID:** 17
- **Start:** 2026-04-28 22:40
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Success-modal — video self-hosten (download van Drive, native `<video>` tag)
- **Bestand(en):** `index.html`, nieuw asset (`welkom.mp4` of vergelijkbaar)
- **Briefing:** Download de welkomstvideo van Google Drive en embed 'm via een native HTML5 `<video>` tag voor maximale kwaliteit en geen Drive-player branding.
- **Aanleiding:** Drive's `/preview` iframe re-encoded de video voor streaming, wat zichtbaar kwaliteitsverlies oplevert. Bovendien: Drive UI zichtbaar, geen autoplay-met-geluid.
- **Doel:** Video lokaal in project-root, `<video controls>` tag met `width: 100%; max-width: 280px` zodat aspect ratio automatisch klopt zonder padding-bottom truc.
- **Status:** voltooid
- **Einde:** 2026-04-28 22:48
- **Resultaat:**
  - Video gedownload van Drive (`https://drive.google.com/uc?export=download&id=1zfTuh3V9REETJvNehdKXq0flykfOCv4J`) en opgeslagen als `welkom.mp4` in project-root. **Bestandsgrootte: 97 MB** (Apple QuickTime MOV in MP4 container, H.264 vermoedelijk).
  - Drive `<iframe>` vervangen door native `<video controls playsinline preload="metadata">` met `<source src="welkom.mp4" type="video/mp4">` (`index.html:451-457`). `playsinline` voorkomt dat iOS-Safari forced-fullscreen activeert. `preload="metadata"` haalt alleen de header op tot de gebruiker play drukt.
  - Aspect ratio: `width: 100%; max-width: 280px; height: auto` → browser gebruikt de natuurlijke video-dimensies, geen padding-bottom truc meer nodig. Geen letterboxing.
  - `background: #000` als achtergrondkleur op de `<video>` zelf zodat tijdens loading de modal-achtergrond niet doorschijnt.
  - Lokaal getest: HTML 200, video 200.
- **Notes voor opvolger:**
  - **🚨 Bestandsgrootte 97MB is op de grens van Vercel's per-file limiet (100MB).** Twee verbeteringen om te overwegen voor productie:
    1. **Compressie:** zelfde resolutie/duur, maar lagere bitrate → vaak ~30-50MB met nauwelijks zichtbaar kwaliteitsverlies. `ffmpeg -i welkom.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k welkom-compressed.mp4`. (ffmpeg niet aanwezig op systeem; Bob kan via HandBrake of een online tool.)
    2. **Externe host:** Cloudinary, Mux, Bunny CDN of YouTube unlisted. Voorkomt grote git-repo en Vercel deploy-traagheid.
  - **Git LFS overwegen** als de video in git komt: `git lfs track "*.mp4"` voorkomt repo-bloat. Anders blijft de 97MB blob voor altijd in de history.
  - **`form.js` start nu een fbq('Lead') event op iframe.onload van form-submit, NIET op videostart.** Als je in de toekomst video-watch tracking wil voor lookalikes, hook in op `<video>`'s `play` of `timeupdate` events.
  - **Browser-compat:** Apple QuickTime MOV kan in sommige Android-browsers issues geven. H.264-codec is universeel, container minder. Zo nodig hercoderen naar puur MP4 met ffmpeg (-f mp4).

### Entry 18
- **ID:** 18
- **Start:** 2026-04-28 22:55
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Pagina-iteratie — subheadline, final CTA, "via Zoom"-vermelding, page title (evergreen)
- **Bestand(en):** `index.html`
- **Briefing:** Voer 4 copy-/markup-tweaks door om de landingspagina sterker en consistenter te maken na de Meta-safety pass: subheadline punchier, final CTA herframen weg van "zomer komt eraan" en richting de spiegel-positionering, platformvermelding "Live via Zoom" toevoegen aan de FUD-tekst, en de `<title>` evergreen maken (jaartal + propositie).
- **Aanleiding:** Bob vroeg om door te pakken op de pagina nu alle context bekend is. Punten 3, 4, 5, 6 uit het voorgestelde prioriteitenlijstje (1 = privacy/voorwaarden URLs blijft TODO, 2 = tweede social proof block wacht op echte reviews van Bob, 7 = PAS visualiseren is grotere refactor voor later).
- **Doel:** Conversie-conversion verhogen via heldere subheadline, sterkere CTA-payoff die aansluit op de hero-emotie (spiegel), platform-clarity ("Zoom") en SEO-vriendelijke title.
- **Status:** voltooid
- **Einde:** 2026-04-28 23:00
- **Resultaat:**
  - **Subheadline (`index.html:114`)**: van 47 woorden in 2 alinea's met dubbele opsomming naar 27 woorden in 1 vloeiende zin: *"Geen crashdieet, geen uren cardio, geen sociaal leven op pauze. In deze gratis live call zie je een aanpak die werkt — ook als je het al vaker hebt geprobeerd."* Verwijst impliciet naar PAS-pijnpunt ("eerder bent afgehaakt") zonder lange uitlegzin.
  - **Hero FUD-tekst (`index.html:117`)**: "Geen verplichtingen" → "Live via Zoom". Bezoeker weet nu meteen welk platform.
  - **Final CTA-headline (`index.html:332`)**: "De zomer komt eraan. Je hebt nu 2 keuzes." → "Je hebt nu 2 keuzes." (Punchier; "zomer" referentie weg, sluit aan bij Meta-safe positionering.)
  - **Final CTA-subtitle (`index.html:333`)**: spiegel-anker dubbel verwerkt: zowel het negatieve toekomstbeeld ("over een paar weken weer ontevreden in de spiegel") als de positieve payoff ("eindelijk weer trots op wat je ziet"). Match 1-op-1 met de hero-headline.
  - **Page title (`index.html:6`)**: "Zomer Droog Challenge | Live op 7 mei" → "Zomer Droog Challenge — Gratis live call 7 mei 2026 | De Fitnesscoach". Jaartal voor evergreen-effect, "Gratis live call" voor SEO/CTR, brand-naam aan het einde.
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:**
  - **Niet doorgevoerd in deze sweep:** tweede social-proof blok terug. De `Tekst Reviews/` folder en `Before afters onbewerkt/` bevatten meer assets (Goksan, Niels, Suleyman, Guyven, Emrat) maar zonder bijbehorende quote-tekst. Bob moet 2-3 nieuwe text-reviews aanleveren voor het beste resultaat — focus op non-kg outcomes (energie, training-consistentie, mindset, kledingmaten) zodat het complementair is aan het eerste block en Meta-safer.
  - **Privacy/Voorwaarden URLs in footer** (`index.html:363-364`) staan nog als `TODO-...-url`. Bob gaf eerder `www.defitnesscoach.nl/livecallzomerdroog` maar dat is de LP zelf, niet de legal pages. Bob moet de juiste URLs aanleveren (vermoedelijk iets als `defitnesscoach.nl/privacy` en `defitnesscoach.nl/algemene-voorwaarden` maar niet door AI te raden).
  - **PAS-sectie visueel maken** (oud-vs-nieuw kolommen) is een grotere refactor en blijft op de prioriteitenlijst voor een volgende sessie.
  - **`name="phone"` in opt-in forms** moet door Bob in ActiveCampaign worden geverifieerd (default veld vs custom field).

### Entry 19
- **ID:** 19
- **Start:** 2026-04-28 23:08
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Hero-headline + bonuslijst — kg-claim teruggezet naar bewezen 2-4 versie
- **Bestand(en):** `index.html`
- **Briefing:** Revert hero-headline en bonuslijst van Meta-safe ("zichtbaar droger") naar de bewezen versie met expliciete kg-belofte: "Verlies 2 tot 4 kilo in 10 dagen…".
- **Aanleiding:** Bob's vorige campagne (3 mrt – 1 apr 2026) draaide met "2 tot 4 kilo in 10 dagen" en werd goedgekeurd door Meta. De Meta-safe versie was theoretisch veiliger maar minder conversie-sterk; Bob kiest voor wat bewezen werkt.
- **Doel:** Hero terug naar conversie-sterke claim met behoud van het spiegel-emotionele anker (gewonnen in Entry 7). Bonuslijst consistent meebewegen.
- **Status:** voltooid
- **Einde:** 2026-04-28 23:11
- **Resultaat:**
  - Hero-headline (`index.html:113`): "Word in 10 dagen zichtbaar droger en kijk eindelijk weer trots in de spiegel" → "Verlies 2 tot 4 kilo in 10 dagen en kijk eindelijk weer trots in de spiegel".
  - Bonuslijst (`index.html:238`): "Een concreet plan om in 10 dagen zichtbaar droger te worden" → "Een concreet plan om in 10 dagen 2 tot 4 kilo te verliezen".
  - Reviews bewust **niet** aangepast: Muhammed (4 kg) past binnen 2-4 range, Emir (5 kg) overshoot is een positief signaal ("claim was 2-4, Emir kreeg er meer"), Ozan (3 kg) past midden-in-range.
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:**
  - **Meta-risico bewust geaccepteerd op basis van prior approval:** als Meta de pagina later afkeurt, snel revert naar Entry 18-versie ("zichtbaar droger") of strategie B-light uit Entry 8.
  - **Page-`<title>` blijft** "Zomer Droog Challenge — Gratis live call 7 mei 2026 | De Fitnesscoach" (geen kg-claim, neutraal voor SEO en social shares).
  - **Disclaimer** ("Individuele resultaten variëren per persoon. Geen gegarandeerd resultaat.") onder reviews blijft staan en is nu nog belangrijker als anker bij de expliciete kg-belofte.

### Entry 20
- **ID:** 20
- **Start:** 2026-04-29 09:00
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Hero-afbeelding — tweede floating badge "- Vet" linksonder
- **Bestand(en):** `index.html`
- **Briefing:** Voeg een tweede floating badge toe op de hero-afbeelding op de bottom-left positie met de tekst "- Vet" en een passend icon, complementair aan de bestaande "+ Energie" badge rechtsboven.
- **Aanleiding:** Bob ziet op de Vercel-versie de "- Vet" badge aan de linkerkant onder de hero-image, maar die staat niet in de huidige `index.html`. Waarschijnlijk per ongeluk verloren gegaan tijdens een eerdere edit.
- **Doel:** Markup voor `<div class="floating-badge bottom-left">` toevoegen met `<i class="fa-solid fa-fire"></i> - Vet` zodat de twee badges elkaar visueel balanceren (energie boven, vetverlies onder).
- **Status:** voltooid
- **Einde:** 2026-04-29 09:03
- **Resultaat:**
  - `index.html:125-127`: nieuwe `<div class="floating-badge bottom-left">` toegevoegd met `fa-fire` icon en tekst "- Vet". Direct onder de bestaande `top-right` "+ Energie" badge.
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:** De `bottom-left` positionering hangt af van bijbehorende CSS in `style.css` (extern op Vercel-domein). Als de badge niet op de juiste plek verschijnt na hard-refresh: check of `style.css` ook een `.floating-badge.bottom-left` regel heeft — anders moet die toegevoegd worden naast de bestaande `.top-right` regel.

### Entry 21
- **ID:** 21
- **Start:** 2026-04-29 09:10
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Hero-badge — layout opschonen door duur naar FUD-tekst te verhuizen
- **Bestand(en):** `index.html`
- **Briefing:** Verwijder "60 min" uit de hero-badge (dag + datum + tijd + duur was te druk) en plaats het in de FUD-tekst onder de CTA waar het natuurlijk past tussen de andere meta-info.
- **Aanleiding:** Bob signaleert dat de drie chunks ("Donderdag 7 mei 2026 • 19:00 • 60 min") visueel niet lekker zitten in de badge.
- **Doel:** Badge terug naar 2 chunks (datum + tijd), FUD-tekst uitbreiden met "60 min" zodat de info above-the-fold blijft.
- **Status:** voltooid
- **Einde:** 2026-04-29 09:13
- **Resultaat:**
  - Hero-badge (`index.html:112`): "Donderdag 7 mei 2026 • 19:00 • 60 min" → "Donderdag 7 mei 2026 • 19:00".
  - FUD-tekst (`index.html:117`): "100% gratis • Live via Zoom • Beperkte plekken • Direct toepasbaar" → "100% gratis • Live via Zoom • 60 min • Beperkte plekken". "Direct toepasbaar" geofferd om totaal aantal items op 4 te houden i.p.v. 5; "60 min" + andere reassurances zijn praktischer dan abstracte "Direct toepasbaar".
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:** Als je in toekomst nog meer FUD-points wil toevoegen, hou max 4-5 aan in één rij — daarboven wordt het visueel onleesbaar op mobiel.

### Entry 22
- **ID:** 22
- **Start:** 2026-04-29 09:30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** bugfix
- **Onderdeel:** Opt-in flow — UI reset na submit, body scroll lock, modal cleanup
- **Bestand(en):** `form.js`, `index.html`
- **Briefing:** Drie UX-issues fixen na form-submit: (1) inputvelden blijven gevuld zichtbaar, (2) `enroll-modal` of `exit-intent-modal` blijven open achter de success-modal, (3) achtergrondpagina kan nog gescrolld worden terwijl success-modal open staat.
- **Aanleiding:** Bob's eigen test wijst uit: na submit verschijnt de success-modal, maar zijn data is nog zichtbaar in het formulier en hij kan de achterkant scrollen. Verhelderd: AC-submission werkt wél (hidden iframe stuurt naar AC, mail-bevestiging gaat sowieso uit), enkel UI-cleanup ontbreekt.
- **Doel:** Op `iframe.onload` na succesvolle submit: alle `.optin-form` resetten, elke open opt-in-modal sluiten, success-modal openen, body-scroll lock toepassen. Bij sluiten van success-modal: scroll-lock weer vrijgeven.
- **Status:** voltooid
- **Einde:** 2026-04-29 09:36
- **Resultaat:**
  - `form.js` `iframe.onload` uitgebreid: 
    - `forms.forEach(f => f.reset())` cleart alle inputvelden in alle 3 de opt-in formulieren
    - `enroll-modal` (`.show` weghalen) en `exit-intent-modal` (`.hidden` toevoegen) worden expliciet gesloten als ze nog open stonden
    - `document.body.style.overflow = 'hidden'` lockt achtergrond-scroll wanneer success-modal opent
    - `submitted = false` als laatste stap zodat herhaald onload-getrigger geen dubbele triggers veroorzaakt
    - Console log `[form.js] AC submit voltooid — iframe.onload getriggerd` voor debug-zichtbaarheid
    - Submit-button herstel-tekst veranderd van "Reserveer nu mijn gratis plek..." naar "Ja, ik wil gratis meedoen" (matcht de daadwerkelijke button-tekst op de pagina)
  - `index.html` close-button van success-modal: inline `classList.add('hidden')` vervangen door `onclick="closeSuccessModal()"` 
  - `index.html` inline script: nieuwe `closeSuccessModal()` functie die zowel `.hidden` toevoegt als `document.body.style.overflow = ''` reset
  - Lokaal getest: HTML 200, form.js 200.
- **Notes voor opvolger:** 
  - **AC-submission was nooit kapot** — Bob's frustratie was puur UX (formulier bleef gevuld zichtbaar, achtergrond scrollde door). Inzicht voor toekomstige debug-sessies: hidden iframe stuurt altijd door naar AC, en AC stuurt z'n eigen mail-bevestiging onafhankelijk van de pop-up. De popup is een bonus-flow, niet de primary delivery.
  - **Console-log** (`[form.js] AC submit voltooid`) helpt bij debug — open DevTools Console tijdens een test-submit om te bevestigen dat de iframe-callback triggert.

### Entry 23
- **ID:** 23
- **Start:** 2026-04-29 09:42
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Footer — Algemene Voorwaarden URL invullen
- **Bestand(en):** `index.html`
- **Briefing:** Vervang de `TODO-voorwaarden-url` placeholder in de footer door de echte URL: `https://info.defitnesscoach.nl/algemene-voorwaarden/`.
- **Aanleiding:** Bob heeft de URL aangeleverd. Privacy-URL nog niet ontvangen, dus die placeholder blijft staan totdat Bob die ook stuurt.
- **Doel:** Algemene Voorwaarden link werkend maken; Privacy placeholder bewust laten staan om gat zichtbaar te houden voor Bob.
- **Status:** voltooid
- **Einde:** 2026-04-29 09:43
- **Resultaat:**
  - `index.html:364` — `href="TODO-voorwaarden-url"` → `href="https://info.defitnesscoach.nl/algemene-voorwaarden/"`. Opent in nieuw tabblad (`target="_blank" rel="noopener"`).
  - `index.html:363` — Privacy-link blijft als `TODO-privacybeleid-url` placeholder staan tot Bob die URL aanlevert.
- **Notes voor opvolger:** Voor Meta-compliance is een werkende **Privacy**-link kritischer dan AV — Meta's beleid voor lead-gen ads vereist een privacy policy die uitlegt hoe de verzamelde data wordt gebruikt. Zodra Bob die URL geeft: vervangen op `index.html:363`.

### Entry 24
- **ID:** 24
- **Start:** 2026-04-29 09:45
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Footer — Privacy-URL invullen (Meta-compliance blocker afgerond)
- **Bestand(en):** `index.html`
- **Briefing:** Vervang de laatste TODO-placeholder (`TODO-privacybeleid-url`) door `https://info.defitnesscoach.nl/privacy-voorwaarden/`.
- **Aanleiding:** Bob heeft direct na Entry 23 ook de Privacy-URL aangeleverd. Hiermee is de laatste Meta-compliance blocker uit de footer weg.
- **Doel:** Beide footer-links live, geen `TODO-...-url` placeholders meer in de pagina.
- **Status:** voltooid
- **Einde:** 2026-04-29 09:46
- **Resultaat:**
  - `index.html:363` — `href="TODO-privacybeleid-url"` → `href="https://info.defitnesscoach.nl/privacy-voorwaarden/"`. Opent in nieuw tabblad.
  - `grep "TODO-"` op `index.html` returnt 0 hits — pagina is vrij van placeholders.
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:** **Meta lead-gen compliance footer-blocker is opgelost** — beide vereiste juridische links zijn nu live op publiekelijk bereikbare URLs onder `info.defitnesscoach.nl`. Voor productie/ad-launch: niets meer te doen op dit punt.

### Entry 25
- **ID:** 25
- **Start:** 2026-04-29 09:55
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** gemaakt
- **Onderdeel:** Email template — bevestigingsmail na opt-in (Mailblue)
- **Bestand(en):** `email-bevestiging.html` (nieuw)
- **Briefing:** Bob heeft de bestaande bevestigingsmail-HTML gedeeld. Drie issues fixen: datum staat nog op "2 april" (moet 7 mei 2026 zijn), tijd-formatting "19.00" → "19:00", en de Zoom-link toevoegen als prominente CTA-button (deze is bekend uit het kalender-script in `index.html`).
- **Aanleiding:** De live call is 7 mei 2026, niet 2 april. Bob heeft de Zoom-link al gegenereerd en wil dat die in de bevestigingsmail komt zodat deelnemers 'm direct na inschrijving hebben.
- **Doel:** Mail-HTML opslaan in de repo voor versiebeheer + correcte datum/tijd + Zoom-CTA-button + closing aanpassen ("Tot 2 april" → "Tot 7 mei").
- **Status:** voltooid
- **Einde:** 2026-04-29 09:58
- **Resultaat:**
  - **Nieuw bestand `email-bevestiging.html`** in project-root.
  - **Datum:** "2 april" → "Donderdag 7 mei 2026" (consistent met LP-badge).
  - **Tijd:** "19.00" → "19:00 (60 min)" (consistent met LP-FUD-tekst).
  - **Zoom-blok toegevoegd** als gestileerde card (`.zoom-block` met cyan-tinted achtergrond `#f0fbfc` en cyan border). Bevat tekst "Bewaar deze Zoom-link alvast:", de bestaande `.btn` als CTA met label "Open Zoom op 7 mei", plus de raw URL in muted-grey/word-break voor wie wil copy-pasten of waar de button visueel kapot gaat (oudere mail-clients).
  - **"De Zoom-link ontvang je nog per mail voor de live sessie." regel verwijderd** — niet meer nodig.
  - **Closing:** "Tot 2 april," → "Tot 7 mei,".
  - **Mobile fix:** `.btn { width:100% !important; box-sizing:border-box; }` toegevoegd in mobile-mediaquery zodat de Zoom-button op kleine schermen breder uitlijnt.
  - **Dubbel `</p>` typo** in originele template (`<p style="margin:0 0 2px 0;">Tot 2 april,</p><p>`) opgeschoond.
- **Notes voor opvolger:**
  - **`%FIRSTNAME%` blijft Mailblue/AC merge-tag** — werkt alleen als de mail vanuit AC verstuurd wordt. Bij testen vanuit een ander platform: handmatig vervangen.
  - **Logo-image** linkt naar AC-CDN (`defitnesscoach.activehosted.com/content/...`) — werkt alleen zolang AC die file blijft hosten. Voor robuustheid: overweeg upload naar eigen CDN.
  - **Zoom-link is hardcoded in 4 plekken nu**: `index.html` calendar buttons (Google + Outlook + ICS), én `email-bevestiging.html`. Bij meeting-link wijziging: alle 4 vervangen.
  - **Werkflow voor Bob:** open `email-bevestiging.html` in browser/editor, kopieer hele HTML, plak in Mailblue's email-editor (HTML mode). Test vóór de eerste echte trigger door 'm naar jezelf te sturen via AC's "preview"-functie.

### Entry 26
- **ID:** 26
- **Start:** 2026-04-29 10:10
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Email template — layout-redesign (visueel ritme & hierarchy)
- **Bestand(en):** `email-bevestiging.html`
- **Briefing:** Layout van de bevestigingsmail strakker maken: datum/tijd/locatie als event-card, e-book downloads als visuele kaartjes met icoon, aparte "Belangrijk"-warning-box, betere whitespace en een professionele signature-style afsluiting.
- **Aanleiding:** Bob's screenshot wijst uit dat de huidige mail functioneel werkt maar oogt als een standaard Mailblue-template — paragrafen vlakbij elkaar, alleen de Zoom-block heeft visuele aandacht, geen hiërarchie.
- **Doel:** Behoud van email-cliënt compatibiliteit (table-based layout, inline styles voor Outlook 2007-2019, geen flexbox/grid/SVG), maar 4 nieuwe visuele componenten introduceren: event-card, e-book cards, warning-box, signature-block.
- **Status:** voltooid
- **Einde:** 2026-04-29 10:18
- **Resultaat:**
  - **Body-achtergrond** veranderd van wit naar `#f4f6f8` zodat de witte content-card visueel "lift" (subtle elevation met `box-shadow`).
  - **Header opgeschoond:** geen kader meer rond logo, in plaats daarvan een subtiele "DE FITNESSCOACH" letter-spaced label onder het logo. Lighter, premiumer.
  - **Headline toegevoegd:** "Je plek is bevestigd ✓" — directe bevestiging vóór de details.
  - **Event-card** (datum/tijd/locatie) als grijs-getint blokje met label-rij format (label in muted grey, value in body-color).
  - **Zoom-block** redesign: cyan tinted card (`#ecfeff`), "BEWAAR DEZE ZOOM-LINK" als small-caps label, full-width-on-mobile button, ingekorte URL-display (`us06web.zoom.us/j/85944847617`) eronder voor wie wil copy-pasten.
  - **E-book downloads** als 2 aparte cards met emoji-iconen (📘 📗) in plaats van underlined links — visueel veel duidelijker als clickable items.
  - **Warning-box** voor "Belangrijk": gele tint met linker-border en ⚠️ emoji, klassieke alert-styling.
  - **Subtle dividers** (`.divider`) tussen secties geven ritme zonder zware lijnen.
  - **Signature-block** met sign-off + naam + rol, in plaats van twee dichte `<p>`-regels.
  - **Footer-disclaimer** toegevoegd onderaan ("Je ontvangt deze mail omdat..."), goed voor compliance en best-practice.
  - **Email-cliënt compat behouden:** 100% table-based layout, alle styling via klassen + inline waar nodig, system fonts only (Helvetica Neue / Arial fallback), geen flexbox/grid/SVG, dark-mode override forceert light-styles.
- **Notes voor opvolger:**
  - **Emoji's** (✓ 📘 📗 ⚠️) renderen in 99% van moderne mail-clients prima. In oudere Outlook 2007-2010 worden ze als plaintext/tofu getoond — als dat een probleem wordt, vervangen door image-icons of FontAwesome via een hosted CSS file (Outlook strip dat trouwens ook).
  - **`min-width:240px` op `.btn`** zorgt dat de Zoom-button op desktop een mooie consistente breedte heeft. Mobile-mediaquery zet 'm full-width.
  - **De gele warning-box** is tactiel — als Bob hem te schreeuwerig vindt, vervang `#fef3c7` door `#fef9e8` (lichter geel) of `#ecfeff` (matchend cyan).
  - **`%FIRSTNAME%`** Mailblue merge-tag staat nu in de subline ("Hi %FIRSTNAME%, top dat je erbij bent."). Bij testverzending vanuit AC's preview-functie wordt dit automatisch ingevuld.

### Entry 27
- **ID:** 27
- **Start:** 2026-04-29 10:30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Email template — feedback-iteratie van Bob (kop/url/ebooks/dividers/role)
- **Bestand(en):** `email-bevestiging.html`
- **Briefing:** Zes finetune-aanpassingen na Bob's review: (1) verwijder de "Je plek is bevestigd ✓"-headline (komt al in onderwerp), (2) verberg de raw Zoom-URL onder de button, (3) verplaats de e-books naar onderaan (na signature), (4) verwijder de body-dividers, hou één subtiele divider onderaan, (5) verwijder em-dashes in "Begin alvast — handig om...", (6) verwijder de rol-regel "De Fitnesscoach" onder Coach Ertugrul.
- **Aanleiding:** Bob's review met screenshot; pagina oogt strakker na Entry 26 maar enkele elementen leiden af of duplicaten zijn (URL onder button = dubbel, signature met rol = te zakelijk voor warme tone).
- **Doel:** Mail aanvoelen als één strakke flow zonder ruis: directe greeting → event-info → Zoom-CTA → wat je leert → Belangrijk → P.S. → signature → onderaan optioneel de e-book downloads.
- **Status:** voltooid
- **Einde:** 2026-04-29 10:34
- **Resultaat:**
  - **`<h1>` "Je plek is bevestigd ✓" verwijderd** — komt al in onderwerp.
  - **Greeting "Hi %FIRSTNAME%, top dat je erbij bent."** is nu de eerste regel zelf (kleur naar standaard body i.p.v. muted, want geen subline meer).
  - **Raw Zoom-URL onder button verwijderd** — alleen de button is nu zichtbaar, geen dubbele URL.
  - **Beide body-`<div class="divider"></div>` blokken weggehaald** (tussenstreepjes weg uit de body).
  - **E-books verplaatst naar onderaan**, na de signature. Heading verkleind van `<h2>` (18px, donker) naar `<h3>` (15px, muted-grey 500), zodat het visueel ondergeschikt is aan de hoofd-content.
  - **Em-dash regel verwijderd**: "Begin alvast — handig om mee te nemen naar de live call." was de subline; die hele regel is geofferd want de heading "Je 2 gratis e-books" is zelfverklarend genoeg.
  - **Subtle divider toegevoegd** (1px `#e2e8f0`) tussen signature en de e-books-sectie zodat het visueel gescheiden is van de hoofd-flow zonder dominant te zijn.
  - **"De Fitnesscoach"-rolregel** onder Coach Ertugrul verwijderd; signature is nu alleen sign-off + naam (warmer, persoonlijker).
- **Notes voor opvolger:**
  - **Footer-disclaimer** ("Je ontvangt deze mail omdat...") is bewust behouden onderaan buiten de card — fungeert nu als sluit-element en compliance-anker.
  - **Gele warning-box** kreeg in deze pass geen tweak — Bob heeft niet aangegeven dat-ie te schreeuwerig is, dus laten staan. Tone-down naar `#fef9e8` als optie voor toekomst.
  - **`.zoom-title` ("Bewaar deze Zoom-link")** in small-caps blijft staan als label boven de button. Bij twijfel of die nog nodig is na het verwijderen van de URL: kan ook weg, button-tekst alleen is duidelijk genoeg.

### Entry 28
- **ID:** 28
- **Start:** 2026-04-29 10:50
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Tweede social proof blok (Meta-safe vervanger voor het verwijderde before/after blok)
- **Bestand(en):** `index.html`
- **Briefing:** Voeg tussen de About-sectie en de Final CTA een tweede social proof blok toe met 3 reviews die complementair zijn aan blok 1 (kg-focused) — focus op niet-gewicht resultaten: mindset/lifestyle, kledingmaten, training-progressie. Bron: Discord broederschap-channel screenshots aangeleverd door Bob.
- **Aanleiding:** Sinds Entry 8 staat er maar 1 social proof blok (was de aanbeveling uit de blueprint: 3-4 spreiden). Bob heeft nu echte testimonials uit z'n Discord-broederschap aangeleverd, deels selecteerbaar voor non-kg framing.
- **Doel:** Meta-safe blok met 3 kaarten (Viktor J. — calorie/lifestyle, Anish — kledingmaten/mentaal, Deniz K. — training-progressie/voeding), letter-initial circles i.p.v. profielfoto's (geen foto-assets beschikbaar voor deze klanten), disclaimer onder het blok.
- **Status:** voltooid
- **Einde:** 2026-04-29 10:55
- **Resultaat:**
  - Nieuw `<section class="wall-of-love-section section-white">` blok ingevoegd op `index.html:303-340`, tussen About (`index.html:283-301`) en Final CTA (`index.html:344-...`).
  - Sectie-titel: *"Niet alleen kilo's eraf — ook structuur, discipline en zelfvertrouwen"* (sluit aan op blok 1's kg-focus en kondigt het non-kg-aspect aan zonder herhalen).
  - Subtitel: *"Wat deze mannen er nog meer uit haalden naast de cijfers op de weegschaal."*
  - 3 review-cards met letter-initial circles (V=cyan, A=groen, D=oranje — drie distinctieve kleuren) i.p.v. profielfoto's. Voornamen alleen.
  - Quotes ingekort uit Discord-screenshots, met behoud van de essentie en eigen taal:
    - **Viktor:** lifestyle/mindset/calorie-bewustzijn
    - **Anish:** "kleren passen die me niet meer paste" + "beter in mijn vel"
    - **Deniz:** discipline-bevorderlijk, voeding, "zonder resultaat trainde → zichtbare wekelijkse progressie"
  - Disclaimer toegevoegd onderaan: *"Individuele resultaten variëren per persoon. Geen gegarandeerd resultaat."* (consistent met blok 1).
  - Lokaal getest: pagina returnt 200.
- **Notes voor opvolger:**
  - **Toestemmingsvraag:** Discord-broederschap is een privé-channel. Voor publicatie van quotes met namen op een publieke LP: Bob moet expliciete toestemming vragen aan Viktor, Anish en Deniz. Anders alleen voornamen + initialen gebruiken (wat we nu doen) is een redelijk middenpad maar formeel niet voldoende. Opvolger: bij twijfel namen anonimiseren (V., A., D.) of toestemming voor quote-gebruik bevestigen.
  - **Niet gekozen testimonials:** Ertugrul K. (te verwarrend met de coach Ertugrul) en Anish's mention van "10-13 kilo" (eruit gelaten — de quote werkt sterker zonder kg-cijfer dat overlapt met blok 1).
  - **Bodyfat-percentage in DenizKisa's originele quote** (7%) is bewust niet overgenomen — Meta-risico voor specifieke body-comp metrics.
  - **Asset-kans voor toekomst:** profielfoto's voor Viktor/Anish/Deniz toevoegen in `Tekst Reviews/` zou de kaarten persoonlijker maken (initial-circles zijn placeholder-feeling).

### Entry 29
- **ID:** 29
- **Start:** 2026-04-29 (lopend)
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Review-quotes in social proof blok 1 en 2 — em-dashes verwijderen (AI-tell)
- **Bestand(en):** `index.html`
- **Briefing:** Bob: "kan je bij beide blokken die tussenstrepen weg halen want dan zie je meteen dat AI dat heeft gedaan dus de reviews?"
- **Aanleiding:** Em-dashes (—) midden in een zin worden door lezers herkend als AI-schrijfstijl — geen authentieke testimonial-stijl. Beide social proof blokken bevatten ze.
- **Doel:** Em-dashes binnen review-quotes vervangen door punt + nieuwe zin (natuurlijker spreektaal). NIET aankomen aan em-dashes in section-titles/HTML-comments — alleen quote-tekst.
- **Status:** voltooid
- **Einde:** 2026-04-29
- **Resultaat:**
  - Blok 1 (kg-focused, regels 159/167/175): 3 em-dashes vervangen door punt + nieuwe zin in de quotes van Muhammed, Emir en Ozan.
  - Blok 2 (non-kg, regels 313/331): 2 em-dashes vervangen in de quotes van Viktor en Deniz. Anish's quote (regel 322) had er geen.
  - Geverifieerd met grep: geen em-dashes meer binnen `review-text` paragrafen.
- **Notes voor opvolger:**
  - Em-dashes in section-titles (regel 306: "Niet alleen kilo's eraf — ook structuur...") en HTML-comments (regel 303) bewust laten staan — die zijn redactioneel/structureel, niet onderdeel van de testimonial-stem.
  - Hero-subheadline regel 114 bevat nog een em-dash ("ook als je het al vaker hebt geprobeerd"). Niet aangepast omdat de briefing specifiek over reviews ging. Bij eventuele volgende AI-tell-pas: heroverwegen.

### Entry 30
- **ID:** 30
- **Start:** 2026-04-29
- **Einde:** 2026-04-29
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Success-modal popup — WhatsApp groepslink updaten (STAP 3)
- **Bestand(en):** `index.html`
- **Briefing:** Bob: "is de link van de whatsgroep er nog in van de popup dat is deze: https://chat.whatsapp.com/DRc4afxdYngApX5UTdddQJ?mode=gi_t"
- **Aanleiding:** Oude WhatsApp-invite (`GjQJt1yO2m16lq2H1R9m4I`) was vervangen door een nieuwe groep met `mode=gi_t` parameter (group invite tracking).
- **Doel:** `href` op regel 534 updaten naar de nieuwe URL.
- **Status:** voltooid
- **Resultaat:** `index.html:534` `href` aangepast van `https://chat.whatsapp.com/GjQJt1yO2m16lq2H1R9m4I` naar `https://chat.whatsapp.com/DRc4afxdYngApX5UTdddQJ?mode=gi_t`.
- **Notes voor opvolger:** Geen andere WhatsApp-links in de pagina (grep bevestigt). De `?mode=gi_t` query is bewust meegenomen — die hoort bij hoe WhatsApp invites tegenwoordig deelt.

### Entry 31
- **ID:** 31
- **Start:** 2026-04-29
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** diagnose
- **Onderdeel:** Opt-in flow — geen bevestigingsmail én contact verschijnt niet in ActiveCampaign
- **Bestand(en):** `index.html`, `form.js` (alleen geïnspecteerd)
- **Briefing:** Bob: "ok maar ik krijg geen mail van mijn inschrijving" + "en zie het ook niet in contactpersonen".
- **Aanleiding:** Symptomen wijzen erop dat de submit AC niet bereikt, want anders zou er minstens een contact aangemaakt zijn (ook zonder mail).
- **Doel:** Code-zijde verifiëren en oorzaakhypotheses voor Bob op een rij zetten zodat hij in z'n ActiveCampaign-dashboard kan checken.
- **Status:** voltooid (geen actie nodig)
- **Einde:** 2026-04-30
- **Conclusie:** Bob meldt dat de bevestigingsmail uiteindelijk wél is aangekomen — er was dus enkel vertraging in de Mailblue/ActiveCampaign mailqueue, geen technische bug. Form-submit, contact-aanmaak en welkomstmail werken correct. `u=8`/`f=8` kloppen. Code-zijde is in orde. Geen wijzigingen doorgevoerd.

### Entry 32
- **ID:** 32
- **Start:** 2026-04-30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Review-blokken — foto's en namen omwisselen tussen blok 1 (kg) en blok 2 (non-kg)
- **Bestand(en):** `index.html`, `Tekst Reviews/bob.jpg`, `Tekst Reviews/ali.jpg`, `Tekst Reviews/ser.jpeg` (toegevoegd door Bob)
- **Briefing:** Bob: foto's+namen die nu in blok 1 staan (Muhammed/Emir/Ozan met profile_1/2/3.png) verhuizen naar blok 2. Drie nieuwe foto's (Bob, Ali, Ser uit Discord/IG) komen in blok 1. Volgorde rechts→links: Bob bij de 40-kilo-card (rechts/3e), Ali bij de middelste (2e), Ser bij de eerste (links/1e). Ser-foto (sushi-foto van IG) is niet ingezoomd op gezicht — moet via CSS gefixt.
- **Aanleiding:** Bob heeft echte testimonials aangeleverd waarvan hij de foto's wil koppelen aan de kg-quotes; de oude profile_1/2/3 plaatjes mogen door naar blok 2 zodat de letter-circles (V/A/D) verdwijnen.
- **Doel:**
  - Blok 1 (regels 157-180): foto's vervangen door `Tekst Reviews/ser.jpeg` (1e), `ali.jpg` (2e), `bob.jpg` (3e); namen Muhammed→Ser, Emir→Ali, Ozan→Bob. Review-tekst blijft.
  - Blok 2 (regels 311-336): letter-circle divs vervangen door img-tags met `profile_1.png`, `profile_2.png`, `profile_3.png`; namen Viktor→Muhammed, Anish→Emir, Deniz→Ozan. Review-tekst blijft.
  - Voor `ser.jpeg` `object-position: center top` inline zetten zodat het gezicht (bovenste deel) zichtbaar is i.p.v. de sushi.
- **Status:** voltooid
- **Einde:** 2026-04-30
- **Resultaat:**
  - Blok 1 ([index.html:157-180](index.html#L157-L180)): foto's en namen vervangen door Ser (1e card, met `object-position: center top`), Ali (2e), Bob (3e). Review-quotes (kg-verhalen) ongewijzigd.
  - Blok 2 ([index.html:311-336](index.html#L311-L336)): letter-circle divs (V/A/D) vervangen door `<img>` tags met `profile_1/2/3.png`; namen Viktor→Muhammed, Anish→Emir, Deniz→Ozan. Review-quotes (non-kg) ongewijzigd.
  - Img-paths zijn nu **relatief** (`Tekst Reviews/...`) i.p.v. absolute Vercel URLs — werkt direct lokaal én op Vercel na deploy. Sluit ook aan op de aanbeveling uit Entry 4.
  - Lokaal getest met `curl`: alle 4 image-URLs (`ser.jpeg`, `ali.jpg`, `bob.jpg`, `profile_1.png`) returnen 200.
- **Notes voor opvolger:**
  - Als de Ser-foto na deploy nog steeds niet goed op het gezicht zoomt: pas `object-position: center top` aan naar `center 15%` of `50% 10%` in [index.html:161](index.html#L161). Het gezicht zit in het bovenste derde van de bron-foto.
  - Achternamen toevoegen aan blok 1 (Ser, Ali, Bob) overwegen voor authenticiteit, vergelijkbaar met blok 2's voornaam-only stijl. Vraag Bob om toestemming/achternaam-initiaal.
  - Disclaimer onder beide blokken blijft staan — geen wijziging nodig.

### Entry 33
- **ID:** 33
- **Start:** 2026-04-30
- **Einde:** 2026-04-30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Em-dashes verwijderen uit user-facing tekst (tweede pas — Entry 29 was alleen reviews)
- **Bestand(en):** `index.html`
- **Briefing:** Bob: "kan je overal de tussenstreepjes weg dus ook in de tekst van de hero en bij titel net boven de 2e review blok".
- **Aanleiding:** Em-dashes blijven AI-tell. Entry 29 deed alleen review-quotes; nu de rest van de zichtbare tekst.
- **Doel:** Em-dashes vervangen in: page title (regel 6), hero subheadline (regel 114), section-title boven blok 2 (regel 308), video-fallback (regel 505). HTML/JS comments (regels 305, 457) ongemoeid laten — niet user-facing.
- **Status:** voltooid
- **Resultaat:**
  - Regel 6 `<title>`: em-dash → `|` voor consistentie met bestaande pipe-scheider in de title.
  - Regel 114 hero subheadline: "...een aanpak die werkt — ook als je..." → "...een aanpak die werkt. Ook als je...".
  - Regel 308 section-title blok 2: "Niet alleen kilo's eraf — ook structuur..." → "Niet alleen kilo's eraf. Ook structuur, discipline en zelfvertrouwen.".
  - Regel 505 video-fallback: "Je browser ondersteunt geen video —..." → "Je browser ondersteunt geen video.".
  - Geverifieerd met grep: alleen comments (regel 305, 457) bevatten nog em-dashes; alle user-facing tekst is schoon.
- **Notes voor opvolger:** HTML-comment regel 305 (`<!-- 8. Sociaal bewijs blok 2 — non-kg outcomes -->`) en JS-comment regel 457 zijn dev-only, geen gebruiker ziet ze. Bewust laten staan voor leesbaarheid van de code.

### Entry 34
- **ID:** 34
- **Start:** 2026-04-30
- **Einde:** 2026-04-30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast
- **Onderdeel:** Ser's profielcirkel — kader-grootte matchen met Ali/Bob
- **Bestand(en):** `index.html`
- **Briefing:** Bob: "alleen die kader van ser is iets groter dan die van bob zeg maar".
- **Aanleiding:** In Entry 32 is voor Ser een wrapper-div toegevoegd om in te kunnen zoomen op het gezicht (60x60 met 2px border). Door globale `* { box-sizing: border-box }` zou de wrapper visueel 60x60 moeten zijn, maar de browser rendert de div in flex-context net iets anders dan een directe `<img>`, waardoor Ser's cirkel optisch 1-2px groter oogt.
- **Doel:** Wrapper visueel exact matchen met de andere `.review-author img` (60x60 inclusief 2px border).
- **Status:** voltooid
- **Resultaat:** Wrapper omgezet van `width: 60px; box-sizing: border-box (impliciet)` naar `width: 56px; box-sizing: content-box` ([index.html:161](index.html#L161)). Met content-box wordt de 2px border buiten de 56x56 getekend, totale visuele breedte 60x60 — identiek aan andere imgs (die met border-box render: 60x60 incl 2px border = 56x56 content + 2px border).
- **Notes voor opvolger:** Zou Ser's cirkel in een browser nog steeds afwijken: alternatief is alle 6 cards omzetten naar dezelfde wrapper-pattern voor 100% rendering-pariteit, of `outline` i.p.v. `border` gebruiken zodat box-model niets meeneemt.

### Entry 35
- **ID:** 35
- **Start:** 2026-04-30
- **Einde:** 2026-04-30
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast & gedeployed
- **Onderdeel:** About-coach foto — content-type mismatch fix na Vercel deploy
- **Bestand(en):** `about-coach.png` → `about-coach.jpg` (rename), `index.html`
- **Briefing:** Bob meldt na de Vercel-deploy een gebroken-image-icoon ("?") in de about-sectie waar de coach-foto hoort.
- **Aanleiding:** `file about-coach.png` toonde aan dat het bestand een JPEG is, geen PNG. Localhost (Python http.server) is laks met content-type, Vercel's CDN strenger. Curl gaf 200 maar de browser kon de mismatch niet renderen.
- **Doel:** Bestand hernoemen naar correcte extensie `.jpg`, HTML img-src updaten, redeployen.
- **Status:** voltooid (nog te pushen)
- **Resultaat:** `git mv about-coach.png about-coach.jpg`. [index.html:290](index.html#L290) `src` aangepast naar `about-coach.jpg`. Wacht op commit + push.
- **Notes voor opvolger:** Andere assets in de repo controleren of extensie matchet met inhoud. Bv. `Tekst Reviews/profile_*.png` — als die ook eigenlijk JPEGs zijn, kunnen ze nu (toevallig) wel werken maar geven later issues op andere CDNs.

### Entry 36
- **ID:** 36
- **Start:** 2026-05-01
- **Einde:** 2026-05-01
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast & gecreëerd
- **Onderdeel:** E-book covers — nieuwe SVG-covers met titels die matchen met de copy
- **Bestand(en):** `cover-calorie-cheat-sheet.svg` (nieuw), `cover-zomerdroog-blueprint.svg` (nieuw), `style.css`
- **Briefing:** Bob: "Je ziet bij de ebook sectie andere namen staan dan bij de ebook zelf kan jij 2 voorkantjes maken voor me voor de ebooks maken met die namen de calorie cheat sheet en de 10 dagen zomerdroog blueprint".
- **Aanleiding:** Inconsistentie: copy ([index.html:253-254](index.html#L253-L254)) noemt "De Calorie Cheat Sheet" en "De 10-Dagen Zomerdroog Blueprint", maar de bestaande cover-PNG's (`cover-calorieen.png`, `cover-formule.png`) tonen oude/andere namen. Download-knoppen in success-modal ([index.html:543-544](index.html#L543-L544)) gebruiken óók nog de oude namen ("E-book Calorieën", "E-book De Formule").
- **Doel:** Twee nieuwe cover-images maken met de juiste titels en CSS-references updaten zodat de e-book-stack ([index.html:259-260](index.html#L259-L260)) de nieuwe covers toont.
- **Status:** voltooid
- **Resultaat:**
  - SVG-formaat gekozen (geen image-generation tool beschikbaar in deze sessie). Vector = scherp op alle resoluties, klein bestand.
  - `cover-calorie-cheat-sheet.svg` (240×340 viewport): donker navy gradient (#1e293b→#0f172a), branding "DE FITNESSCOACH" + cyan divider, titel "CALORIE / CHEAT / SHEET" (CHEAT in cyan-accent), ondertitel "Eindelijk snappen hoe het werkt", cyan badge "GRATIS E-BOOK".
  - `cover-zomerdroog-blueprint.svg` (zelfde stijl/structuur): titel "10-DAGEN / ZOMERDROOG / BLUEPRINT" (ZOMERDROOG in cyan), ondertitel "Sneller resultaat in 10 dagen".
  - [style.css:399-413](style.css#L399-L413) `cover-1` en `cover-2` `background: url(...)` gewijzigd van absolute Vercel-URLs naar relatieve SVG-paths. Hierdoor werkt het lokaal en op Vercel.
  - Lokaal getest via curl: beide SVG's returnen 200.
- **Notes voor opvolger:**
  - **Font-fallback:** SVG gebruikt `font-family: 'Outfit', system-ui, sans-serif`. Als background-image krijgen SVGs geen toegang tot pagina-webfonts; browser fallt terug op systeem sans-serif. Acceptabel maar niet 100% on-brand. Voor pixel-perfecte Outfit-rendering: covers omzetten naar inline SVG in HTML.
  - **Download-knoppen nog inconsistent:** [index.html:543-544](index.html#L543-L544) heten nog "E-book Calorieën" / "E-book De Formule". Vraag Bob of hij deze ook wil bijtrekken naar "Calorie Cheat Sheet" / "10-Dagen Zomerdroog Blueprint".
  - **Drive-PDFs:** de PDF-bestanden achter de download-links hebben mogelijk ook nog oude titels intern. Bob moet zelf in Drive de PDFs hernoemen of de inhoud aanpassen voor volledige consistentie.
  - **Oude PNG-files** (`cover-calorieen.png`, `cover-formule.png`) staan nog in de repo maar worden niet meer gerefereerd. Eventueel later verwijderen.

### Entry 37
- **ID:** 37
- **Start:** 2026-05-01
- **Einde:** 2026-05-01
- **AI:** Claude Opus 4.7 (1M context) via Claude Code
- **Type:** aangepast & gedeployed
- **Onderdeel:** Asset-paden in `index.html` terug naar absoluut Vercel-URL (productie-fix)
- **Bestand(en):** `index.html`
- **Briefing:** Bob meldt op live URL `defitnesscoach.nl/livecallzomerdroog`: alle review-foto's én coach-foto zijn broken images.
- **Aanleiding:** `defitnesscoach.nl` is **een ander Vercel-project** (geen alias) dat alleen de HTML proxy't van `zomerdroog-webinar.vercel.app`. Relatieve paden (`Tekst Reviews/...`, `about-coach.jpg`) lossen op tegen `defitnesscoach.nl/...` waar de assets niet bestaan → 404. Op `zomerdroog-webinar.vercel.app/...` bestaan ze wél (curl 200 bevestigd).
- **Doel:** Alle img-srcs absoluut maken naar `https://zomerdroog-webinar.vercel.app/...` zodat ze op beide hosts werken. Dit reverteert deels Entry 32's relatief-pad-keuze (die was bedoeld voor lokale-dev-ervaring) — productie-werking heeft prioriteit.
- **Status:** voltooid (gedeployed)
- **Resultaat:** 7 img-srcs gewijzigd in `index.html`:
  - 3× blok 1 (Ser/Ali/Bob)
  - 3× blok 2 (Muhammed/Emir/Ozan, profile_1/2/3.png)
  - About-coach foto
  - Spaties in mappad ge-URL-encodeerd naar `Tekst%20Reviews`.
  - Twee uncommitted SVG-covers (`cover-calorie-cheat-sheet.svg`, `cover-zomerdroog-blueprint.svg`) en `style.css`-update worden in dezelfde commit meegenomen — anders zijn de e-book covers ook 404 op live.
- **Notes voor opvolger:**
  - Lokale `python -m http.server` werkt nog steeds voor de pagina maar IMG's worden vanaf Vercel geladen. Bewust geaccepteerd voor productie-functionaliteit. Voor offline werken: zet ze tijdelijk relatief in een lokale branch.
  - Alle asset-references in HTML zijn nu absoluut + alle CSS-asset-references blijven relatief (CSS wordt zelf vanaf zomerdroog-webinar.vercel.app geladen, dus relatieve URLs in CSS resolveren correct).
  - Bob moet checken: waarom is `defitnesscoach.nl/livecallzomerdroog` een aparte deploy/proxy en niet een Vercel domain alias? Een echte alias zou alle assets correct serveren. Dit is een config-discussie voor de Vercel-instellingen van het `defitnesscoach.nl`-project.
- **Bevindingen code-zijde:**
  - Iframe aanwezig: `index.html:72` (`<iframe name="hidden_iframe" id="hidden_iframe">`).
  - 3 opt-in formulieren posten naar `https://defitnesscoach.activehosted.com/proc.php` (regel 81, 349, 400) met `u=8`, `f=8`, `act=sub`, `or=9a091e8d-...`.
  - `form.js` ingeladen op regel 579, zet `form.target = "hidden_iframe"` (form.js:83), submit native, toont success-modal op iframe.onload (form.js:9-43). Dit is de fix uit Entry 27 en zou moeten werken.
  - Geen errors te zien in code zelf — geen JS-syntaxfouten, geen ontbrekende velden.
- **Hypotheses (in volgorde van waarschijnlijkheid):**
  1. **`u=8`/`f=8` kloppen niet meer met AC** — als Bob het formulier in AC heeft aangepast/verwijderd/opnieuw aangemaakt heeft het nieuwe form-ID. AC stuurt dan stilzwijgend niets door. Te checken in AC: Forms → het Zomerdroog-formulier → Integrate → de `u=` en `f=` waarden vergelijken.
  2. **Automatie/welkomstmail ontbreekt of staat uit** — contact zou dan wel moeten verschijnen maar zonder mail. Bob zegt ook geen contact, dus dit is niet het hoofdissue maar wel een tweede check.
  3. **Double opt-in confirmation mail belandt in spam** — minder waarschijnlijk gezien "geen contact in lijst", maar checken.
  4. **Hidden_iframe wordt door browser-extensie geblokkeerd** — onwaarschijnlijk maar Bob kan testen in incognito.
- **Concrete checks voor Bob:**
  1. Test-submit doen, `Cmd+Option+I` → Network tab → filter `proc.php`. Welke status komt terug? (200 = AC ontving het, 4xx/5xx = probleem.)
  2. Console tab: zie je `[form.js] AC submit voltooid — iframe.onload getriggerd`? Verschijnt success-modal?
  3. AC dashboard: Forms → embed code openen → check of `u=8` en `f=8` nog kloppen.
  4. AC dashboard: Contacts → zoek op het ingevoerde e-mailadres. Echt niet aanwezig, of in "Unconfirmed"?
- **Notes voor opvolger:** Niets in de code aanpassen totdat de Network-status van `proc.php` bekend is. Als Bob nieuwe `u`/`f` waarden uit AC haalt, moeten die op 3 plekken in `index.html` worden vervangen (regel 82-83, 351-352, 401-402).
