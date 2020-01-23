export const SEND_TO_FIRST = 'SEND_TO_FIRST';
export const SEND_TO_SECOND = 'SEND_TO_SECOND';

export const sendToFirst = (item, index) => ({
  type: SEND_TO_FIRST,
  item,
  index
});

export const sendToSecond = (item, index) => ({
  type: SEND_TO_SECOND,
  item,
  index
});
