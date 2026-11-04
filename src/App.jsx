import { useEffect, useState } from 'react'
import { LanguageToggle } from './components/LanguageToggle.jsx'
import { Reveal } from './components/Reveal.jsx'
import { images } from './data/images.js'
import { translations } from './data/translations.js'
import { useReveal } from './hooks/useReveal.js'

function EditorialImage({ src, alt, className = '', loading = 'lazy' }) {
  return (
    <div className={`image-frame ${className}`} data-reveal>
      <img src={src} alt={alt} loading={loading} />
    </div>
  )
}

function WorkInfo({ work, align = 'left', light = false }) {
  return (
    <div className={`work-info work-info--${align} ${light ? 'work-info--light' : ''}`}>
      <Reveal className="work-info__index">({work.index})</Reveal>
      <Reveal as="p" className="work-info__meta" delay={80}>{work.meta}</Reveal>
      <Reveal as="h3" className="work-info__title" delay={130}>{work.title}</Reveal>
      {work.subtitle && <Reveal as="p" className="work-info__subtitle" delay={180}>{work.subtitle}</Reveal>}
      <Reveal as="p" className="work-info__description" delay={230}>{work.description}</Reveal>
    </div>
  )
}

export default function App() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]
  useReveal()

  useEffect(() => {
    document.documentElement.lang = language
    document.title = `Lucia Terol Soriano — ${t.hero.role}`
  }, [language, t.hero.role])

  return (
    <main>
      <LanguageToggle language={language} onChange={setLanguage} />

      {/* 01 — Hero / introduction */}
      <section className="hero section-dark" aria-labelledby="hero-title">
        <EditorialImage
          src={images.vogue}
          alt="Contemporary dancer turning under a narrow stage light"
          className="hero__image hero__image--main"
          loading="eager"
        />
        <EditorialImage
          src={images.salto}
          alt="Contemporary dancer rehearsing in a concrete studio"
          className="hero__image hero__image--secondary"
          loading="eager"
        />
        <Reveal as="p" className="hero__eyebrow">{t.hero.eyebrow}</Reveal>
        <h1 className="hero__name" id="hero-title" aria-label="Lucia Terol Soriano">
          {t.hero.name.map((line, index) => (
            <Reveal as="span" className={`hero__name-line hero__name-line--${index + 1}`} delay={index * 90} key={line}>
              {line}
            </Reveal>
          ))}
        </h1>
        <Reveal className="hero__role" delay={230}>
          {/*<span aria-hidden="true">↳</span> {t.hero.role} */}
        </Reveal>
        <Reveal as="p" className="hero__intro" delay={300}>{t.hero.intro}</Reveal>
        <Reveal as="p" className="hero__note" delay={380}>{t.hero.note}</Reveal>
        <Reveal className="hero__scroll" delay={500}>
         {/* <span>{t.hero.scroll}</span><i aria-hidden="true" /> */}
        </Reveal>
      </section>

      {/* 02 — Works introduction */}
      <section className="works-intro section-dark" aria-labelledby="works-title">
        <Reveal as="p" className="works-intro__kicker">{t.worksIntro.kicker}</Reveal>
        <Reveal as="p" className="works-intro__count">{t.worksIntro.count}</Reveal>
        <Reveal as="h2" className="works-intro__title" id="works-title">{t.worksIntro.title}</Reveal>
        <span className="works-intro__rule" aria-hidden="true" />
      </section>

      {/* 03 — Work 1 title / visual opening */}
      <section className="work-one-opening image-section" aria-labelledby="work-one-opening-title">
        <EditorialImage src={images.sonsdembat1} alt="Dancer extending across a red-lit theatre stage" className="image-section__background" />
        <div className="image-scrim image-scrim--soft" />
        <Reveal as="p" className="corner-index">{t.work1.index}</Reveal>
        <h2 className="work-one-opening__title" id="work-one-opening-title">
          <Reveal as="span">Staatsballett</Reveal>
          <Reveal as="span" delay={100}>Hannover</Reveal>
        </h2>
        <Reveal as="p" className="work-one-opening__subtitle" delay={220}>{t.work1.subtitle}</Reveal>
      </section>

      {/* 04 — Work 1 detail */}
      <section className="work-one-detail section-dark">
        <EditorialImage src={images.darkPortrait} alt="Dancer turning in a flowing black costume" className="work-one-detail__image" />
        <div className="work-one-detail__ghost" aria-hidden="true">hannover</div>
        <WorkInfo work={t.work1} align="right" />
      </section>

      {/* 05 — Work 1 transition */}
      <section className="work-one-transition image-section">
        <EditorialImage src={images.blueStage} alt="Dancer suspended in cool blue stage light" className="image-section__background" />
        <div className="image-scrim image-scrim--deep" />
        <Reveal as="p" className="transition-phrase">{t.work1.transition}</Reveal>
        <Reveal as="span" className="transition-mark" aria-hidden="true">— 01</Reveal>
      </section>

      {/* 06 — Work 2 presentation */}
      <section className="work-two-presentation section-red" aria-labelledby="work-two-title">
        <EditorialImage src={images.rehearsalClose} alt="Close view of a dancer in a focused rehearsal" className="work-two-presentation__image" />
        <Reveal as="span" className="work-two-presentation__index">({t.work2.index})</Reveal>
        <h2 className="work-two-presentation__monogram" id="work-two-title" aria-label={t.work2.title}>
          <Reveal as="span">V</Reveal><Reveal as="span" delay={70}>D</Reveal><Reveal as="span" delay={140}>F</Reveal>
        </h2>
        <Reveal as="p" className="work-two-presentation__expanded">{t.work2.title}</Reveal>
        <Reveal as="p" className="work-two-presentation__description" delay={180}>{t.work2.description}</Reveal>
        <Reveal as="p" className="work-two-presentation__meta" delay={240}>{t.work2.meta}</Reveal>
      </section>

      {/* 07 — Work 2 interstitial */}
      <section className="work-two-interstitial image-section">
        <EditorialImage src={images.perfil} alt="Solo dancer caught between stillness and motion" className="image-section__background work-two-interstitial__image" />
        <div className="image-scrim image-scrim--left" />
        <Reveal as="p" className="work-two-interstitial__phrase">{t.work2.interstitial}</Reveal>
        <Reveal as="span" className="work-two-interstitial__line" aria-hidden="true" />
      </section>

      {/* 08 — Work 2 large image statement */}
      <section className="work-two-statement image-section">
        <EditorialImage src={images.redStage} alt="Dancer making a long extension across a red stage" className="image-section__background" />
        <div className="image-scrim image-scrim--bottom" />
        <Reveal as="h2" className="work-two-statement__title">{t.work2.statement}</Reveal>
        <Reveal as="p" className="work-two-statement__note" delay={180}>{t.work2.statementNote}</Reveal>
        <Reveal as="span" className="work-two-statement__number">02 / 04</Reveal>
      </section>

      {/* 09 — Work 3 title / visual intro */}
      <section className="work-three-opening section-silver" aria-labelledby="work-three-title">
        <EditorialImage src={images.concreteStudio} alt="Dancer in an expansive concrete rehearsal room" className="work-three-opening__image" />
        <Reveal as="span" className="work-three-opening__index">({t.work3.index})</Reveal>
        <h2 className="work-three-opening__title" id="work-three-title">
          <Reveal as="span">{t.work3.titleLines[0]}</Reveal>
          <Reveal as="span" delay={100}>{t.work3.titleLines[1]}</Reveal>
        </h2>
        <Reveal as="p" className="work-three-opening__city" delay={210}>{t.work3.subtitle}</Reveal>
      </section>

      {/* 10 — Work 3 detail */}
      <section className="work-three-detail image-section">
        <EditorialImage src={images.espalda} alt="Contemporary dancer held in cool theatrical light" className="image-section__background" />
        <div className="image-scrim image-scrim--right" />
        <WorkInfo work={t.work3} align="left" />
        <Reveal as="span" className="work-three-detail__vertical" aria-hidden="true">MARÍA DE ÁVILA — MADRID</Reveal>
      </section>

      {/* 11 — Work 3 text-focused transition */}
      <section className="work-three-text section-dark">
        <Reveal as="span" className="work-three-text__symbol" aria-hidden="true">( )</Reveal>
        <Reveal as="p" className="work-three-text__text">{t.work3.longText}</Reveal>
        <Reveal as="p" className="work-three-text__caption">03 / {t.work3.subtitle}</Reveal>
      </section>

      {/* 12 — Work 4 title / visual opening */}
      <section className="work-four-opening section-warm" aria-labelledby="work-four-title">
        <div className="work-four-opening__images">
          <EditorialImage src={images.sonsdembat2} alt="Dancer reaching through warm amber light" className="work-four-opening__image work-four-opening__image--portrait" />
          <EditorialImage src={images.sonsdembat3} alt="Dancer refining a gesture in rehearsal" className="work-four-opening__image work-four-opening__image--portrait" />
        </div>
        <Reveal as="span" className="work-four-opening__index">({t.work4.index})</Reveal>
        <Reveal as="h2" className="work-four-opening__title" id="work-four-title">{t.work4.title}</Reveal>
      </section>

      {/* 13 — Work 4 detail */}
      <section className="work-four-detail image-section">
        <EditorialImage src={images.amberCurtain} alt="Dancer in an expressive grounded pose" className="image-section__background" />
        <div className="image-scrim image-scrim--warm" />
        <WorkInfo work={t.work4} align="left" light />
      </section>

      {/* 14 — Work 4 final information */}
      <section className="work-four-final section-cream">
        <EditorialImage src={images.pose} alt="Dancer tracing a low arc in a quiet studio" className="work-four-final__image" />
        <div className="work-four-final__copy">
          <Reveal as="p" className="work-four-final__number">04 / 04</Reveal>
          <Reveal as="h2" className="work-four-final__heading" delay={90}>{t.work4.finalHeading}</Reveal>
          <Reveal as="p" className="work-four-final__text" delay={160}>{t.work4.finalText}</Reveal>
          <Reveal className="work-four-final__credits" delay={230}>
            <span>{t.work4.creditsLabel}</span>
            <p>{t.work4.credits}</p>
          </Reveal>
        </div>
      </section>

      {/* 15 — Contact */}
      <section className="contact section-dark" aria-labelledby="contact-title">
        <Reveal as="p" className="contact__overline">{t.contact.overline}</Reveal>
        <Reveal as="h2" className="contact__title" id="contact-title">{t.contact.title}</Reveal>
        <div className="contact__details">
          <Reveal as="a" href={`mailto:${t.contact.email}`} className="contact__item">
            <span>{t.contact.emailLabel}</span><strong>{t.contact.email}</strong>
          </Reveal>
          <Reveal as="a" href="https://www.instagram.com/lucia_terol_/" className="contact__item" target="_blank" rel="noreferrer" delay={70}>
            <span>{t.contact.instagramLabel}</span><strong>{t.contact.instagram}</strong>
          </Reveal>
          <Reveal as="a" href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="contact__item" delay={140}>
            <span>{t.contact.phoneLabel}</span><strong>{t.contact.phone}</strong>
          </Reveal>
        </div>
        <div className="contact__footer">
          <span>{t.contact.footer}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.contact.top} ↑</button>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </section>
    </main>
  )
}
