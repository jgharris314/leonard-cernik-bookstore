import { leonardCernik } from "@/app/constants"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"
import { getFilteredBooklist } from "./functions"

export default function KindleSection() {
  const kindle = getFilteredBooklist(leonardCernik, "kindle")

  return (
    <SectionContainer
      bgClasses="bg-cernik-bg h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="kindle"
    >
      <h2 className="section-header">kindle</h2>
      <BookGrid books={kindle} />
    </SectionContainer>
  )
}
