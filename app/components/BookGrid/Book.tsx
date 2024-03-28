import Image from "next/image"
import { Book } from "../../types"
import {
  adAdamsPhotoBaseRoute,
  leonardCernik,
  leonardCernikPhotoBaseRoute,
} from "@/app/constants"

export default function BookDisplay({ book }: { book: Book }) {
  const mediaBaseUrl =
    book.author === leonardCernik
      ? leonardCernikPhotoBaseRoute
      : adAdamsPhotoBaseRoute
  return (
    <div className="flex flex-col h-full w-full text-black items-center justify-between p-4 text-center bg-cernik-white/60 rounded">
      <div className="h-[26rem]">
        <Image
          height={200}
          width={250}
          src={`${mediaBaseUrl}${book.img}`}
          alt={`Cover art of ${book.title}`}
          className="w-auto h-auto"
        />
      </div>
      <h3 className="font-bold text-[18px] py-4">{book.title}</h3>
      {book.description && (
        <span className="w-full text-center text-[18px] font-semibold mb-8 max-h-[14rem] overflow-y-auto custom-scrollbar px-2">
          {book.description}
        </span>
      )}

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
