import React from 'react'

import { useTranslation } from 'react-i18next'

const Hello: React.FunctionComponent = () => {
    const { t, i18n } = useTranslation()   // there is different method for translating text one of it using HOOK so here useTranslation funtion is used 

    return (
      <div>
        {t('hello.label')}
      </div>
    )
}

export default Hello


// here "t" is function which is used to convert when content string small and that its better to use "t" function to translate text