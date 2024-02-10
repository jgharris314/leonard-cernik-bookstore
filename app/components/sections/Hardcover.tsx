import { leonardCernik } from "@/app/constants"
import { booklist } from "@/app/static/data"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"

export default function HardcoverSection() {
  const hardcovers = booklist.filter(
    (book) => book.author === leonardCernik && book.mediaType === "hardcover"
  )

  return (
    <SectionContainer
      bgClasses="bg-slate-500 h-full"
      additionalContentClasses="book-section-additionalContentClasses"
      id="hardcover"
    >
      <h2 className="section-header">Hardcover</h2>
      <BookGrid books={hardcovers} />
    </SectionContainer>
  )
}
