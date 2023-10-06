import axios from "axios";

const url = 'https://651a8b6a340309952f0d7e38.mockapi.io/contacts';

export function getContacts() {
  return axios.get(url);
}

export function addContacts(text) {
  return axios.post(url, { name: text.name, phone: text.number });
}

export function deleteContacts(taskId) {
  return axios.delete(`${url}/${taskId}`);
}
