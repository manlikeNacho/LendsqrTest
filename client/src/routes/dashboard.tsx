import '../styling/dashboard.style.scss'
import DashboardCards from '../components/dasboard/dashboardCards'

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
       <p>Users</p>
      <DashboardCards />
    </div>
  )
}

export default Dashboard