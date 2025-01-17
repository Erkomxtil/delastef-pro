import Link from 'next/link'
import justMe from '../../public/just-me.png'
import Image from 'next/image'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="flex justify-between items-center m-2">
      <div>
        <Link href="/">
          <Image
            src={justMe}
            alt="Icone home"
            property="true"
            placeholder="blur"
          />
        </Link>
      </div>
      <div>Title</div>
      <Navigation />
    </header>
  )
}
