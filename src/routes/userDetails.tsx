import React from 'react'
import '../styling/userDetails.style.scss'
import { navigateBackIcon, userDp } from '../static'
import Button from '../components/button/btn'
import { useNavigate, useParams } from 'react-router-dom'
import { User, useUsersContext } from '../context/usersContext'

function UserDetails() {
  const {id} = useParams()
  const navigate = useNavigate()
  // const { users} = useUsersContext()
  const savedUsers = localStorage.getItem("users");
  const parsedUsers = savedUsers ? JSON.parse(savedUsers) : [];
  const user = parsedUsers.find((user : User) => user.id === id)
  console.log(user)

  return (
    <div className='userDetails-wrapper'>
      <div className="navigateBack" onClick={()=> navigate(-1)}>
        <img src={navigateBackIcon} alt="/" className="" />
        <h3>Back to Users</h3>
      </div>
      {
        !user && (
          <div>User not found...</div>
        )
      }

      {
        user && (
          <div>
                  <div className="topBar">
        <h1>User Details</h1>
        <div className="topBarBtns">
          <Button variant='outlined' color='danger'>BLACKLIST USER</Button>
          <Button variant='outlined'>ACTIVATIE USER</Button>
        </div>
      </div>

      <div className="headerDetails">
        <div className="user-top-info">
          <div className="userDp">
            <img src={userDp} alt="/" className="" />
          </div>
          <div className="user-fullname">
            <span className='name'>{user.userName}</span>
            <span className='id'>{user.accountNumber}</span>
          </div>
          <div className="user-tier">
            <h3>User's Tier</h3>
            <span>....</span>
          </div>

          <div className="bank-details">
            <span className="balance">{Number(user.accountBalance).toLocaleString()}</span>
            <span className='account-details'>9912345678/Providus Bank</span>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="content">
          <span  className="content-header">Personal Information</span >
          <div className="info-wrapper">
            <div className="info">
              <span className="title">full name</span>
              <span className="value">{user.profile.firstName +" " + user.profile.lastName}</span>
            </div>
            <div className="info">
              <span className="title">phone number</span>
              <span className="value">{user.profile.phoneNumber}</span>
            </div>
            <div className="info">
              <span className="title">email address</span>
              <span className="value">{user.email}</span>
            </div>
            <div className="info">
              <span className="title">bvn</span>
              <span className="value">{user.profile.bvn}</span>
            </div>
            <div className="info">
              <span className="title">gender</span>
              <span className="value">{user.profile.gender}</span>
            </div>
            <div className="info">
              <span className="title">marital status</span>
              <span className="value">single</span>
            </div>
            <div className="info">
              <span className="title">children</span>
              <span className="value">none</span>
            </div>
            <div className="info">
              <span className="title">type of residence</span>
              <span className="value">parent's apartment</span>
            </div>
          </div>
        </div>


        <div className="content">
          <span  className="content-header">Education and Employment</span >
          <div className="info-wrapper">
            <div className="info">
              <span className="title">level of education</span>
              <span className="value">{user.education.level}</span>
            </div>
            <div className="info">
              <span className="title">employment status</span>
              <span className="value">{user.education.employmentStatus}</span>
            </div>
            <div className="info">
              <span className="title">sector of employment</span>
              <span className="value">{user.education.sector}</span>
            </div>
            <div className="info">
              <span className="title">duration of employment</span>
              <span className="value">{user.education.duration}</span>
            </div>
            <div className="info">
              <span className="title">office email</span>
              <span className="value">{user.education.officeEmail}</span>
            </div>
            <div className="info">
              <span className="title">monthly income</span>
              <span className="value">{user.education.monthlyIncome[0] + " - " + user.education.monthlyIncome[1]}</span>
            </div>
            <div className="info">
              <span className="title">loan repayment</span>
              <span className="value">{user.education.monthlyIncome[0] + " - " + user.education.monthlyIncome[1]}</span>
            </div>
          </div>
        </div>


        <div className="content">
          <span  className="content-header">Socials</span >
          <div className="info-wrapper">
            <div className="info">
              <span className="title">twitter</span>
              <span className="value">{user.socials.twitter}</span>
            </div>
            <div className="info">
              <span className="title">facebook</span>
              <span className="value">{user.socials.facebook}</span>
            </div>
            <div className="info">
              <span className="title">instagram</span>
              <span className="value">{user.socials.instagram}</span>
            </div>
          </div>
        </div>

        <div className="content">
          <span  className="content-header">Guarantor</span >
          <div className="info-wrapper">
            <div className="info">
              <span className="title">fullname</span>
              <span className="value">{user.guarantor.firstName + " " + user.guarantor.lastName}</span>
            </div>
            <div className="info">
              <span className="title">phone number</span>
              <span className="value">{user.guarantor.phoneNumber}</span>
            </div>
            <div className="info">
              <span className="title">gender</span>
              <span className="value">{user.guarantor.gender}</span>
            </div>
          </div>
        </div>


      </div>
          </div>
        )
      }


    </div>
  )
}

export default UserDetails