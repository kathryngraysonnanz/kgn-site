'use client'

import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Header from '../_header'
import { Card, CardBody, CardSubtitle, CardTitle } from '@progress/kendo-react-layout';
import Link from 'next/link';

export default function BooksCourses() {

  return (
    <>
    <Header/>
    <main className={styles.main}>
      <h1>Books & Courses</h1>
      <p></p>
      <p>Full disclosure: I&apos;d love to write a traditionally published book. If that&apos;s something you&apos;re also intersted in, <a href="mailto:kathrynkaygrayson@gmail.com">shoot me an email!</a></p>
        <div className={styles.eventCardWrapper}>
            <Card className={styles.card}>
            <CardBody>
                <CardTitle><h2>Free E-Book</h2>
                <Link href={'https://www.telerik.com/campaigns/design-story/ebook--foundations-of-design-for-developers'}>
                    <h3>Foundations of Design for Developers</h3></Link></CardTitle>
                    <CardBody>
                        <p>Some believe if you&apos;re not born with a gift for design, you&apos;ll never be able to effectively work with it. This is false. Design is a science-based skill that can be learned by anyone - including you! The &quot;Foundations of Design for Developers&quot; eBook will help you gain a solid grasp of the design fundamentals every engineer needs to know. Many engineers and developers are interested in learning design but discouraged by the mountain of information available.Finish the eBook and you&apos;ll be well-equipped to bridge the gap between design and development, and </p>
                        <ul>
                            <li>Understand why design decisions are made and what your designer was working towards. </li>
                            <li>Collaborate and find compromises where you may have previously found only frustration.</li>
                            <li>Add that elusive design touch to your projects.</li>
                           <li> Build polished software interfaces with smooth UX. </li>
                        </ul>
                      
                    </CardBody>
            </CardBody>
        </Card>
         <Card className={styles.card}>
            <CardBody>
                <CardTitle><h2>Free E-Book</h2>
               
                    <h3>Foundations of UX for Developers</h3></CardTitle>
                    <CardBody>
                        <p>Coming soon!</p>
                      
                    </CardBody>
            </CardBody>
        </Card>
          <Card className={styles.card}>
            <CardBody>
                <CardTitle><h2>O&apos;Reilly On-Demand Course</h2>
                <Link href={'https://www.oreilly.com/library/view/usability-testing-for/0636920975267/'}>
                    <h3>Usability Testing for Non-UX Professionals: Connect with Users, Test and Improve Your Products, and Get Better at Your Job as a Product Manager, Developer, or Engineering Manager</h3></Link></CardTitle>
                    <CardBody>
                        <p>In an ideal world, usability testing might be considered exclusively the job responsibility of UX designers or researchers. However, for many of us and for various reasons, that just isn&apos;t a reality. No matter what the situation is, running basic usability tests is something everyone is completely capable of—and it comes with the bonus of making us better at our own jobs, as well, by better understanding our users.</p>
                        <p>In this course, we&apos;ll discuss finding participants, thinking through the testing logistics, writing and facilitating a usability test, and reviewing the data. Each learner will get the chance to write a usability testing script for a feature in their own website or application that they&apos;d like to test. Then, they&apos;ll be challenged to practice usability tests with those scripts to get hands-on experience facilitating tests. Learners will leave this course feeling empowered and confident to start a usability testing program at their own workplace!</p>
                      
                    </CardBody>
            </CardBody>
        </Card>
        </div>
    </main>
    </>
  )
}
