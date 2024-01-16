import '@progress/kendo-theme-default/dist/all.css';
import Link from 'next/link'
import styles from './page.module.scss'

import { Card, CardBody, CardTitle, CardSubtitle  } from "@progress/kendo-react-layout"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
import { UrlObject } from 'url';

export default function EventCard(props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; link: (any); talk: (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined)[]; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {

  return (
    <>
        <Card className={styles.card}>
            <CardBody>
                <CardTitle><h3>{props.title}</h3></CardTitle>

                { props.link && 
                  
                    <CardBody>

                      <Link href={props.link[0]}>
                        {props.talk[0]}
                      </Link>
                    <br/>
                      { props.link[1] && 
                        <Link href={props.link[1]}> 
                         {props.talk[1]}    
                        </Link>
                      }

                    </CardBody>
                  
                }

                { !props.link && 
                  <CardBody>
                   <p>{props.talk[0]}</p>

                   { !props.link && props.talk[1] && 
                      <p>{props.talk[1]}</p>
                   }
                  </CardBody>
                }


             
                <CardSubtitle ><p className={styles.date}>{props.date}</p></CardSubtitle>
            </CardBody>
        </Card>
    </>
  )
}
