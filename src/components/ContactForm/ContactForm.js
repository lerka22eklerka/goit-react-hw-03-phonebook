import { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  BtnStyled,
  FormStyled,
  Input,
  LabelStyled,
  ErrorMsg,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().min(10).max(13).required(),
});

const initialValues = {
  name: ' ',
  number: '',
  id: nanoid(),
};

// const FormError = ({ name }) => {
//   return <ErrorMessage name={name}
// }

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onAddContact(values);
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormStyled autoComplete="off">
          <LabelStyled htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMsg name="name" component="div" />
          </LabelStyled>
          <LabelStyled htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?[0-9\s\-\(\)]+"
              title="You can enter only numbers, spaces and symbols. For example +380967775533"
            />
            <ErrorMsg name="number" component="div" />
          </LabelStyled>

          <BtnStyled type="submit">Add contact</BtnStyled>
        </FormStyled>
      </Formik>
    );
  }
}