import './usertable.style.scss';
import { useEffect, useState, useMemo } from "react";
import Spinner from '../spinner/spinner';
import axios from 'axios';
import usePagination from '../../utils/pagination';
import Modal from '../modal/modal';
import FilterModal from './filterModal';
// import { UsersInterface } from '../../utils/usersFilter';
import { filterUsers } from '../../utils/usersFilter';
import PaginationTab from './paginationTab';
import FilterTab from './filterTab';
import { filterIcon } from '../../static';
import { User, useUsersContext } from '../../context/usersContext';
import { useNavigate } from 'react-router-dom';


const UsersMobileView:React.FC<{user?: any}> = ({user}) => {
    const navigate = useNavigate()

    return (
            <div className="users-card" onClick={()=> (navigate(user.id))}>
                <div className="username details">
                    <span className='title'>Username</span>
                    <span className="content">{user.userName}</span>
                </div>
                <div className="organization details">
                    <span className='title'>Organization</span>
                    <span className="content">{user.orgName}</span>
                </div>
                <div className="username details">
                    <span className='title'>Date Joined</span>
                    <span className="content">{new Date(user.createdAt).toLocaleDateString('en-US',{
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}</span>
                </div>
                <div className="username details">
                    <span className='title'>Phone Number</span>
                    <span className="content">{user.phoneNumber}</span>
                </div>
            </div>
    )
}


const UserInfo: React.FC<{ user: any }> = ({ user }) => {
    const navigate = useNavigate()
    return (
        <div className="user-tab" onClick={()=> (navigate(user.id))}>
            <span className='filter-text users-text'>{user.orgName}</span>
            <span className='filter-text users-text'>{user.userName}</span>
            <span className='filter-text users-text email'>{user.email}</span>
            <span className='filter-text users-text'>{user.phoneNumber}</span>
            <span className='filter-text users-text date-joined'>{new Date(user.createdAt).toLocaleDateString('en-US')}</span>
            <span className='filter-text users-text'>status</span>
        </div>
    );
}






const UserTable: React.FC = () => {
    const {users, setUsers} = useUsersContext()
    const [showFilterModal, setShowFilterModal] = useState(false);
    const filterDefaultProps = {
        email: "",
        userName: "",
        phoneNumber: 0,
        date: new Date(),
    };

    const [filterDetails, setFilterDetails] = useState(filterDefaultProps);
    const [error , setError] = useState<boolean>(false)
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(false)
            try {
                const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
                setUsers(response.data)
                localStorage.setItem("users", JSON.stringify(response.data))
            } catch (error) {
                setError(true)
                console.log(error);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    const list = useMemo(() => filteredUsers.length > 0 ? filteredUsers : users, [filteredUsers, users]);

    const {currentData, next, prev, jump, currentPage, maxPage}  = usePagination(list, 9)
    const filterOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilterDetails({...filterDetails, [name]: value})
    }

    const filterOnSubmitHandler = () =>{
        setFilteredUsers(filterUsers(users, filterDetails));
        setShowFilterModal(false);
    }

    if (error) (
        <div className="table-container">
            An Error occured
        </div> 
    )

    

    return (
        <div className="users-wrapper">
            <div className="users-mobile-view">
            <div className="sort-tab">
                <h2>Sort</h2>
                <img src={filterIcon} alt="/" className="" />
            </div>
                {
                    loading ? <Spinner /> : (
                        currentData().map((user: any)=> (<UsersMobileView user={user} />))
                    )
                }
            </div>
            <div className="table-container">
                <FilterTab setShowFilterModal={setShowFilterModal}/>
                <Modal show={showFilterModal} setShow={setShowFilterModal}><FilterModal filterDetails={filterDetails} onChange={filterOnChangeHandler} onSubmit={filterOnSubmitHandler}/></Modal>
                {loading ? <Spinner /> : (
                    <div>
                        {/* Render your table here with filteredUsers data */}
                        {
                            currentData().map((user: any) => (<UserInfo key={user.id} user={user} />))
                        }
                    </div>
                )}
            </div>
            <div className="users-footer">
                <PaginationTab next={next} prev={prev} jump={jump} maxPage={maxPage} currentPage={currentPage}/>
            </div>
        </div>
    );
}

export default UserTable;
