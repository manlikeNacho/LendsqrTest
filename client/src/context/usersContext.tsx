import { createContext, useContext, useState } from "react";

export interface User {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
  };
  email: string;
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  userName: string;
}

interface UsersContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UsersContext = createContext<UsersContextType> ({
    users: [],
    setUsers: ()=> {},
})

export const useUsersContext = () => useContext(UsersContext)

export const UsersContextProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const [users, setUsers] = useState<User[]>([])

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
          {children}
        </UsersContext.Provider>
      );
}

