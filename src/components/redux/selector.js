export const filterSelector = state => 
    state.contacts.contacts.items.filter((el) => el.name.toLowerCase().includes(state.filters.filter.toLowerCase()))

export const contactsSelector = state => state.contacts.contacts.items;