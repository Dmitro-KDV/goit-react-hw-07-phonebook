import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, getContacts } from "components/services";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async() => {
    const response = await getContacts();
    return response.data;
    // return await getContacts();
});

export const addContact = createAsyncThunk("contacts/addContact", async (text) => {
        const response = await addContacts(text);
        return response.data;
    }
);
  
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (taskId) => {
    const response = await deleteContacts(taskId);
    return response.data;
}
);