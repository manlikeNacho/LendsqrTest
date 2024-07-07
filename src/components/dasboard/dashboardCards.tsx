

import React from 'react';
import { usersDashboardIcon, activeUsersIcon, usersLoanIcon, usersSavingsIcon } from '../../static';
import './dashboardCard.style.scss';   

interface CardsProps {
  icon: string;
  title: string;
  statistics: number;
}

const Card: React.FC<CardsProps> = ({ icon, title, statistics }) => (
  <div className="card">
    <img src={icon} alt={`${title} icon`} className="card-icon" />
    <h3 className='card-title'>{title}</h3>
    <span className='card-stats'>{statistics.toLocaleString()}</span>
  </div>
);

const DashboardCards: React.FC = () => {
  const cardData: CardsProps[] = [
    { icon: usersDashboardIcon, title: 'users', statistics: 2450 },
    { icon: activeUsersIcon, title: 'active users', statistics: 12450 },
    { icon: usersLoanIcon, title: 'users with loans', statistics: 12597 },
    { icon: usersSavingsIcon, title: 'users with savings', statistics: 1001 },
  ];

  return (
    <div className="cards-wrapper">
      {cardData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} statistics={card.statistics} />
      ))}
    </div>
  );
};

export default DashboardCards;
