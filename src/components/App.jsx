import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from '../pages/home/Home'
import Flights from '../pages/flights/Flights'
import Hotels from '../pages/hotels/Hotels'
import Authorization from '../pages/authorization/Authorization'
import NotFoundPage from '../pages/notFound/NotFoundPage'
import styles from './App.module.scss'

const App = () => (
  <Router>
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/auth' element={<Authorization />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
)

export default App
