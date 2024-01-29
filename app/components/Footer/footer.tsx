import styles from './footer.module.css'
import Image from 'next/image'
import {socialMedia} from './data'

export default function Footer() {
  return (
    <div className={styles.container}>
    &copy;2023 Shopo. All rights reserved.
    <div className={styles.social}>
      {socialMedia.map(icon =>
        <Image
        key={icon.id} 
        src={icon.url}
        width={20}
        height={20}
        className={styles.icon}
        alt={icon.alt}
    />
      )}
    </div>
    </div>
  )
}

