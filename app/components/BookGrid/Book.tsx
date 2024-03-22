import Image from "next/image"
import { Book } from "../../types"
import { leonardCernik, leonardCernikPhotoBaseRoute } from "@/app/constants"

export default function BookDisplay({ book }: { book: Book }) {
  const mediaBaseUrl =
    book.author === leonardCernik ? leonardCernikPhotoBaseRoute : ""
  return (
    <div className="flex flex-col h-full w-full text-black items-center justify-between p-4 text-center bg-cernik-white/60 rounded">
      <Image
        height={150}
        width={150}
        src={`${mediaBaseUrl}${book.img}`}
        alt={`Cover art of ${book.title}`}
      />
      <h3 className="font-bold text-[18px] py-4">{book.title}</h3>

      <a
        href={book.link}
        className="h-12 w-28 bg-cernik-green hover:bg-cernik-light-blue text-white font-black rounded bottom-0 flex items-center justify-center border border-cernik-bg shadow-md shadow-cernik-white/60"
        target="_blank"
      >
        {book.mediaType === "youtube" ? "Listen Now" : "Buy Now"}
      </a>
    </div>
  )
}
