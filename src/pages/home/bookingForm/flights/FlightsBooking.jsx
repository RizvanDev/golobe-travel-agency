import { useState, useEffect, useRef } from 'react'
import Input from '../../../../components/UI/input/Input'
import FlightLists from './FlightLists'
import swapBtn from '../../../../assets/icons/swap.svg'
import styles from './FlightsBooking.module.scss'

const flights = [
  { country: 'Turkey', city: 'Istambul', code: 'IST' },
  { country: 'Maldives', city: 'Malé', code: 'MLE' },
  { country: 'Great Britain', city: 'London', code: 'LCY' },
  { country: 'Australia', city: 'Sidney', code: 'SYD' },
  { country: 'France', city: 'Paris', code: 'CDG' },
  { country: 'Japan', city: 'Tokyo', code: 'NRT' },
  { country: 'Azerbaijan', city: 'Baku', code: 'GYD' },
  { country: 'USA', city: 'New York', code: 'NYC' },
  { country: 'United Arab Emirates', city: 'Dubai', code: 'DXB' },
]

const FlightsBooking = () => {
  const [isFocusedField, setIsFocusedField] = useState({ departure: false, arrival: false })
  const [selectedFlight, setSelectedFlight] = useState({ departureFlight: '', arrivalFlight: '' })

  const departureRef = useRef(null)
  const arrivalRef = useRef(null)

  const onFocusDepartureField = () => {
    setSelectedFlight({ departureFlight: '', arrivalFlight: selectedFlight.arrivalFlight })
    setIsFocusedField({ departure: true, arrival: isFocusedField.arrival })
  }
  const onFocusArrivalField = () => {
    setSelectedFlight({ departureFlight: selectedFlight.departureFlight, arrivalFlight: '' })
    setIsFocusedField({ arrival: true, departure: isFocusedField.departure })
  }

  const onChangeDepartureFlight = e => {
    setSelectedFlight({
      departureFlight: e.target.value,
      arrivalFlight: selectedFlight.arrivalFlight,
    })
  }
  const onChangeArrivalFlight = e => {
    setSelectedFlight({
      departureFlight: selectedFlight.departureFlight,
      arrivalFlight: e.target.value,
    })
  }

  const handleClickDepartureFlight = departure => {
    setSelectedFlight({
      departureFlight: `${departure.country}, ${departure.city} ${departure.code}`,
      arrivalFlight: selectedFlight.arrivalFlight,
    })
    setIsFocusedField({ departure: false, arrival: isFocusedField.arrival })
  }
  const handleClickArrivalFlight = arrival => {
    setSelectedFlight({
      departureFlight: selectedFlight.departureFlight,
      arrivalFlight: `${arrival.country}, ${arrival.city} ${arrival.code}`,
    })
    setIsFocusedField({ departure: isFocusedField.departure, arrival: false })
  }

  const swapValues = () => {
    if (selectedFlight.departureFlight && selectedFlight.arrivalFlight) {
      setSelectedFlight({
        departureFlight: selectedFlight.arrivalFlight,
        arrivalFlight: selectedFlight.departureFlight,
      })
    }
  }

  const filteringFlights = query => {
    const oppositeFlight =
      query === selectedFlight.departureFlight
        ? selectedFlight.arrivalFlight
        : selectedFlight.departureFlight

    return flights.filter(flight => {
      const concatValue = `${flight.country}, ${flight.city} ${flight.code}`

      return !(concatValue === oppositeFlight) && flight
    })
  }

  useEffect(() => {
    const handleClickOutside = e => {
      const departureCondition = departureRef.current && !departureRef.current.contains(e.target)
      const arrivalCondition = arrivalRef.current && !arrivalRef.current.contains(e.target)

      departureCondition && setIsFocusedField(prevState => ({ ...prevState, departure: false }))
      arrivalCondition && setIsFocusedField(prevState => ({ ...prevState, arrival: false }))
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <form className={styles.form}>
      {/* departure field block */}

      <div className={styles.fieldWrapper} ref={departureRef}>
        <label className={styles.field}>
          <span className={styles.helpText}>From</span>
          <Input
            className={styles.input}
            type='text'
            placeholder='Choose the departure airport'
            value={selectedFlight.departureFlight}
            onFocus={onFocusDepartureField}
            onChange={onChangeDepartureFlight}
          />
        </label>

        {isFocusedField.departure && (
          <FlightLists
            flights={filteringFlights}
            handleClickFlight={handleClickDepartureFlight}
            query={selectedFlight.departureFlight}
          />
        )}
      </div>

      {/* swap btn */}
      <button
        type='button'
        className={styles.swap}
        onClick={swapValues}
        disabled={!(selectedFlight.departureFlight && selectedFlight.arrivalFlight)}>
        <img src={swapBtn} alt='swap-icon' />
      </button>

      {/* arrival field block */}
      <div className={styles.fieldWrapper} ref={arrivalRef}>
        <label className={styles.field}>
          <span className={styles.helpText}>To</span>
          <Input
            className={styles.input}
            type='text'
            placeholder='Choose the arrival airport'
            value={selectedFlight.arrivalFlight}
            onFocus={onFocusArrivalField}
            onChange={onChangeArrivalFlight}
          />
        </label>

        {isFocusedField.arrival && (
          <FlightLists
            flights={filteringFlights}
            handleClickFlight={handleClickArrivalFlight}
            query={selectedFlight.arrivalFlight}
          />
        )}
      </div>
    </form>
  )
}

export default FlightsBooking
