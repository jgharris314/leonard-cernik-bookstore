export type MediaType =
  | "audible"
  | "kindle"
  | "paperback"
  | "hardcover"
  | "youtube"

export interface Book {
  title: string
  img: string
  author: string
  link: string
  mediaType: MediaType
}
