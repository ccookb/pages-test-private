import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chubb Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Chubb Components</h1>
      </main>
    </>
    
  )
}

export default Home
