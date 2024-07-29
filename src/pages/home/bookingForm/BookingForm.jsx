import { useState } from 'react'
import FlightsBooking from './flights/FlightsBooking'
import airplane from '../../../assets/icons/black-airplane.svg'
import bed from '../../../assets/icons/black-bed.svg'
import styles from './BookingForm.module.scss'

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState('flights')

  const flightsTab = activeTab === 'flights' ? [styles.tab, styles.activeTab].join(' ') : styles.tab
  const staysTab = activeTab === 'stays' ? [styles.tab, styles.activeTab].join(' ') : styles.tab

  return (
    <div className={styles.booking}>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          <button type='button' className={flightsTab} onClick={() => setActiveTab('flights')}>
            <img src={airplane} alt='airplane' />
            <span>Flights</span>
          </button>
          <button type='button' className={staysTab} onClick={() => setActiveTab('stays')}>
            <img src={bed} alt='bed' />
            <span>Stays</span>
          </button>
        </div>

        {activeTab === 'flights' && <FlightsBooking />}
      </div>
    </div>
  )
}

export default BookingForm
