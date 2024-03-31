import SectionContainer from "../SectionContainer"
import BookGrid from "../BookGrid"
import { getFilteredBooklist } from "./functions"
import { leonardCernik } from "@/app/constants"

export default function YoutubeSection() {
  const youtube = getFilteredBooklist(leonardCernik, "youtube")
  return (
    <SectionContainer
      bgClasses="h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="youTube"
    >
      <h2 className="section-header">youTube</h2>
      <BookGrid books={youtube} />
    </SectionContainer>
  )
}
