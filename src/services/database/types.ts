export interface ITechnologies {
  name: string
  img: string
}
export interface IProjects {
  name: string
  video: string
  description: string
  links: {
    name: string
    ref: string
  }[]
}
