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
      'The Mobile Developer Cohort at Bangkit Academy is an intensive program from February to July 2024, focused on Android development and integrating machine learning into Android apps. Participants will work on hands-on projects and receive expert mentorship, culminating in a robust portfolio of Android applications.',
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
