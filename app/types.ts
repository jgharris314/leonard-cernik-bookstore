export type MediaType = "audible" | "kindle" | "paperback" | "hardcover"

export interface Book {
  title: string
  img: string
  author: string
  amazonLink: string
  mediaType: MediaType
  isPromoted: boolean
}
