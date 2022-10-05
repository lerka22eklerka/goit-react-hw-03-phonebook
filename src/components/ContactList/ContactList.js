import PropTypes from 'prop-types';
import { ContactPerson } from "components/ContactPerson/ContactPerson";
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map((
                { id, name, number }
            ) => (
                <ContactPerson
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </List>);
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};