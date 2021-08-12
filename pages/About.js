import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'

const About = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('about:title', { name: 'jawad' })}</h1>
      <Link href="/">home</Link>
    </div>
  )
}

export default About
