import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const Regulamin = () => {
  const { t: tCurrent, i18n } = useTranslation('terms');
  const [showOriginal, setShowOriginal] = useState(false);
  const tPl = i18n.getFixedT('pl', 'terms');
  const t = showOriginal ? tPl : tCurrent;

  return (
    <LegalPageLayout
      title={t('layout.title')}
      subtitle={t('layout.subtitle')}
      date={t('layout.date')}
      showOriginal={showOriginal}
      onToggleOriginal={() => setShowOriginal(v => !v)}
    >
      <Section number="1" title={t('s1.title')}>
        <p>{t('s1.p1')}</p>
      </Section>

      <Section number="2" title={t('s2.title')}>
        <p>{t('s2.p1')}</p>
        <BulletList items={t('s2.items', { returnObjects: true })} />
        <p>{t('s2.p2')}</p>
      </Section>

      <Section number="3" title={t('s3.title')}>
        <p>{t('s3.p1')}</p>
      </Section>

      <Section number="4" title={t('s4.title')}>
        <SubSection number="4.1." title={t('s4.sub1.title')}>
          <p>{t('s4.sub1.p1')}</p>
        </SubSection>
        <SubSection number="4.2." title={t('s4.sub2.title')}>
          <p>{t('s4.sub2.p1')}</p>
          <BulletList items={t('s4.sub2.items', { returnObjects: true })} />
        </SubSection>
      </Section>

      <Section number="5" title={t('s5.title')}>
        <SubSection number="5.1." title={t('s5.sub1.title')}>
          <p>{t('s5.sub1.p1')}</p>
        </SubSection>
        <SubSection number="5.2." title={t('s5.sub2.title')}>
          <p>{t('s5.sub2.p1')}</p>
        </SubSection>
        <SubSection number="5.3." title={t('s5.sub3.title')}>
          <p>{t('s5.sub3.p1')}</p>
        </SubSection>
        <SubSection number="5.4." title={t('s5.sub4.title')}>
          <p>{t('s5.sub4.p1')}</p>
        </SubSection>
      </Section>

      <Section number="6" title={t('s6.title')}>
        <SubSection number="6.1." title={t('s6.sub1.title')}>
          <p>{t('s6.sub1.p1')}</p>
        </SubSection>
        <SubSection number="6.2." title={t('s6.sub2.title')}>
          <BulletList items={t('s6.sub2.items', { returnObjects: true })} />
        </SubSection>
        <SubSection number="6.3." title={t('s6.sub3.title')}>
          <p>{t('s6.sub3.p1')}</p>
        </SubSection>
        <SubSection number="6.4." title={t('s6.sub4.title')}>
          <p>{t('s6.sub4.p1')}</p>
        </SubSection>
      </Section>

      <Section number="7" title={t('s7.title')}>
        <SubSection number="7.1." title={t('s7.sub1.title')}>
          <p>{t('s7.sub1.p1')}</p>
        </SubSection>
        <SubSection number="7.2." title={t('s7.sub2.title')}>
          <p>{t('s7.sub2.p1')}</p>
        </SubSection>
        <SubSection number="7.3." title={t('s7.sub3.title')}>
          <p>{t('s7.sub3.p1')}</p>
        </SubSection>
      </Section>

      <Section number="8" title={t('s8.title')}>
        <SubSection number="8.1." title={t('s8.sub1.title')}>
          <p>{t('s8.sub1.p1')}</p>
        </SubSection>
        <SubSection number="8.2." title={t('s8.sub2.title')}>
          <p>{t('s8.sub2.p1')}</p>
        </SubSection>
        <SubSection number="8.3." title={t('s8.sub3.title')}>
          <p>{t('s8.sub3.p1')}</p>
          <BulletList items={t('s8.sub3.items', { returnObjects: true })} />
          <p>{t('s8.sub3.p2')}</p>
        </SubSection>
      </Section>

      <Section number="9" title={t('s9.title')}>
        <p>{t('s9.p1')}</p>
        <BulletList items={t('s9.items', { returnObjects: true })} />
        <p className="mt-3 p-4 bg-surface-alt rounded-xl border border-divider/50 text-sm">
          {t('s9.euNote')}
        </p>
      </Section>

      <Section number="10" title={t('s10.title')}>
        <SubSection number="10.1." title={t('s10.sub1.title')}>
          <p>{t('s10.sub1.p1')}</p>
        </SubSection>
        <SubSection number="10.2." title={t('s10.sub2.title')}>
          <p>{t('s10.sub2.p1')}</p>
        </SubSection>
        <SubSection number="10.3." title={t('s10.sub3.title')}>
          <p>{t('s10.sub3.p1')}</p>
        </SubSection>
      </Section>

      <Section number="11" title={t('s11.title')}>
        <p>{t('s11.p1')}</p>
        <BulletList items={t('s11.items', { returnObjects: true })} />
        <p>{t('s11.p2')}</p>
      </Section>

      <Section number="12" title={t('s12.title')}>
        <p>{t('s12.p1')}</p>
      </Section>

      <Section number="13" title={t('s13.title')}>
        <SubSection number="13.1." title={t('s13.sub1.title')}>
          <p>{t('s13.sub1.p1')}</p>
        </SubSection>
        <SubSection number="13.2." title={t('s13.sub2.title')}>
          <p>{t('s13.sub2.p1')}</p>
        </SubSection>
      </Section>

      <Section number="14" title={t('s14.title')}>
        <SubSection number="14.1." title={t('s14.sub1.title')}>
          <p>{t('s14.sub1.p1')}</p>
        </SubSection>
        <SubSection number="14.2." title={t('s14.sub2.title')}>
          <p>{t('s14.sub2.p1')}</p>
        </SubSection>
        <SubSection number="14.3." title={t('s14.sub3.title')}>
          <p>{t('s14.sub3.p1')}</p>
          <BulletList items={t('s14.sub3.items', { returnObjects: true })} />
        </SubSection>
      </Section>

      <Section number="15" title={t('s15.title')}>
        <p>{t('s15.p1')}</p>
      </Section>

      <Section number="16" title={t('s16.title')}>
        <p>{t('s16.p1')}</p>
      </Section>

      <Section number="17" title={t('s17.title')}>
        <p>{t('s17.p1')}</p>
      </Section>

      <Section number="18" title={t('s18.title')}>
        <SubSection number="18.1." title={t('s18.sub1.title')}>
          <p>{t('s18.sub1.p1')}</p>
          <BulletList items={t('s18.sub1.items', { returnObjects: true })} />
        </SubSection>
        <SubSection number="18.2." title={t('s18.sub2.title')}>
          <p>{t('s18.sub2.p1')}</p>
        </SubSection>
      </Section>

      <Section number="19" title={t('s19.title')}>
        <p>{t('s19.p1')}</p>
      </Section>

      <Section number="20" title={t('s20.title')}>
        <ContactBox>
          <p><strong>{t('s20.emailLabel')}</strong> {t('s20.email')}</p>
          <p><strong>{t('s20.controllerLabel')}</strong> {t('s20.controller')}</p>
          <p><strong>{t('s20.appLabel')}</strong> {t('s20.app')}</p>
          <p><strong>{t('s20.locationLabel')}</strong> {t('s20.location')}</p>
        </ContactBox>
        <p className="mt-3">{t('s20.p1')}</p>
      </Section>

      <Section number="21" title={t('s21.title')}>
        <p>{t('s21.p1')}</p>
        <p>{t('s21.p2')}</p>
      </Section>
    </LegalPageLayout>
  );
};

export default Regulamin;
