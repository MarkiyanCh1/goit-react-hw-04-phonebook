import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const getSavedContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

const App = () => {

  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const visibleContacts = () => {
    return contacts.filter(item => {
      if (filter.trim() === '') {
        return contacts;
      }
      return item.name.toLowerCase().includes(filter.toLowerCase())
    });
  };

  const deleteContact = contactId => {
      setContacts(prevState => prevState.filter(card => card.id !== contactId),
    )};

  const addContact = newContact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState =>  [...prevState, { ...newContact }]);
  };

  return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "0 auto", padding: "30px"}}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList items={visibleContacts()} onDelete={deleteContact} />
      </div>
    );

  };

export default App
