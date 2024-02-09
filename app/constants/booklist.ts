interface AuthorDetails {
  name: string
  additionalAuthors?: string[]
}

interface Book {
  title: string
  img: string
  author: AuthorDetails
  amazonLink: string
}

const leonardCernik: AuthorDetails = {
  name: "leonard cernik",
}

const adAdams: AuthorDetails = {
  name: "AD Adams",
}

export const booklist: Book[] = [
  {
    title: "",
    img: "",
    amazonLink: "",
    author: leonardCernik,
  },
]
