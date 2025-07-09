import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Image from 'next/image'
import profilePic from './main.jpg'
import Header from './_header'

import { SvgIcon } from "@progress/kendo-react-common";
import {
  twitterIcon,
  linkedinIcon,
  codeIcon,
  envelopeIcon
} from "@progress/kendo-svg-icons";

export default function Home() {

  return (
    <>
    <Header/>
    <main className={styles.main}>
      <div>
        <img src="https://kgrayson.com/_next/static/media/main.8536db4c.jpg" alt="A photo of Kathryn, speaking at an event."/>
        <div className={styles.desc}>
          <h1> &gt; <b>Kathryn Grayson Nanz</b> is a Senior Design & Developer Advocate, Front End Engineer, UI Designer, Author, Speaker, and Lifelong Learner.</h1>
          <p>
          In 2013, I graduated with a Fine Arts degree and took my first job as Junior Graphic Designer at a small, boutique ad agency in Washington, DC. While there, my Creative Director told me to never let anyone else find out that I knew how to code – he warned me that if they knew I could do it, I&apos;d be stuck doing it forever and never get to focus on print design again. I ignored his warning; turns out, he was completely right, but I&apos;ve never been happier.
          </p>
          <p>
          I currently work as a Senior Design & Developer Advocate at Progress Software where I help people build beautiful and user-friendly interfaces, design and maintain component libraries, and stop back-end devs from writing any more CSS. I&apos;m also a graduate student, in the process of earning a Master&apos;s degree in Software Systems Design and Engineering. I&apos;m especially interested in React, UI design and design systems, accessibility, and creating applications and websites that center the human experience.
          </p>
          <div>
            <h3>Let me save you a Google search: 
              <a href="https://bsky.app/profile/kgrayson.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -300 600 500" width="16" height="30"  ><path fill="#e167b1ff" d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.708-7.896-.017-2.936-1.193.516-3.707 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.45-163.25-81.433C20.15 217.613 9.997 86.535 9.997 68.825c0-88.687 77.742-60.816 125.72-24.795z"/></svg></a>
              <a href="https://www.linkedin.com/in/kathryngrayson/" target="_blank"><SvgIcon icon={linkedinIcon} size="large" /></a>
              <a href="https://github.com/kathryngraysonnanz" target="_blank"><SvgIcon icon={codeIcon} size="large" /></a>
              <a href="mailto:kathrynkaygrayson@gmail.com"><SvgIcon icon={envelopeIcon} size="large" /></a>
            </h3>
          </div>
        </div>
      </div>
    
    </main>
    </>
  )
}
