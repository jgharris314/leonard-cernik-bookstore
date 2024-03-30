import { adAdams } from "@/app/constants"
import BookGrid from "../BookGrid"
import SectionContainer from "../SectionContainer"
import { getFilteredBooklist } from "./functions"
import { adAdmasWebsite } from "@/app/static/data"

export default function AdAdamsSection() {
  const kindleBooks = getFilteredBooklist(adAdams, "kindle")
  const audibleBooks = getFilteredBooklist(adAdams, "audible")

  const subHeaderClasses =
    "text-[20px] leading-[20px] md:text-[36px] md:leading-[36px] lg:text-[48px] lg:leading-[48px] text-center mb-4 capitalize font-bold"

  return (
    <SectionContainer
      bgClasses="min-h-screen"
      additionalContentClasses="book-section-additionalContentClasses"
      id="AD Adams"
    >
      <h2 className="section-header mb-20">AD Adams</h2>

      <h3 className={subHeaderClasses}>Audible</h3>
      <BookGrid books={audibleBooks} />
      <h3 className={`${subHeaderClasses} pt-8`}>Kindle</h3>
      <BookGrid books={kindleBooks} />

      <a
        href={adAdmasWebsite}
        target="_blank"
        className="text-[54px] font-bold text-cernik-light-blue hover:text-cernik-green underline text-center w-full my-16 underline-offset-[1rem]"
      >
        Check out more work by AD Adams
      </a>
    </SectionContainer>
  )
}
