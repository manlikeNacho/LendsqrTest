import { User } from "../context/usersContext";

const filterDefaultProps = {
    email: "",
    userName: "",
    phoneNumber: 0,
    date: new Date(),
  };
  
const filterUsers = (users: User[], filterDetails: typeof filterDefaultProps) => {
    return users.filter(user => {
      const matchesEmail = filterDetails.email ? user.email.includes(filterDetails.email) : true;
      const matchesUsername = filterDetails.userName ? user.userName.includes(filterDetails.userName) : true;
      const matchesPhone = filterDetails.phoneNumber ? Number(user.phoneNumber) === Number(filterDetails.phoneNumber) : true
      const matchesDate = filterDetails.date ? new Date(user.createdAt).toDateString() === filterDetails.date.toDateString() : true;
  
      return matchesEmail || matchesUsername || matchesPhone || matchesDate;
    });
}

export {
    filterUsers
};
