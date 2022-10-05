import PropTypes from 'prop-types';
import { BtnDelete, ContactBox, ContactStyled } from './ContactPerson.styled';

export const ContactPerson = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <ContactBox>
        <ContactStyled>{name}: {number}</ContactStyled>
        <BtnDelete onClick={() => onDeleteContact(id)}>Delete</BtnDelete>
      </ContactBox>
    </li>
  );
};

ContactPerson.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};