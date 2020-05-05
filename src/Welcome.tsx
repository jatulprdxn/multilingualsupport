import React from 'react'
import { withTranslation } from 'react-i18next'
import i18n from './i18n';

const Welcome: React.FunctionComponent = () => {
  return (
    <div>
      {i18n.t('welcome.label')}
    </div>
  )
}

export default withTranslation()(Welcome);  
/* another way for translation is higher order function so withTranslation its predefind higher 
function that used to translate*/