import '@progress/kendo-theme-default/dist/all.css';
import styles from './header.module.scss'
import Link from 'next/link'

export default function Header() {

  return (
    <header className={styles.header}>
        <Link href="/" className={styles.logo}>KGN</Link>
        <div className={styles.headerNav}>
          <Link href="/blog">Blog</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/books-courses">Books & Courses</Link>
        </div>
    </header>
  )
}
