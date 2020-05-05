import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

 i18next                         // load translation
  .use(Backend)              //load the path of where is tranalation file is its it can Rest end point and from backend database or locally                      */           
  .use(initReactI18next)    
  .init({                    // Here is function which is reposible for almost everything 
    lng: 'en',                              
    backend: {               // here is out local backend    
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    fallbackLng: 'en',      //if we can not provide our preferred language for a user you can specify a fallback language.
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  })
  export default i18next;
