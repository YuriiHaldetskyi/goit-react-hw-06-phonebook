import { Contacts } from './contacts/Contacts';
import { Filter } from './filter/Filter';
import { Phonebook } from './phonebook/Phonebook';

export const App = () => {
  return (
    <div>
      <Phonebook />
      <Filter />
      <Contacts />
    </div>
  );
};
