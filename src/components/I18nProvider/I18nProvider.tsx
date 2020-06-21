import React from 'react'
import { IntlProvider } from 'react-intl'
import es from '../../i18n/es.json'
import en from '../../i18n/en.json'
import AppState from '../../store/ducks'
import { connect } from 'react-redux'

type Language = 'es' | 'en'

interface I18nProviderProps {
  language: Language
  children: any
}

const messages: Record<Language, Record<string, string>> = {
  es,
  en
}

const I18nProvider = (props: I18nProviderProps) => {
  const { language, children } = props
  return (
    <IntlProvider
      key={language}
      locale={language || 'es'}
      messages={language && messages[language]}
    >
      {children}
    </IntlProvider>
  )
}

export default connect((state: AppState) => {
  return {
    language: state.config.language
  }
})(I18nProvider)
