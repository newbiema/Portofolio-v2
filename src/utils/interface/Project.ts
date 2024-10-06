export interface IProject {
  title: string;
  image?: string; // Optional jika gambar tidak ada
  deskripsi?: string; // Optional jika deskripsi tidak ada
  type: string;
  demo?: string; // Optional jika demo tidak ada
  repo?: string; // Optional jika repository tidak ada
}

export const project: IProject[] = [
  {
    title: 'Cuy Joki',
    image: '1ay0SfZvbXcOUdaXRBCFOW8qFIMfOevk4',
    type: 'Education',
    deskripsi:
      'Cuy Joki is a task-jockey website that provides a service where individuals can hire others to complete their assignments, including writing tasks, papers, theses, and more.',
    demo: 'https://cuyjoki.vercel.app/',
    repo: 'https://github.com/newbiema/cuy-joki-v1.1',
  },

  {
    title: 'Desa Kembang Kuning',
    image: '18-MOYuKOlmEvmVke-JlXwvpbcb_sk_hv',
    type: 'Village',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo: 'https://desakembangkuning.vercel.app/',
    repo: 'https://github.com/newbiema/desakembangkuning',
  },
  {
    title: 'Sora Top Up',
    image: '1c_0e2VebS3AdVFsCfBbBPzPOE6tMd7OX',
    type: 'E-Commerce',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo : 'https://sora-top-up.vercel.app/',
    repo: 'https://github.com/newbiema/Sora-Top-Up/',
  },
  {
    title: 'Ayu Songket',
    image: '12VdXiS72Ef-azqDtRKxv8eyawlyi3BLn',
    type: 'E-Commerce',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo : 'https://ayu-songket-tetebatu.vercel.app/',
    repo: 'https://github.com/newbiema/Ayu-Songket-Website',
  },
  {
    title: 'My Playlist',
    image: '1N2Fp48tiulpkcUyb1fTcoUIOFCct_YMY',
    type: 'Music',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo: 'https://my-playlist1.vercel.app/',
    repo: 'https://github.com/newbiema/MyPlaylist',
  },
  {
    title: '12 IPS 1 v-1',
    image: '1iMOQUVynLZSPCEiN0X5jxziGdbSaTM8T',
    type: 'School',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo: 'https://xii-1-ips-smansik.vercel.app/',
    repo: 'https://github.com/newbiema/XII-1-IPS-Smansik',
  },
  {
    title: '12 IPS 1 v-2',
    image: '15by-eb5gO_XO2OTfYtKJRGCmhK8x0z0r',
    type: 'School',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo : 'https://xii-ips-1-v2.vercel.app/',
    repo: 'https://github.com/newbiema/XII-IPS-1-v2',
  },
  {
    title: 'Sukma Tailors',
    image: '1IxhD8UCkqtYtTKwXL0OVrl4dNi2OwuEC',
    type: 'E-Commerce',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo :'https://sukma-tailor.vercel.app/',
    repo: 'https://github.com/newbiema/Sukma-Tailor',
  },
  {
    title: 'Landing Hero',
    image: '1q0tfrZVvirZh1zIxPYP-Eaa3kIX6_Jum',
    type: 'E-Commerce',
    deskripsi:
      'Ayu Songket is a website for purchasing songket fabrics from North Tetebatu Village, East Lombok.',
    demo: 'https://landing-hero-peach.vercel.app/',
    repo: 'https://github.com/newbiema/Landing-Hero',
  },
];