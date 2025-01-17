'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const router = usePathname()
  const navLink = [
    { name: 'Réalisations', link: '/realisations' },
    { name: 'Contact', link: '/contact' },
    { name: 'Card', link: '/card' },
  ]
  return (
    <>
      <nav className="relative before:w-[20px] before:content-[''] before:block before:border-[white] before:border-solid before:border-t-[3px] before:border-b-[3px] before:h-[10px] after:content-[''] after:block after:h-[3px] after:w-[20px] after:bg-[white] after: after:top-[50%] after:translate-y-[4px] after:translate-x-[0%]">
        <div className="flex-col hiddengit ">
          {navLink.map(({ link, name }) => (
            <Link key={name} href={link}>
              {name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="absolute top-[50%] flex flex-col items-center left-[50%] translate-x-[-50%] text-[white]">
        {navLink.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className={`${router === link ? 'bg-[black]' : ''}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  )
}
