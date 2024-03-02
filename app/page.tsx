import Image from 'next/image'
import styles from './page.module.scss'



export default function Home() {
  return (
    <div className={styles.container}>

    <div className={styles.col}>
    <h1 className={styles.title}>Your one-stop simple e-commerce</h1>
    <p className={styles.desc}>Discover the Shopping World</p>
    <button className={styles.button}>Shop Now</button>
    </div>

    <div className={styles.col} id={styles.Imgbackground}>
      <Image 
      src="/images/business1.gif"
      width={420}
      height={420}
      draggable="false"
      alt='side image'
      />
    </div> 
    </div>
  )
}
