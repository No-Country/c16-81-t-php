import styles from "../../style";
import { useEffect, useState } from "react";

const Pagination = ({ className, currentPage, setPage, totalPages,  }) => {
  const { pageItem } = styles
  const [pagination, setPagination] = useState([])
  
  const handleSetPage = (e) => {
    const selectedPage = Number(e.target.textContent)
    setPage(selectedPage)
  }

  useEffect(() => {
    setPagination(Array.from({length: totalPages}, (v, i) => i+1)) 
  }, [totalPages])

  return (
    <ul className={`${className} font-monse`}>
      {pagination.map((page, index) => (
        <li key={index}>
          <button className={`${pageItem} ${(page === currentPage) ? 'bg-activePurple': 'bg-greyPage'}`} onClick={handleSetPage} >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
