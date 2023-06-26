import { useRouter } from "next/router";
import { createContext } from "react";

import en from '../locales/en';
import es from '../locales/es';

export const LangContext = createContext()

export const LangProvider = ({children}) => {


    const router = useRouter()

    const { locale } = router;
    const t = locale === 'en' ? en : es;

    const changeLanguage = (e) => {
      const locale = e.target.value;
      router.push(router.pathname, router.asPath, { locale });
    };

    
    return (
        <LangContext.Provider
            value={{
                t,
                locale,
                changeLanguage
            }}
        >
            {children}
        </LangContext.Provider>
    )
}