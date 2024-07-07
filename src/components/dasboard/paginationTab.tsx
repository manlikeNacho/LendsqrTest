import { nextBtn, prevBtn } from "../../static";

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

export default PaginationTab