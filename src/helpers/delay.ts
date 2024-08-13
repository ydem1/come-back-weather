const DELAY_COUNT = 3000;

export const delay = () =>
  new Promise((resolve) => setTimeout(resolve, DELAY_COUNT));
