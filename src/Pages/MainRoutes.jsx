
import { Route, Routes } from 'react-router-dom'
import Authentication from './Authentication'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication/>} />

    </Routes>

  )
}

export default MainRoutes
