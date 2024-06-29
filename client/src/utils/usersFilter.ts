const filterDefaultProps = {
    email: "",
    username: "",
    phone: 0,
    status: "",
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
      const matchesUsername = filterDetails.username ? user.username.includes(filterDetails.username) : true;
      const matchesPhone = filterDetails.phone ? user.phone === filterDetails.phone : true;
      const matchesStatus = filterDetails.status ? user.status.includes(filterDetails.status) : true;
      const matchesDate = filterDetails.date ? new Date(user.createdAt).toDateString() === filterDetails.date.toDateString() : true;
  
      return matchesEmail || matchesUsername || matchesPhone || matchesStatus || matchesDate;
    });
}

export {
    filterUsers
};
export type { UsersInterface };
