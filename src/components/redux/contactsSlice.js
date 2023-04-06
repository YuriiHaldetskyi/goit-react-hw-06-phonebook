import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nanoid() } };
      },
    },
    removeContact(state, action) {
      return state.filter(state => state.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
