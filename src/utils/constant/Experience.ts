import { url } from 'inspector'

interface IExperience {
  title: string
  company: string
  type: string
  description: string
  date: string
}
export const experience = [
  {
    title: 'SMAN 1 SIKUR',
    company: '',
    type: 'Education',
    description:
      'SMAN 1 Sikur is a public school located in East Lombok Regency, Sikur Sub-district, Gelora Village.',
    date: 'June 2019 - April 2022',
    url: 'https://sman1sikur.sch.id/',
  },
  {
    title: 'Universty of Widyagama',
    company: '',
    type: 'Education',
    description:
      'Widyagama University is one of the private universities located in the center of Malang City, East Java, Indonesia. Widyagama University was established by Yayasan Pembina Pendidikan Indonesia (YPPI) in 1971.',
    date: 'August 2022 - Now',
    url: 'https://widyagama.ac.id/',
  },
]
