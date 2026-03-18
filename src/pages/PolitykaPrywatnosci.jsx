import LegalPageLayout from '../components/LegalPageLayout';

const Section = ({ number, title, children }) => (
  <section className="mb-10">
    <h2 className="flex items-baseline gap-3 text-xl font-bold text-text-primary mb-4 font-[family-name:var(--font-family-heading)]">
      <span className="text-primary font-mono text-base shrink-0">{number}.</span>
      {title}
    </h2>
    <div className="space-y-3 text-text-secondary leading-relaxed">{children}</div>
  </section>
);

const SubSection = ({ number, title, children }) => (
  <div className="mb-5">
    <h3 className="text-base font-semibold text-text-primary mb-2">
      <span className="text-primary/70 mr-2">{number}</span>{title}
    </h3>
    <div className="space-y-2 text-text-secondary leading-relaxed">{children}</div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-1.5 pl-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ThirdPartyCard = ({ name, purpose, data, policyUrl }) => (
  <div className="border border-divider/50 rounded-2xl p-5 space-y-2">
    <h4 className="font-semibold text-text-primary">{name}</h4>
    <p><span className="text-text-secondary/70 text-sm">Cel:</span> <span className="text-text-secondary text-sm">{purpose}</span></p>
    <p><span className="text-text-secondary/70 text-sm">Udostępniane dane:</span> <span className="text-text-secondary text-sm">{data}</span></p>
    {policyUrl && (
      <a href={policyUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
        Polityka prywatności
        <i className="fi fi-rr-arrow-up-right text-xs" aria-hidden="true"></i>
      </a>
    )}
  </div>
);

const ContactBox = ({ children }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-1 text-text-secondary">
    {children}
  </div>
);

const PolitykaPrywatnosci = () => (
  <LegalPageLayout
    title="Polityka Prywatności"
    subtitle="Aplikacja Pillo"
    date="Data ostatniej aktualizacji: 16 marca 2026 r."
  >
    <Section number="1" title="Wprowadzenie">
      <p>Niniejsza Polityka Prywatności określa zasady gromadzenia, wykorzystywania oraz udostępniania danych osobowych w związku z korzystaniem z aplikacji mobilnej Pillo („Aplikacja"). Administratorem danych osobowych jest Albert Napiórkowski („Administrator", „my", „nas", „nasz").</p>
      <p>Pillo jest aplikacją mobilną służącą do zarządzania przypomnieniami o przyjmowaniu leków. Aplikacja obsługuje dwie odrębne role użytkowników: Pacjenta, który korzysta z przypomnień o lekach, oraz Opiekuna, który monitoruje przestrzeganie harmonogramu lekowego przez Pacjenta. Administrator dokłada wszelkich starań, aby chronić prywatność Użytkowników oraz zapewnić pełną przejrzystość stosowanych praktyk dotyczących przetwarzania danych osobowych.</p>
    </Section>

    <Section number="2" title="Informacje, które gromadzimy">
      <SubSection number="2.1." title="Konto Pacjenta – dane anonimowe">
        <p>Konto Pacjenta jest anonimowe z założenia – rejestracja nie wymaga podania adresu e-mail ani żadnego innego identyfikatora osobistego. Supabase generuje dla Pacjenta anonimową sesję, która nie pozwala na powiązanie danych z tożsamością Pacjenta. W ramach konfiguracji Aplikacji Pacjent może podać:</p>
        <BulletList items={[
          'Imię lub pseudonim (opcjonalne) – wyłącznie do spersonalizowanego przywitania w Aplikacji.',
          'Preferencje dostępności (opcjonalne): wybrany rozmiar czcionki oraz włączenie funkcji odczytu ekranu (text-to-speech).',
          'Odpowiedzi na pytania onboardingowe (opcjonalne): dotyczące częstotliwości zapominania o lekach, preferowanego sposobu obsługi przypomnień i poziomu monitorowania.',
        ]} />
        <p>Na serwerze Supabase przechowywane są następujące dane Pacjenta niezbędne do świadczenia usługi:</p>
        <BulletList items={[
          'Dane leków: nazwa leku, forma, dawkowanie, harmonogram (dni tygodnia i godziny przyjmowania).',
          'Historia dawek: statusy dawek (przyjęta, pominięta, odłożona, opóźniona) wraz ze znacznikami czasu.',
          'Dane o zapasach leku (opcjonalne): łączna ilość w opakowaniu, próg niskiego stanu, data ważności.',
          'Notatki do leków (opcjonalne): tekst dodany przez Pacjenta do konkretnego przypomnienia.',
          'Anonimowy identyfikator sesji: generowany automatycznie przez Supabase, bez możliwości powiązania z tożsamością Pacjenta.',
        ]} />
        <p className="p-4 bg-surface-alt rounded-xl border border-divider/50 text-sm">
          <strong>Uwaga dotycząca odzyskiwania konta:</strong> Pacjent niepołączony z Opiekunem nie może odzyskać swojego konta po utracie urządzenia – jest to świadoma decyzja projektowa mająca na celu eliminację bariery rejestracji. Pacjent połączony z Opiekunem może ponownie powiązać konto po ponownej instalacji Aplikacji za pomocą kodu zaproszenia.
        </p>
      </SubSection>
      <SubSection number="2.2." title="Konto Opiekuna – dane zarejestrowanego użytkownika">
        <p>Opiekun tworzy pełne konto wymagające weryfikacji tożsamości. Gromadzimy następujące dane Opiekuna:</p>
        <BulletList items={[
          'Dane logowania: adres e-mail oraz hasło lub dane logowania przez Google / Apple (w zależności od wybranej metody rejestracji).',
          'Odpowiedzi na pytania onboardingowe (opcjonalne): relacja z Pacjentem, preferowana intensywność alertów, dostępność Opiekuna.',
          'Dane dotyczące subskrypcji Premium: status subskrypcji oraz identyfikator zakupu, obsługiwane przez RevenueCat.',
        ]} />
      </SubSection>
      <SubSection number="2.3." title="Dane zbierane automatycznie">
        <BulletList items={[
          'Informacje o urządzeniu: platforma (iOS/Android), wersja systemu operacyjnego, wersja Aplikacji.',
          'Analityka użytkowania: sposób interakcji z Aplikacją, gromadzone za pośrednictwem narzędzia PostHog.',
          'Dane o błędach i wydajności: informacje techniczne dotyczące awarii i błędów Aplikacji, gromadzone za pośrednictwem narzędzia Sentry.',
          'Dane zakupowe: informacje o subskrypcji i transakcjach przetwarzane za pośrednictwem RevenueCat oraz systemów płatności Apple/Google.',
          'Opinie i zgłoszenia: treść wiadomości przesłanych przez Użytkownika za pośrednictwem narzędzia UserJot (opcjonalne zgłoszenia w Aplikacji).',
        ]} />
      </SubSection>
    </Section>

    <Section number="3" title="Cele przetwarzania danych">
      <p>Zgromadzone dane wykorzystujemy w następujących celach:</p>
      <BulletList items={[
        'Świadczenie usług: dostarczanie przypomnień o lekach zgodnie z harmonogramem Pacjenta.',
        'Monitorowanie adherencji: udostępnianie Opiekunowi w czasie rzeczywistym informacji o przestrzeganiu harmonogramu lekowego przez Pacjenta (wyłącznie za zgodą Pacjenta, wyrażoną przez połączenie kont).',
        'Powiadomienia push: wysyłanie przypomnień do Pacjenta oraz alertów o niepotwierdzonych lub pominiętych dawkach do Opiekuna.',
        'Synchronizacja w czasie rzeczywistym: aktualizacja statusu dawek w panelu Opiekuna za pomocą połączenia WebSocket (Supabase Realtime).',
        'Zarządzanie subskrypcją: obsługa i weryfikacja subskrypcji Premium Opiekuna.',
        'Doskonalenie Aplikacji: analiza wzorców użytkowania w celu poprawy funkcjonalności i doświadczenia użytkownika.',
        'Monitorowanie błędów: identyfikacja i usuwanie problemów technicznych.',
        'Obsługa klienta: odpowiadanie na zgłoszenia i opinie przesłane przez Użytkowników.',
      ]} />
    </Section>

    <Section number="4" title="Podstawy prawne przetwarzania danych">
      <p>Przetwarzanie danych osobowych odbywa się na następujących podstawach prawnych zgodnie z art. 6 ust. 1 RODO:</p>
      <BulletList items={[
        'Wykonanie umowy (art. 6 ust. 1 lit. b RODO): przetwarzanie danych niezbędnych do świadczenia usług Aplikacji – danych leków i historii dawek Pacjenta oraz danych konta i panelu Opiekuna.',
        'Zgoda (art. 6 ust. 1 lit. a RODO): analityka produktowa (PostHog), powiadomienia push (za zgodą systemową iOS/Android), udostępnianie danych Pacjenta Opiekunowi (poprzez świadome połączenie kont kodem zaproszenia).',
        'Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO): monitorowanie błędów (Sentry), zapewnienie bezpieczeństwa Aplikacji, zbieranie opinii Użytkowników (UserJot).',
      ]} />
    </Section>

    <Section number="5" title="Dane przekazywane między Pacjentem a Opiekunem">
      <p>Połączenie Pacjenta z Opiekunem jest w pełni dobrowolne. Opiekun generuje unikalny kod zaproszenia i przekazuje go Pacjentowi kanałem zewnętrznym (np. SMS, WhatsApp). Wprowadzenie i zatwierdzenie kodu przez Pacjenta stanowi wyrażoną dobrowolnie zgodę na udostępnienie Opiekunowi następujących danych:</p>
      <BulletList items={[
        'lista leków: nazwa, forma, dawkowanie, harmonogram, notatki, stan zapasów,',
        'historia dawek: statusy i znaczniki czasu wszystkich zdarzeń (dawka przyjęta, pominięta, odłożona, opóźniona),',
        'statusy przypomnień w czasie rzeczywistym (za pomocą połączenia WebSocket).',
      ]} />
      <p>Opiekun ma wyłącznie dostęp do odczytu danych leków – nie może dodawać, edytować ani usuwać przypomnień Pacjenta. Pacjent może w każdej chwili rozłączyć konto Opiekuna z poziomu ustawień Aplikacji. Po rozłączeniu Opiekun traci dostęp do danych Pacjenta.</p>
    </Section>

    <Section number="6" title="Usługi podmiotów trzecich">
      <p>W ramach działania Aplikacji korzystamy z następujących usług podmiotów trzecich:</p>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <ThirdPartyCard
          name="Supabase"
          purpose="Baza danych backendowa (PostgreSQL), uwierzytelnianie, synchronizacja w czasie rzeczywistym."
          data="Dane konta Opiekuna, dane leków i historii dawek Pacjenta, anonimowe sesje Pacjenta."
          policyUrl="https://supabase.com/privacy"
        />
        <ThirdPartyCard
          name="RevenueCat"
          purpose="Zarządzanie subskrypcjami i przetwarzanie płatności."
          data="Identyfikator Użytkownika, status subskrypcji, informacje o zakupach."
          policyUrl="https://www.revenuecat.com/privacy"
        />
        <ThirdPartyCard
          name="Sentry"
          purpose="Śledzenie błędów i monitorowanie wydajności."
          data="Dzienniki błędów, informacje o urządzeniu, adres IP, kontekst techniczny zdarzenia."
          policyUrl="https://sentry.io/privacy/"
        />
        <ThirdPartyCard
          name="PostHog"
          purpose="Analityka produktowa."
          data="Wzorce użytkowania, interakcje Użytkownika, informacje o urządzeniu."
          policyUrl="https://posthog.com/privacy"
        />
        <ThirdPartyCard
          name="UserJot"
          purpose="Zbieranie opinii i zgłoszeń od Użytkowników bezpośrednio w Aplikacji."
          data="Treść przesłanej opinii oraz opcjonalne dane kontaktowe podane dobrowolnie przez Użytkownika."
          policyUrl="https://userjot.com/privacy"
        />
        <ThirdPartyCard
          name="Expo Notifications"
          purpose="Dostarczanie powiadomień push do Pacjenta i Opiekuna."
          data="Token urządzenia (push token), anonimowy identyfikator sesji."
          policyUrl="https://expo.dev/privacy"
        />
        <ThirdPartyCard
          name="Apple App Store / Google Play Store"
          purpose="Przetwarzanie płatności za subskrypcje."
          data="Dane płatności i historia zakupów (obsługiwane bezpośrednio przez Apple/Google)."
        />
      </div>
    </Section>

    <Section number="7" title="Okres przechowywania danych">
      <BulletList items={[
        'Dane konta Opiekuna: przechowywane przez cały okres korzystania z Aplikacji. Po usunięciu konta dane są kasowane niezwłocznie, z zastrzeżeniem obowiązków wynikających z przepisów prawa.',
        'Dane Pacjenta (leki, historia dawek): przechowywane na serwerze przez cały okres aktywności anonimowej sesji. Użytkownik może złożyć wniosek o usunięcie danych w każdej chwili zgodnie z pkt 9 niniejszej Polityki.',
        'Dane analityczne (PostHog) i dane o błędach (Sentry): przechowywane zgodnie z politykami dostawców (zazwyczaj od 90 dni do 2 lat).',
      ]} />
    </Section>

    <Section number="8" title="Bezpieczeństwo danych">
      <p>Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych Użytkowników, w tym:</p>
      <BulletList items={[
        'szyfrowane połączenia (HTTPS/TLS) dla całej transmisji danych,',
        'bezpieczne przechowywanie danych na serwerach Supabase,',
        'szyfrowanie haseł Opiekuna (obsługiwane przez Supabase Auth),',
        'izolację danych – Opiekun widzi wyłącznie dane Pacjentów, z którymi jest połączony,',
        'regularne przeglądy i aktualizacje zabezpieczeń.',
      ]} />
      <p>Żadna metoda transmisji danych przez Internet ani elektronicznego przechowywania danych nie jest w 100% bezpieczna. W związku z tym nie możemy zagwarantować absolutnego bezpieczeństwa danych.</p>
    </Section>

    <Section number="9" title="Prawa Użytkownika na podstawie RODO">
      <p>Zgodnie z RODO Użytkownikowi przysługują następujące prawa:</p>
      <BulletList items={[
        'Prawo dostępu (art. 15 RODO): uzyskanie potwierdzenia, czy przetwarzane są dane osobowe Użytkownika, oraz dostępu do tych danych.',
        'Prawo do sprostowania (art. 16 RODO): żądanie niezwłocznego sprostowania nieprawidłowych lub uzupełnienia niekompletnych danych.',
        'Prawo do usunięcia (art. 17 RODO): żądanie usunięcia danych osobowych („prawo do bycia zapomnianym").',
        'Prawo do ograniczenia przetwarzania (art. 18 RODO): żądanie ograniczenia przetwarzania danych w określonych przypadkach.',
        'Prawo do przeniesienia danych (art. 20 RODO): otrzymanie danych w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego.',
        'Prawo do sprzeciwu (art. 21 RODO): sprzeciw wobec przetwarzania danych opartego na prawnie uzasadnionym interesie Administratora.',
        'Prawo do cofnięcia zgody: cofnięcie udzielonej zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem.',
        'Prawo do skargi: wniesienie skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), jeśli Użytkownik uzna, że przetwarzanie narusza przepisy RODO.',
      ]} />
      <p>W celu skorzystania z powyższych praw należy skontaktować się z Administratorem za pośrednictwem danych wskazanych w pkt 14 niniejszej Polityki.</p>
    </Section>

    <Section number="10" title="Organ nadzorczy">
      <ContactBox>
        <p><strong>Prezes Urzędu Ochrony Danych Osobowych (UODO)</strong></p>
        <p>Strona internetowa: <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">uodo.gov.pl</a></p>
        <p>Adres: ul. Stawki 2, 00-193 Warszawa</p>
        <p>Telefon: +48 22 531 03 00</p>
      </ContactBox>
    </Section>

    <Section number="11" title="Ochrona prywatności dzieci">
      <p>Aplikacja nie jest przeznaczona dla osób poniżej 16. roku życia (zgodnie z art. 8 RODO oraz art. 7 ustawy z dnia 10 maja 2018 r. o ochronie danych osobowych). Nie gromadzimy świadomie danych osobowych osób niepełnoletnich. Jeśli uważasz, że zebraliśmy dane od dziecka, prosimy o niezwłoczny kontakt z Administratorem.</p>
    </Section>

    <Section number="12" title="Powiadomienia push">
      <p>Aplikacja korzysta z powiadomień push dostarczanych za pośrednictwem Expo Notifications w dwóch celach:</p>
      <BulletList items={[
        'Pacjent: przypomnienia o lekach zgodnie z ustalonym harmonogramem dawkowania.',
        'Opiekun: alerty o niepotwierdzonych lub pominiętych dawkach Pacjenta.',
      ]} />
      <p>Powiadomienia te:</p>
      <BulletList items={[
        'są wysyłane na podstawie harmonogramów leków ustalonych przez Pacjenta,',
        'są w pełni opcjonalne – Użytkownik może wyłączyć je w ustawieniach Aplikacji lub systemu operacyjnego,',
        'nie są wykorzystywane do przesyłania treści marketingowych ani reklam.',
      ]} />
    </Section>

    <Section number="13" title="Zmiany w Polityce Prywatności">
      <p>Administrator zastrzega sobie prawo do aktualizacji niniejszej Polityki Prywatności. O wszelkich istotnych zmianach Użytkownik zostanie poinformowany poprzez:</p>
      <BulletList items={[
        'opublikowanie nowej wersji Polityki Prywatności w Aplikacji,',
        'aktualizację daty w nagłówku dokumentu,',
        'wysłanie powiadomienia push lub wiadomości e-mail (jeśli jest to wymagane przepisami prawa).',
      ]} />
      <p>Dalsze korzystanie z Aplikacji po wejściu zmian w życie oznacza akceptację zmienionej Polityki Prywatności.</p>
    </Section>

    <Section number="14" title="Dane kontaktowe Administratora">
      <ContactBox>
        <p><strong>E-mail:</strong> support@trypillo.pl</p>
        <p><strong>Administrator danych:</strong> Albert Napiórkowski</p>
        <p><strong>Aplikacja:</strong> Pillo</p>
        <p><strong>Adres:</strong> ul. Drewnowska 13 m. 12, 91-002 Łódź, Polska</p>
      </ContactBox>
      <p className="mt-3">W przypadku wniosków dotyczących RODO prosimy o umieszczenie w temacie wiadomości adnotacji „Wniosek RODO" oraz wskazanie prawa, z którego Użytkownik zamierza skorzystać. Odpowiedź zostanie udzielona w ciągu jednego miesiąca od dnia otrzymania wniosku, zgodnie z wymogami RODO.</p>
    </Section>

    <Section number="15" title="Postanowienia końcowe">
      <p>Korzystając z Aplikacji Pillo, Użytkownik potwierdza, że zapoznał się z niniejszą Polityką Prywatności. Polityka prywatności podlega prawu polskiemu i unijnemu. W sprawach nieuregulowanych niniejszą Polityką zastosowanie mają przepisy RODO oraz polskiej ustawy o ochronie danych osobowych z dnia 10 maja 2018 r.</p>
    </Section>
  </LegalPageLayout>
);

export default PolitykaPrywatnosci;
