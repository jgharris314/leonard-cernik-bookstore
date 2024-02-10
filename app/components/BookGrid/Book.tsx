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
        href={book.amazonLink}
        className="h-12 w-24 bg-[#00b4e0] text-white font-black rounded bottom-0 flex items-center justify-center border border-[#4a698c] shadow-md shadow-cernik-white/60"
        target="_blank"
      >
        Buy Now
      </a>
    </div>
  )
}
