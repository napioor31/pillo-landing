import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LegalPageLayout from '../components/LegalPageLayout';
import SEO from '../components/SEO';

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

const ThirdPartyCard = ({ name, purpose, purposeLabel, data, dataLabel, policyUrl, policyLinkText }) => (
  <div className="border border-divider/50 rounded-2xl p-5 space-y-2">
    <h4 className="font-semibold text-text-primary">{name}</h4>
    <p><span className="text-text-secondary/70 text-sm">{purposeLabel}:</span> <span className="text-text-secondary text-sm">{purpose}</span></p>
    <p><span className="text-text-secondary/70 text-sm">{dataLabel}:</span> <span className="text-text-secondary text-sm">{data}</span></p>
    {policyUrl && (
      <a href={policyUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
        {policyLinkText}
        <ArrowUpRight size={12} aria-hidden="true" />
      </a>
    )}
  </div>
);

const ContactBox = ({ children }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-1 text-text-secondary">
    {children}
  </div>
);

const PolitykaPrywatnosci = () => {
  const { t: tCurrent, i18n } = useTranslation('privacy');
  const [showOriginal, setShowOriginal] = useState(false);
  const tPl = i18n.getFixedT('pl', 'privacy');
  const t = showOriginal ? tPl : tCurrent;

  const purposeLabel = t('thirdParty.purposeLabel');
  const dataLabel = t('thirdParty.dataLabel');
  const policyLinkText = t('thirdParty.policyLink');

  return (
    <>
      <SEO
        title="Polityka prywatności"
        description="Polityka prywatności aplikacji Pillo. Dowiedz się, jak chronimy Twoje dane osobowe."
        canonical="/privacy-policy"
        noindex
        lang={i18n.language}
      />
      <LegalPageLayout
        title={t('layout.title')}
      subtitle={t('layout.subtitle')}
      date={t('layout.date')}
      showOriginal={showOriginal}
      onToggleOriginal={() => setShowOriginal(v => !v)}
    >
      <Section number="1" title={t('s1.title')}>
        <p>{t('s1.p1')}</p>
        <p>{t('s1.p2')}</p>
      </Section>

      <Section number="2" title={t('s2.title')}>
        <SubSection number="2.1." title={t('s2.sub1.title')}>
          <p>{t('s2.sub1.p1')}</p>
          <BulletList items={t('s2.sub1.items1', { returnObjects: true })} />
          <p>{t('s2.sub1.p2')}</p>
          <BulletList items={t('s2.sub1.items2', { returnObjects: true })} />
          <p className="p-4 bg-surface-alt rounded-xl border border-divider/50 text-sm">
            <strong>{t('s2.sub1.noteTitle')}</strong> {t('s2.sub1.noteText')}
          </p>
        </SubSection>
        <SubSection number="2.2." title={t('s2.sub2.title')}>
          <p>{t('s2.sub2.p1')}</p>
          <BulletList items={t('s2.sub2.items', { returnObjects: true })} />
        </SubSection>
        <SubSection number="2.3." title={t('s2.sub3.title')}>
          <BulletList items={t('s2.sub3.items', { returnObjects: true })} />
        </SubSection>
      </Section>

      <Section number="3" title={t('s3.title')}>
        <p>{t('s3.p1')}</p>
        <BulletList items={t('s3.items', { returnObjects: true })} />
      </Section>

      <Section number="4" title={t('s4.title')}>
        <p>{t('s4.p1')}</p>
        <BulletList items={t('s4.items', { returnObjects: true })} />
      </Section>

      <Section number="5" title={t('s5.title')}>
        <p>{t('s5.p1')}</p>
        <BulletList items={t('s5.items', { returnObjects: true })} />
        <p>{t('s5.p2')}</p>
      </Section>

      <Section number="6" title={t('s6.title')}>
        <p>{t('s6.p1')}</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <ThirdPartyCard
            name="Supabase"
            purpose={t('s6.supabase.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.supabase.data')}
            dataLabel={dataLabel}
            policyUrl="https://supabase.com/privacy"
            policyLinkText={policyLinkText}
          />
          <ThirdPartyCard
            name="RevenueCat"
            purpose={t('s6.revenuecat.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.revenuecat.data')}
            dataLabel={dataLabel}
            policyUrl="https://www.revenuecat.com/privacy"
            policyLinkText={policyLinkText}
          />
          <ThirdPartyCard
            name="Sentry"
            purpose={t('s6.sentry.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.sentry.data')}
            dataLabel={dataLabel}
            policyUrl="https://sentry.io/privacy/"
            policyLinkText={policyLinkText}
          />
          <ThirdPartyCard
            name="PostHog"
            purpose={t('s6.posthog.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.posthog.data')}
            dataLabel={dataLabel}
            policyUrl="https://posthog.com/privacy"
            policyLinkText={policyLinkText}
          />
          <ThirdPartyCard
            name="UserJot"
            purpose={t('s6.userjot.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.userjot.data')}
            dataLabel={dataLabel}
            policyUrl="https://userjot.com/privacy"
            policyLinkText={policyLinkText}
          />
          <ThirdPartyCard
            name="Expo Notifications"
            purpose={t('s6.expo.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.expo.data')}
            dataLabel={dataLabel}
            policyUrl="https://expo.dev/privacy"
            policyLinkText={policyLinkText}
          />
          <ThirdPartyCard
            name="Apple App Store / Google Play Store"
            purpose={t('s6.appleGoogle.purpose')}
            purposeLabel={purposeLabel}
            data={t('s6.appleGoogle.data')}
            dataLabel={dataLabel}
          />
        </div>
      </Section>

      <Section number="7" title={t('s7.title')}>
        <BulletList items={t('s7.items', { returnObjects: true })} />
      </Section>

      <Section number="8" title={t('s8.title')}>
        <p>{t('s8.p1')}</p>
        <BulletList items={t('s8.items', { returnObjects: true })} />
        <p>{t('s8.p2')}</p>
      </Section>

      <Section number="9" title={t('s9.title')}>
        <p>{t('s9.p1')}</p>
        <BulletList items={t('s9.items', { returnObjects: true })} />
        <p>{t('s9.p2')}</p>
      </Section>

      <Section number="10" title={t('s10.title')}>
        <ContactBox>
          <p><strong>{t('s10.name')}</strong></p>
          <p>{t('s10.websiteLabel')} <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">uodo.gov.pl</a></p>
          <p>{t('s10.address')}</p>
          <p>{t('s10.phone')}</p>
        </ContactBox>
      </Section>

      <Section number="11" title={t('s11.title')}>
        <p>{t('s11.p1')}</p>
      </Section>

      <Section number="12" title={t('s12.title')}>
        <p>{t('s12.p1')}</p>
        <BulletList items={t('s12.items1', { returnObjects: true })} />
        <p>{t('s12.p2')}</p>
        <BulletList items={t('s12.items2', { returnObjects: true })} />
      </Section>

      <Section number="13" title={t('s13.title')}>
        <p>{t('s13.p1')}</p>
        <BulletList items={t('s13.items', { returnObjects: true })} />
        <p>{t('s13.p2')}</p>
      </Section>

      <Section number="14" title={t('s14.title')}>
        <ContactBox>
          <p><strong>{t('s14.emailLabel')}</strong> {t('s14.email')}</p>
          <p><strong>{t('s14.controllerLabel')}</strong> {t('s14.controller')}</p>
          <p><strong>{t('s14.appLabel')}</strong> {t('s14.app')}</p>
          <p><strong>{t('s14.addressLabel')}</strong> {t('s14.address')}</p>
        </ContactBox>
        <p className="mt-3">{t('s14.p1')}</p>
      </Section>

      <Section number="15" title={t('s15.title')}>
        <p>{t('s15.p1')}</p>
      </Section>
      </LegalPageLayout>
    </>
  );
};

export default PolitykaPrywatnosci;
