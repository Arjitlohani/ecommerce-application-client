
import { Route, Routes } from 'react-router-dom'
import Authentication from './Authentication'
import Dashboard from './Dashboard/admin/Dashboard'
import AddCategory from './category/AddCategory'
import AddUsers from './users/AddUsers'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/addcategory' element={<AddCategory/>} />
        <Route path='/adduser' element={<AddUsers/>} />
    </Routes>

  )
}

export default MainRoutes
