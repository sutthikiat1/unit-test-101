let buffer: number[] = [];
const BuFFLEN = 3;
let write: number = 0;
let read: number = 0;

export const reset = () => {
  write = 0;
  read = 0;
  buffer = [];
};

export const put = (item: number) => {
  buffer[write++] = item;
  if (read === write - 1 && buffer[write]) read++;
  write %= BuFFLEN;
};

export const get = () => {
  let item = buffer[read++];
  read %= BuFFLEN;
  return item;
};
