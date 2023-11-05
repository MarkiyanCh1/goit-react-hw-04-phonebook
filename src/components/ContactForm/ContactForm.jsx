import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm, Input } from './ContactForm.styles';
import { ButtonClose } from 'components/ContactCard/ContactCard.styles';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format'
    )
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string()
  .matches(
    /^\+?\d{1,4}?[ .\\-\s]?\(?\d{1,3}?\)?[ .\\-\s]?\d{1,4}[ .\\-\s]?\d{1,4}[ .\\-\s]?\d{1,9}$/,
    'Invalid number format'
  )
  .min(8, 'Too Short!').required('This field is required!'),
});

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm({
          values: {
            name: '',
            number: '',
          },
        });
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Input name="name" placeholder="Please enter your name" />
        <ErrMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Input
          name="number"
          placeholder="Please enter your number"
          type="text"
        />
        <ErrMessage name="number" component="div" />

        <ButtonClose type="submit">Add contact</ButtonClose>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
