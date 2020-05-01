export const setDate = (date) => {
  Date.now = jest.fn(() => Date.parse(date));
};
