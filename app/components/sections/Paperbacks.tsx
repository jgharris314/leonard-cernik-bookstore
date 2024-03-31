import { leonardCernik } from "@/app/constants"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"
import { getFilteredBooklist } from "./functions"

export default function PaperbacksSection() {
  const paperbacks = getFilteredBooklist(leonardCernik, "paperback")

  return (
    <SectionContainer
      bgClasses="h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="paperback"
    >
      <h2 className="section-header">Paperbacks</h2>
      <BookGrid books={paperbacks} />
    </SectionContainer>
  )
}
