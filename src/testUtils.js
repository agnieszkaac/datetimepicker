export const setDate = (date) => {
  Date.now = jest.fn(() => Date.parse(date));
};

export const setToday = () => {
  const today = "2020-01-01";
  Date.now = jest.fn(() => Date.parse(today));
};
