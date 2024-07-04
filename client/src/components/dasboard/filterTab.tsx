import { filterIcon } from "../../static";

interface filterTab {
    setShowFilterModal: (v: boolean) => void;
}

const FilterTab: React.FC<filterTab> = ({ setShowFilterModal }) => {
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

export default FilterTab