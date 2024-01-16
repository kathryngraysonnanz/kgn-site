import '@progress/kendo-theme-default/dist/all.css';
import styles from './page.module.scss'
import Header from '../header'
import EventCard from './eventCard';
import { events } from './events';

export default function Speaking() {

  events.sort((a,b)=>a.date.valueOf()-b.date.valueOf());
  events.reverse(); 

  return (
    <>
    <Header/>
    <main className={styles.main}>
      <h1>Speaking Events</h1>
      <p>From newest to oldest. Recordings linked where available, courtesy of conference organizers.</p>
      <p>Interested in having me speak at your event, or on your livestream / podcast / etc? <a href="mailto:kathrynkaygrayson@gmail.com">Shoot me an email!</a></p>
    <div className={styles.eventCardWrapper}>
          <div>
            { events.map((blog, i)=>
              <EventCard 
                key={events[i].title}
                title={events[i].title} 
                talk={events[i].talk} 
                date={events[i].date.toDateString()} 
                link={events[i].link}
              />
            )}
            </div>
          </div>
    </main>
    </>
  )
}
