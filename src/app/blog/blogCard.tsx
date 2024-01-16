import '@progress/kendo-theme-default/dist/all.css';
import Link from 'next/link'
import styles from './page.module.scss'

import { Card, CardBody, CardTitle, CardSubtitle  } from "@progress/kendo-react-layout"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

export default function BlogCard(props: { link: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; snippet: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {

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
