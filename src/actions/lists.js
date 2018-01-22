export const sendToFirst = (item, index) => {
  console.log('adding to first list: ', item);
  return {
    type: 'sendToFirst',
    item,
    index
  }
}

export const sendToSecond = (item, index) => {
  console.log('adding to second list: ', item);
  return {
    type: 'sendToSecond',
    item,
    index
  }
}
