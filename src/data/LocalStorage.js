import {DefaultAccount} from './DataList'


//a function call returnin array of objects from the local storage
export const getStorage = (name) => {
  if(localStorage.getItem(name === null)) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(name));
  }
}

export const setStorage = (name, array ) => {
  localStorage.setItem(name,JSON.stringify(array));
}

