export interface ICertificate {
  title: string
  company: string
  image: string
  href: string
  type: 'course' | 'competition' | 'competence'
}

export const ICertificate = [
  {
    title: 'SMAN 1 SIKUR',
    company: '',
    type: 'competition',
  },
  {
    title: 'University of Widyagama',
    company: '',
    type: 'Education',
    description:
      'Widyagama University is one of the private universities located in the center of Malang City, East Java, Indonesia. Widyagama University was established by Yayasan Pembina Pendidikan Indonesia (YPPI) in 1971.',
    date: 'August 2022 - Now',
    url: 'https://widyagama.ac.id/',
  },
]
