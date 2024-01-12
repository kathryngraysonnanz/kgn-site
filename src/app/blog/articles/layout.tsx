import styles from './page.module.scss'
import Header from "../../header"
import Link from 'next/link'

export default function ArticleLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <Header/>
            <article className={styles.article}>
              {children}
              <Link href="/blog"> ◀ Back to all blogs</Link>
            </article>
        </>
    )
  }