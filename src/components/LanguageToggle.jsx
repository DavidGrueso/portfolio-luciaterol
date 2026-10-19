export function LanguageToggle({ language, onChange }) {
  const nextLanguage = language === 'en' ? 'es' : 'en'

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={() => onChange(nextLanguage)}
      aria-label={language === 'en' ? 'Cambiar idioma a español' : 'Switch language to English'}
    >
      <span className={language === 'en' ? 'active' : ''}>EN</span>
      <i aria-hidden="true" />
      <span className={language === 'es' ? 'active' : ''}>ES</span>
    </button>
  )
}
