import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// person
function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
  // handleChange
  function handleChange(e) {
    setPerson(e.target.value);
  }
  // handleSubmit
  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}
// component PeopleList
function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
// present component
function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);