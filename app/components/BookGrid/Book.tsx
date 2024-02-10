import Image from "next/image"
import { Book } from "../../types"
import { leonardCernik, leonardCernikPhotoBaseRoute } from "@/app/constants"

export default function BookDisplay({ book }: { book: Book }) {
  const mediaBaseUrl =
    book.author === leonardCernik ? leonardCernikPhotoBaseRoute : ""
  return (
    <div className="flex flex-col h-full w-full bg-white text-black items-center justify-between p-4 text-center bg-white/40 rounded">
      <Image
        height={250}
        width={250}
        src={`${mediaBaseUrl}${book.img}`}
        alt={`Cover art of ${book.title}`}
      />
      <h3 className="font-bold text-[18px] py-4">{book.title}</h3>

      <a
        href={book.amazonLink}
        className="h-12 w-24 bg-green-500 text-white font-black rounded bottom-0 flex items-center justify-center"
        target="_blank"
      >
        Buy Now
      </a>
    </div>
  )
}
