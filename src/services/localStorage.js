export const load = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const save = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);

    return undefined;
  } catch (error) {
    return undefined;
  }
};
