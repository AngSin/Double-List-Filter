const initialState = {
  listOne: ['The Rolling Stones','The Doors','Led Zeppelin','Arctic Monkeys',
  'The Yardbirds','Aerosmith','The Who','Deep Purple',
  'The Jimi Hendrix Experience','The Kinks','The Byrds','Cream','The Police',
  'The Clash','Dr Dre','Cee-Lo'],
  //
  listTwo: ['Nirvana','Black Sabbath','Pearl Jam','Radiohead','Blondie',
  'Band of Gypsies','AC/DC','Boston','Jefferson Airplane','Blind Faith',
  'Bob Dylan','Prince','Rodriguez','B.B. King','Jack Johnson','Pink Floyd']
}

export default(state = initialState, action) => {
  let newState = {...state}
  switch(action.type) {
    case 'sendToFirst': {
      newState.listOne.splice(action.index,1);
      newState.listTwo.push(action.item)
      break;
    }
    case 'sendToSecond': {
      newState.listTwo.splice(action.index,1);
      newState.listOne.push(action.item)
      break;
    }
    default:
      return newState;
  }
  return newState;
};
