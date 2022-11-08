import {MMKV} from 'react-native-mmkv';
const mmkv = new MMKV();

const set = (key: string, value: any) => {
  if (!key || !value) {
    return;
  }
  mmkv.set(key, value);
};

const get = (key: string): string | undefined => {
  return mmkv.getString(key);
};

const deleteItem = (key: string) => {
  mmkv.delete(key);
};

const clearAll = () => {
  mmkv.clearAll();
};

let listener: any = null;
const setListener = (callback: any) => {
  listener = mmkv.addOnValueChangedListener(changedKey => {
    callback(changedKey);
  });
};

const removeListener = () => {
  if (listener) {
    listener.remove();
  }
};

const LocalStorage = {
  set,
  get,
  deleteItem,
  clearAll,
  setListener,
  removeListener,
};
export default LocalStorage;
