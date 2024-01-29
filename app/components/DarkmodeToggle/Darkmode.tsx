"use client"
import { ThemeContext } from '@/app/context/themeContext'
import { useContext } from 'react'
import styles from './Darkmode.module.css'

export default function Darkmode() {
    const {mode, SWITCH} =useContext(ThemeContext)
return (
    <div className={styles.container} onClick={SWITCH}>
       <div className={styles.icon}>🌞</div>
       <div className={styles.icon}>🌚</div>
       <div className={styles.switcher}
            style={mode === "light" ? {left:"2.2px"}:{right:"2px"}}
       />
    </div>
)
}
