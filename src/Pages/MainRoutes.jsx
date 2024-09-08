
import { Route, Routes } from 'react-router-dom'
import Authentication from './Authentication'
import Dashboard from './Dashboard'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>

  )
}

export default MainRoutes
