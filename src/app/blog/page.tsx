import '@progress/kendo-theme-default/dist/all.css';
import Header from '../header'
import styles from './page.module.scss'
import blogData from './blogindex.json'
import BlogCard from './blogCard';

export default function Blog() {

  blogData.sort((a,b)=>Date.parse(a.published)-Date.parse(b.published));
  blogData.reverse(); 

  return (
    <>
    <Header/>
      <main className={styles.blog}>
        <h1>Blogs</h1>
        <p>Organized from newest to oldest. For KendoReact tutorials and other KendoUI-specific writing, check out <a href="https://www.telerik.com/blogs/author/kathryn-grayson-nanz">Telerik Blogs.</a> </p>
        <p>Interested in a writing collaboration? <a href="mailto:kathrynkaygrayson@gmail.com">Shoot me an email!</a></p>
        <div className={styles.blogCardWrapper}>
          <div>
            { blogData.map((blog, i)=>
              <BlogCard 
                key={blogData[i].title}
                title={blogData[i].title} 
                snippet={blogData[i].snippet} 
                date={blogData[i].published} 
                link={blogData[i].link}
              />
            )}
            </div>
          </div>
      </main>
    </>
  )
}


