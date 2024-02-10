import { leonardCernik } from "@/app/constants"
import { booklist } from "@/app/static/data"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"

export default function PaperbacksSection() {
  const paperbacks = booklist.filter(
    (book) => book.author === leonardCernik && book.mediaType === "paperback"
  )

  return (
    <SectionContainer
      bgClasses="bg-slate-500 min-h-screen"
      additionalContentClasses="book-section-additionalContentClasses"
      id="paperback"
    >
      <h2 className="section-header">Paperbacks</h2>
      <BookGrid books={paperbacks} />
    </SectionContainer>
  )
}
