import SectionContainer from "../SectionContainer"

export default function HomeSection() {
  return (
    <SectionContainer
      bgClasses="bg-blue-500 h-screen transition ease-out duration-1000"
      additionalContentClasses="flex flex-col h-full w-full justify-center items-center"
      id="home"
    >
      <h1 className="">Leonard Cernik</h1>
    </SectionContainer>
  )
}
