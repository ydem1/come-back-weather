const DELAY_COUNT = 1500;

export const delay = () =>
  new Promise((resolve) => setTimeout(resolve, DELAY_COUNT));
