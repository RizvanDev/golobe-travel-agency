import mainPageBanner from '../../../assets/images/mainPageBanner.jpg'
import styles from './MainTop.module.scss'

const MainTop = () => {
  return (
    <section className={styles.screen}>
      <div className={styles.bg}>
        <img src={mainPageBanner} alt='banner' />
      </div>

      <h1 className={styles.pageTitle}>
        <span>Helping Others</span>
        <span>Live & Travel</span>
        <span>Special offers to suit your plan</span>
      </h1>
    </section>
  )
}

export default MainTop
