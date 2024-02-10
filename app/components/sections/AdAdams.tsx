import { adAdams, leonardCernik } from "@/app/constants"
import { booklist } from "@/app/static/data"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"

export default function AdAdamsSection() {
  const adAdamsBooks = booklist.filter((book) => book.author === adAdams)

  const kindleBooks = adAdamsBooks.filter((book) => book.mediaType === "kindle")
  const audibleBooks = adAdamsBooks.filter(
    (book) => book.mediaType === "audible"
  )

  return (
    <SectionContainer
      bgClasses="bg-slate-500 min-h-screen"
      additionalContentClasses="book-section-additionalContentClasses"
      id="AD%20Adams"
    >
      <h2 className="section-header">AD Adams</h2>

      <h3>Audible</h3>
      <BookGrid books={audibleBooks} />
      <h3>Kindle</h3>
      <BookGrid books={kindleBooks} />
    </SectionContainer>
  )
}
