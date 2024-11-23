import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  note: null,
  accounts: {
    socialName: null,
    id: null,
    pass: null,
  },
  tasks: {
    task: null,
    date: null,
  },
  contacts: {
    contact: null,
    contactName: null,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setNote: (state, action) => {
      // Update note and save to localStorage
      state.note = action.payload;
      localStorage.setItem("note", action.payload);
    },
    setAccounts: (state, action) => {
      // Update accounts and save to localStorage
      const { socialName, id, pass } = action.payload;
      state.accounts = { socialName, id, pass };
      localStorage.setItem("accounts", JSON.stringify(state.accounts));
    },
    setTasks: (state, action) => {
      // Update tasks and save to localStorage
      const { task, date } = action.payload;
      state.tasks = { task, date };
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setContacts: (state, action) => {
      // Update contacts and save to localStorage
      const { contact, contactName } = action.payload;
      state.contacts = { contact, contactName };
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    }
  },
});

export const { setNote, setAccounts, setTasks, setContacts } = dataSlice.actions;

export default dataSlice.reducer;
