'use client';

import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Image from 'next/image'
import profilePic from './main.jpg'
import Header from "../../header"
import ReactMarkdown from 'react-markdown'
import TestBlog from '../markdown/trendlines/trendlines.mdx'

// const blogs = require.context('../markdown', true);
// const blogList = blogs.keys().map(blog => blogs(blog));

export default function Article() {

  return (
    <>
        <Header/>
        <TestBlog/>
    </>
  )
}
