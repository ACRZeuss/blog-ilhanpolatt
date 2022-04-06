import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className='bg-gray-900 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <span className='kayan-cizgi-nav ml-3 text-xl'>Blog | İlhan Polat</span>
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/blog/category/dizi'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Dizi
            </a>
          </Link>
          <Link href='/blog/category/teknoloji'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Teknoloji
            </a>
          </Link>
          <Link href='https://authors.ilhanpolat.tk/'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Yazarlar
            </a>
          </Link>
          <Link href='https://photos.ilhanpolat.tk/'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Çektiğim Fotoğraflar
            </a>
          </Link>
          <Link href='/about'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Hakkımızda
            </a>
          </Link>
          <Link href='https://instagram.com/ilhn_plt01'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              <FaInstagram />
            </a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCkbwGA8JDyYzZn_CByS9X7Q'>
            <a className='kayan-cizgi-nav mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              <FaYoutube />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
