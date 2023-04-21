export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const normalizedFilter = selectFilter(state).toLowerCase();
  const contacts = selectContacts(state);

  return contacts.length > 0
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      )
    : [];
};
