import { List, Item } from 'components/contacts/contacts.styled';
import { removeContact } from 'components/redux/contactsSlice';
import { getContacts, getNameFilter } from 'components/redux/selectiors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../GlobalStyled';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getNameFilter);
  const dispatch = useDispatch();

  console.log(useSelector(getContacts));
  const getVisibleContacts = () => {
    if (!nameFilter) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  };

  const visibleContact = getVisibleContacts();
  console.log(visibleContact);
  return (
    <>
      <List>
        {visibleContact.value.map(contact => {
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
