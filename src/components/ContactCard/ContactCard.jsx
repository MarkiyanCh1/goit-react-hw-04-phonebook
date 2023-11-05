import React from 'react';
import { CardWrapper, ButtonClose, InfoWrapper, Info } from './ContactCard.styles';

const ContactCard = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <CardWrapper>
    <InfoWrapper>
      <Info>{name}</Info>
      <Info>{number}</Info>
    </InfoWrapper>
      <ButtonClose onClick={() => onDelete(id)}>Delete</ButtonClose>
    </CardWrapper>
  );
};

export default ContactCard;
