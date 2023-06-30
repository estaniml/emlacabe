import { useEffect, useState } from 'react'

const PageTitle = ({children, top}) => {

  const text = children;
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 150);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <div className="mt-28 lg:mt-28 lg:mb-10 h-[6rem] lg:h-[10rem] overflow-hidden" ref={top}>
      <h1 
        className="text-5xl lg:text-[8rem] xl:text-[9rem] tracking-wide font-bold text-slate-500  leading-[4rem] lg:leading-[8rem] xl:leading-[10rem] whitespace-nowrap"
      >{displayedText ? displayedText : ''}</h1>
    </div>
  )
}

export default PageTitle