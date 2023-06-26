import Education from "../components/aboutCards/Education";
import Experience from "../components/aboutCards/Experience";
import IT from "../components/aboutCards/IT";
import Languages from "../components/aboutCards/Languages";
import Profile from "../components/aboutCards/Profile";
import Layout from "../layout/Layout";
import { AiOutlineDownload } from 'react-icons/ai'
import PageTitle from "../components/PageTitle";

import { LangContext } from "../context/LangContext";
import { useContext } from "react";

export default function Home() {

  const { t  } = useContext(LangContext)

  return (
    <Layout page='Frontend Developer'>
      <PageTitle>{t.home.title}.</PageTitle>

      <div className="mt-10 xl:mt-20 grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-6 xl:gap-10">
        
        <Profile />
        
        <IT />

        <Education />
      
        <Experience />
      
        <Languages />
        
      </div>

      <div className="mt-10 flex flex-col items-center">
        <p className="text-2xl mb-4 font-bold text-slate-300">{t.home.cv}.</p>
        <a
          download='Estanislao Martinez Lacabe CV'
          href='estanislaoMartinezLacabe-FrontendCV.pdf'
        >
          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl font-bold hover:bg-white hover:text-black transition duration-200 ease-linear"><AiOutlineDownload />{t.home.download}</button>
        </a>
      </div>

    </Layout>
  )
}
