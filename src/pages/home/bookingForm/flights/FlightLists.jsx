import styles from './FlightsBooking.module.scss'

const FlightLists = ({ flights, handleClickFlight, query }) => {
  const highlightingLetter = (text, query) => {
    if (!query) return text

    const parts = text.split(new RegExp(`(${query})`, 'gi'))

    return parts.map((part, idx) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span className={styles.letter} key={idx}>
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  const airports = flights(query)

  return (
    <ul className={styles.dataList}>
      {airports.length > 0 ? (
        airports.map(airport => {
          return (
            <li
              key={airport.code}
              className={styles.dataItem}
              onClick={() => handleClickFlight(airport)}>
              <span className={styles.dataItemText1}>
                {highlightingLetter(airport.city, query)} ({highlightingLetter(airport.code, query)}
                )
              </span>
              <span className={styles.dataItemText2}>
                {highlightingLetter(airport.country, query)}
              </span>
            </li>
          )
        })
      ) : (
        <li className={styles.noResults}>No search results</li>
      )}
    </ul>
  )
}

export default FlightLists
