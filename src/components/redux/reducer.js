import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { InitialState } from './initialState';
import { fetchContacts, addContact, deleteContact } from './operation';

const customArr = [fetchContacts, addContact, deleteContact]

const fn = (status) => {
    return customArr.map((el) => el[status])
}

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items = payload;
    state.contacts.error = null;
};

const handleFulfilledAdd = (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items.push(payload);
    state.contacts.error = null;
};


const handleFulfilledDelete = (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items = state.contacts.items.filter(el => el.id !== payload.id);
    state.contacts.error = null;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: InitialState,
  extraReducers: 
  
  (builder) => {
    builder
        // .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFulfilled)
        // .addCase(fetchContacts.rejected, handleRejected)
        // .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleFulfilledAdd)
        // .addCase(addContact.rejected, handleRejected)
        // .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleFulfilledDelete)
        // .addCase(deleteContact.rejected, handleRejected)
        .addMatcher(isAnyOf(...fn('pending')), handlePending)
        // .addMatcher(isAnyOf(...fn(defailtStatus.defFalse)), handleFulfilled)
        .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
  },
});

const filtersSlice = createSlice({
    name: "filters",
    initialState: InitialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
      },
    },
  });
  
export const contactsReducer = contactsSlice.reducer;
export const filtersReducer = filtersSlice.reducer;

export const {setFilter } = filtersSlice.actions;
