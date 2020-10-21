import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import uk from './languages-translation/uk'
import ru from './languages-translation/ru'

const resources = {
    uk,
    ru
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'uk',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
