import styles from './Navbar.module.css'
import Link from 'next/link'
import Button from '../../elements/button/button/button'
import Logo from '../../elements/logo/logo'
import {links} from './data'
import Darkmode from '../DarkmodeToggle/Darkmode'

export default function Navbar() {
return (
    <div className={styles.container}>

    <Logo />

    <div className={styles.linkss}>
        <Darkmode />
        {links.map(link =>
        <Link key={link.id} href={link.url} className={styles.link}>{link.name}</Link>
        )}

    <Button />
    </div>
    </div>
)
}
