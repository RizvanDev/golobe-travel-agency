import styles from './FlightsBooking.module.scss'

const FlightLists = ({ flights, handleClickFlight }) => {
  return (
    <ul className={styles.dataList}>
      {flights().map(airport => {
        return (
          <li
            key={airport.code}
            className={styles.dataItem}
            onClick={() => handleClickFlight(airport)}>
            <span className={styles.dataItemText1}>
              {airport.city} ({airport.code})
            </span>
            <span className={styles.dataItemText2}>{airport.country}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default FlightLists
