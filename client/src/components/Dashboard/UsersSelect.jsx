import UsersSelectOption from "./UsersSelectOption";
import styles from "../../style";

const UsersSelect = ({ usersList, id, name, teammatesList, setTeammate, teammate_number }) => {
  const { inputElement } = styles;

  const handleSelectTeammate = (e) => {
    const newTeammatesList = [...teammatesList]
    newTeammatesList[teammate_number-1] = (Number(e.target.value) === -1) 
                                            ? null 
                                            : e.target.value
    setTeammate(newTeammatesList);
  };


  return (
    <select
      name={name}
      className={`${inputElement}`}
      onChange={handleSelectTeammate}
    >
      <option value={-1}>Seleccione un compañero</option>
      {usersList.map((user) => (
        <UsersSelectOption user={user} key={user.id} />
      ))}
    </select>
  );
};

export default UsersSelect;
