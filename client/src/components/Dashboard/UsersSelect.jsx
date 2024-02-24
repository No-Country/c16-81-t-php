import { useEffect, useState } from "react";
import UsersSelectOption from "./UsersSelectOption";
import styles from "../../style";

const UsersSelect = ({ usersList, id, name }) => {
  const { inputElement } = styles;
  const [selected, setSelected] = useState("1");

  const handleSelectTeammate = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected])

  return (
    <select
      id={id}
      name={name}
      className={`${inputElement}`}
      value={selected}
      onChange={handleSelectTeammate}
    >
      {usersList.map((user, indexUser) => (
        <UsersSelectOption user={user} key={user.id} />
      ))}
    </select>
  );
};

export default UsersSelect;
