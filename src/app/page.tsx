import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Image from 'next/image'
import profilePic from './main.jpg'
import Header from './header'

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
        <Image src={profilePic} alt="me" />
        <div className={styles.desc}>
          <h1> &gt; <b>Kathryn Grayson Nanz</b> is a Senior Developer Advocate, Front End Engineer, UI Designer, Author, Speaker, and Lifelong Learner.</h1>
          <p>
          In 2013, I graduated with a Fine Arts degree and took my first job as Junior Graphic Designer at a small, boutique ad agency in Washington, DC. While there, my Creative Director told me to never let anyone else find out that I knew how to code – he warned me that if they knew I could do it, I&apos;d be stuck doing it forever and never get to focus on print design again. I ignored his warning; turns out, he was completely right, but I&apos;ve never been happier.
          </p>
          <p>
          I currently work as a Senior Developer Advocate at Progress Software where I help people build beautiful and user-friendly interfaces, design and maintain component libraries, and stop back-end devs from writing any more CSS. I&apos;m also a graduate student, in the process of earning a Master&apos;s degree in Human-Computer Interaction. I&apos;m especially interested in React, UI design and design systems, accessibility, and creating applications and websites that center the human experience.
          </p>
          <div>
            <h3>Let me save you a Google search: 
              <a href="https://twitter.com/kathryngrayson" target="_blank"><SvgIcon icon={twitterIcon} size="large" /></a>
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
