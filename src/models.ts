export interface IDirection {
  id: number
  title: string
  description: string
  buttonText: string
  category: string
  image: string
  pageLink: string
  accent: boolean
  combine: boolean
  logos:{
      id: number
      name: string
      image: string
      link?: string
      description?: string
    }[]
}

export interface IDirectionBrands {
  id: number
  name: string
  image: string
  link?: string
  description?: string
}

export interface IContacts {
  idcon: number
  title: string
  name: string
  phone: string
  email: string
  site: string
  image: string
  city: string
}
