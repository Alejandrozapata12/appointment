// Internationalization (i18n) System
const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      pricing: 'Pricing',
      login: 'Login',
      getStarted: 'Get Started',
      language: 'EN'
    },
    hero: {
      title: 'Streamline Your Schedule with Effortless Booking',
      description: 'The all-in-one platform for admins, staff, and clients to manage appointments efficiently. Say goodbye to scheduling conflicts.',
      bookNow: 'Book Now',
      learnMore: 'Learn More',
      stat1: 'Trusted by 15,000+ professionals',
      stat2: '99.8% uptime'
    },
    features: {
      title: 'Why Choose AppointmentPro?',
      subtitle: 'Comprehensive tools designed to make appointment management seamless for everyone involved.',
      calendar: {
        title: 'Calendar Management',
        description: 'Effortlessly organize your day with our intuitive drag-and-drop calendar interface. Syncs with Google and Outlook.'
      },
      notifications: {
        title: 'Real-time Notifications',
        description: 'Stay updated with instant SMS and Email alerts for new bookings, cancellations, and changes. Never miss a client.'
      },
      staff: {
        title: 'Staff Allocation',
        description: 'Manage team schedules and assign appointments to specific staff members with ease. Track performance and hours.'
      }
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your business needs.',
      popular: 'MOST POPULAR',
      starter: {
        name: 'Starter',
        description: 'Perfect for individuals just starting out.',
        feature1: '1 Admin Account',
        feature2: '5 Unlimited Clients',
        feature3: 'Basic Calendar',
        cta: 'Start Free'
      },
      professional: {
        name: 'Professional',
        description: 'For growing teams needing more power.',
        feature1: '5 Staff Members',
        feature2: 'SMS Reminders',
        feature3: 'Advanced Reporting',
        feature4: 'Google Calendar Sync',
        cta: 'Get Started'
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Full control for large organizations.',
        feature1: 'Unlimited Staff',
        feature2: 'API Access',
        feature3: 'Dedicated Support',
        feature4: 'Custom Integrations',
        cta: 'Contact Sales'
      }
    },
    cta: {
      title: 'Ready to organize your business?',
      description: 'Join thousands of professionals who trust AppointmentPro to manage their time and grow their business.',
      button: 'Start Your Free Trial',
      note: 'No credit card required. Cancel anytime.'
    },
    footer: {
      brand: 'AppointmentPro',
      description: 'Making appointment scheduling effortless for businesses of all sizes. Built with love for productivity.',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      integrations: 'Integrations',
      changelog: 'Changelog',
      company: 'Company',
      about: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      security: 'Security'
    },
    modals: {
      about: {
        title: "About AppointmentPro",
        subtitle: "Built by Alejandro · AlejoDev",
        p1: "This appointment management system was designed and developed by Alejandro, a fullstack developer and creator of the personal brand AlejoDev.",
        p2: "The platform aims to deliver a modern and scalable solution for businesses that require efficient scheduling, including clinics, consulting offices, beauty centers, and reservation-based services.",
        featuresTitle: "Key Features",
        f1: "Scalable architecture with modular structure",
        f2: "Secure authentication with JWT",
        f3: "Clear separation of responsibilities (MVC)",
        f4: "Foundation prepared for SaaS evolution"
      },

      contact: {
        title: "Contact",
        subtitle: "Send a message to Alejandro · AlejoDev",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        button: "Send Message"
      },

      privacy: {
        title: "Privacy Policy",
        p1: "We respect your privacy. All collected information is used solely to improve our services.",
        p2: "We do not share personal data with third parties without your consent. We implement security measures to protect your information.",
        p3: "You may request the deletion of your data at any time.",
        last: "Last updated January 31, 2026",
        respect: "Data Respect & Collection",
        item1: "Account details",
        item2: "Usage preferences",
        item3: "Technical logs",
        sas: "No Third-Party Sharing",
        yours: "Your data is yours. We never sell or trade it.",
        pas1: "✔ Explicit consent",
        pas2: "✔ Legal compliance",
        btn: "I Understand"
      },

      terms: {
        title: "Terms of Service",
        p1: "By using this site, you agree to comply with our rules and conditions.",
        p2: "We reserve the right to modify content and services without prior notice.",
        p3: "Improper use of the platform may result in suspension of access.",
        last: "Last updated January 31, 2026",
        title1: "Service Modification",
        title2: "Improper Use",
        dec: "Decline",
        acept: "Accept & Continue"
      },

      security: {
        title: "Security",
        p1: "We use modern security protocols to protect information.",
        p2: "All transmitted data is encrypted using HTTPS.",
        p3: "We regularly review our systems to prevent vulnerabilities.",
        title2: "Data Encryption",
        title3: "System Monitoring",
        span: "✔ Verified Infrastructure",
        btn: "Got it, thanks" 
      }
    },
    copyright: {
      title: "AppointmentPro © 2026 — Developed by AlejoDev. All rights reserved."
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Acerca de',
      pricing: 'Precios',
      login: 'Iniciar sesión',
      getStarted: 'Comenzar',
      language: 'ES'
    },
    hero: {
      title: 'Agiliza tu Agenda con Reservas sin Esfuerzo',
      description: 'La plataforma todo en uno para que administradores, personal y clientes gestionen citas de manera eficiente. Di adiós a los conflictos de horarios.',
      bookNow: 'Reservar Ahora',
      learnMore: 'Saber Más',
      stat1: 'Confiado por más de 15,000 profesionales',
      stat2: 'Disponibilidad del 99.8%'
    },
    features: {
      title: '¿Por qué elegir AppointmentPro?',
      subtitle: 'Herramientas completas diseñadas para que la gestión de citas sea fácil para todos.',
      calendar: {
        title: 'Gestión de Calendario',
        description: 'Organiza fácilmente tu día con nuestra interfaz intuitiva de calendario de arrastrar y soltar. Se sincroniza con Google y Outlook.'
      },
      notifications: {
        title: 'Notificaciones en Tiempo Real',
        description: 'Mantente actualizado con alertas instantáneas por SMS y correo electrónico para nuevas reservas, cancelaciones y cambios. Nunca pierdas un cliente.'
      },
      staff: {
        title: 'Asignación de Personal',
        description: 'Gestiona los horarios del equipo y asigna citas a miembros específicos del personal con facilidad. Controla el rendimiento y las horas.'
      }
    },
    pricing: {
      title: 'Precios Simples y Transparentes',
      subtitle: 'Elige el plan que se ajuste a las necesidades de tu negocio.',
      popular: 'MÁS POPULAR',
      starter: {
        name: 'Inicio',
        description: 'Perfecto para individuos que recién comienzan.',
        feature1: '1 Cuenta de Administrador',
        feature2: '5 Clientes Ilimitados',
        feature3: 'Calendario Básico',
        cta: 'Comenzar Gratis'
      },
      professional: {
        name: 'Profesional',
        description: 'Para equipos en crecimiento que necesitan más poder.',
        feature1: '5 Miembros del Personal',
        feature2: 'Recordatorios por SMS',
        feature3: 'Reportes Avanzados',
        feature4: 'Sincronización con Google Calendar',
        cta: 'Comenzar'
      },
      enterprise: {
        name: 'Empresa',
        description: 'Control total para organizaciones grandes.',
        feature1: 'Personal Ilimitado',
        feature2: 'Acceso a API',
        feature3: 'Soporte Dedicado',
        feature4: 'Integraciones Personalizadas',
        cta: 'Contactar Ventas'
      }
    },
    cta: {
      title: '¿Listo para organizar tu negocio?',
      description: 'Únete a miles de profesionales que confían en AppointmentPro para gestionar su tiempo y hacer crecer su negocio.',
      button: 'Inicia tu Prueba Gratuita',
      note: 'Sin tarjeta de crédito requerida. Cancela en cualquier momento.'
    },
    footer: {
      brand: 'AppointmentPro',
      description: 'Haciendo que la programación de citas sea fácil para negocios de todos los tamaños. Hecho con amor por la productividad.',
      product: 'Producto',
      features: 'Características',
      pricing: 'Precios',
      integrations: 'Integraciones',
      changelog: 'Cambios',
      company: 'Empresa',
      about: 'Acerca de',
      careers: 'Carreras',
      blog: 'Blog',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      security: 'Seguridad'
    },
    modals: {
      about: {
        title: "Sobre AppointmentPro",
        subtitle: "Creado por Alejandro · AlejoDev",
        p1: "Este sistema de gestión de citas fue diseñado y desarrollado por Alejandro, desarrollador fullstack y creador de la marca personal AlejoDev.",
        p2: "La plataforma busca ofrecer una solución moderna y escalable para negocios que requieren gestión eficiente de agendas como clínicas, consultorios y centros de servicio.",
        featuresTitle: "Características Clave",
        f1: "Arquitectura escalable y modular",
        f2: "Autenticación segura con JWT",
        f3: "Separación clara de responsabilidades (MVC)",
        f4: "Base preparada para evolucionar a SaaS"
      },

      contact: {
        title: "Contacto",
        subtitle: "Envía un mensaje a Alejandro · AlejoDev",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Mensaje",
        button: "Enviar Mensaje"
      },

      privacy: {
        title: "Política de Privacidad",
        p1: "Respetamos tu privacidad. Toda la información recopilada se utiliza únicamente para mejorar nuestros servicios.",
        p2: "No compartimos datos personales sin tu consentimiento. Implementamos medidas de seguridad para proteger tu información.",
        p3: "Puedes solicitar la eliminación de tus datos en cualquier momento.",
        last: "Última actualización: 31 de enero de 2026",
        respect: "Respeto y recopilación de datos",
        item1: "Detalles de la cuenta",
        item2: "Preferencias de uso",
        item3: "Registros técnicos",
        sas: "No compartir con terceros",
        yours: "Tus datos son tuyos. Nunca los vendemos ni intercambiamos.",
        pas1: "✔ Consentimiento explícito",
        pas2: "✔ Cumplimiento legal",
        btn: "Entiendo"
        
      },

      terms: {
        title: "Términos de Servicio",
        p1: "Al usar este sitio aceptas cumplir con nuestras normas y condiciones.",
        p2: "Nos reservamos el derecho de modificar contenidos y servicios sin previo aviso.",
        p3: "El uso indebido de la plataforma puede resultar en la suspensión del acceso.",
        last: "Última actualización: 31 de enero de 2026",
        title1: "Modificación del servicio",
        title2: "Uso Incorrecto",
        dec: "Rechazar",
        acept: "Aceptar y continuar"
      },

      security: {
        title: "Seguridad",
        p1: "Utilizamos protocolos modernos para proteger la información.",
        p2: "Todos los datos transmitidos están cifrados mediante HTTPS.",
        p3: "Revisamos periódicamente nuestros sistemas para prevenir vulnerabilidades.",
        title2: "Cifrado de datos",
        title3: "Monitoreo del sistema",
        span: "✔ Infraestructura verificada",
        btn: "Lo tengo, gracias" 
      }
    },

    copyright: {
      title: "AppointmentPro © 2026 — Desarrollado por AlejoDev. Todos los derechos reservados."
    }
  }
};

// Get nested translation value
function getTranslation(key, lang = getCurrentLanguage()) {
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return value;
}

// Get current language from localStorage or default to 'en'
function getCurrentLanguage() {
  return localStorage.getItem('preferredLanguage') || 'en';
}

// Set language and save to localStorage
function setLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  updatePageLanguage(lang);
}

// Update all translatable elements on the page
function updatePageLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key, lang);

    // Update text content for most elements
    if (element.tagName === 'IMG' || element.tagName === 'INPUT') {
      element.setAttribute('alt', translation);
    } else {
      element.textContent = translation;
    }
  });

  // Update language badge in nav
  const langBadge = document.querySelector('[data-i18n="nav.language"]');
  if (langBadge) {
    langBadge.textContent = lang.toUpperCase();
  }

  // Update document lang attribute
  document.documentElement.lang = lang;
}

// Initialize language system on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();

  // Set initial language
  updatePageLanguage(currentLang);

  // Add event listeners to language buttons
  const langEnBtn = document.getElementById('lang-en');
  const langEsBtn = document.getElementById('lang-es');
  const langToggleBtn = document.getElementById('language-toggle');

  if (langEnBtn) {
    langEnBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage('en');
      updateLanguageButtonStates('en');
    });
  }

  if (langEsBtn) {
    langEsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage('es');
      updateLanguageButtonStates('es');
    });
  }

  // Language toggle button in nav
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = getCurrentLanguage() === 'en' ? 'es' : 'en';
      setLanguage(newLang);
      updateLanguageButtonStates(newLang);
    });
  }

  // Update button states on load
  updateLanguageButtonStates(currentLang);
});

// Update visual state of language buttons
function updateLanguageButtonStates(lang) {
  const langEnBtn = document.getElementById('lang-en');
  const langEsBtn = document.getElementById('lang-es');

  if (langEnBtn) {
    if (lang === 'en') {
      langEnBtn.style.fontWeight = 'bold';
      langEnBtn.style.opacity = '1';
    } else {
      langEnBtn.style.fontWeight = 'normal';
      langEnBtn.style.opacity = '0.6';
    }
  }

  if (langEsBtn) {
    if (lang === 'es') {
      langEsBtn.style.fontWeight = 'bold';
      langEsBtn.style.opacity = '1';
    } else {
      langEsBtn.style.fontWeight = 'normal';
      langEsBtn.style.opacity = '0.6';
    }
  }
}
