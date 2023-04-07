import PropTypes from 'prop-types';
import { List, Item } from 'components/contacts/contacts.styled';
import { removeContact } from 'components/redux/contactsSlice';
import { getContacts, getNameFilter } from 'components/redux/selectiors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../GlobalStyled';
import { useMemo } from 'react';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getNameFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    if (!nameFilter) {
      return contacts;
    }

    const clearFilter = nameFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(clearFilter)
    );
  };

  const filtredContacts = useMemo(getVisibleContacts, [contacts, nameFilter]);

  console.log(contacts, filtredContacts);
  return (
    <>
      <List>
        {filtredContacts.map(contact => {
          return (
            <Item key={contact.id}>
              <p> {contact.name} :</p>
              <p> {contact.number} </p>
              <Button
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
