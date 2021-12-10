import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from "./components/Head" 

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Shopify <a href="#">Payment Extentions - Powered By PP</a>
        </h1>

      </main>

    
    </div>
  )
}

export default Home
