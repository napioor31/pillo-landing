/**
 * ASSETY OBRAZÓW - Pillo Landing Page
 *
 * Instrukcja podmiany:
 * 1. Wrzuć pliki PNG do folderu /public/images/
 * 2. Zaktualizuj ścieżki poniżej
 * 3. Obrazy zostaną automatycznie załadowane
 */

// ==================== HERO SECTION ====================
// Telefon w sekcji hero (prawa strona) - zależne od roli i języka
export const heroPhone = {
  patient: {
    en: { src: '/images/hero/hero_patient - en.webp', alt: 'Pillo app on phone - patient view' },
    pl: { src: '/images/hero/hero_patient.webp', alt: 'Aplikacja Pillo na telefonie - widok pacjenta' },
  },
  caregiver: {
    en: { src: '/images/hero/hero_caregiver - en.webp', alt: 'Pillo app on phone - caregiver view' },
    pl: { src: '/images/hero/hero_caregiver.webp', alt: 'Aplikacja Pillo na telefonie - widok opiekuna' },
  }
};

// Returns the correct hero image for role + language (EN and DE both use 'en' variant)
export const getHeroPhone = (role, lang) => {
  const normalized = lang?.split('-')[0];
  const langKey = normalized === 'pl' ? 'pl' : 'en';
  return heroPhone[role][langKey];
};

// ==================== APP SHOWCASE (Karuzela) ====================
// Screenshots karuzeli - 6 ekranów
export const appScreenshots = [
  {
    id: 'lista-lekow',
    src: '/images/screenshots/lista-lekow.png',
    alt: 'Lista leków w aplikacji Pillo',
    title: 'Lista leków',
    description: 'Czytelny widok wszystkich leków na dziś'
  },
  {
    id: 'przypomnienia',
    src: '/images/screenshots/przypomnienia.png',
    alt: 'Przypomnienia o lekach',
    title: 'Przypomnienia',
    description: 'Duże, wyraźne powiadomienia'
  },
  {
    id: 'harmonogram',
    src: '/images/screenshots/harmonogram.png',
    alt: 'Tygodniowy harmonogram leków',
    title: 'Harmonogram',
    description: 'Tygodniowy widok planu leków'
  },
  {
    id: 'bliscy',
    src: '/images/screenshots/bliscy.png',
    alt: 'Funkcja Bliscy w aplikacji',
    title: 'Bliscy',
    description: 'Podłącz opiekunów do swojego konta'
  },
  {
    id: 'raporty',
    src: '/images/screenshots/raporty.png',
    alt: 'Raporty przyjmowania leków',
    title: 'Raporty',
    description: 'Śledź systematyczność przyjmowania'
  },
  {
    id: 'bezpieczenstwo',
    src: '/images/screenshots/bezpieczenstwo.png',
    alt: 'Bezpieczeństwo danych',
    title: 'Bezpieczeństwo',
    description: 'Szyfrowane dane zdrowotne'
  }
];

// ==================== HOW IT WORKS ====================
// Obrazy dla kroków "Jak to działa"
export const howItWorksImages = {
  step1: {
    src: '/images/how-it-works/krok-1-dodaj-lek.png',
    alt: 'Dodawanie leku do aplikacji'
  },
  step2: {
    src: '/images/how-it-works/krok-2-ustaw-plan.png',
    alt: 'Ustawianie harmonogramu przyjmowania'
  },
  step3: {
    src: '/images/how-it-works/krok-3-otrzymuj-przypomnienia.png',
    alt: 'Otrzymywanie przypomnień o lekach'
  }
};

// ==================== TESTIMONIALS ====================
// Zdjęcia osób w sekcji opinii (jeśli chcesz dodać)
export const testimonialAvatars = {
  // Dodaj zdjęcia jeśli potrzebujesz
  // person1: '/images/testimonials/osoba-1.png',
  // person2: '/images/testimonials/osoba-2.png',
};

// ==================== STORE BADGES ====================
// Przyciski pobierania
export const storeBadges = {
  appStore: '/images/badges/app-store.svg',
  googlePlay: '/images/badges/google-play.webp'
};

// ==================== LOGO ====================
export const logo = {
  src: '/images/logo/pillo-logo.webp',
  alt: 'Pillo logo'
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Sprawdza czy obraz istnieje (async)
 * Użyj tej funkcji przed wyświetleniem obrazu
 */
export const checkImageExists = (src) => {
  return new Promise((resolve) => {
    if (!src) {
      resolve(false);
      return;
    }
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Zwraca pierwsze N screenshotów
 */
export const getScreenshots = (count = 6) => {
  return appScreenshots.slice(0, count);
};

/**
 * Pobiera screenshot po ID
 */
export const getScreenshotById = (id) => {
  return appScreenshots.find(s => s.id === id) || null;
};

// Eksport domyślny
export default {
  heroPhone,
  appScreenshots,
  howItWorksImages,
  testimonialAvatars,
  storeBadges,
  logo,
  checkImageExists,
  getScreenshots,
  getScreenshotById
};
