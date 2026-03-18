// Dane treści dla dwóch ról: Pacjent i Opiekun

export const roleContent = {
  patient: {
    headline: "Już nie musisz trzymać wszystkiego w głowie",
    subheadline: "Pillo pilnuje Twoich leków — przypomni o każdej dawce, we właściwej chwili. Ty zajmujesz się resztą.",
    ctaPrimary: "Pobierz bezpłatnie",
    ctaSecondary: "Jak to działa?",
    trustNote: "Bezpłatne · Bez zakładania konta · iOS i Android",

    howItWorks: {
      title: "Jak to działa",
      subtitle: "Trzy proste kroki do lepszej kontroli zdrowia",
      steps: [
        {
          number: "01",
          title: "Pobierz Pillo",
          description: "Bez zakładania konta, bez podawania maila. Pobierasz aplikację, otwierasz — i już możesz zacząć. Żadnych kroków, które mogłyby Cię zatrzymać."
        },
        {
          number: "02",
          title: "Wpisz swoje leki",
          description: "Podaj nazwę i godziny przyjmowania. Jeśli potrzebujesz pomocy przy ustawieniu — może Ci pomóc ktoś bliski."
        },
        {
          number: "03",
          title: "Pillo pilnuje reszty",
          description: "O każdej porze dostaniesz przypomnienie. Jedno dotknięcie i gotowe."
        }
      ]
    },

    features: [
      {
        icon: "Type",
        title: "Przejrzyste i czytelne",
        description: "Duże litery, wyraźne przyciski — wszystko widoczne od razu. Zaprojektowane tak, żeby nie trzeba było się domyślać.",
        image: "/images/przejrzyste i czytelne -pl.webp"
      },
      {
        icon: "Bell",
        title: "Przypomni, jeśli zapomnisz odpowiedzieć",
        description: "Jeśli nie zareagujesz od razu, Pillo przypomni jeszcze raz. Bez poganiania — po prostu jest.",
        image: "/images/przypomni -pl.webp"
      },
      {
        icon: "CheckCircle",
        title: "Tylko to, co potrzebne",
        description: "Żadnych zbędnych funkcji. Tylko Twoje leki i Twój plan dnia — w jednym miejscu.",
        image: "/images/to co potrzebne -pl.webp"
      }
    ],

    testimonials: [
      {
        quote: "Córka mi to zainstalowała i po tygodniu już sama wiedziałam, gdzie klikać. Nie myślałam, że to będzie takie proste.",
        author: "Jadwiga Kowalska",
        role: "73 lata, Warszawa",
        avatar: "JK"
      },
      {
        quote: "Próbowałem innych aplikacji, ale były za skomplikowane. Ta działa tak jak powinna — bez zbędnych kroków.",
        author: "Stanisław Nowak",
        role: "68 lat, Kraków",
        avatar: "SN"
      },
      {
        quote: "Nareszcie mam jedno miejsce dla wszystkich leków. Nic nie ginie, nic nie umyka.",
        author: "Henryk Wiśniewski",
        role: "71 lat, Gdańsk",
        avatar: "HW"
      }
    ],

    faq: [
      {
        question: "Czy Pillo jest darmowe?",
        answer: "Tak — i tak zostanie. Pillo dla pacjenta jest bezpłatne bez żadnych ukrytych opłat ani limitów czasowych."
      },
      {
        question: "Czy muszę zakładać konto i pamiętać hasło?",
        answer: "Nie. Konto tworzy się samo przy pierwszym uruchomieniu — bez maila, bez hasła. Aplikacja po prostu działa."
      },
      {
        question: "Co jeśli nie zareaguję na przypomnienie?",
        answer: "To zależy od Ciebie. Podczas ustawiania aplikacji sam/a decydujesz — czy Pillo ma przypomnieć raz, czy wracać co kilka minut dopóki nie odznaczycie dawki."
      },
      {
        question: "Czy mogę używać Pillo bez opiekuna?",
        answer: "Oczywiście. Pillo działa samodzielnie — połączenie z opiekunem to opcja, nie wymóg."
      },
      {
        question: "Co jeśli zmienię telefon albo zainstaluję aplikację od nowa?",
        answer: "Jeśli korzystasz z aplikacji sam/a, konto jest przypisane do urządzenia i nie ma możliwości jego przeniesienia. Jeśli masz połączonego opiekuna — on może pomóc Ci przywrócić dostęp."
      }
    ],

    footer: {
      headline: "Twoje leki pod kontrolą — bez wysiłku",
      sub: "Bezpłatnie, bez zakładania konta. Zacznij kiedy chcesz.",
      cta: "Pobierz Pillo"
    }
  },

  caregiver: {
    headline: "Już nie musisz sprawdzać — po prostu wiesz",
    subheadline: "Pillo śledzi leki bliskiej osoby i informuje Cię, gdy coś wymaga Twojej uwagi. Spokój, który czujesz — nie tylko deklarujesz.",
    ctaPrimary: "Wypróbuj bezpłatnie",
    ctaSecondary: "Jak to działa?",
    trustNote: "7 dni bezpłatnie · Anuluj kiedy chcesz · iOS i Android",

    howItWorks: {
      title: "Jak to działa",
      subtitle: "Kontroluj zdrowie bliskich z dowolnego miejsca",
      steps: [
        {
          number: "01",
          title: "Załóż konto",
          description: "Przez Google, Apple lub e-mail — wybierz co wolisz. Cały proces zajmuje dosłownie dwie minuty, a Twoje dane są bezpieczne od pierwszego kroku."
        },
        {
          number: "02",
          title: "Połącz się z bliską osobą",
          description: "Wygenerujesz krótki kod i wyślesz go przez SMS lub WhatsApp. Bliska osoba wpisuje go w swojej aplikacji — i jesteście połączeni."
        },
        {
          number: "03",
          title: "Działaj tylko wtedy, gdy trzeba",
          description: "Na co dzień — cisza. Gdy bliska osoba pominie dawkę — dostajesz powiadomienie. Nic więcej nie wymaga Twojej uwagi."
        }
      ]
    },

    features: [
      {
        icon: "BellRing",
        title: "Powiadomienie tylko gdy coś się dzieje",
        description: "Nie zasypujemy Cię aktualizacjami. Odezwiemy się, gdy lek nie został wzięty i mija czas reakcji. Wtedy — i tylko wtedy.",
        image: "/images/powiadomienie -pl.webp"
      },
      {
        icon: "History",
        title: "Cały tydzień jednym spojrzeniem",
        description: "Widzisz, jak wyglądał każdy dzień — wzięte na czas, spóźnione, pominięte. Bez dzwonienia, bez pytania. Po prostu wiesz.",
        image: "/images/tydzien -pl.webp"
      },
      {
        icon: "BarChart3",
        title: "Pełna historia przy wizycie u lekarza",
        description: "Gdy idziesz z bliską osobą do lekarza, masz przy sobie dokładny obraz ostatnich tygodni. Żadnego zgadywania, żadnego 'chyba brałam'.",
        image: "/images/tydzien -pl.webp"
      }
    ],

    testimonials: [
      {
        quote: "Mieszkam daleko od rodziców i przez długi czas żyłam z niepokojem w tle. Teraz po prostu wiem. To ogromna różnica.",
        author: "Anna Nowicka",
        role: "Córka, Wrocław",
        avatar: "AN"
      },
      {
        quote: "Opiekuję się dwunastoma seniorami. Wcześniej musiałam wszystko trzymać w głowie — teraz Pillo robi to za mnie.",
        author: "Maria Kowalska",
        role: "Pielęgniarka środowiskowa",
        avatar: "MK"
      },
      {
        quote: "Tata czasem zapominał i wstydził się przyznać. Teraz widzę to sama i mogę zareagować — bez robienia z tego sprawy.",
        author: "Piotr Wiśniewski",
        role: "Syn, Gdańsk",
        avatar: "PW"
      }
    ],

    faq: [
      {
        question: "Ile kosztuje subskrypcja?",
        answer: "29,90 zł miesięcznie lub 9,99 zł tygodniowo — do wyboru. Możesz zacząć od opcji tygodniowej jeśli chcesz najpierw sprawdzić jak to działa."
      },
      {
        question: "Ile osób mogę monitorować?",
        answer: "W obecnej wersji nie ma limitu — możesz połączyć się z tyloma osobami, ile potrzebujesz."
      },
      {
        question: "Czy bliska osoba musi zakładać osobne konto?",
        answer: "Pobiera tę samą aplikację Pillo i przechodzi przez krótkie ustawienia — bez maila, bez hasła. Potem wysyłasz jej swój kod, ona go wpisuje i jesteście połączeni. Tyle."
      },
      {
        question: "Czy będę dostawać powiadomienie przy każdej dawce?",
        answer: "Tylko jeśli chcesz. Możesz wybrać: powiadomienie gdy dawka zostanie wzięta, tylko gdy coś zostanie pominięte, albo samo podsumowanie dnia — bez żadnych przerywników w ciągu dnia."
      },
      {
        question: "Co dokładnie widzę jako opiekun?",
        answer: "Widzisz wszystko — całą szafkę leków bliskiej osoby, każdą interakcję z aplikacją, statystyki tygodniowe i historię aktywności. Jeśli coś zostało pominięte, spóźnione albo zmienione — jest w Twoim widoku."
      }
    ],

    footer: {
      headline: "Spokój, który czujesz — nie tylko deklarujesz",
      sub: "29,90 zł miesięcznie. Anuluj w każdej chwili.",
      cta: "Wypróbuj Pillo"
    }
  }
};

// Mapowanie ikon do nazw
export const iconMap = {
  Bell: "Bell",
  CheckCircle: "CheckCircle",
  Type: "Type",
  Volume2: "Volume2",
  Users: "Users",
  Shield: "Shield",
  BarChart3: "BarChart3",
  History: "History",
  BellRing: "BellRing",
  MessageCircle: "MessageCircle"
};
