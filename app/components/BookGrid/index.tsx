import { v4 as uuidv4 } from "uuid"
import { Book } from "../../types"
import BookDisplay from "./Book"

export default function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {books.map((book) => (
        <BookDisplay book={book} key={uuidv4()} />
      ))}
    </div>
  )
}
