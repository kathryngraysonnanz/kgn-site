import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Header from '../header'

import { Timeline } from '@progress/kendo-react-layout';
import { events } from './events';


export default function Speaking() {

  events.sort((a,b)=>a.date-b.date);
  events.reverse(); 

  return (
    <>
    <Header/>
    <main className={styles.main}>
      <Timeline
          events={events}
          alterMode={false}
          collapsibleEvents={false}
        />
    </main>
    </>
  )
}
