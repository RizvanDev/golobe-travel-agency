import styles from './Home.module.scss'
import MainTop from './mainTop/MainTop'
import BookingForm from './bookingForm/BookingForm'

const Home = () => {
  return (
    <div className={styles.mainPage}>
      <MainTop />
      <BookingForm />
    </div>
  )
}

export default Home
