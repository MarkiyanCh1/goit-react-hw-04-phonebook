import React from 'react';
import { List, ContactItem } from './ContactList.styles';
import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} onDelete={onDelete} />
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
