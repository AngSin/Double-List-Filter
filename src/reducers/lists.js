import { SEND_TO_FIRST, SEND_TO_SECOND } from '../actions/lists';

const initialState = {
  listOne: ['The Rolling Stones','The Doors','Led Zeppelin','Arctic Monkeys',
  'The Yardbirds','Aerosmith','The Who','Deep Purple',
  'The Jimi Hendrix Experience','The Kinks','The Byrds','Cream','The Police',
  'The Clash','Dr Dre','50 Cent'],
  //
  listTwo: ['Pav Dharia','Black Sabbath','Pearl Jam','Radiohead','Blondie',
  'Band of Gypsies','AC/DC','Boston','Jefferson Airplane','Blind Faith',
  'Bob Dylan','Prince','Rodriguez','B.B. King','Kanye West','Pink Floyd']
};

export default(state = initialState, action) => {
  let newState = { ...state };
  switch(action.type) {
    case SEND_TO_FIRST: {
      newState.listOne.splice(action.index,1);
      newState.listTwo.push(action.item);
      break;
    }
    case SEND_TO_SECOND: {
      newState.listTwo.splice(action.index,1);
      newState.listOne.push(action.item);
      break;
    }
    default:
      return newState;
  }
  return newState;
};
