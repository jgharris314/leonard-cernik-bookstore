import { leonardCernik } from "@/app/constants"
import { booklist } from "@/app/static/data"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"

export default function KindleSection() {
  const kindle = booklist.filter(
    (book) => book.author === leonardCernik && book.mediaType === "kindle"
  )

  return (
    <SectionContainer
      bgClasses="bg-slate-500 h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="kindle"
    >
      <h2 className="section-header">kindle</h2>
      <BookGrid books={kindle} />
    </SectionContainer>
  )
}
