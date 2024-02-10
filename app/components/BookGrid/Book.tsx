import Image from "next/image"
import { Book } from "../../types"

export default function BookDisplay({ book }: { book: Book }) {
  return (
    <div className="flex flex-col h-full w-full bg-white text-black items-center justify-between py-2">
      <Image
        height={100}
        width={100}
        src=""
        alt="placeholder"
        // placeholder="blur"
        // blurDataURL=""
      />
      <h3 className="font-bold text-[18px] py-4">{book.title}</h3>

      <a
        href={book.amazonLink}
        className="h-12 w-24 bg-green-500 text-white font-black rounded bottom-0 flex items-center justify-center"
      >
        Buy Now
      </a>
    </div>
  )
}