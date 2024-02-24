import { NavLink } from "react-router-dom";
import styles from "../../style";

const Pagination = ({ className }) => {
  const harcodedPages = [1, 2, 3];
  const { pageItem } = styles

  return (
    <ul className={`${className} font-monse`}>
      {harcodedPages.map((harcodedPage, index) => (
        <li key={index}>
          <NavLink
            to="#"
            className={`${pageItem}`}
          >
            {harcodedPage}
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink
          to="#"
          className={`${pageItem}`}
        >
          ...
        </NavLink>
      </li>
    </ul>
  );
};

export default Pagination;
