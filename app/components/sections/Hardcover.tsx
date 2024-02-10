import { leonardCernik } from "@/app/constants"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"
import { getFilteredBooklist } from "./functions"

export default function HardcoverSection() {
  const hardcovers = getFilteredBooklist(leonardCernik, "hardcover")

  return (
    <SectionContainer
      bgClasses="bg-cernik-bg h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="hardcover"
    >
      <h2 className="section-header">Hardcover</h2>
      <BookGrid books={hardcovers} />
    </SectionContainer>
  )
}
