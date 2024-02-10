import { leonardCernik } from "@/app/constants"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"
import { getFilteredBooklist } from "./functions"

export default function AudibleSection() {
  const audible = getFilteredBooklist(leonardCernik, "audible")

  return (
    <SectionContainer
      bgClasses="bg-cernik-bg h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="audible"
    >
      <h2 className="section-header">audible</h2>
      <BookGrid books={audible} />
    </SectionContainer>
  )
}
