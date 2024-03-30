import { MediaType } from "@/app/types"
import { booklist } from "@/app/static/data"

export function getFilteredBooklist(author: string, mediaType: MediaType) {
  return booklist.filter(
    (book) => book.author === author && book.mediaType === mediaType
  )
}
