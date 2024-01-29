'use client'
import styles from './button.module.css'
import {Bitter} from 'next/font/google'

const buttonFont =Bitter({
    subsets: ['latin'],
    weight: ['400']
})

export default function Button() {
return (
    <div>
    <button
    onClick={()=>{
        console.log("LogOut");
    }}
    className={`${styles.button} ${buttonFont.className}`}
    >LogOut</button>
    </div>
)
}
