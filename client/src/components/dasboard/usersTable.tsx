import './usertable.style.scss';
import { useEffect, useState } from "react";
import { filterIcon, nextBtn, prevBtn } from "../../static";
import Spinner from '../spinner/spinner';
import axios from 'axios';
import usePagination from '../../utils/pagination';
import Modal from '../modal/modal';
import FilterModal from './filterModal';
import { UsersInterface } from '../../utils/usersFilter';
import { filterUsers } from '../../utils/usersFilter';


//FilterTab
interface filterTab {
    setShowFilterModal: (v: boolean) => void;
    setFilterDetails: (filterDetails: any) => void;
    filterDetails: any;
}

const FilterTab: React.FC<filterTab> = ({ setFilterDetails, setShowFilterModal, filterDetails }) => {
    const filterOptions = ["Organisation", "username", "email", "phone number", "date joined", "status"];

    return (
        <div className="filter-tab">
            {filterOptions.map((value, index) => (
                <div className={`filter-option ${value === 'email' ? "email":value === 'date joined'? 'date-joined':''}`} key={index} onClick={()=> (setShowFilterModal( true ))}>

                    <span className="filter-text">{value}</span>
                    <img src={filterIcon} alt="" className="filter-icon" />
                </div>
            ))}
        </div>
    );
}


//Pagination Section
interface paginationProps {
    next: () => void;
    prev: () => void;
    currentPage: number;
    maxPage: number;
    jump: (v: number) => void;
}

const PaginationTab: React.FC<paginationProps> = ({ next, prev, jump, currentPage, maxPage }) => {
    //Generates display numbers e.g 1,2,..., 8,9
    const generatePageNumbers = () => {
        const pages = [];
        if (maxPage <= 5) {
            for (let i = 1; i <= maxPage; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 3) {
                pages.push("...");
            }
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(maxPage - 1, currentPage + 1); i++) {
                pages.push(i);
            }
            if (currentPage < maxPage - 2) {
                pages.push("...");
            }
            pages.push(maxPage);
        }
        return pages;
    }

    const pages = generatePageNumbers();

    return (
        <div className="pagination-wrapper">
            <img src={prevBtn} alt="prev-button" className="btn" onClick={prev} />
            {pages.map((page, index) => (
                <span
                    key={index}
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => typeof page === 'number' && jump(page)}
                >
                    {page}
                </span>
            ))}
            <img src={nextBtn} alt="next-button" className="btn" onClick={next} />
        </div>
    );
}


const User: React.FC<{ user: any }> = ({ user }) => {
    return (
        <div className="user-tab">
            <span className='filter-text users-text'>{user.orgName}</span>
            <span className='filter-text users-text'>{user.userName}</span>
            <span className='filter-text users-text email'>{user.email}</span>
            <span className='filter-text users-text'>{user.phoneNumber}</span>
            <span className='filter-text users-text date-joined'>{new Date(user.createdAt).toLocaleDateString()}</span> {/* formatted date */}
            <span className='filter-text users-text'>status</span>
        </div>
    );
}






const UserTable: React.FC = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const filterDefaultProps = {
        email: "",
        userName: "",
        phoneNumber: 0,
        date: new Date(),
    };

    const [filterDetails, setFilterDetails] = useState(filterDefaultProps);
    const [allUsers, setAllUsers] = useState<UsersInterface[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UsersInterface[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
                //console.log(response.data);
                // localStorage.setItem("users", response.data)
                setAllUsers(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    // useEffect(() => {
    //     setFilteredUsers(filterUsers(allUsers, filterDetails));
    //   }, [allUsers, filterDetails]);
    const list = filteredUsers.length>0? filteredUsers: allUsers
    const {currentData, next, prev, jump, currentPage, maxPage}  = usePagination(list, 9)
    const filterOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilterDetails({...filterDetails, [name]: value})
    }

    const filterOnSubmitHandler = () =>{
        setFilteredUsers(filterUsers(allUsers, filterDetails));
        setShowFilterModal(false);
    }

    console.log(list)
    

    return (
        <div className="users-wrapper">
            <div className="table-container">
                <FilterTab setFilterDetails={setFilterDetails} setShowFilterModal={setShowFilterModal} filterDetails={filterDetails}/>
                <Modal show={showFilterModal} setShow={setShowFilterModal}><FilterModal filterDetails={filterDetails} onChange={filterOnChangeHandler} onSubmit={filterOnSubmitHandler}/></Modal>
                {loading ? <Spinner /> : (
                    <div>
                        {/* Render your table here with filteredUsers data */}
                        {
                            currentData().map((user: any) => (<User key={user.id} user={user} />))
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
