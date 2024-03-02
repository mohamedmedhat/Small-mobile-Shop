import styles from './page.module.scss'
import Image from 'next/image'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  // fetch data
  const Product = await getData(params.id)

  return {
    title: Product.title,
    description: Product.description
  }
}


async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if(!res.ok){
      throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Post({params}) {
  const Product = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{Product.title}</h1>
          <p className={styles.desc}>{Product.price}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          className={styles.image}
          src={Product.thumbnail}
          width={1020}
          height={200}
          alt='post image'
          draggable='false'
          fill= {false}         
          />
          <span className={styles.author}>{Product.brand}</span>
        </div>
      </header>

      <div className={styles.gallery}>
        {Product.images.map(image=>(
          <Image
          key={Product.id}
          src={image}
          width={100}
          height={100}
          alt='Images of OnePage'
          />
        ))}
        </div>

      <div className={styles.content}>
        <p>{Product.description}</p>
      </div>
    </div>
  )
}
