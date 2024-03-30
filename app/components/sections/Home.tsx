"use client"
import SectionContainer from "../SectionContainer"

export default function HomeSection() {
  return (
    <SectionContainer
      bgClasses="bg-black h-screen bg-[url('/backgrounds/8000MaryArt.jpg')] bg-cover bg-no-repeat bg-center transform"
      additionalContentClasses="flex flex-col h-full w-full justify-center items-center"
      id="home"
    >
      <h1 className="relative text-[72px] leading-[72px] md:text-[150px] md:leading-[150px] xl:text-[200px] xl:leading-[200px] text-center font-[1000] text-white/80 drop-shadow-[0_8px_8px_rgba(116,27,71,0.8)] flex flex-col">
        <span>Leonard</span> <span>Cernik</span>
      </h1>
    </SectionContainer>
  )
}
