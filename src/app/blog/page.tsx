import '@progress/kendo-theme-default/dist/all.css';
import Header from '../header'
import Link from 'next/link'
import styles from './page.module.scss'
import blogData from './blogindex.json'
import BlogCard from './blogCard';

export default function Blog() {

  blogData.sort((a,b)=>Date.parse(a.published)-Date.parse(b.published));
  blogData.reverse(); 

  return (
    <>
    <Header/>
      <main className={styles.blogCardWrapper}>
          { blogData.map((blog, i)=>
            <BlogCard 
              title={blogData[i].title} 
              snippet={blogData[i].snippet} 
              date={blogData[i].published} 
              link={blogData[i].link}
            />
          )}
      </main>
    </>
  )
}


