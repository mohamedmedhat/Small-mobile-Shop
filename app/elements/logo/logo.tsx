import Link from "next/link"
import styles from './logo.module.scss'

import { Lobster} from 'next/font/google'

const logoFont = Lobster({ 
    subsets: ['latin'],
    weight: ['400']
})


export default function Logo() {
  return (
    <div>
      <Link href="/" className={`${styles.logo} ${logoFont.className}`}>Shopo</Link>
    </div>
  )
}
