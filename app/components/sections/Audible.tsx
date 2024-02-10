import { leonardCernik } from "@/app/constants"
import { booklist } from "@/app/static/data"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"

export default function AudibleSection() {
  const audible = booklist.filter(
    (book) => book.author === leonardCernik && book.mediaType === "audible"
  )

  return (
    <SectionContainer
      bgClasses="bg-slate-500 h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="audible"
    >
      <h2 className="section-header">audible</h2>
      <BookGrid books={audible} />
    </SectionContainer>
  )
}
