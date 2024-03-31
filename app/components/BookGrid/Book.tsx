"use client"
import { useState } from "react"
import Image from "next/image"
import { Book } from "../../types"
import {
  adAdamsPhotoBaseRoute,
  leonardCernik,
  leonardCernikPhotoBaseRoute,
} from "@/app/constants"

export default function BookDisplay({ book }: { book: Book }) {
  const [isShowDisplay, setIsShowDisplay] = useState(false)

  const handleClick = () => {
    if (book.description) {
      setIsShowDisplay(!isShowDisplay)
    }
  }

  const mediaBaseUrl =
    book.author === leonardCernik
      ? leonardCernikPhotoBaseRoute
      : adAdamsPhotoBaseRoute

  return (
    <div
      className={`flex flex-col h-full w-full text-cernik-white items-center justify-between p-4 text-center bg-cernik-white/10 shadow-cernik-white shadow ${
        book.description &&
        "hover:shadow-cernik-white hover:shadow-md hover:bg-cernik-white/25"
      }`}
      onClick={() => handleClick()}
    >
      <div className="h-[304px] xl:h-[25rem]">
        {!isShowDisplay ? (
          <Image
            height={140}
            width={140}
            src={`${mediaBaseUrl}${book.img}`}
            alt={`Cover art of ${book.title}`}
            className="w-auto h-auto"
          />
        ) : (
          <div className="w-full h-full cernik-background-color overflow-y-auto custom-scrollbar p-4 font-semibold">
            <p className="text-left">{book?.description}</p>
          </div>
        )}
      </div>
      <h3 className="font-bold text-[18px] xl:text-[24px] py-4">
        {book.title}
      </h3>
      <a
        href={book.link}
        className="h-12 w-28 bg-cernik-light-blue hover:bg-cernik-green text-white font-black rounded bottom-0 flex items-center justify-center shadow shadow-cernik-white/60 hover:shadow-md hover:shadow-cernik-white/60"
        target="_blank"
      >
        {book.mediaType === "youtube" ? "Listen Now" : "Buy Now"}
      </a>
    </div>
  )
}
