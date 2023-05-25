import './App.css'
import DisplayAurhors from './graphql/Authors/getAuthors'
import SetAuthors from './graphql/Authors/setAuthors'
// import DisplayProductions from './graphql/products/getProducts'

function App() {


  return (
    <>
        
        <DisplayAurhors />
        <SetAuthors />

    </>
  )
}

export default App
