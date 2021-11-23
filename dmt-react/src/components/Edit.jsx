import { useState } from 'react';

const Edit = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [newName, setNewName] = useState(props.editName);
  function inputName(event) {
    setNewName(event.target.value);
  }
  return (
    <form action="" className="edit-form">
      <fieldset>
        <label htmlFor="input-name">{newName}</label>
        <input type="text" id="input-name" onChange={inputName} value={newName} />
        <button onClick={handleSubmit}>Save</button>
      </fieldset>
    </form>
  );
};

export default Edit;
