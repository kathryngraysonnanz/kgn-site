import '@progress/kendo-theme-default/dist/all.css';
import Link from 'next/link'
import styles from './page.module.scss'

import { Card, CardBody, CardTitle, CardSubtitle  } from "@progress/kendo-react-layout"

export default function BlogCard(props) {

  return (
    <>
        <Card className={styles.card}>
            <CardBody>
                <Link href={{pathname: `/blog/articles/${props.link}`}}>
                    <CardTitle><h3>{props.title}</h3></CardTitle>
                </Link>
                <CardSubtitle><p>{props.snippet}</p></CardSubtitle>
                <CardSubtitle ><p className={styles.date}>{props.date}</p></CardSubtitle>
            </CardBody>
        </Card>
    </>
  )
}
