
import { Route, Routes } from 'react-router-dom'
import Authentication from './Authentication'
import Dashboard from './Dashboard/admin/Dashboard'
import AddCategory from './category/AddCategory'
import AddUsers from './users/AddUsers'
import Orders from './Order/Orders'
import Products from './products/Products'
import CustomerDashboard from './Customer/CustomerDashboard'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/customer-dashboard' element={<CustomerDashboard/>} />
        <Route path='/addcategory' element={<AddCategory/>} />
        <Route path='/adduser' element={<AddUsers/>} />
        <Route path='/addorder' element={<Orders/>} />
        <Route path='/addproduct' element={<Products/>} />
    </Routes>

  )
}

export default MainRoutes
