
AOS.init();

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Control the visibility of the "Why Us" section
    const whyUsSection = document.getElementById('why-us');
    if (sectionId === 'home') {
        whyUsSection.style.display = 'block';
    } else {
        whyUsSection.style.display = 'none';
    }
}



// Show home section by default
window.onload = function() {
    showSection('home');
}

// Fonction pour changer la langue uniquement pour les sections Accueil et Why Us
function changeLanguageForHomeAndWhyUs(lang) {
    const elements = document.querySelectorAll('#home [data-translate], #why-us [data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// Fonction pour changer la langue pour le reste du site
function changeLanguageForRest(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.innerText = translations[lang][key];
    });
}

// Appel des deux fonctions si besoin
function changeLanguage(lang) {
    changeLanguageForHomeAndWhyUs(lang);
    changeLanguageForRest(lang);
}





const translations = {
    fr: {
        "nav-brand": "WebSnape by Yvan",
        "nav-home": "Accueil",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "home-title": "Transformez vos idées en sites web captivants",
        "home-description": "WebSnape by Yvan crée des sites web sur mesure pour entreprises, portfolios et plus encore.",
        "home-button": "Découvrez nos services",
        "why-title": "Pourquoi choisir WebSnape ?",
        "why-description": "Découvrez ce qui fait de WebSnape par Yvan votre meilleur partenaire pour tous vos besoins en création de sites web.",
        "why-client": "Proximité avec le client et communication",
        "why-client-description": "Chez WebSnape, nous croyons en une communication amicale et respectueuse. Nous sommes à vos côtés à chaque étape pour vous offrir un service personnalisé.",
        "why-flexibility": "Flexibilité des fonctionnalités",
        "why-flexibility-description": "Vous avez le contrôle total sur les fonctionnalités de votre site. Ajoutez ou retirez des options selon vos besoins. Le client est roi chez WebSnape.",
        "why-design": "Personnalisation et design unique",
        "why-design-description": "Imaginez votre propre design ou décrivez-le-nous, et nous vous livrerons une page web parfaitement adaptée à vos attentes, avec un délai de traitement rapide.",
        "why-scalability": "Évolutivité de votre site",
        "why-scalability-description": "Si votre entreprise se développe, nous pouvons intégrer des fonctionnalités plus poussées pour répondre à vos nouveaux besoins.",
        "why-ownership": "Propriété totale du code",
        "why-ownership-description": "Vous êtes le propriétaire de votre site, sans aucune location. WebSnape gère l'hébergement, la sécurité, et reste disponible pour toute amélioration.",
        "why-partner": "Votre partenaire idéal",
        "why-partner-description": "WebSnape est le partenaire idéal pour vous accompagner dans votre aventure numérique, en vous offrant un service sur mesure et un support continu.",
        "why-contact-button": "Contactez-nous dès aujourd'hui",
        "services-button": "Découvrez nos services",
        "services-title": "Nos Services",
        "services-title-1": "Sites Web Professionnels",
        "services-description-1": "Nous concevons des sites pour les entreprises de toutes tailles, avec une attention particulière aux détails et à l'expérience utilisateur.",
        "services-title-2": "Portfolios Personnels",
        "services-description-2": "Présentez vos talents avec un portfolio en ligne élégant et personnalisé.",
        "services-title-3": "Sites Familiaux",
        "services-description-3": "Créez une galerie numérique de souvenirs pour les générations à venir.",
        "expertise-title": "Votre design, notre expertise",
        "additional-features-title": "Fonctionnalités Avancées",
        "additional-features-description": "Enrichissez votre site avec des fonctionnalités telles que l'intégration d'un calendrier en ligne pour gérer les réservations, la mise en place de systèmes de réservation en ligne, la création de formulaires de contact personnalisés, le paiement en ligne via PayPal, la configuration d'options de création de compte, et bien plus encore. Explorez ce qui est possible pour répondre aux besoins spécifiques de votre entreprise.",
        "expertise-description": "Envoyez-nous votre esquisse sur papier, nous nous occupons du reste. Avec WebSnape by Yvan, votre site est façonné selon vos désirs.",
        "portfolio-title": "Notre Portfolio",
        "portfolio-shop-title": "Boutiques en ligne pour vos entreprises",
        "demo-alert": "Ces sites sont des maquettes démonstratives. Les fonctionnalités seront ajoutées en fonction des besoins de chaque client. N'hésitez pas à y jeter un œil pour voir ce qui est possible !",
        "portfolio-shop-description": "Nous créons des boutiques en ligne modernes et fonctionnelles, adaptées à toutes les tailles d'entreprise.",
        "shop-item-1-title": "Page en ligne d'un restaurant",
        "shop-item-1-description": "Un site en ligne permettant aux petites entreprises de présenter leurs services.",
        "shop-item-2-title": "Page en ligne d'un commerce de pâtisserie",
        "shop-item-2-description": "Un site en ligne permettant aux petites entreprises ou particuliers de présenter leurs produits sur une page moderne.",
        "shop-item-3-title": "Page en ligne d'un Salon de coiffure",
        "shop-item-3-description": "Un site en ligne présentant un salon et les différents modèles disponibles.",
        "shop-item-4-title": "Page en ligne d'une boutique de téléphones",
        "shop-item-4-description": "Un site en ligne parfait pour du E-Commerce de téléphone.",
        "shop-item-5-title": "Exemple d'une page en ligne plus avancée",
        "shop-item-5-description": "Un site en ligne réservé aux business plus grands et demandant plus de fonctionnalités.",
        "portfolio-title-2": "Portfolios pour vos demandes d'emploi",
        "portfolio-description-2": "Impressionnez vos employeurs potentiels avec un portfolio en ligne élégant et personnalisé.",
        "portfolio-item-1-title": "Portfolio pour un étudiant en informatique",
        "portfolio-item-1-description": "Un site web osé et futuriste.",
        "portfolio-item-2-title": "Portfolio pour un étudiant en électrotechnique",
        "portfolio-item-2-description": "Un site web professionnel et sobre.",
        "portfolio-item-3-title": "Portfolio pour une étudiante en économie",
        "portfolio-item-3-description": "Un site web moderne et attrayant.",
        "family-title": "Pages familiales pour conserver vos souvenirs",
        "family-description": "Conservez vos souvenirs précieux avec des pages familiales dédiées.",
        "family-item-1-title": "Page familiale",
        "family-item-1-description": "Un site personnalisé pour conserver les souvenirs familiaux.",
        "faq-title": "Foire Aux Questions (FAQ)",
        "faq-question-1": "Quels types de sites web proposez-vous ?",
        "faq-answer-1": "Nous proposons une large gamme de sites web.",
        "faq-question-2": "Est-ce que je possède le site une fois acheté ?",
        "faq-answer-2": "Oui, une fois acheté, le site vous appartient à vie.",
        "faq-question-3": "Puis-je demander des modifications après la livraison du site ?",
        "faq-answer-3": "Absolument ! Nous sommes à votre écoute.",
        "faq-question-4": "Combien de temps faut-il pour créer un site web ?",
        "faq-answer-4": "Le délai de création dépend de la complexité.",
        "faq-question-5": "Quels sont vos tarifs ?",
        "faq-answer-5": "Nos tarifs varient en fonction des besoins spécifiques.",
        "contact-title": "Contactez-nous",
        "contact-name": "Nom",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Envoyer",
        "contact-whatsapp": "Contacter via WhatsApp",
        "footer-rights": "Tous droits réservés.",
        "footer-created": "Conçu par"
    },
    en: {
        "nav-brand": "WebSnape by Yvan",
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "home-title": "Transform your ideas into captivating websites",
        "home-description": "WebSnape by Yvan creates custom websites for businesses, portfolios, and more.",
        "home-button": "Discover our services",
        "why-title": "Why choose WebSnape?",
        "why-description": "Discover what makes WebSnape by Yvan your best partner for all your web creation needs.",
        "why-client": "Client Proximity and Communication",
        "why-client-description": "At WebSnape, we believe in friendly and respectful communication. We stand by your side at every step to provide a personalized service.",
        "why-flexibility": "Flexibility of Features",
        "why-flexibility-description": "You have complete control over your website’s features. Add or remove options according to your needs. At WebSnape, the client is king.",
        "why-design": "Personalization and Unique Design",
        "why-design-description": "Imagine your own design or describe it to us, and we will deliver a perfectly tailored webpage to meet your expectations with a quick turnaround time.",
        "why-scalability": "Scalability of Your Site",
        "why-scalability-description": "As your business grows, we can integrate more advanced features to meet your new needs.",
        "why-ownership": "Full Code Ownership",
        "why-ownership-description": "You own your site without any rental. WebSnape handles hosting, security, and remains available for any improvements.",
        "why-partner": "Your Ideal Partner",
        "why-partner-description": "WebSnape is the ideal partner to support you in your digital journey, offering customized services and continuous support.",
        "why-contact-button": "Contact us today",
        "services-button": "Discover our services",
        "services-title": "Our Services",
        "services-title-1": "Professional Websites",
        "services-description-1": "We design sites for businesses of all sizes, with a special focus on details and user experience.",
        "services-title-2": "Personal Portfolios",
        "services-description-2": "Showcase your talents with an elegant and personalized online portfolio.",
        "services-title-3": "Family Websites",
        "services-description-3": "Create a digital gallery of memories for generations to come.",
        "expertise-title": "Your design, our expertise",
        "expertise-description": "Send us your sketch on paper, and we'll take care of the rest.",
        "additional-features-title": "Advanced Features",
        "additional-features-description": "Enhance your site with features such as online calendar integration for managing reservations, setting up online booking systems, creating custom contact forms, implementing online payments via PayPal, configuring account creation options, and much more. Discover what's possible to meet your business's specific needs.",
        "additional-features-description": "Enhance your site with features such as integrating an online calendar to manage bookings, implementing online reservation systems, creating custom contact forms, setting up online payments via PayPal, configuring account creation options, and much more. Explore what's possible to meet your business's specific needs.",
        "portfolio-title": "Our Portfolio",
        "portfolio-shop-title": "Online Shops for Your Business",
        "portfolio-shop-description": "We create modern and functional online shops tailored to businesses of all sizes.",
        "demo-alert": "These websites are demonstration mockups. Features will be added according to each client's needs. Feel free to take a look to see what’s possible!",
        "shop-item-1-title": "Online Restaurant Page",
        "shop-item-1-description": "An online site allowing small businesses to showcase their services.",
        "shop-item-2-title": "Online Pastry Shop Page",
        "shop-item-2-description": "An online site allowing small businesses or individuals to showcase their products.",
        "shop-item-3-title": "Online Hair Salon Page",
        "shop-item-3-description": "An online site presenting a salon and available models.",
        "shop-item-4-title": "Online Phone Store Page",
        "shop-item-4-description": "A perfect e-commerce site for phones.",
        "shop-item-5-title": "Advanced Online Shop Example",
        "shop-item-5-description": "A site for larger businesses with more features.",
        "portfolio-title-2": "Portfolios for Job Applications",
        "portfolio-description-2": "Impress potential employers with a sleek online portfolio.",
        "portfolio-item-1-title": "Portfolio for a Computer Science Student",
        "portfolio-item-1-description": "A bold and futuristic website.",
        "portfolio-item-2-title": "Portfolio for an Electrical Engineering Student",
        "portfolio-item-2-description": "A professional and sober website.",
        "portfolio-item-3-title": "Portfolio for an Economics Student",
        "portfolio-item-3-description": "A modern and attractive website.",
        "family-title": "Family Pages to Preserve Your Memories",
        "family-description": "Preserve your precious memories with dedicated family pages.",
        "family-item-1-title": "Family Page",
        "family-item-1-description": "A personalized site to keep family memories online.",
        "faq-title": "Frequently Asked Questions (FAQ)",
        "faq-question-1": "What types of websites do you offer?",
        "faq-answer-1": "We offer a wide range of websites.",
        "faq-question-2": "Do I own the site once purchased?",
        "faq-answer-2": "Yes, once purchased, the site is yours for life.",
        "faq-question-3": "Can I request changes after delivery?",
        "faq-answer-3": "Absolutely! We are here to help.",
        "faq-question-4": "How long does it take to create a website?",
        "faq-answer-4": "The timeline depends on the complexity.",
        "faq-question-5": "What are your rates?",
        "faq-answer-5": "Our rates vary based on specific needs.",
        "contact-title": "Contact Us",
        "contact-name": "Name",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Send",
        "contact-whatsapp": "Contact via WhatsApp",
        "footer-rights": "All rights reserved.",
        "footer-created": "Designed by"
    },
    de: {
        "nav-brand": "WebSnape by Yvan",
        "nav-home": "Startseite",
        "nav-services": "Dienstleistungen",
        "nav-portfolio": "Portfolio",
        "nav-faq": "FAQ",
        "nav-contact": "Kontakt",
        "home-title": "Verwandeln Sie Ihre Ideen in fesselnde Websites",
        "home-description": "WebSnape by Yvan erstellt maßgeschneiderte Websites für Unternehmen, Portfolios und mehr.",
         "home-button": "Entdecken Sie unsere Dienstleistungen",
        "why-title": "Warum WebSnape wählen?",
        "why-description": "Entdecken Sie, was WebSnape von Yvan zu Ihrem besten Partner für alle Ihre Bedürfnisse bei der Webseitenerstellung macht.",
        "why-client": "Kundennähe und Kommunikation",
        "why-client-description": "Bei WebSnape glauben wir an freundliche und respektvolle Kommunikation. Wir stehen Ihnen in jeder Phase zur Seite, um Ihnen einen personalisierten Service zu bieten.",
        "why-flexibility": "Flexibilität der Funktionen",
        "why-flexibility-description": "Sie haben die volle Kontrolle über die Funktionen Ihrer Website. Fügen Sie Optionen hinzu oder entfernen Sie sie je nach Bedarf. Bei WebSnape ist der Kunde König.",
        "why-design": "Personalisierung und einzigartiges Design",
        "why-design-description": "Stellen Sie sich Ihr eigenes Design vor oder beschreiben Sie es uns, und wir liefern Ihnen eine perfekt auf Ihre Erwartungen zugeschnittene Webseite mit kurzer Bearbeitungszeit.",
        "why-scalability": "Skalierbarkeit Ihrer Website",
        "why-scalability-description": "Wenn Ihr Unternehmen wächst, können wir erweiterte Funktionen integrieren, um Ihren neuen Anforderungen gerecht zu werden.",
        "why-ownership": "Volles Eigentum am Code",
        "why-ownership-description": "Sie besitzen Ihre Website ohne jegliche Miete. WebSnape kümmert sich um das Hosting, die Sicherheit und steht Ihnen für Verbesserungen zur Verfügung.",
        "why-partner": "Ihr idealer Partner",
        "why-partner-description": "WebSnape ist der ideale Partner, um Sie auf Ihrer digitalen Reise zu begleiten, maßgeschneiderte Dienstleistungen und kontinuierliche Unterstützung anzubieten.",
        "why-contact-button": "Kontaktieren Sie uns noch heute",
        "services-button": "Entdecken Sie unsere Dienstleistungen",
        "services-title": "Unsere Dienstleistungen",
        "services-title-1": "Professionelle Websites",
        "services-description-1": "Wir entwerfen Websites für Unternehmen jeder Größe, mit besonderem Augenmerk auf Details und Benutzererfahrung.",
        "services-title-2": "Persönliche Portfolios",
        "services-description-2": "Präsentieren Sie Ihre Talente mit einem eleganten und individuellen Online-Portfolio.",
        "services-title-3": "Familien-Websites",
        "services-description-3": "Erstellen Sie eine digitale Galerie von Erinnerungen für kommende Generationen.",
        "additional-features-title": "Erweiterte Funktionen",
       "additional-features-description": "Bereichern Sie Ihre Website mit Funktionen wie der Integration eines Online-Kalenders zur Verwaltung von Reservierungen, der Einrichtung von Online-Buchungssystemen, der Erstellung benutzerdefinierter Kontaktformulare, der Implementierung von Online-Zahlungen über PayPal, der Konfiguration von Kontoerstellungsoptionen und vielem mehr. Entdecken Sie, was möglich ist, um den spezifischen Anforderungen Ihres Unternehmens gerecht zu werden.",
        "additional-features-description": "Erweitern Sie Ihre Website mit Funktionen wie der Integration eines Online-Kalenders zur Verwaltung von Buchungen, der Implementierung von Online-Reservierungssystemen, der Erstellung benutzerdefinierter Kontaktformulare, der Einrichtung von Online-Zahlungen über PayPal, der Konfiguration von Kontoerstellungsoptionen und vielem mehr. Entdecken Sie, was möglich ist, um die spezifischen Bedürfnisse Ihres Unternehmens zu erfüllen.",
        "expertise-title": "Ihr Design, unsere Expertise",
        "demo-alert": "Diese Websites sind Demonstrationsmuster. Funktionen werden je nach den Bedürfnissen jedes Kunden hinzugefügt. Schauen Sie doch mal vorbei, um zu sehen, was möglich ist!",
        "expertise-description": "Schicken Sie uns Ihre Skizze auf Papier, wir kümmern uns um den Rest.",
        "portfolio-title": "Unser Portfolio",
        "portfolio-shop-title": "Online-Shops für Ihr Unternehmen",
        "portfolio-shop-description": "Wir erstellen moderne und funktionale Online-Shops, die auf Unternehmen jeder Größe zugeschnitten sind.",
        "shop-item-1-title": "Online-Restaurantseite",
        "shop-item-1-description": "Eine Online-Site für die Präsentation Ihrer Dienstleistungen.",
        "shop-item-2-title": "Online-Seite für ein Patisserie-Geschäft",
        "shop-item-2-description": "Hier können Sie uns Ihre schöne Kuchen zeigen.",
        "shop-item-3-title": "Online-Seite für einen Friseursalon",
        "shop-item-3-description": "Eine Online-Site, die einen Salon und die verfügbaren Modelle präsentiert.",
        "shop-item-4-title": "Online-Seite für ein Telefon-Geschäft",
        "shop-item-4-description": "Eine perfekte E-Commerce-Site für Telefone.",
        "shop-item-5-title": "Erweitertes Online-Shop-Beispiel",
        "shop-item-5-description": "Eine Site für größere Unternehmen mit mehr Funktionen.",
        "portfolio-title-2": "Portfolios für Ihre Bewerbung",
        "portfolio-description-2": "Beeindrucken Sie potenzielle Arbeitgeber mit einem eleganten Online-Portfolio.",
        "portfolio-item-1-title": "Portfolio für einen Informatikstudenten",
        "portfolio-item-1-description": "Eine gewagte und futuristische Website.",
        "portfolio-item-2-title": "Portfolio für einen Elektrotechnik-Studenten",
        "portfolio-item-2-description": "Eine professionelle und schlichte Website.",
        "portfolio-item-3-title": "Portfolio für eine Wirtschaftsstudentin",
        "portfolio-item-3-description": "Eine moderne und ansprechende Website.",
        "family-title": "Familienseiten zur Bewahrung Ihrer Erinnerungen",
        "family-description": "Bewahren Sie Ihre wertvollen Erinnerungen mit speziellen Familienseiten auf.",
        "family-item-1-title": "Familienseite",
        "family-item-1-description": "Eine personalisierte Website, um Familienerinnerungen online zu bewahren.",
        "faq-title": "Häufig gestellte Fragen (FAQ)",
        "faq-question-1": "Welche Arten von Websites bieten Sie an?",
        "faq-answer-1": "Wir bieten eine breite Palette von Websites an.",
        "faq-question-2": "Gehört mir die Seite, wenn ich sie gekauft habe?",
        "faq-answer-2": "Ja, sobald gekauft, gehört die Seite Ihnen lebenslang.",
        "faq-question-3": "Kann ich Änderungen nach der Lieferung anfordern?",
        "faq-answer-3": "Absolut! Wir sind hier, um zu helfen.",
        "faq-question-4": "Wie lange dauert die Erstellung einer Website?",
        "faq-answer-4": "Der Zeitrahmen hängt von der Komplexität ab.",
        "faq-question-5": "Was sind Ihre Tarife?",
        "faq-answer-5": "Unsere Tarife variieren je nach spezifischen Bedürfnissen.",
        "contact-title": "Kontaktieren Sie uns",
        "contact-name": "Name",
        "contact-email": "Email",
        "contact-message": "Nachricht",
        "contact-submit": "Senden",
        "contact-whatsapp": "Kontakt via WhatsApp",
        "footer-rights": "Alle Rechte vorbehalten.",
        "footer-created": "Entworfen von"
    }
};


