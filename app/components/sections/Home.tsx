import SectionContainer from "../SectionContainer"

export default function HomeSection() {
  return (
    <SectionContainer
      bgClasses="bg-blue-500 h-[50vh] transition ease-out duration-1000"
      additionalContentClasses="flex flex-col h-full w-full justify-center items-center py-4"
      id="home"
    >
      <h1 className="">Leonard Cernik</h1>
    </SectionContainer>
  )
}
