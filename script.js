const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navToggleLabel = navToggle?.querySelector(".sr-only");
const navMenu = document.querySelector("[data-nav-menu]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const counterItems = document.querySelectorAll("[data-count]");
const languageButtons = document.querySelectorAll("[data-language]");
const languageSections = document.querySelectorAll("[data-language-content]");
const siteLoader = document.querySelector("[data-site-loader]");
let syncConsentLanguage = () => {};
let syncProjectAdvisorLanguage = () => {};

const germanTranslations = Object.freeze({
  "Skip to content": "Zum Inhalt springen",
  "Primary navigation": "Hauptnavigation",
  "42 Craft home": "42 Craft Startseite",
  "Primary actions": "Hauptaktionen",
  "Agency proof points": "Agentur-Eckdaten",
  "Footer links": "Footer-Links",
  "Privacy Policy": "Datenschutzerkl\u00e4rung",
  "Imprint": "Impressum",
  "Terms and Conditions": "Allgemeine Gesch\u00e4ftsbedingungen",
  "Cookie settings": "Cookie-Einstellungen",
  "Language": "Sprache",
  "Open menu": "Menü öffnen",
  "Close menu": "Menü schließen",
  "Web Design": "Webdesign",
  "AI Solutions": "KI-Lösungen",
  "Process": "Ablauf",
  "Pricing": "Preise",
  "Contact": "Kontakt",
  "Start a project": "Projekt starten",
  "Explore AI capabilities": "KI-Möglichkeiten ansehen",
  "Strategy, design, code, and AI.": "Strategie, Design, Code und KI.",
  "Strategy. Design. Code. AI.": "Strategie. Design. Code. KI.",
  "Websites built smarter with AI.": "Websites, intelligenter gebaut mit KI.",
  "42 Craft combines high-end web design, lean development, and practical AI to create digital systems that communicate clearly and work harder.": "42 Craft verbindet hochwertiges Webdesign, schlanke Entwicklung und praktische KI zu digitalen Systemen, die klar kommunizieren und mehr leisten.",
  "AI-first": "KI-fokussiert",
  "Delivery approach": "Arbeitsweise",
  "Typical launch": "Typischer Launch",
  "1-2 weeks": "1–2 Wochen",
  "Germany": "Deutschland",
  "Service area": "Einsatzgebiet",
  "Independent digital studio combining strategy, design, code, and AI.": "Unabhängiges Digitalstudio für Strategie, Design, Code und KI.",
  "Premium websites strengthened by practical AI.": "Premium-Websites, gestärkt durch praktische KI.",
  "Strategy, interface design, development, and intelligent automation brought together in one focused senior team.": "Strategie, Interface-Design, Entwicklung und intelligente Automatisierung vereint in einem fokussierten Senior-Team.",
  "Explore web design": "Webdesign ansehen",
  "AI & Web Strategy": "KI & Webstrategie",
  "UI/UX Design": "UI/UX-Design",
  "Web Development": "Webentwicklung",
  "AI Integrations": "KI-Integrationen",
  "AI Integration & Automation": "KI-Integration & Automatisierung",
  "AI-assisted research, sharper positioning, and clear user journeys shaped by human judgment.": "KI-gestützte Recherche, klarere Positionierung und eindeutige Nutzerwege, geprägt durch menschliches Urteilsvermögen.",
  "Fast, responsive frontends with semantic markup, accessible interactions, and clean code that is easy to maintain.": "Schnelle, responsive Frontends mit semantischem Markup, barrierearmen Interaktionen und sauber wartbarem Code.",
  "Conversion-focused landing pages, offer pages, and lead funnels designed around trust, clarity, and action.": "Conversion-orientierte Landingpages, Angebotsseiten und Lead-Funnels, aufgebaut auf Vertrauen, Klarheit und Handlung.",
  "Useful AI features and automations for content, lead qualification, support, and internal workflows.": "Nützliche KI-Funktionen und Automatisierungen für Inhalte, Lead-Qualifizierung, Support und interne Abläufe.",
  "AI at 42 Craft": "KI bei 42 Craft",
  "AI that supports the entire website lifecycle.": "KI, die den gesamten Website-Lebenszyklus unterstützt.",
  "From research and content systems to intelligent lead routing and workflow automation, every AI feature is selected for a clear business purpose.": "Von Recherche und Content-Systemen bis zu intelligenter Lead-Verteilung und Workflow-Automatisierung wird jede KI-Funktion für einen klaren geschäftlichen Zweck ausgewählt.",
  "Explore AI solutions": "KI-Lösungen ansehen",
  "Ready when you are": "Bereit, wenn Sie es sind",
  "Make your next website your strongest one.": "Machen Sie Ihre nächste Website zu Ihrer stärksten.",
  "Tell us what needs to change. We will reply with a clear recommendation and the right next step.": "Sagen Sie uns, was sich ändern soll. Sie erhalten eine klare Empfehlung und den passenden nächsten Schritt.",
  "AI-enhanced web systems for brands that need momentum.": "KI-gestützte Websysteme für Marken, die vorankommen wollen.",
  "From positioning to launch, strategy, design, development, and practical AI work together as one focused system.": "Von der Positionierung bis zum Launch arbeiten Strategie, Design, Entwicklung und praktische KI als ein fokussiertes System zusammen.",
  "Websites that make ambitious brands unmistakable.": "Websites, die ambitionierte Marken unverwechselbar machen.",
  "Strategy, interface design, development, and conversion work together as one precise digital system.": "Strategie, Interface-Design, Entwicklung und Conversion arbeiten als ein präzises digitales System zusammen.",
  "Core disciplines": "Kerndisziplinen",
  "Strategy": "Strategie",
  "Strategy first": "Strategie zuerst",
  "Design systems": "Designsysteme",
  "Performance build": "Performance-Entwicklung",
  "Practical AI": "Praktische KI",
  "Clear purpose": "Klarer Zweck",
  "Human review": "Menschliche Prüfung",
  "Connected systems": "Vernetzte Systeme",
  "AI principles": "KI-Prinzipien",
  "Process proof points": "Ablauf-Eckdaten",
  "We combine human judgment with AI-assisted research to shape structure, messaging, hierarchy, and the right opportunities for automation.": "Wir verbinden menschliches Urteilsvermögen mit KI-gestützter Recherche, um Struktur, Botschaft, Hierarchie und sinnvolle Automatisierungsmöglichkeiten zu definieren.",
  "AI-assisted audience and market research": "KI-gestützte Zielgruppen- und Marktrecherche",
  "Web Strategy": "Webstrategie",
  "We shape positioning, structure, messaging, and user journeys around clear commercial goals and real customer intent.": "Wir richten Positionierung, Struktur, Botschaften und Nutzerwege an klaren Geschäftszielen und echter Kundenabsicht aus.",
  "Audience and market research": "Zielgruppen- und Marktrecherche",
  "Navigation and sitemap planning": "Navigation und Sitemap-Planung",
  "Conversion-focused wireframes": "Conversion-orientierte Wireframes",
  "We design and build modern interfaces that feel premium, responsive, and intentional on every screen size.": "Wir gestalten und entwickeln moderne Interfaces, die auf jeder Bildschirmgröße hochwertig, responsiv und bewusst wirken.",
  "Responsive interface design": "Responsives Interface-Design",
  "Reusable visual components": "Wiederverwendbare visuelle Komponenten",
  "Accessible interaction states": "Barrierearme Interaktionszustände",
  "We create landing pages and lead flows that guide the right users toward one clear next step.": "Wir entwickeln Landingpages und Lead-Flows, die passende Nutzer gezielt zum nächsten Schritt führen.",
  "CTA hierarchy": "CTA-Hierarchie",
  "Lead form optimization": "Optimierung von Lead-Formularen",
  "Trust and proof placement": "Platzierung von Vertrauen und Belegen",
  "We connect practical AI features to the website and the tools behind it, with clear safeguards and understandable workflows.": "Wir verbinden praktische KI-Funktionen mit der Website und den dahinterliegenden Tools, mit klaren Schutzmechanismen und nachvollziehbaren Abläufen.",
  "Lead qualification and intelligent support": "Lead-Qualifizierung und intelligenter Support",
  "Content and CRM automation": "Content- und CRM-Automatisierung",
  "Secure data and human review points": "Sichere Daten und menschliche Prüfpunkte",
  "Integrations & Automation": "Integrationen & Automatisierung",
  "We connect the website with the systems behind your business, creating reliable workflows with clear ownership and safeguards.": "Wir verbinden die Website mit den Systemen hinter Ihrem Unternehmen und schaffen zuverlässige Abläufe mit klaren Verantwortlichkeiten und Schutzmechanismen.",
  "Forms, CRM, and email connections": "Formular-, CRM- und E-Mail-Anbindungen",
  "Lead routing and workflow automation": "Lead-Verteilung und Workflow-Automatisierung",
  "Secure data handoffs and monitoring": "Sichere Datenübergaben und Monitoring",
  "Next Step": "Nächster Schritt",
  "Need the right scope for your project?": "Sie brauchen den passenden Umfang für Ihr Projekt?",
  "Plan the project": "Projekt planen",
  "What makes it feel premium": "Was Premium-Qualität spürbar macht",
  "Micro-interactions": "Mikrointeraktionen",
  "Sharp mobile spacing": "Präzise Mobile-Abstände",
  "Accessible forms": "Barrierearme Formulare",
  "Elegant typography": "Elegante Typografie",
  "AI-assisted content": "KI-gestützte Inhalte",
  "Content systems": "Content-Systeme",
  "Performance budget": "Performance-Budget",
  "Practical AI for websites that do more.": "Praktische KI für Websites, die mehr leisten.",
  "AI is used where it improves clarity, speed, service, or operations, always guided by a clear strategy and human judgment.": "KI wird dort eingesetzt, wo sie Klarheit, Geschwindigkeit, Service oder Abläufe verbessert, stets geführt durch klare Strategie und menschliches Urteilsvermögen.",
  "AI-assisted strategy and content systems.": "KI-gestützte Strategie- und Content-Systeme.",
  "01 / Strategy & Content": "01 / Strategie & Content",
  "Use AI to accelerate research, organize information, and create stronger content foundations without giving up editorial control.": "Nutzen Sie KI, um Recherche zu beschleunigen, Informationen zu ordnen und stärkere Content-Grundlagen zu schaffen, ohne redaktionelle Kontrolle abzugeben.",
  "AI capabilities": "KI-Kompetenzen",
  "Responsive website and design system interface": "Responsive Website- und Designsystem-Oberfläche",
  "Responsive ecommerce website interface": "Responsive E-Commerce-Website-Oberfläche",
  "SaaS dashboard and automation interface": "SaaS-Dashboard und Automatisierungsoberfläche",
  "Research": "Recherche",
  "Content Systems": "Content-Systeme",
  "Human Review": "Menschliche Prüfung",
  "Built for": "Geeignet für",
  "Research, structure, and content workflows": "Recherche, Struktur und Content-Workflows",
  "Principle": "Prinzip",
  "Human direction at every step": "Menschliche Führung bei jedem Schritt",
  "Intelligent website interactions.": "Intelligente Website-Interaktionen.",
  "02 / Website Experience": "02 / Website-Erlebnis",
  "Add useful AI experiences such as guided product discovery, smarter search, lead qualification, and context-aware support.": "Ergänzen Sie sinnvolle KI-Erlebnisse wie geführte Produktsuche, intelligentere Suche, Lead-Qualifizierung und kontextbezogenen Support.",
  "Lead Qualification": "Lead-Qualifizierung",
  "Smart Search": "Intelligente Suche",
  "Support": "Support",
  "Clearer journeys and faster answers": "Klarere Wege und schnellere Antworten",
  "Useful before impressive": "Nützlich vor eindrucksvoll",
  "Connected workflows behind the website.": "Vernetzte Abläufe hinter der Website.",
  "03 / Automation": "03 / Automatisierung",
  "Connect forms, CRM systems, email, and internal tools so information is summarized, routed, and prepared automatically.": "Verbinden Sie Formulare, CRM-Systeme, E-Mail und interne Tools, damit Informationen automatisch zusammengefasst, verteilt und vorbereitet werden.",
  "CRM Routing": "CRM-Verteilung",
  "Summaries": "Zusammenfassungen",
  "Follow-up": "Nachverfolgung",
  "Less manual administration": "Weniger manuelle Administration",
  "Secure, understandable workflows": "Sichere, nachvollziehbare Abläufe",
  "A precise launch path with no mystery in the middle.": "Ein präziser Weg zum Launch ohne Unklarheiten dazwischen.",
  "A focused process combines human judgment with AI-assisted research, content, and quality checks from the first workshop to launch.": "Ein fokussierter Prozess verbindet menschliches Urteilsvermögen mit KI-gestützter Recherche, Inhalten und Qualitätsprüfungen vom ersten Workshop bis zum Launch.",
  "A focused process connects strategy, content, design, development, and quality checks from the first workshop to launch.": "Ein fokussierter Prozess verbindet Strategie, Inhalte, Design, Entwicklung und Qualitätsprüfungen vom ersten Workshop bis zum Launch.",
  "Discover": "Verstehen",
  "Design": "Design",
  "Build": "Entwicklung",
  "Launch": "Launch",
  "Discovery Sprint": "Discovery-Sprint",
  "We define the offer, buyer intent, content gaps, and technical requirements with focused AI-assisted research.": "Wir definieren Angebot, Kaufabsicht, Content-Lücken und technische Anforderungen mit fokussierter KI-gestützter Recherche.",
  "We define the offer, buyer intent, content gaps, and technical requirements through focused research and a clear workshop.": "Wir definieren Angebot, Kaufabsicht, Content-Lücken und technische Anforderungen durch fokussierte Recherche und einen klaren Workshop.",
  "UX and Visual Direction": "UX und visuelle Richtung",
  "We solve page structure, hierarchy, responsive behavior, and a premium visual system.": "Wir lösen Seitenstruktur, Hierarchie, responsives Verhalten und ein hochwertiges visuelles System.",
  "We build semantic pages, reusable sections, accessible states, and the AI integrations defined in the strategy.": "Wir entwickeln semantische Seiten, wiederverwendbare Bereiche, barrierearme Zustände und die in der Strategie definierten KI-Integrationen.",
  "We build semantic pages, reusable sections, accessible states, and the integrations defined in the strategy.": "Wir entwickeln semantische Seiten, wiederverwendbare Bereiche, barrierearme Zustände und die in der Strategie definierten Integrationen.",
  "QA and Launch": "QA und Launch",
  "We test forms, AI workflows, SEO metadata, mobile layouts, performance, and handoff details.": "Wir prüfen Formulare, KI-Workflows, SEO-Metadaten, mobile Layouts, Performance und Übergabedetails.",
  "We test forms, integrations, SEO metadata, mobile layouts, performance, and handoff details.": "Wir prüfen Formulare, Integrationen, SEO-Metadaten, mobile Layouts, Performance und Übergabedetails.",
  "Workflow": "Arbeitsablauf",
  "A clear board for decisions, production, and approval.": "Ein klares Board für Entscheidungen, Produktion und Freigabe.",
  "Define": "Definieren",
  "Create": "Gestalten",
  "Ship": "Veröffentlichen",
  "Goals": "Ziele",
  "Audience": "Zielgruppe",
  "Wireframes": "Wireframes",
  "UI system": "UI-System",
  "AI-assisted copy": "KI-gestützte Texte",
  "Automation QA": "Automatisierungs-QA",
  "QA": "Qualitätssicherung",
  "Launch in 1-2 weeks": "Launch in 1–2 Wochen",
  "Four phases": "Vier Phasen",
  "One clear owner": "Eine klare Verantwortung",
  "Four focused phases. One fast launch.": "Vier fokussierte Phasen. Ein schneller Launch.",
  "Short feedback loops keep every decision visible while strategy, design, development, and AI move forward together.": "Kurze Feedbackschleifen halten jede Entscheidung sichtbar, während Strategie, Design, Entwicklung und KI gemeinsam vorankommen.",
  "Short feedback loops keep every decision visible while strategy, design, and development move forward together.": "Kurze Feedbackschleifen halten jede Entscheidung sichtbar, während Strategie, Design und Entwicklung gemeinsam vorankommen.",
  "Days 1-2": "Tag 1–2",
  "Days 3-4": "Tag 3–4",
  "Days 5-8": "Tag 5–8",
  "Days 9-10": "Tag 9–10",
  "Built into every phase": "In jede Phase integriert",
  "One connected system from first idea to launch.": "Ein verbundenes System von der ersten Idee bis zum Launch.",
  "Content, design, code, and automation stay connected, so nothing disappears between tools or approvals.": "Inhalte, Design, Code und Automatisierung bleiben verbunden, damit nichts zwischen Tools oder Freigaben verloren geht.",
  "Clear decisions": "Klare Entscheidungen",
  "Every approval has one visible next step.": "Jede Freigabe hat einen sichtbaren nächsten Schritt.",
  "Fast feedback": "Schnelles Feedback",
  "Small review loops prevent late surprises.": "Kurze Prüfschleifen verhindern späte Überraschungen.",
  "Human control": "Menschliche Kontrolle",
  "AI accelerates the work without owning the final decision.": "KI beschleunigt die Arbeit, ohne die letzte Entscheidung zu übernehmen.",
  "Simple packages with room for serious custom work.": "Klare Pakete mit Raum für anspruchsvolle individuelle Lösungen.",
  "Three focused levels of support, from a decisive first launch to a fully custom digital platform.": "Drei klar definierte Pakete – vom überzeugenden ersten Launch bis zur vollständig individuellen digitalen Plattform.",
  "Best fit": "Beste Wahl",
  "For brands that need strategy, design, build, and launch support.": "Für Marken, die Strategie, Design, Entwicklung und Launch-Begleitung benötigen.",
  "Recommended": "Empfohlen",
  "Start here": "Hier starten",
  "Discuss scope": "Umfang besprechen",
  "What every package should include": "Was jedes Paket enthalten sollte",
  "Responsive design": "Responsives Design",
  "SEO foundations": "SEO-Grundlagen",
  "Performance review": "Performance-Prüfung",
  "Launch checklist": "Launch-Checkliste",
  "AI-ready foundation": "KI-bereite Grundlage",
  "Decision Guide": "Entscheidungshilfe",
  "Choose by business need, not by page count.": "Wählen Sie nach Geschäftsziel, nicht nach Seitenanzahl.",
  "Need credibility fast?": "Schnell mehr Glaubwürdigkeit nötig?",
  "Start with Launch.": "Starten Sie mit Launch.",
  "Need a full growth site?": "Sie benötigen eine vollständige Growth-Website?",
  "Choose Growth.": "Wählen Sie Growth.",
  "Need custom systems?": "Sie benötigen individuelle Systeme?",
  "Discuss Signature.": "Sprechen wir über Signature.",
  "Bring the brief. We will bring the structure.": "Bringen Sie das Briefing. Wir bringen die Struktur.",
  "Tell us what the site needs to achieve and what is currently getting in the way. We will reply with a clear next step.": "Sagen Sie uns, was die Website erreichen soll und was aktuell im Weg steht. Sie erhalten einen klaren nächsten Schritt.",
  "Currently accepting selected projects": "Aktuell nehmen wir ausgewählte Projekte an",
  "Fit check before proposal": "Fit-Check vor dem Angebot",
  "No pressure call": "Unverbindliches Gespräch",
  "Name": "Name",
  "Email": "E-Mail",
  "Company": "Unternehmen",
  "Budget": "Budget",
  "Select a range": "Budgetrahmen wählen",
  "Under [MINIMUM_PROJECT_BUDGET]": "Unter [MINIMUM_PROJECT_BUDGET]",
  "Message": "Nachricht",
  "Response: [RESPONSE_TIME]": "Antwortzeit: [RESPONSE_TIME]",
  "Send inquiry": "Anfrage senden",
  "This preview validates entries locally. Before launch, connect [FORM_ENDPOINT_OR_CRM] and update the": "Diese Vorschau prüft Eingaben lokal. Verbinden Sie vor dem Launch [FORM_ENDPOINT_OR_CRM] und ergänzen Sie die",
  "with the actual recipient and retention period.": "um den tatsächlichen Empfänger und die Speicherdauer.",
  "By submitting this form, you acknowledge our": "Mit dem Absenden dieses Formulars erkennen Sie unsere",
  ". Your information is used only to respond to your inquiry.": ". Ihre Angaben werden ausschlie\u00dflich zur Beantwortung Ihrer Anfrage verwendet.",
  "Privacy choices": "Datenschutzauswahl",
  "We store only your language and privacy choice. Optional services remain off until you allow them.": "Wir speichern nur Ihre Sprach- und Datenschutzauswahl. Optionale Dienste bleiben deaktiviert, bis Sie diese erlauben.",
  "Accept": "Annehmen",
  "Reject": "Ablehnen",
  "Privacy settings": "Datenschutzeinstellungen",
  "Select which optional technologies 42 Craft may activate. You can change this choice at any time.": "W\u00e4hlen Sie aus, welche optionalen Technologien 42 Craft aktivieren darf. Sie k\u00f6nnen diese Auswahl jederzeit \u00e4ndern.",
  "Necessary": "Notwendig",
  "Always active": "Immer aktiv",
  "No optional analytics or marketing service is connected in this build.": "In dieser Version ist kein optionaler Analyse- oder Marketingdienst verbunden.",
  "Stores language and consent preferences required for the website to work.": "Speichert Sprach- und Einwilligungseinstellungen, die f\u00fcr die Funktion der Website erforderlich sind.",
  "Analytics": "Analyse",
  "Helps us understand website usage when an analytics service is connected.": "Hilft uns, die Nutzung der Website zu verstehen, sobald ein Analyse-Dienst angebunden ist.",
  "Marketing": "Marketing",
  "Allows marketing technologies only when they are added and you consent.": "Erlaubt Marketing-Technologien nur, wenn diese eingebunden werden und Sie zustimmen.",
  "Save selection": "Auswahl speichern",
  "Close privacy settings": "Datenschutzeinstellungen schlie\u00dfen",
  "Web design for companies": "Webdesign f\u00fcr Unternehmen",
  "Websites that build trust.": "Websites, die Vertrauen schaffen.",
  "42 Craft designs and develops fast, modern websites that present your company clearly and turn visitors into inquiries.": "42 Craft gestaltet und entwickelt schnelle, moderne Websites, die Ihr Unternehmen klar pr\u00e4sentieren und Besucher zu Anfragen f\u00fchren.",
  "View packages": "Pakete ansehen",
  "Web Design. Development. AI.": "Webdesign. Entwicklung. KI.",
  "Websites that look sharp and work fast.": "Websites, die stark aussehen und schnell funktionieren.",
  "42 Craft designs and builds modern company websites, from page structure and interface to development and launch. Useful AI features are added only where they create real value.": "42 Craft konzipiert und entwickelt moderne Unternehmenswebsites – von Seitenstruktur und Design bis zu Entwicklung und Launch. Sinnvolle KI-Funktionen kommen nur dort zum Einsatz, wo sie echten Mehrwert schaffen.",
  "Custom": "Individuell",
  "No templates": "Keine Vorlagen",
  "Everything needed for a professional website.": "Alles für eine professionelle Website.",
  "Clear structure, responsive design, clean development, and a reliable launch.": "Klare Struktur, responsives Design, saubere Entwicklung und ein zuverlässiger Launch.",
  "Website Planning": "Website-Konzept",
  "Pages, navigation, and content arranged around one clear goal.": "Seiten, Navigation und Inhalte werden auf ein klares Ziel ausgerichtet.",
  "A custom interface that works on desktop, tablet, and mobile.": "Ein individuelles Design für Desktop, Tablet und Smartphone.",
  "Development": "Entwicklung",
  "Fast, accessible pages with clean code and solid SEO foundations.": "Schnelle, barrierearme Seiten mit sauberem Code und soliden SEO-Grundlagen.",
  "AI Features": "KI-Funktionen",
  "Chat, search, content, or automation only where it genuinely helps.": "Chat, Suche, Inhalte oder Automatisierung nur dort, wo sie wirklich helfen.",
  "Clear collaboration": "Klare Zusammenarbeit",
  "You always know what is included, what happens next, and who to contact.": "Sie wissen jederzeit, was enthalten ist, wie es weitergeht und wer Ihr Ansprechpartner ist.",
  "Defined scope": "Klarer Leistungsumfang",
  "Package, deliverables, and optional extras are agreed before work begins.": "Paket, Lieferumfang und optionale Zusatzleistungen werden vor dem Projektstart festgelegt.",
  "Direct contact": "Direkter Kontakt",
  "One reliable point of contact from the first conversation through launch.": "Ein fester Ansprechpartner begleitet Sie vom ersten Gespräch bis zum Launch.",
  "Complete handover": "Vollständige Übergabe",
  "After launch, you receive the agreed access and retain control of your website.": "Nach dem Launch erhalten Sie die vereinbarten Zugänge und behalten die Kontrolle über Ihre Website.",
  "AI with a clear purpose.": "KI mit klarem Nutzen.",
  "Useful assistants, smarter search, and simple automations can be built directly into the website.": "Hilfreiche Assistenten, intelligentere Suche und einfache Automatisierungen lassen sich direkt in die Website integrieren.",
  "Ready for a better website?": "Bereit für eine bessere Website?",
  "Tell us what you need. We will reply with a clear next step.": "Sagen Sie uns, was Sie benötigen. Wir antworten mit einem klaren nächsten Schritt.",
  "Web design, development, and practical AI.": "Webdesign, Entwicklung und praktische KI.",
  "Custom websites from first structure to launch.": "Individuelle Websites von der ersten Struktur bis zum Launch.",
  "Planning, design, and development in one clear process.": "Konzept, Design und Entwicklung in einem klaren Ablauf.",
  "Planning": "Konzept",
  "We define the pages, navigation, content priorities, and main conversion goal.": "Wir definieren Seiten, Navigation, Inhaltsprioritäten und das wichtigste Conversion-Ziel.",
  "Sitemap and navigation": "Sitemap und Navigation",
  "Content hierarchy": "Inhaltshierarchie",
  "Page wireframes": "Seiten-Wireframes",
  "We create a custom visual system for desktop, tablet, and mobile.": "Wir entwickeln ein individuelles Designsystem für Desktop, Tablet und Smartphone.",
  "Responsive layouts": "Responsive Layouts",
  "Typography and colors": "Typografie und Farben",
  "Accessible interactions": "Barrierearme Interaktionen",
  "We build fast pages and prepare them for search engines and real devices.": "Wir entwickeln schnelle Seiten und optimieren sie für Suchmaschinen und reale Geräte.",
  "Clean, maintainable code": "Sauberer, wartbarer Code",
  "Forms and calls to action": "Formulare und Handlungsaufforderungen",
  "SEO and performance basics": "SEO- und Performance-Grundlagen",
  "Integrations": "Integrationen",
  "We connect the website to the tools you actually use.": "Wir verbinden die Website mit den Tools, die Sie tatsächlich nutzen.",
  "Forms and email": "Formulare und E-Mail",
  "Booking and CRM": "Terminbuchung und CRM",
  "Useful automations": "Sinnvolle Automatisierungen",
  "Ready to plan your website?": "Bereit, Ihre Website zu planen?",
  "Start inquiry": "Anfrage starten",
  "Included": "Enthalten",
  "Every website includes the essentials.": "Jede Website enthält die wichtigen Grundlagen.",
  "Performance checks": "Performance-Prüfungen",
  "Launch support": "Launch-Begleitung",
  "Useful AI features for your website.": "Sinnvolle KI-Funktionen für Ihre Website.",
  "We add AI when it answers questions faster, improves search, or reduces manual work.": "Wir setzen KI ein, wenn sie Fragen schneller beantwortet, die Suche verbessert oder manuelle Arbeit reduziert.",
  "Content": "Inhalte",
  "Content support.": "Unterstützung für Inhalte.",
  "AI can help draft, structure, summarize, and update website content. Final approval always stays with you.": "KI kann Website-Inhalte entwerfen, strukturieren, zusammenfassen und aktualisieren. Die finale Freigabe bleibt immer bei Ihnen.",
  "Drafts": "Entwürfe",
  "Questions": "Fragen",
  "Recommendations": "Empfehlungen",
  "Website assistants.": "Website-Assistenten.",
  "A focused assistant can answer common questions, recommend the right service, or qualify an inquiry.": "Ein fokussierter Assistent kann häufige Fragen beantworten, das passende Angebot empfehlen oder eine Anfrage vorqualifizieren.",
  "Workflow automation.": "Workflow-Automatisierung.",
  "Form submissions can be summarized, sorted, and sent to the right inbox or CRM automatically.": "Formularanfragen können automatisch zusammengefasst, sortiert und an das richtige Postfach oder CRM gesendet werden.",
  "Form Routing": "Formular-Verteilung",
  "01 / Content": "01 / Inhalte",
  "02 / Website": "02 / Website",
  "Automation": "Automatisierung",
  "From first call to launch in 1-2 weeks.": "Vom Erstgespräch bis zum Launch in 1–2 Wochen.",
  "A short process with clear approvals and one contact person.": "Ein kurzer Ablauf mit klaren Freigaben und einem festen Ansprechpartner.",
  "You review each phase before the next one begins.": "Sie prüfen jede Phase, bevor die nächste beginnt.",
  "Briefing": "Briefing",
  "We define goals, pages, content, and technical requirements.": "Wir definieren Ziele, Seiten, Inhalte und technische Anforderungen.",
  "You receive the page structure and visual direction for approval.": "Sie erhalten Seitenstruktur und Designrichtung zur Freigabe.",
  "We build the responsive pages, forms, SEO basics, and integrations.": "Wir entwickeln responsive Seiten, Formulare, SEO-Grundlagen und Integrationen.",
  "Test and Launch": "Test und Launch",
  "We test mobile layouts, speed, forms, and metadata before launch.": "Vor dem Launch prüfen wir mobile Layouts, Geschwindigkeit, Formulare und Metadaten.",
  "Websites, SEO, and hosting in clear packages.": "Websites, SEO und Hosting in klaren Paketen.",
  "Choose the right website package and add hosting and ongoing care when you need it.": "Wählen Sie das passende Website-Paket und ergänzen Sie Hosting und laufende Betreuung nach Bedarf.",
  "Most requested": "Am häufigsten gewählt",
  "Included from the start": "Von Anfang an enthalten",
  "Design · SEO · Launch": "Design · SEO · Launch",
  "Hosting and ongoing care can be added to match your website.": "Hosting und laufende Betreuung können passend zur Website ergänzt werden.",
  "Company Website": "Unternehmenswebsite",
  "Company Website · from €2,100": "Unternehmenswebsite · ab 2.100 €",
  "Built to explain your offer clearly and turn visits into inquiries.": "Entwickelt, um Ihr Angebot klar zu erklären und Besucher zu Anfragen zu führen.",
  "Website Packages": "Website-Pakete",
  "Three clear levels for your next website.": "Drei klare Stufen für Ihre nächste Website.",
  "Every package combines individual design, responsive development, technical quality, and a structured launch.": "Jedes Paket verbindet individuelles Design, responsive Entwicklung, technische Qualität und einen strukturierten Launch.",
  "01 / Starter": "01 / Starter",
  "Starter Website": "Starter-Website",
  "from €1,000": "ab 1.000 €",
  "For self-employed professionals and small businesses.": "Für Selbstständige und kleine Unternehmen.",
  "Everything included": "Alle enthaltenen Leistungen",
  "Individual modern web design": "Individuelles modernes Webdesign",
  "Up to 5 content pages": "Bis zu 5 Inhaltsseiten",
  "Optimized for smartphone, tablet, and desktop": "Optimierung für Smartphone, Tablet und Desktop",
  "Contact form": "Kontaktformular",
  "Basic SEO": "Basis-SEO",
  "Optimized loading times": "Optimierte Ladezeiten",
  "Technical integration of legal notice and privacy policy": "Technische Einbindung von Impressum und Datenschutz",
  "Two revision rounds": "Zwei Korrekturrunden",
  "Website publication": "Veröffentlichung der Website",
  "14 days of technical support after launch": "14 Tage technischer Support nach dem Start",
  "Request Starter Website": "Starter-Website anfragen",
  "02 / Company": "02 / Unternehmen",
  "from €2,100": "ab 2.100 €",
  "For companies that want to gain new customers through their website.": "Für Unternehmen, die über ihre Website neue Kunden gewinnen möchten.",
  "All Starter Website services": "Alle Leistungen der Starter-Website",
  "Up to 10 content pages": "Bis zu 10 Inhaltsseiten",
  "Advanced SEO foundation": "Erweiterte SEO-Grundoptimierung",
  "Keyword research": "Keyword-Recherche",
  "Sales-focused page structure": "Verkaufsorientierte Seitenstruktur",
  "Blog or guide section": "Blog- oder Ratgeberbereich",
  "Google Search Console": "Google Search Console",
  "Preparation for Google Business Profile": "Vorbereitung für Google Business Profile",
  "Booking or newsletter integration": "Terminbuchung oder Newsletter-Anbindung",
  "Structured data": "Strukturierte Daten",
  "Advanced performance optimization": "Erweiterte Performance-Optimierung",
  "Three revision rounds": "Drei Korrekturrunden",
  "30 days of technical support": "30 Tage technischer Support",
  "Request Company Website": "Unternehmenswebsite anfragen",
  "03 / Custom": "03 / Individuell",
  "Ask for details": "Details anfragen",
  "Custom Website": "Individuelle Website",
  "from €4,000": "ab 4.000 €",
  "For companies that need special functions, automation, and AI support.": "Für Unternehmen mit besonderen Funktionen, Automatisierungen und KI-Unterstützung.",
  "All Company Website services": "Alle Leistungen der Unternehmenswebsite",
  "Up to 15 content pages": "Bis zu 15 Inhaltsseiten",
  "Custom website functions": "Individuelle Website-Funktionen",
  "AI support chatbot": "KI-Support-Chatbot",
  "Chatbot adapted to the company": "Anpassung des Chatbots an das Unternehmen",
  "Knowledge base for common customer questions": "Wissensbasis für häufige Kundenfragen",
  "Automatic answers to simple questions": "Automatische Beantwortung einfacher Fragen",
  "Collection of contact details and inquiries": "Erfassung von Kontaktdaten und Anfragen",
  "Forwarding inquiries by email": "Weiterleitung von Anfragen per E-Mail",
  "CRM, email, or API integrations": "CRM-, E-Mail- oder API-Anbindungen",
  "Automated workflows": "Automatisierte Abläufe",
  "Multilingual setup based on scope": "Mehrsprachigkeit nach Aufwand",
  "Advanced security and performance review": "Erweiterte Sicherheits- und Performance-Prüfung",
  "Three months of technical support": "Drei Monate technischer Support",
  "Discuss Custom Website": "Individuelle Website besprechen",
  "External costs for hosting, software, AI, and other services are charged separately.": "Externe Kosten für Hosting, Software, KI und andere Dienste werden separat berechnet.",
  "SEO, simply explained": "SEO einfach erklärt",
  "SEO helps the right people find your website.": "SEO hilft den richtigen Menschen, Ihre Website zu finden.",
  "SEO means preparing your pages so Google can understand what you offer and show them for relevant searches. Clear content, the right search terms, fast loading times, and clean technology work together.": "SEO bedeutet, Ihre Seiten so vorzubereiten, dass Google Ihr Angebot versteht und bei passenden Suchanfragen anzeigen kann. Klare Inhalte, die richtigen Suchbegriffe, schnelle Ladezeiten und saubere Technik wirken dabei zusammen.",
  "It creates a strong foundation for visibility, but no provider can guarantee a specific Google ranking.": "Das schafft eine starke Grundlage für Sichtbarkeit, aber kein Anbieter kann eine bestimmte Google-Platzierung garantieren.",
  "Relevant content": "Relevante Inhalte",
  "Answers what potential customers search for.": "Beantworten, wonach potenzielle Kunden suchen.",
  "Clean technology": "Saubere Technik",
  "Makes pages fast and understandable for search engines.": "Macht Seiten schnell und für Suchmaschinen verständlich.",
  "Local visibility": "Lokale Sichtbarkeit",
  "Connects your services with your real service area.": "Verbindet Ihre Leistungen mit Ihrem echten Einzugsgebiet.",
  "Hosting & Care": "Hosting & Betreuung",
  "Hosting that keeps your website secure and available.": "Hosting, das Ihre Website sicher und erreichbar hält.",
  "Choose simple hosting support or add regular maintenance, checks, and content updates.": "Wählen Sie einfache Hosting-Unterstützung oder ergänzen Sie regelmäßige Wartung, Kontrollen und Inhaltsänderungen.",
  "01 / Basic": "01 / Basic",
  "Hosting Basic": "Hosting Basic",
  "€19 / month": "19 € / Monat",
  "For simple websites with low support requirements.": "Für einfache Websites mit geringem Betreuungsbedarf.",
  "Hosting or management of the hosting account": "Hosting oder Verwaltung des Hostingkontos",
  "SSL certificate for a secure connection": "SSL-Zertifikat für eine sichere Verbindung",
  "Technical domain management": "Technische Domainverwaltung",
  "Automatic backups by the hosting provider": "Automatische Backups des Hostinganbieters",
  "Basic availability check": "Grundlegende Erreichbarkeitsprüfung",
  "Email support for hosting problems": "E-Mail-Support bei Hostingproblemen",
  "Not included": "Nicht enthalten",
  "Regular content changes": "Regelmäßige Inhaltsänderungen",
  "Extensive troubleshooting": "Umfangreiche Fehlerbehebung",
  "New pages or functions": "Neue Seiten oder Funktionen",
  "Choose Hosting Basic": "Hosting Basic wählen",
  "02 / Care": "02 / Care",
  "Care": "Care",
  "€59 / month": "59 € / Monat",
  "For smaller company websites that need regular technical maintenance.": "Für kleinere Unternehmenswebsites, die regelmäßig technisch betreut werden sollen.",
  "All Hosting Basic services": "Alle Leistungen aus Hosting Basic",
  "Regular system and extension updates": "Regelmäßige System- und Erweiterungsupdates",
  "Weekly backup check": "Wöchentliche Backup-Kontrolle",
  "Basic security check": "Grundlegende Sicherheitskontrolle",
  "Availability monitoring": "Überwachung der Erreichbarkeit",
  "Recovery from simple technical problems": "Wiederherstellung bei einfachen technischen Problemen",
  "Up to 15 minutes of small text or image changes per month": "Bis zu 15 Minuten kleine Text- oder Bildänderungen pro Monat",
  "Email support": "E-Mail-Support",
  "Unused minutes expire at the end of the month.": "Nicht genutzte Minuten verfallen am Monatsende.",
  "Choose Care": "Care wählen",
  "More Support": "Mehr Betreuung",
  "03 / Care Plus": "03 / Care Plus",
  "Care Plus": "Care Plus",
  "€119 / month": "119 € / Monat",
  "For actively used company websites with higher support requirements.": "Für aktiv genutzte Unternehmenswebsites mit höherem Betreuungsbedarf.",
  "All Care services": "Alle Leistungen aus Care",
  "Daily backups": "Tägliche Backups",
  "Monthly function test": "Monatlicher Funktionstest",
  "Contact form test": "Test des Kontaktformulars",
  "Performance and loading time check": "Performance- und Ladezeitkontrolle",
  "Advanced security monitoring": "Erweiterte Sicherheitsüberwachung",
  "Up to 60 minutes of small content changes per month": "Bis zu 60 Minuten kleine Inhaltsänderungen pro Monat",
  "Faster response time": "Schnellere Reaktionszeit",
  "Monthly short report": "Monatlicher Kurzbericht",
  "Priority technical support": "Priorisierter technischer Support",
  "Choose Care Plus": "Care Plus wählen",
  "Additional work such as new pages, new functions, design changes, or larger development work is charged separately.": "Zusätzliche Arbeiten wie neue Seiten, neue Funktionen, Designänderungen oder größere Programmierungen werden separat berechnet.",
  "AI project advisor": "KI-Projektberater",
  "Not sure which package fits?": "Unsicher, welches Paket passt?",
  "I will help you choose in six short questions.": "Ich helfe Ihnen mit sechs kurzen Fragen bei der Auswahl.",
  "Open AI project advisor": "KI-Projektberater öffnen",
  "1 new message": "1 neue Nachricht",
  "Minimize advisor": "Berater zuklappen",
  "42 Craft Assistant": "42 Craft Assistent",
  "AI Project Advisor": "KI-Projektberater",
  "Restart": "Neu starten",
  "Answer options": "Antwortmöglichkeiten",
  "Discuss requirements": "Anforderungen besprechen",
  "Tell us about your website.": "Erzählen Sie uns von Ihrer Website.",
  "Send us your goal, required pages, and desired launch date. We will reply with a concrete next step.": "Senden Sie uns Ihr Ziel, die benötigten Seiten und den gewünschten Launch-Termin. Wir antworten mit einem konkreten nächsten Schritt.",
  "Clear scope before work begins": "Klarer Umfang vor Projektstart",
  "No-obligation initial call": "Unverbindliches Erstgespräch",
  "Your details are used only to respond to your inquiry. More information is available in the": "Ihre Angaben werden nur zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in der"
});

const pageTitleTranslations = Object.freeze({
  "Website, SEO & Hosting Packages | 42 Craft": "Website-, SEO- & Hosting-Pakete | 42 Craft",
  "42 Craft | AI-Powered Web Design and Development": "42 Craft | KI-gestütztes Webdesign und Entwicklung",
  "Web Design | 42 Craft": "Webdesign | 42 Craft",
  "AI Solutions | 42 Craft": "KI-Lösungen | 42 Craft",
  "Process | 42 Craft": "Ablauf | 42 Craft",
  "Pricing | 42 Craft": "Preise | 42 Craft",
  "Contact | 42 Craft": "Kontakt | 42 Craft",
  "Privacy Policy | 42 Craft": "Datenschutzerkl\u00e4rung | 42 Craft",
  "Terms and Conditions | 42 Craft": "Allgemeine Gesch\u00e4ftsbedingungen | 42 Craft",
  "Imprint | 42 Craft": "Impressum | 42 Craft"
});

const originalPageTitle = document.title;
const textNodeRecords = [];
const attributeRecords = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let currentNode = walker.nextNode();

while (currentNode) {
  const key = currentNode.nodeValue.trim();
  const parentTag = currentNode.parentElement?.tagName;

  if (germanTranslations[key] && parentTag !== "SCRIPT" && parentTag !== "STYLE") {
    textNodeRecords.push({ node: currentNode, original: currentNode.nodeValue, key });
  }

  currentNode = walker.nextNode();
}

document.querySelectorAll("[aria-label], [alt]").forEach((element) => {
  ["aria-label", "alt"].forEach((attribute) => {
    const key = element.getAttribute(attribute);

    if (germanTranslations[key]) {
      attributeRecords.push({ element, attribute, original: key, key });
    }
  });
});

let currentLanguage = "en";

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("42craft-language");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("42craft-language", language);
  } catch {
    // The switch still works when local storage is unavailable.
  }
};

const localize = (englishText) => currentLanguage === "de" ? germanTranslations[englishText] ?? englishText : englishText;

const syncLanguageUrls = () => {
  document.querySelectorAll('a[href*=".html"]').forEach((link) => {
    const url = new URL(link.getAttribute("href"), window.location.href);
    url.searchParams.set("lang", currentLanguage);
    link.setAttribute("href", url.href);
  });

  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("lang", currentLanguage);
  try {
    history.replaceState(null, "", currentUrl);
  } catch {
    // Some browsers restrict history changes for local file previews.
  }
};

const applyLanguage = (language, persist = true) => {
  currentLanguage = language === "de" ? "de" : "en";
  document.documentElement.lang = currentLanguage;

  textNodeRecords.forEach(({ node, original, key }) => {
    node.nodeValue = currentLanguage === "de" ? original.replace(key, germanTranslations[key]) : original;
  });

  attributeRecords.forEach(({ element, attribute, original, key }) => {
    element.setAttribute(attribute, currentLanguage === "de" ? germanTranslations[key] : original);
  });

  document.title = currentLanguage === "de" ? pageTitleTranslations[originalPageTitle] ?? originalPageTitle : originalPageTitle;

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  languageSections.forEach((section) => {
    section.hidden = section.dataset.languageContent !== currentLanguage;
  });

  if (navToggleLabel) {
    const isOpen = navToggle?.getAttribute("aria-expanded") === "true";
    navToggleLabel.textContent = localize(isOpen ? "Close menu" : "Open menu");
  }

  syncLanguageUrls();

  if (persist) {
    storeLanguage(currentLanguage);
  }

  syncConsentLanguage();
  syncProjectAdvisorLanguage();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
const initialLanguage = requestedLanguage ?? getStoredLanguage() ?? (navigator.language.toLowerCase().startsWith("de") ? "de" : "en");
applyLanguage(initialLanguage, false);

requestAnimationFrame(() => {
  document.body.classList.add("is-ready");
});

window.setTimeout(() => siteLoader?.classList.add("is-hidden"), 300);

const consentStorageKey = "42craft-cookie-consent-v2";
const consentVersion = 2;
const blockedOptionalScripts = [...document.querySelectorAll('script[type="text/plain"][data-cookie-category]')];
const availableConsentCategories = new Set(blockedOptionalScripts.map((script) => script.dataset.cookieCategory));

const readConsent = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(consentStorageKey));
    return stored?.version === consentVersion ? stored : null;
  } catch {
    return null;
  }
};

const activateConsentedScripts = (consent) => {
  blockedOptionalScripts.forEach((blockedScript) => {
    const category = blockedScript.dataset.cookieCategory;

    if (!consent?.[category] || blockedScript.dataset.cookieActivated === "true") {
      return;
    }

    const activeScript = document.createElement("script");
    [...blockedScript.attributes].forEach(({ name, value }) => {
      if (!["type", "data-cookie-category", "data-cookie-activated"].includes(name)) {
        activeScript.setAttribute(name, value);
      }
    });
    activeScript.textContent = blockedScript.textContent;
    blockedScript.dataset.cookieActivated = "true";
    blockedScript.after(activeScript);
  });
};

const consentTool = document.createElement("div");
consentTool.className = "consent-tool";
consentTool.innerHTML = `
  <section class="consent-banner" role="dialog" aria-labelledby="consent-title" aria-describedby="consent-description" data-consent-banner>
    <div class="consent-copy">
      <p class="eyebrow">42 Craft Privacy</p>
      <h2 id="consent-title" data-consent-copy="Privacy choices">Privacy choices</h2>
      <p id="consent-description" data-consent-copy="We store only your language and privacy choice. Optional services remain off until you allow them.">We store only your language and privacy choice. Optional services remain off until you allow them.</p>
      <a href="datenschutz.html" data-consent-privacy data-consent-copy="Privacy Policy">Privacy Policy</a>
    </div>
    <div class="consent-actions">
      <button class="button button-secondary consent-decision" type="button" data-consent-reject data-consent-copy="Reject">Reject</button>
      <button class="button button-primary consent-decision" type="button" data-consent-accept data-consent-copy="Accept">Accept</button>
    </div>
  </section>
  <section class="consent-preferences" role="dialog" aria-modal="true" aria-labelledby="consent-preferences-title" data-consent-preferences hidden>
    <div class="consent-preferences-header">
      <div><p class="eyebrow">42 Craft Privacy</p><h2 id="consent-preferences-title" data-consent-copy="Privacy settings">Privacy settings</h2></div>
      <button class="consent-close" type="button" data-consent-close data-consent-aria="Close privacy settings" aria-label="Close privacy settings"><span aria-hidden="true">&times;</span></button>
    </div>
    <p data-consent-copy="Select which optional technologies 42 Craft may activate. You can change this choice at any time.">Select which optional technologies 42 Craft may activate. You can change this choice at any time.</p>
    <p class="consent-service-status" data-consent-status data-consent-copy="No optional analytics or marketing service is connected in this build.">No optional analytics or marketing service is connected in this build.</p>
    <div class="consent-options">
      <label class="consent-option"><span><strong data-consent-copy="Necessary">Necessary</strong><small data-consent-copy="Stores language and consent preferences required for the website to work.">Stores language and consent preferences required for the website to work.</small></span><span class="consent-required" data-consent-copy="Always active">Always active</span><input type="checkbox" checked disabled data-consent-aria="Necessary" aria-label="Necessary" /></label>
      <label class="consent-option"><span><strong data-consent-copy="Analytics">Analytics</strong><small data-consent-copy="Helps us understand website usage when an analytics service is connected.">Helps us understand website usage when an analytics service is connected.</small></span><input type="checkbox" data-consent-category="analytics" data-consent-aria="Analytics" aria-label="Analytics" /></label>
      <label class="consent-option"><span><strong data-consent-copy="Marketing">Marketing</strong><small data-consent-copy="Allows marketing technologies only when they are added and you consent.">Allows marketing technologies only when they are added and you consent.</small></span><input type="checkbox" data-consent-category="marketing" data-consent-aria="Marketing" aria-label="Marketing" /></label>
    </div>
    <div class="consent-preferences-actions">
      <div class="consent-legal-links"><a href="impressum.html" data-consent-imprint data-consent-copy="Imprint">Imprint</a><a href="datenschutz.html" data-consent-privacy data-consent-copy="Privacy Policy">Privacy Policy</a></div>
      <button class="button button-primary" type="button" data-consent-save data-consent-copy="Save selection">Save selection</button>
    </div>
  </section>
`;
document.body.append(consentTool);

const consentBanner = consentTool.querySelector("[data-consent-banner]");
const consentPreferences = consentTool.querySelector("[data-consent-preferences]");
const analyticsConsent = consentTool.querySelector('[data-consent-category="analytics"]');
const marketingConsent = consentTool.querySelector('[data-consent-category="marketing"]');
const consentServiceStatus = consentTool.querySelector("[data-consent-status]");
let activeConsent = readConsent();
let consentReturnFocus = null;

[analyticsConsent, marketingConsent].forEach((input) => {
  const isAvailable = availableConsentCategories.has(input.dataset.consentCategory);
  input.disabled = !isAvailable;
  input.closest(".consent-option")?.classList.toggle("is-unavailable", !isAvailable);
});
consentServiceStatus.hidden = availableConsentCategories.size > 0;

syncConsentLanguage = () => {
  consentTool.querySelectorAll("[data-consent-copy]").forEach((element) => {
    element.textContent = localize(element.dataset.consentCopy);
  });
  consentTool.querySelectorAll("[data-consent-aria]").forEach((element) => {
    element.setAttribute("aria-label", localize(element.dataset.consentAria));
  });
  consentTool.querySelectorAll("[data-consent-privacy]").forEach((link) => {
    const url = new URL("datenschutz.html", window.location.href);
    url.searchParams.set("lang", currentLanguage);
    link.href = url.href;
  });
  consentTool.querySelectorAll("[data-consent-imprint]").forEach((link) => {
    const url = new URL("impressum.html", window.location.href);
    url.searchParams.set("lang", currentLanguage);
    link.href = url.href;
  });
};

const writeConsent = (preferences) => {
  const preferencesWereOpen = !consentPreferences.hidden;
  activeConsent = {
    version: consentVersion,
    necessary: true,
    analytics: availableConsentCategories.has("analytics") && Boolean(preferences.analytics),
    marketing: availableConsentCategories.has("marketing") && Boolean(preferences.marketing),
    updatedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(consentStorageKey, JSON.stringify(activeConsent));
  } catch {
    // Consent remains active for the current page when storage is unavailable.
  }

  consentBanner.hidden = true;
  consentPreferences.hidden = true;
  if (preferencesWereOpen) {
    consentReturnFocus?.focus();
  }
  activateConsentedScripts(activeConsent);
  window.dispatchEvent(new CustomEvent("42craft:consent", { detail: { ...activeConsent } }));
};

const openConsentPreferences = () => {
  consentReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  analyticsConsent.checked = Boolean(activeConsent?.analytics);
  marketingConsent.checked = Boolean(activeConsent?.marketing);
  consentBanner.hidden = true;
  consentPreferences.hidden = false;
  consentPreferences.querySelector("[data-consent-close]")?.focus();
};

const closeConsentPreferences = () => {
  consentPreferences.hidden = true;
  consentBanner.hidden = Boolean(activeConsent);
  consentReturnFocus?.focus();
};

consentTool.querySelector("[data-consent-accept]")?.addEventListener("click", () => writeConsent({ analytics: true, marketing: true }));
consentTool.querySelector("[data-consent-reject]")?.addEventListener("click", () => writeConsent({ analytics: false, marketing: false }));
consentTool.querySelector("[data-consent-close]")?.addEventListener("click", closeConsentPreferences);
consentTool.querySelector("[data-consent-save]")?.addEventListener("click", () => writeConsent({ analytics: analyticsConsent.checked, marketing: marketingConsent.checked }));
document.querySelectorAll("[data-cookie-settings]").forEach((button) => button.addEventListener("click", openConsentPreferences));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !consentPreferences.hidden) {
    closeConsentPreferences();
  }

  if (event.key === "Tab" && !consentPreferences.hidden) {
    const focusable = [...consentPreferences.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])')];
    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
});

syncConsentLanguage();
consentBanner.hidden = Boolean(activeConsent);
activateConsentedScripts(activeConsent);

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;
  document.documentElement.style.setProperty("--scroll-progress", String(progress));
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  if (navToggleLabel) {
    navToggleLabel.textContent = localize(isOpen ? "Open menu" : "Close menu");
  }
  navMenu?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute("aria-expanded", "false");
    if (navToggleLabel) {
      navToggleLabel.textContent = localize("Open menu");
    }
    navMenu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu?.classList.contains("is-open")) {
    navToggle?.setAttribute("aria-expanded", "false");
    if (navToggleLabel) {
      navToggleLabel.textContent = localize("Open menu");
    }
    navMenu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle?.focus();
  }
});

const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
  item.style.setProperty("--delay", `${(index % 4) * 65}ms`);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          return;
        }

        const exitedAboveViewport = entry.boundingClientRect.bottom <= 0;
        entry.target.classList.toggle("reveal-from-top", exitedAboveViewport);
        entry.target.classList.remove("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const parallaxMedia = document.querySelectorAll(".page-hero-art, .case-media, .process-system-visual, .hero-media");
const parallaxQuery = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
let parallaxFrame = 0;

const updateParallax = () => {
  parallaxFrame = 0;

  parallaxMedia.forEach((media) => {
    if (!parallaxQuery.matches) {
      media.style.setProperty("--parallax-offset", "0px");
      return;
    }

    const bounds = media.getBoundingClientRect();
    const distanceFromCenter = bounds.top + bounds.height / 2 - window.innerHeight / 2;
    const offset = Math.max(-22, Math.min(22, distanceFromCenter * -0.035));
    media.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
  });
};

const requestParallaxUpdate = () => {
  if (!parallaxFrame) {
    parallaxFrame = requestAnimationFrame(updateParallax);
  }
};

parallaxMedia.forEach((media) => media.classList.add("has-parallax"));
updateParallax();
window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
window.addEventListener("resize", requestParallaxUpdate, { passive: true });

const counterAnimations = new WeakMap();

const resetCounter = (element) => {
  const animationFrame = counterAnimations.get(element);

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    counterAnimations.delete(element);
  }

  element.textContent = "0";
};

const animateCounter = (element) => {
  const target = Number(element.dataset.count);

  if (!Number.isFinite(target)) {
    return;
  }

  resetCounter(element);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.textContent = String(target);
    return;
  }

  const start = performance.now();
  const duration = 900;

  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(target * eased));

    if (progress < 1) {
      counterAnimations.set(element, requestAnimationFrame(update));
    } else {
      counterAnimations.delete(element);
    }
  };

  counterAnimations.set(element, requestAnimationFrame(update));
};

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        } else {
          resetCounter(entry.target);
        }
      });
    },
    { threshold: 0.7 }
  );

  counterItems.forEach((item) => counterObserver.observe(item));
} else {
  counterItems.forEach(animateCounter);
}

const createProjectAdvisor = () => {
  const root = document.createElement("aside");
  root.className = "project-advisor is-ready";
  root.dataset.projectAdvisor = "";
  root.innerHTML = `
    <button class="advisor-launcher" type="button" data-advisor-open aria-expanded="false">
      <span class="advisor-chat-glyph" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="advisor-notification" data-advisor-notification>1</span>
    </button>
    <section class="advisor-panel" data-advisor-panel role="dialog" aria-modal="false" aria-labelledby="advisor-title" hidden>
      <header class="advisor-header">
        <button class="advisor-close" type="button" data-advisor-close>&times;</button>
        <div><span data-advisor-assistant></span><h2 id="advisor-title" data-advisor-title></h2></div>
        <button class="advisor-restart" type="button" data-advisor-restart></button>
      </header>
      <div class="advisor-progress" aria-hidden="true"><span data-advisor-progress></span></div>
      <div class="advisor-messages" data-advisor-messages role="log" aria-live="polite"></div>
      <div class="advisor-options" data-advisor-options></div>
    </section>`;
  document.body.append(root);
  return root;
};

const advisorRoot = document.querySelector("[data-project-advisor]") ?? createProjectAdvisor();

if (advisorRoot) {
  const advisorPanel = advisorRoot.querySelector("[data-advisor-panel]");
  const advisorMessages = advisorRoot.querySelector("[data-advisor-messages]");
  const advisorOptions = advisorRoot.querySelector("[data-advisor-options]");
  const advisorProgress = advisorRoot.querySelector("[data-advisor-progress]");
  const advisorLauncher = advisorRoot.querySelector(".advisor-launcher");
  const advisorOpenButtons = advisorRoot.querySelectorAll("[data-advisor-open]");
  const advisorClose = advisorRoot.querySelector("[data-advisor-close]");
  const advisorRestart = advisorRoot.querySelector("[data-advisor-restart]");
  const advisorContent = {
    en: {
      ui: { root: "AI project advisor", open: "Open AI project advisor", notification: "1 new message", close: "Minimize advisor", assistant: "42 Craft Assistant", title: "AI Project Advisor", restart: "Restart", options: "Answer options" },
      greeting: "Hello! I am happy to help you find the package that fits your project.",
      questions: [
        { id: "project", text: "Is this a new website or a redesign?", options: [["new", "A new website"], ["redesign", "Redesign an existing website"], ["unsure", "I am not sure yet"]] },
        { id: "pages", text: "How much content do you expect?", options: [["small", "1-5 pages"], ["medium", "6-10 pages"], ["large", "11-15 pages"], ["unsure", "I am not sure yet"]] },
        { id: "goal", text: "What should your website achieve first?", options: [["leads", "Gain new inquiries"], ["presence", "Build a professional presence"], ["sales", "Sell products or services"], ["automation", "Automate inquiries"]] },
        { id: "features", text: "Which additional function matters most?", options: [["booking", "Booking or newsletter"], ["ai", "AI chatbot and automation"], ["integration", "CRM or API integration"], ["none", "No special function"]] },
        { id: "seo", text: "Should keyword research and a blog or guide support your Google visibility?", options: [["yes", "Yes, that is important"], ["no", "SEO basics are enough"], ["unsure", "Please recommend it"]] },
        { id: "care", text: "How much ongoing hosting and care would you like?", options: [["basic", "Hosting Basic"], ["care", "Care"], ["plus", "Care Plus"], ["unsure", "Not sure yet"]] },
        { id: "timeline", text: "When would you like to launch?", options: [["fast", "In 1-2 weeks"], ["month", "In 2-4 weeks"], ["later", "Later"], ["open", "No fixed date"]] }
      ],
      labels: { title: "Our recommendation", project: "Starting point", goal: "Goal", pages: "Structure", functions: "Functions", seo: "SEO", website: "Website package", care: "Hosting & care", timeline: "Timing", answers: "View your answers", change: "Change an answer", choose: "Which answer would you like to change?", copy: "Copy result", copied: "Copied", contact: "Start inquiry" },
      packageNames: { starter: "Starter Website · from €1,000", company: "Company Website · from €2,100", custom: "Custom Website · from €4,000" },
      careNames: { basic: "Hosting Basic · €19 / month", care: "Care · €59 / month", plus: "Care Plus · €119 / month" },
      packageReasons: { starter: "A focused scope gives you a professional website without unnecessary extras.", company: "The stronger structure and SEO foundation support visibility and new inquiries.", custom: "The larger scope is suited to custom functions, integrations, or automation." },
      functionFallback: "Contact form and SEO foundations",
      seoFunction: "Keyword research and guide section",
      summaryIntro: "Based on your answers, this combination is the best fit:"
    },
    de: {
      ui: { root: "KI-Projektberater", open: "KI-Projektberater öffnen", notification: "1 neue Nachricht", close: "Berater zuklappen", assistant: "42 Craft Assistent", title: "KI-Projektberater", restart: "Neu starten", options: "Antwortmöglichkeiten" },
      greeting: "Hallo! Ich helfe Ihnen gerne dabei, das passende Paket für Ihr Projekt zu finden.",
      questions: [
        { id: "project", text: "Geht es um eine neue Website oder einen Relaunch?", options: [["new", "Eine neue Website"], ["redesign", "Eine bestehende Website erneuern"], ["unsure", "Noch nicht sicher"]] },
        { id: "pages", text: "Wie viele Inhalte erwarten Sie ungefähr?", options: [["small", "1-5 Seiten"], ["medium", "6-10 Seiten"], ["large", "11-15 Seiten"], ["unsure", "Noch nicht sicher"]] },
        { id: "goal", text: "Was soll Ihre Website vor allem erreichen?", options: [["leads", "Neue Anfragen gewinnen"], ["presence", "Professionell auftreten"], ["sales", "Produkte oder Leistungen verkaufen"], ["automation", "Anfragen automatisieren"]] },
        { id: "features", text: "Welche zusätzliche Funktion ist am wichtigsten?", options: [["booking", "Terminbuchung oder Newsletter"], ["ai", "KI-Chatbot und Automatisierung"], ["integration", "CRM- oder API-Anbindung"], ["none", "Keine besondere Funktion"]] },
        { id: "seo", text: "Sollen Keyword-Recherche und ein Blog oder Ratgeber Ihre Google-Sichtbarkeit unterstützen?", options: [["yes", "Ja, das ist wichtig"], ["no", "SEO-Grundlagen reichen"], ["unsure", "Bitte empfehlen"]] },
        { id: "care", text: "Wie viel laufendes Hosting und Betreuung wünschen Sie?", options: [["basic", "Hosting Basic"], ["care", "Care"], ["plus", "Care Plus"], ["unsure", "Noch nicht sicher"]] },
        { id: "timeline", text: "Wann möchten Sie ungefähr starten?", options: [["fast", "In 1-2 Wochen"], ["month", "In 2-4 Wochen"], ["later", "Später"], ["open", "Noch kein fester Termin"]] }
      ],
      labels: { title: "Unsere Empfehlung", project: "Ausgangslage", goal: "Ziel", pages: "Struktur", functions: "Funktionen", seo: "SEO", website: "Website-Paket", care: "Hosting & Betreuung", timeline: "Zeitraum", answers: "Ihre Antworten ansehen", change: "Antwort ändern", choose: "Welche Antwort möchten Sie ändern?", copy: "Ergebnis kopieren", copied: "Kopiert", contact: "Anfrage starten" },
      packageNames: { starter: "Starter-Website · ab 1.000 €", company: "Unternehmenswebsite · ab 2.100 €", custom: "Individuelle Website · ab 4.000 €" },
      careNames: { basic: "Hosting Basic · 19 € / Monat", care: "Care · 59 € / Monat", plus: "Care Plus · 119 € / Monat" },
      packageReasons: { starter: "Der überschaubare Umfang ermöglicht einen professionellen Auftritt ohne unnötige Extras.", company: "Die stärkere Seitenstruktur und SEO-Basis unterstützen Sichtbarkeit und neue Anfragen.", custom: "Der größere Umfang eignet sich für individuelle Funktionen, Anbindungen oder Automatisierungen." },
      functionFallback: "Kontaktformular und SEO-Grundlagen",
      seoFunction: "Keyword-Recherche und Ratgeberbereich",
      summaryIntro: "Auf Basis Ihrer Antworten passt diese Kombination am besten:"
    }
  };
  let advisorStep = 0;
  let advisorAnswers = {};
  let advisorBriefing = "";
  let advisorEditQuestionId = null;

  const getAdvisorCopy = () => advisorContent[currentLanguage] ?? advisorContent.en;
  const syncAdvisorUi = () => {
    const ui = getAdvisorCopy().ui;
    advisorRoot.setAttribute("aria-label", ui.root);
    advisorLauncher.setAttribute("aria-label", ui.open);
    advisorRoot.querySelector("[data-advisor-notification]")?.setAttribute("aria-label", ui.notification);
    advisorClose.setAttribute("aria-label", ui.close);
    advisorRoot.querySelector("[data-advisor-assistant]").textContent = ui.assistant;
    advisorRoot.querySelector("[data-advisor-title]").textContent = ui.title;
    advisorRestart.textContent = ui.restart;
    advisorOptions.setAttribute("aria-label", ui.options);
  };
  const getAdvisorOptionLabel = (questionId, value) => {
    const question = getAdvisorCopy().questions.find((item) => item.id === questionId);
    return question?.options.find((option) => option[0] === value)?.[1] ?? value;
  };
  const getAdvisorQuestionLabel = (questionId) => {
    const labelKey = questionId === "features" ? "functions" : questionId;
    return getAdvisorCopy().labels[labelKey] ?? questionId;
  };

  const appendAdvisorBubble = (text, type = "bot") => {
    const bubble = document.createElement("p");
    bubble.className = `advisor-bubble ${type}`;
    bubble.textContent = text;
    advisorMessages.append(bubble);
    advisorMessages.scrollTop = advisorMessages.scrollHeight;
  };

  const recommendWebsitePackage = () => {
    if (["large"].includes(advisorAnswers.pages) || ["ai", "integration"].includes(advisorAnswers.features) || advisorAnswers.goal === "automation") {
      return "custom";
    }
    if (advisorAnswers.pages === "medium" || advisorAnswers.goal === "leads" || advisorAnswers.seo === "yes" || advisorAnswers.features === "booking") {
      return "company";
    }
    return "starter";
  };

  const recommendCarePackage = (websitePackage) => {
    const names = getAdvisorCopy().careNames;
    if (advisorAnswers.care !== "unsure") {
      return names[advisorAnswers.care];
    }
    return websitePackage === "custom" ? names.plus : websitePackage === "company" ? names.care : names.basic;
  };

  const copyAdvisorBriefing = async (button) => {
    try {
      await navigator.clipboard.writeText(advisorBriefing);
    } catch {
      const field = document.createElement("textarea");
      field.value = advisorBriefing;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    const original = button.textContent;
    button.textContent = getAdvisorCopy().labels.copied;
    window.setTimeout(() => { button.textContent = original; }, 1200);
  };

  const showAdvisorSummary = () => {
    const copy = getAdvisorCopy();
    const websitePackage = recommendWebsitePackage();
    const carePackage = recommendCarePackage(websitePackage);
    const functions = [];
    if (advisorAnswers.features !== "none") functions.push(getAdvisorOptionLabel("features", advisorAnswers.features));
    if (advisorAnswers.seo === "yes") functions.push(copy.seoFunction);
    if (!functions.length) functions.push(copy.functionFallback);
    const values = [
      [copy.labels.project, getAdvisorOptionLabel("project", advisorAnswers.project)],
      [copy.labels.goal, getAdvisorOptionLabel("goal", advisorAnswers.goal)],
      [copy.labels.pages, getAdvisorOptionLabel("pages", advisorAnswers.pages)],
      [copy.labels.functions, functions.join(", ")],
      [copy.labels.seo, getAdvisorOptionLabel("seo", advisorAnswers.seo)],
      [copy.labels.website, copy.packageNames[websitePackage]],
      [copy.labels.care, carePackage],
      [copy.labels.timeline, getAdvisorOptionLabel("timeline", advisorAnswers.timeline)]
    ];
    const summary = document.createElement("article");
    summary.className = "advisor-bubble bot advisor-summary";
    const intro = document.createElement("strong");
    intro.textContent = copy.labels.title;
    const recommendation = document.createElement("div");
    recommendation.className = "advisor-recommendation";
    const recommendedWebsite = document.createElement("strong");
    recommendedWebsite.textContent = copy.packageNames[websitePackage];
    const recommendedCare = document.createElement("span");
    recommendedCare.textContent = `${copy.labels.care}: ${carePackage}`;
    recommendation.append(recommendedWebsite, recommendedCare);
    const reason = document.createElement("p");
    reason.className = "advisor-recommendation-reason";
    reason.textContent = copy.packageReasons[websitePackage];
    const list = document.createElement("dl");
    values.filter(([term]) => ![copy.labels.website, copy.labels.care].includes(term)).forEach(([term, description]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = description;
      list.append(dt, dd);
    });
    const answerReview = document.createElement("details");
    answerReview.className = "advisor-answer-review";
    const answerReviewLabel = document.createElement("summary");
    answerReviewLabel.textContent = copy.labels.answers;
    answerReview.append(answerReviewLabel, list);
    const actions = document.createElement("div");
    actions.className = "advisor-summary-actions";
    const changeButton = document.createElement("button");
    changeButton.type = "button";
    changeButton.textContent = copy.labels.change;
    changeButton.addEventListener("click", showAdvisorEditMenu);
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.textContent = copy.labels.copy;
    copyButton.addEventListener("click", () => copyAdvisorBriefing(copyButton));
    const contactLink = document.createElement("a");
    contactLink.href = `contact.html?lang=${currentLanguage}`;
    contactLink.textContent = copy.labels.contact;
    actions.append(changeButton, copyButton, contactLink);
    summary.append(intro, recommendation, reason, answerReview, actions);
    advisorMessages.append(summary);
    advisorOptions.replaceChildren();
    advisorProgress.style.width = "100%";
    advisorBriefing = [copy.labels.title, ...values.map(([term, description]) => `${term}: ${description}`)].join("\n");
    advisorMessages.scrollTop = advisorMessages.scrollHeight;
  };

  const showAdvisorEditMenu = () => {
    const copy = getAdvisorCopy();
    advisorMessages.replaceChildren();
    advisorOptions.replaceChildren();
    appendAdvisorBubble(copy.labels.choose);
    copy.questions.forEach((question) => {
      const option = document.createElement("button");
      option.className = "advisor-option advisor-edit-option";
      option.type = "button";
      option.textContent = getAdvisorQuestionLabel(question.id);
      option.addEventListener("click", () => {
        advisorEditQuestionId = question.id;
        advisorMessages.replaceChildren();
        advisorOptions.replaceChildren();
        showAdvisorQuestion(question);
      });
      advisorOptions.append(option);
    });
  };

  const showAdvisorQuestion = (questionOverride = null) => {
    const question = questionOverride ?? getAdvisorCopy().questions[advisorStep];
    if (!question) {
      showAdvisorSummary();
      return;
    }
    appendAdvisorBubble(question.text);
    advisorOptions.replaceChildren();
    question.options.forEach(([value, label]) => {
      const option = document.createElement("button");
      option.className = "advisor-option";
      option.type = "button";
      option.textContent = label;
      option.addEventListener("click", () => {
        advisorAnswers[question.id] = value;
        appendAdvisorBubble(label, "user");
        advisorOptions.replaceChildren();
        if (advisorEditQuestionId) {
          advisorEditQuestionId = null;
          advisorMessages.replaceChildren();
          window.setTimeout(showAdvisorSummary, 180);
          return;
        }
        advisorStep += 1;
        advisorProgress.style.width = `${(advisorStep / getAdvisorCopy().questions.length) * 100}%`;
        window.setTimeout(showAdvisorQuestion, 180);
      });
      advisorOptions.append(option);
    });
  };

  const restartAdvisor = () => {
    advisorStep = 0;
    advisorAnswers = {};
    advisorBriefing = "";
    advisorEditQuestionId = null;
    advisorMessages.replaceChildren();
    advisorOptions.replaceChildren();
    advisorProgress.style.width = "0%";
    appendAdvisorBubble(getAdvisorCopy().greeting);
    showAdvisorQuestion();
  };

  const openAdvisor = () => {
    advisorRoot.classList.add("is-open");
    advisorRoot.classList.add("has-opened");
    advisorPanel.hidden = false;
    advisorLauncher.setAttribute("aria-expanded", "true");
    if (!advisorMessages.childElementCount) restartAdvisor();
    advisorClose.focus();
  };

  const closeAdvisor = () => {
    advisorRoot.classList.remove("is-open");
    advisorPanel.hidden = true;
    advisorLauncher.setAttribute("aria-expanded", "false");
    advisorLauncher.focus();
  };

  advisorOpenButtons.forEach((button) => button.addEventListener("click", openAdvisor));
  advisorClose.addEventListener("click", closeAdvisor);
  advisorRestart.addEventListener("click", restartAdvisor);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !advisorPanel.hidden) closeAdvisor();
  });
  syncProjectAdvisorLanguage = () => {
    syncAdvisorUi();
    if (advisorMessages.childElementCount) restartAdvisor();
  };
  syncAdvisorUi();
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const honeypot = form.querySelector('input[name="website"]');

  if (honeypot?.value) {
    formStatus.textContent = "";
    form.reset();
    return;
  }

  if (!form.checkValidity()) {
    formStatus.textContent = currentLanguage === "de" ? "Bitte füllen Sie vor dem Senden alle Pflichtfelder aus." : "Please complete the required fields before sending.";
    form.reportValidity();
    return;
  }

  formStatus.textContent = currentLanguage === "de" ? "Das Formular ist noch nicht verbunden. Schreiben Sie uns bitte an [EMAIL]." : "The form is not connected yet. Please email us at [EMAIL].";
  form.reset();
});
