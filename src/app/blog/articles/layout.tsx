'use client'

import styles from './page.module.scss'
import Header from "../../_header"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import blogIndex from '../blogindex.json'

export default function ArticleLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {

    const path = usePathname();

    const segment = path.split('/').filter(Boolean).pop(); 
    
    const post = blogIndex.find((p) => p.link === segment);

    console.log(post)

    return (
        <>
            <Header/>
            <article className={styles.article}>
              {post && <h1>{post.title}</h1>} 
              {post && <p><i>Last updated: {post.published}</i></p>}
              {children}
              <Link href="/blog"> ◀ Back to all blogs</Link>
            </article>
        </>
    )
  }