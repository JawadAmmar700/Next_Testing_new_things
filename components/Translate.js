import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Translate = () => {
  const { locale, locales } = useRouter()
  console.log(locale)
  const { t } = useTranslation()

  return (
    <div>
      <nav>
        {locales.map(locale => (
          <Link key={locale} className="ml-6" href="/" locale={locale}>
            {locale}
          </Link>
        ))}
      </nav>

      <h1>{t('common:title')}</h1>
    </div>
  )
}

export default Translate
