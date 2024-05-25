import { LanguageDropDown } from '@/components/LanguageDropDown'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation('layout')
  return (
    <div className="fixed bottom-0 left-0 flex items-center justify-between w-full py-6 px-11">
        <p className='text-sm text-white' >© 2024 {t('internal_portal')}</p>
        <LanguageDropDown/>
    </div>
  )
}

export default Footer