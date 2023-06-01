import Header from '@/components/Header/Header';
import styles from "./page.module.scss";
import React from 'react'

export default function Home() {
  return (
     <div className={styles.main_content}>
      <Header></Header>
     </div>
  )
}
 