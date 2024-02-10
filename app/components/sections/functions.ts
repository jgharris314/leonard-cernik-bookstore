import { MediaType } from "@/app/types"
import { booklist } from "@/app/static/data"

export function getFilteredBooklist(author: string, mediaType: MediaType) {
  return booklist
    .filter((book) => book.author === author && book.mediaType === mediaType)
    .sort((x, y) => {
      return x.isPromoted === y.isPromoted ? 0 : x.isPromoted ? -1 : 1
    })
}
