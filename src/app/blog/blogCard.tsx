import '@progress/kendo-theme-default/dist/all.css';
import Link from 'next/link'
import styles from './page.module.scss'

import { Card, CardFooter, CardBody, CardTitle, CardSubtitle  } from "@progress/kendo-react-layout"

export default function BlogCard(props) {

  return (
    <>
        <Card className={styles.card}>
            <CardBody>
                <Link href={{pathname: `/blog/articles/${props.link}`}}>
                    <CardTitle>{props.title}</CardTitle>
                </Link>
                <CardSubtitle><p>{props.snippet}</p><p>{props.date}</p></CardSubtitle>
            </CardBody>
        </Card>
    </>
  )
}
