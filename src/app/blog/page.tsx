import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Header from '../header'
import Link from 'next/link'

export default function Home() {

  return (
    <>
    <Header/>
    <main className={styles.main}>
      <Link href="/articles/trendlines">Blog</Link>
    
    </main>
    </>
  )
}
