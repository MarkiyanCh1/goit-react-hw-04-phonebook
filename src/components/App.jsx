import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };


  componentDidMount() {
    const savedContscts = localStorage.getItem('contacts');
    if (savedContscts !== null) {

      this.setState({ contacts: JSON.parse(savedContscts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(card => card.id !== contactId),
    }));
  };

  addContact = newContact => {
    const hasContact = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "0 auto", padding: "30px"}}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList items={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}


export default App
