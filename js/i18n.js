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
