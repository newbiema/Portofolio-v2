export default function Footer() {
  return (
    <footer className="bg-[#183153] shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            {}
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
              Evan jamaq
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="https://www.linkedin.com/in/evan-jamaq-9b7159283/" className="me-4 hover:underline md:me-6">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/newbiema" className="me-4 hover:underline md:me-6">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/n4ve.666/" className="me-4 hover:underline md:me-6">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-primary-text sm:text-center">
          © {new Date().getFullYear()} . By Evan 🚀.
        </span>
      </div>
    </footer>
  )
}
