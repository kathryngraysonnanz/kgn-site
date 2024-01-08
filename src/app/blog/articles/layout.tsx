import styles from './page.module.scss'
import Header from "../../header"

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
            </article>
        </>
    )
  }