const filterDefaultProps = {
    email: "",
    userName: "",
    phoneNumber: 0,
    date: new Date(),
  };

interface UsersInterface {
    email: string;
    username: string;
    phone: number;
    status: string;
    date: Date;
    orgName: string;
    createdAt: string;
    userName: string;
    phoneNumber: string;
    id: string;
  }
  
const filterUsers = (users: UsersInterface[], filterDetails: typeof filterDefaultProps) => {
    return users.filter(user => {
      const matchesEmail = filterDetails.email ? user.email.includes(filterDetails.email) : true;
      const matchesUsername = filterDetails.userName ? user.username.includes(filterDetails.userName) : true;
      const matchesPhone = filterDetails.phoneNumber ? user.phone === filterDetails.phoneNumber : true;
      const matchesDate = filterDetails.date ? new Date(user.createdAt).toDateString() === filterDetails.date.toDateString() : true;
  
      return matchesEmail || matchesUsername || matchesPhone || matchesDate;
    });
}

export {
    filterUsers
};
export type { UsersInterface };
