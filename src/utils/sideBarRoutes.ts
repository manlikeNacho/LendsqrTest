import { 
    auditLogsIcon,
    bankIcon,
    briefcaseIcon,
    coinStackIcon,
    feesIcon,
    guarantorsIcon,
    handshakeIcon,
    karmaIcon,
    loanRequestIcon,
    moneyRequestIcon,
    piggyBankIcon,
    preferencesIcon,
    reportsIcon,
    servicesIcon,
    settlementIcon,
    trsfIcon,
    usercheckIcon,
    userCogIcon,
    usersIcon    
 } from "../static";


 export interface routes {
    to: string;
    img: string;
    text: string;
 }


 export const customerRoutes = [
    {
      to: "/dashboard/users",
      img: usersIcon,
      text: "Users",
    },
    {
      to: "/dashboard/users",
      img: guarantorsIcon,
      text: "Guarantors",
    },
    {
      to: "/dashboard/users",
      img: moneyRequestIcon,
      text: "Loans",
    },
    {
      to: "/dashboard/users",
      img: handshakeIcon,
      text: "Decision Models",
    },
    {
      to: "/dashboard/users",
      img: piggyBankIcon,
      text: "Savings",
    },
    {
      to: "/dashboard/users",
      img: loanRequestIcon,
      text: "Loan Request",
    },
    {
      to: "/dashboard/users",
      img: usercheckIcon,
      text: "WhiteList",
    },
    {
      to: "/dashboard/users",
      img: karmaIcon,
      text: "Karma",
    },
  ];



  export const businessRoutes = [
    {
      to: "/dashboard/users",
      img: briefcaseIcon,
      text: "Organization",
    },
    {
      to: "/dashboard/loan-product",
      img: loanRequestIcon,
      text: "Loan Products",
    },
    {
      to: "/dashboard/loan-product",
      img: bankIcon,
      text: "Savings Products",
    },
    {
      to: "/dashboard/fees-charges",
      img: coinStackIcon,
      text: "Fees and Charges",
    },
    {
      to: "/dashboard/transaction",
      img: trsfIcon,
      text: "Transactions",
    },
    {
      to: "/dashboard/service",
      img: servicesIcon,
      text: "Services",
    },
    {
      to: "/dashboard/service-account",
      img: userCogIcon,
      text: "Service Account",
    },
    {
      to: "/dashboard/settlements",
      img: settlementIcon,
      text: "Settlements",
    },
    {
      to: "/dashboard/reports",
      img: reportsIcon,
      text: "Reports",
    },
  ];


  export const settingsRoutes = [
    {
      to: "/dashboard/preferences",
      img: preferencesIcon,
      text: "Preferences",
    },
    {
      to: "/dashboard/pricings",
      img: feesIcon,
      text: "Fees and Pricing",
    },
    {
      to: "/dashboard/audit",
      img: auditLogsIcon,
      text: "Audit Logs",
    },
  ];