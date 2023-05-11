import './App.css'
import DisplayLocations from './graphql/locations/getLocations'
import DisplayProductions from './graphql/products/getProducts'

function App() {


  return (
    <>
        <DisplayLocations />
        <DisplayProductions />
    </>
  )
}

export default App
