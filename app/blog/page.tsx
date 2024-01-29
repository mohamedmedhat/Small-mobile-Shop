import Link from "next/link"
import styles from './page.module.css'
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


        {/* <Link href="id" className={styles.post}>
        <div className={styles.container}>
            <Image
            className={styles.image}
            src="https://images2.alphacoders.com/101/thumb-1920-1019901.jpg"
            width={350}
            height={250}
            draggable="false"
            alt=""
            />
            <div className={styles.content}>
                <h1 className={styles.text}>Memo Salad</h1>
            </div>
        </div>
        </Link>

        <Link href="id" className={styles.post}>
        <div className={styles.container}>
            <Image
            className={styles.image}
            src="https://wallpaperaccess.com/full/826922.jpg"
            width={350}
            height={250}
            draggable="false"
            alt=""
            />
            <div className={styles.content}>
                <h1 className={styles.text}>Pizza hot</h1>
            </div>
        </div>
        </Link>

        <Link href="id" className={styles.post}>
        <div className={styles.container}>
            <Image
            className={styles.image}
            src="https://backiee.com/static/wpdb/wallpapers/3840x2160/196512.jpg"
            width={350}
            height={250}
            draggable="false"
            alt=""
            />
            <div className={styles.content}>
                <h1 className={styles.text}>Kings stick</h1>
            </div>
        </div>
        </Link> */}
    

    </div>
)
}
