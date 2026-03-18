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

const ContactBox = ({ children }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-1 text-text-secondary">
    {children}
  </div>
);

const Regulamin = () => (
  <LegalPageLayout
    title="Regulamin"
    subtitle="Aplikacja Pillo"
    date="Data ostatniej aktualizacji: 16 marca 2026 r."
  >
    <Section number="1" title="Akceptacja warunków">
      <p>Niniejszy Regulamin („Regulamin") stanowi prawnie wiążącą umowę pomiędzy Tobą a Albertem Napiórkowskim prowadzącym działalność pod nazwą Pillo („Administrator", „my", „nas", „nasz") dotyczącą korzystania z aplikacji mobilnej Pillo („Aplikacja"). Pobierając, instalując, uruchamiając lub korzystając z Aplikacji, akceptujesz postanowienia niniejszego Regulaminu. Jeśli nie akceptujesz Regulaminu, nie korzystaj z Aplikacji.</p>
    </Section>

    <Section number="2" title="Opis usługi">
      <p>Pillo jest aplikacją mobilną do zarządzania przypomnieniami o przyjmowaniu leków. Aplikacja obsługuje dwie role użytkowników:</p>
      <BulletList items={[
        'Pacjent (konto bezpłatne, anonimowe): konfiguracja przypomnień o lekach, obsługa powiadomień push, śledzenie stanów dawek, zarządzanie zapasami leków, opcjonalne połączenie z Opiekunem.',
        'Opiekun (subskrypcja płatna): monitorowanie przestrzegania harmonogramu lekowego Pacjenta w czasie rzeczywistym, dostęp do panelu adherencji, historia dawek, alerty o pominiętych dawkach.',
      ]} />
      <p>Aplikacja nie jest urządzeniem medycznym i nie stanowi porady medycznej. Pełną treść zastrzeżenia medycznego zawiera punkt 8 niniejszego Regulaminu.</p>
    </Section>

    <Section number="3" title="Wymagania wiekowe">
      <p>Aplikacja przeznaczona jest dla osób, które ukończyły 16 lat – zgodnie z art. 8 RODO oraz art. 7 ustawy z dnia 10 maja 2018 r. o ochronie danych osobowych. Korzystając z Aplikacji, oświadczasz, że spełniasz ten wymóg wiekowy. Nie gromadzimy świadomie danych osób poniżej 16. roku życia.</p>
    </Section>

    <Section number="4" title="Licencja i ograniczenia">
      <SubSection number="4.1." title="Udzielenie licencji">
        <p>Pod warunkiem przestrzegania niniejszego Regulaminu udzielamy Ci ograniczonej, niewyłącznej, nieprzenoszalnej, niepodlegającej sublicencjonowaniu i odwołalnej licencji na pobieranie, instalowanie i korzystanie z Aplikacji na urządzeniach, których jesteś właścicielem lub które kontrolujesz, wyłącznie w celach osobistych i niekomercyjnych.</p>
      </SubSection>
      <SubSection number="4.2." title="Ograniczenia">
        <p>Zgadzasz się, że NIE będziesz:</p>
        <BulletList items={[
          'modyfikować, poddawać inżynierii wstecznej, dekompilować, dezasemblować ani tworzyć dzieł pochodnych Aplikacji,',
          'usuwać, zmieniać ani ukrywać żadnych informacji o własności zawartych w Aplikacji,',
          'korzystać z Aplikacji w celach nielegalnych, szkodliwych lub nieautoryzowanych,',
          'próbować uzyskać nieautoryzowany dostęp do jakiejkolwiek części Aplikacji lub jej systemów,',
          'korzystać ze zautomatyzowanych skryptów, botów ani podobnych narzędzi do dostępu do Aplikacji,',
          'zakłócać ani przerywać działania Aplikacji lub jej serwerów,',
          'reprodukować, dystrybuować, publicznie wyświetlać ani tworzyć dzieł pochodnych na podstawie Aplikacji,',
          'sprzedawać, wynajmować, wydzierżawiać, sublicencjonować ani przenosić praw do korzystania z Aplikacji,',
          'korzystać z Aplikacji w sposób szkodliwy dla małoletnich,',
          'podszywać się pod jakąkolwiek osobę lub podmiot,',
          'przesyłać wirusów, złośliwego oprogramowania ani innego szkodliwego kodu,',
          'naruszać obowiązujących przepisów prawa, regulacji ani praw osób trzecich.',
        ]} />
      </SubSection>
    </Section>

    <Section number="5" title="Konta użytkowników">
      <SubSection number="5.1." title="Konto Pacjenta">
        <p>Konto Pacjenta jest anonimowe – nie wymaga podania adresu e-mail ani żadnego innego identyfikatora osobistego. Pacjent ponosi odpowiedzialność za wszelkie działania podjęte w ramach swojego konta. Utrata urządzenia przez Pacjenta niepołączonego z Opiekunem skutkuje trwałą utratą dostępu do danych konta – jest to świadoma decyzja projektowa mająca na celu eliminację bariery rejestracji. Więcej informacji o odzyskiwaniu konta zawiera Polityka Prywatności.</p>
      </SubSection>
      <SubSection number="5.2." title="Konto Opiekuna">
        <p>Opiekun tworzy pełne konto z weryfikacją adresu e-mail. Opiekun ponosi odpowiedzialność za zachowanie poufności danych logowania oraz za wszelkie działania podjęte w ramach swojego konta. W przypadku podejrzenia nieautoryzowanego dostępu do konta należy niezwłocznie poinformować Administratora.</p>
      </SubSection>
      <SubSection number="5.3." title="Dane użytkowników">
        <p>Zachowujesz pełne prawa do danych wprowadzonych przez siebie do Aplikacji (takich jak dane leków i notatki). Korzystając z Aplikacji, udzielasz nam licencji na przechowywanie i przetwarzanie tych danych zgodnie z Polityką Prywatności. Dane przetwarzamy zgodnie z obowiązującymi przepisami o ochronie danych, w tym RODO.</p>
      </SubSection>
      <SubSection number="5.4." title="Dokładność informacji">
        <p>Zgadzasz się podawać dokładne, aktualne i kompletne informacje w trakcie procesu konfiguracji Aplikacji.</p>
      </SubSection>
    </Section>

    <Section number="6" title="Subskrypcje Premium">
      <SubSection number="6.1." title="Warunki subskrypcji">
        <p>Dostęp do funkcji Opiekuna wymaga opłaconej subskrypcji („Dostęp Opiekuna"). Subskrypcje są obsługiwane przez Apple App Store lub Google Play Store i podlegają ich odpowiednim regulaminom.</p>
      </SubSection>
      <SubSection number="6.2." title="Płatności">
        <BulletList items={[
          'Opłaty za subskrypcję są pobierane z konta Apple App Store lub Google Play Store.',
          'Płatność jest realizowana po potwierdzeniu zakupu.',
          'Subskrypcje automatycznie odnawiają się, chyba że wyłączysz automatyczne odnawianie co najmniej 24 godziny przed końcem bieżącego okresu.',
          'Opłata za odnowienie jest pobierana w ciągu 24 godzin przed końcem bieżącego okresu.',
          'Subskrypcją możesz zarządzać i ją anulować w ustawieniach swojego konta w App Store lub Play Store.',
        ]} />
      </SubSection>
      <SubSection number="6.3." title="Zwroty">
        <p>Zwroty są obsługiwane zgodnie z polityką zwrotów Apple App Store lub Google Play Store. Jako konsument w UE możesz mieć prawo do odstąpienia od umowy w terminie 14 dni od zakupu, z zastrzeżeniem wyjątków dotyczących treści cyfrowych zgodnie z Dyrektywą (UE) 2019/770.</p>
      </SubSection>
      <SubSection number="6.4." title="Zmiany cennika">
        <p>Zastrzegamy sobie prawo do zmiany cen subskrypcji w dowolnym momencie. Istniejących subskrybentów powiadomimy o podwyżce ceny co najmniej 30 dni przed jej wejściem w życie. Zmiany cen nie mają zastosowania do bieżącego okresu subskrypcji zakupionej przed zmianą.</p>
      </SubSection>
    </Section>

    <Section number="7" title="Prawa własności intelektualnej">
      <SubSection number="7.1." title="Własność">
        <p>Aplikacja, w tym wszelkie treści, funkcje, oprogramowanie, projekty, teksty, grafiki, logotypy i leżąca u jej podstaw technologia, stanowi własność Administratora i jest chroniona prawem autorskim, prawem znaków towarowych, prawem patentowym, prawem dotyczącym tajemnic handlowych oraz innymi przepisami o ochronie własności intelektualnej.</p>
      </SubSection>
      <SubSection number="7.2." title="Treści generowane przez użytkownika">
        <p>Zachowujesz pełne prawa własności do niestandardowych treści, które tworzysz w Aplikacji (takich jak notatki do leków). Udzielasz nam niewyłącznej licencji na przechowywanie i wyświetlanie tych treści wyłącznie w celu świadczenia usługi.</p>
      </SubSection>
      <SubSection number="7.3." title="Znaki towarowe">
        <p>„Pillo" i powiązane logotypy są znakami towarowymi Administratora. Nie możesz używać tych znaków towarowych bez uprzedniej pisemnej zgody.</p>
      </SubSection>
    </Section>

    <Section number="8" title="Zastrzeżenie medyczne">
      <SubSection number="8.1." title="Brak porady medycznej">
        <p>Aplikacja nie jest przeznaczona do udzielania porad medycznych ani terapeutycznych. Przypomnienia i treści dostarczane przez Aplikację służą wyłącznie celom organizacyjnym i nie stanowią substytutu profesjonalnej porady medycznej, diagnozy ani leczenia. Aplikacja jest narzędziem wspierającym adherencję lekową, nie zaś urządzeniem medycznym.</p>
      </SubSection>
      <SubSection number="8.2." title="Konsultacja ze specjalistą">
        <p>Zawsze zasięgaj porady wykwalifikowanych pracowników służby zdrowia w kwestiach dotyczących swoich leków i stanu zdrowia. Nigdy nie lekceważ profesjonalnej porady medycznej ani nie opóźniaj jej zasięgnięcia z powodu treści w tej Aplikacji.</p>
      </SubSection>
      <SubSection number="8.3." title="Sytuacje awaryjne">
        <p>W przypadku zagrożenia życia lub zdrowia związanego z lekami niezwłocznie skontaktuj się ze służbami ratunkowymi:</p>
        <BulletList items={[
          'Polska: 112 (numer alarmowy) lub 999 (Pogotowie Ratunkowe)',
          'Pozostałe kraje UE: 112 (europejski numer alarmowy)',
          'Stany Zjednoczone: 911',
        ]} />
        <p>Aplikacja nie jest zaprojektowana do interwencji kryzysowych ani obsługi sytuacji zagrożenia życia.</p>
      </SubSection>
    </Section>

    <Section number="9" title="Wyłączenie gwarancji">
      <p>W maksymalnym zakresie dozwolonym przez prawo (z zastrzeżeniem bezwzględnie obowiązujących przepisów o ochronie konsumentów dla konsumentów z UE) Aplikacja jest dostarczana w stanie „tak jak jest" i „w miarę dostępności" bez jakichkolwiek gwarancji, wyrażnych ani dorozumianych, w tym między innymi:</p>
      <BulletList items={[
        'dorozumianych gwarancji przydatności handlowej, przydatności do określonego celu i nienaruszania praw,',
        'gwarancji dotyczących dokładności, niezawodności ani kompletności treści,',
        'gwarancji, że Aplikacja będzie działać nieprzerwanie, bezpiecznie ani bez błędów,',
        'gwarancji dotyczących wyników uzyskanych z korzystania z Aplikacji.',
      ]} />
      <p className="mt-3 p-4 bg-surface-alt rounded-xl border border-divider/50 text-sm">
        <strong>Uwaga dla konsumentów z UE:</strong> Jeśli jesteś konsumentem w UE, powyższe wyłączenie nie wpływa na Twoje ustawowe prawa wynikające z obowiązujących przepisów o ochronie konsumentów, w tym prawa do zgodności treści i usług cyfrowych wynikającego z Dyrektywy (UE) 2019/770.
      </p>
    </Section>

    <Section number="10" title="Ograniczenie odpowiedzialności">
      <SubSection number="10.1." title="Uwaga dla konsumentów z UE">
        <p>Niniejsze postanowienia nie wyłączają ani nie ograniczają naszej odpowiedzialności za śmierć lub uraz ciała spowodowany naszym zaniedbaniem, za oszustwo lub wprowadzenie w błąd, za wszelką odpowiedzialność, która nie może być wyłączona ani ograniczona na mocy obowiązujących przepisów o ochronie konsumentów, ani za naruszenie obowiązkowych wymogów zgodności wynikających z prawa UE.</p>
      </SubSection>
      <SubSection number="10.2." title="Wyłączenie szkód">
        <p>Z zastrzeżeniem pkt 10.1, w maksymalnym zakresie dozwolonym przez prawo nie ponosimy odpowiedzialności za pośrednich, przypadkowych, szczególnych, wynikowych, karnych ani przykładowych szkód, w tym między innymi za utratę zysków, danych, reputacji, przerwy w działalności ani inne straty niematerialne, nawet jeśli zostaliśmy poinformowani o możliwości wystąpienia takich szkód.</p>
      </SubSection>
      <SubSection number="10.3." title="Maksymalna odpowiedzialność">
        <p>Z zastrzeżeniem pkt 10.1, nasza łączna odpowiedzialność wobec Ciebie z tytułu wszystkich roszczeń wynikających z niniejszego Regulaminu lub korzystania z Aplikacji nie przekroczy kwoty wyższej z następujących: (a) kwoty zapłaconej przez Ciebie w ciągu dwunastu (12) miesięcy poprzedzających roszczenie lub (b) stu euro (100,00 EUR).</p>
      </SubSection>
    </Section>

    <Section number="11" title="Usługi podmiotów trzecich">
      <p>Aplikacja integruje się i korzysta z usług podmiotów trzecich: Supabase, RevenueCat, Sentry, PostHog, UserJot oraz Expo Notifications. Nie ponosimy odpowiedzialności za:</p>
      <BulletList items={[
        'dostępność, dokładność ani treść usług podmiotów trzecich,',
        'praktyki tych podmiotów w zakresie prywatności ani ich regulaminy,',
        'jakiekolwiek szkody lub straty spowodowane przez usługi podmiotów trzecich.',
      ]} />
      <p>Korzystanie z usług podmiotów trzecich podlega ich własnym regulaminom i politykom prywatności, opisanym szczegółowo w Polityce Prywatności.</p>
    </Section>

    <Section number="12" title="Połączenie Pacjenta z Opiekunem">
      <p>Połączenie konta Pacjenta z kontem Opiekuna jest dobrowolne i inicjowane przez Pacjenta poprzez wprowadzenie kodu zaproszenia. Pacjent wyraża zgodę na udostępnienie Opiekunowi danych dotyczących swoich leków i historii dawek. Pacjent może w każdej chwili rozłączyć połączenie z poziomu ustawień Aplikacji. Opiekun ma wyłącznie dostęp do odczytu danych – nie może modyfikować przypomnień Pacjenta. Szczegółowe zasady przepływu danych zawiera Polityka Prywatności.</p>
    </Section>

    <Section number="13" title="Zmiany Aplikacji i Regulaminu">
      <SubSection number="13.1." title="Zmiany Aplikacji">
        <p>Zastrzegamy sobie prawo do modyfikacji, zawieszenia lub zaniechania Aplikacji (lub jej części) w dowolnym momencie, z uprzednim powiadomieniem lub bez niego. Nie ponosimy odpowiedzialności wobec Ciebie ani osób trzecich za jakąkolwiek modyfikację, zawieszenie lub zaniechanie Aplikacji.</p>
      </SubSection>
      <SubSection number="13.2." title="Zmiany Regulaminu">
        <p>Możemy od czasu do czasu zmieniać niniejszy Regulamin. Data w nagłówku dokumentu wskazuje, kiedy Regulamin był ostatnio aktualizowany. O istotnych zmianach będziesz powiadamiany za pośrednictwem Aplikacji lub e-mailem (jeśli Opiekun podał adres). Dalsze korzystanie z Aplikacji po wejściu zmian w życie oznacza akceptację zmienionego Regulaminu.</p>
      </SubSection>
    </Section>

    <Section number="14" title="Rozwiązanie umowy">
      <SubSection number="14.1." title="Rozwiązanie przez Użytkownika">
        <p>Możesz w każdej chwili zaprzestać korzystania z Aplikacji i usunąć ją ze swoich urządzeń. Usunięcie Aplikacji nie powoduje automatycznego anulowania opłaconych subskrypcji – należy anulować subskrypcję samodzielnie w ustawieniach App Store lub Play Store.</p>
      </SubSection>
      <SubSection number="14.2." title="Rozwiązanie przez nas">
        <p>Możemy natychmiast, bez uprzedniego powiadomienia, zawiesić lub zakończyć Twój dostęp do Aplikacji z dowolnego powodu, w szczególności w przypadku naruszenia niniejszego Regulaminu.</p>
      </SubSection>
      <SubSection number="14.3." title="Skutki rozwiązania">
        <p>Po rozwiązaniu umowy:</p>
        <BulletList items={[
          'wszystkie udzielone Ci licencje natychmiast wygasają,',
          'przestań korzystać z Aplikacji i usuń ją ze swoich urządzeń,',
          'postanowienia, które ze względu na swój charakter powinny obowiązywać po rozwiązaniu umowy, pozostają w mocy, w tym postanowienia dotyczące własności, wyłączenia gwarancji i ograniczenia odpowiedzialności.',
        ]} />
      </SubSection>
    </Section>

    <Section number="15" title="Dostępność geograficzna">
      <p>Aplikacja jest kontrolowana i obsługiwana z terytorium Polski i jest przeznaczona przede wszystkim dla użytkowników z Unii Europejskiej. Nie gwarantujemy, że Aplikacja jest odpowiednia lub dostępna we wszystkich lokalizacjach. Dostęp do Aplikacji z terytoriów, gdzie jej treści są nielegalne, jest zabroniony. Użytkownicy spoza Unii Europejskiej korzystają z Aplikacji na własne ryzyko i są odpowiedzialni za zgodność z lokalnymi przepisami.</p>
    </Section>

    <Section number="16" title="Dostępność dla osób z niepełnosprawnościami">
      <p>Dążymy do zapewnienia dostępności Aplikacji dla wszystkich użytkowników. Aplikacja oferuje regulację rozmiaru czcionki (Mały / Średni / Duży) oraz funkcję odczytu ekranu (text-to-speech). Jeśli napotykasz trudności z korzystaniem z jakiejkolwiek części Aplikacji, skontaktuj się z nami, a wspólnie poszukamy rozwiązania.</p>
    </Section>

    <Section number="17" title="Opinie i zgłoszenia">
      <p>Chętnie przyjmujemy opinie, uwagi i sugestie dotyczące ulepszeń Aplikacji. Przekazując opinię, przyjmujesz do wiadomości, że możemy z niej korzystać bez ograniczeń ani wynagrodzenia, i udzielasz nam bezterminowej, nieodwołalnej, ogólnoświatowej, bezpłatnej licencji na wykorzystywanie, modyfikowanie i włączanie takich opinii do naszych produktów i usług.</p>
    </Section>

    <Section number="18" title="Postanowienia szczególne dotyczące Apple i Google">
      <SubSection number="18.1." title="Warunki App Store (Apple)">
        <p>Jeśli korzystasz z Aplikacji za pośrednictwem App Store firmy Apple, przyjmujesz do wiadomości, że:</p>
        <BulletList items={[
          'niniejszy Regulamin obowiązuje wyłącznie pomiędzy Tobą a Programistą, a nie Apple,',
          'Apple nie ma obowiązku świadczenia usług konserwacji ani wsparcia,',
          'Apple nie ponosi odpowiedzialności za rozpatrywanie jakichkolwiek roszczeń związanych z Aplikacją,',
          'Apple jest stroną trzecią będącą beneficjentem niniejszego Regulaminu i może go egzekwować.',
        ]} />
      </SubSection>
      <SubSection number="18.2." title="Warunki Google Play">
        <p>Jeśli korzystasz z Aplikacji za pośrednictwem Google Play, akceptujesz Warunki korzystania z Google Play.</p>
      </SubSection>
    </Section>

    <Section number="19" title="Prawo właściwe i jurysdykcja">
      <p>Niniejszy Regulamin podlega prawu polskiemu i jest interpretowany zgodnie z tym prawem. Konsumenci z UE korzystają także z ochrony przyznanej przez bezwzględnie obowiązujące przepisy prawa państwa członkowskiego swojego miejsca zamieszkania. Wszelkie spory będą rozstrzygane przez sądy polskie, z zastrzeżeniem praw konsumentów z UE do dochodzenia roszczeń przed sądami właściwymi dla ich miejsca zamieszkania.</p>
    </Section>

    <Section number="20" title="Dane kontaktowe">
      <ContactBox>
        <p><strong>E-mail:</strong> support@trypillo.pl</p>
        <p><strong>Administrator:</strong> Albert Napiórkowski</p>
        <p><strong>Aplikacja:</strong> Pillo</p>
        <p><strong>Lokalizacja:</strong> Polska</p>
      </ContactBox>
      <p className="mt-3">Konsumenci z UE korzystający ze swoich praw ustawowych proszeni są o wyraźne wskazanie charakteru swojego wniosku w temacie wiadomości.</p>
    </Section>

    <Section number="21" title="Postanowienia końcowe">
      <p>Korzystając z Aplikacji, potwierdzasz, że zapoznałeś się z niniejszym Regulaminem, rozumiesz go i zgadzasz się na jego postanowienia. Jeśli nie akceptujesz niniejszego Regulaminu, nie możesz korzystać ani używać Aplikacji.</p>
      <p>Niniejszy Regulamin podlega prawu polskiemu i unijnemu. W sprawach nieuregulowanych zastosowanie mają przepisy Kodeksu cywilnego, ustawy o świadczeniu usług drogą elektroniczną oraz RODO.</p>
    </Section>
  </LegalPageLayout>
);

export default Regulamin;
