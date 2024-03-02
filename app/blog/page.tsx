import Link from "next/link"
import styles from './page.module.scss'
import Image from 'next/image'
import  { Metadata } from 'next'

export const metadata :Metadata = {
    title: 'Shopo - Blogs',
    description: 'simple shop gives articles about some products',
}

async function getData() {
    const res = await fetch("https://dummyjson.com/products")
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Blogs() {
    const dataProducts = await getData()
    //because the items was object not array
    const products = dataProducts.products

    
return (
    <div className={styles.mainContainer}>

        {products.map(product =>(
            <Link href={`/blog/${product.id}` }className={styles.post} key={product.id}>
            <div className={styles.container}>
                <Image
                className={styles.image}
                src={product.thumbnail}
                width={300}
                height={250}
                draggable="false"
                alt=""
                />
                <div className={styles.content}>
                    <h1 className={styles.text}>{product.title}</h1>
                    <p className={styles.desc} >{product.description}</p>
                </div>
            </div>
            </Link>
        ))}
    </div>
)
}
