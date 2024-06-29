import '../styling/dashboard.style.scss'
import DashboardCards from '../components/dasboard/dashboardCards'
import UserTable from '../components/dasboard/usersTable'

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
       <p>Users</p>
      <DashboardCards />
      <UserTable />
    </div>
  )
}

export default Dashboard