import { post, get, del } from './serviceUtility';

const counterKey = 'increment';
export const incrementCount = () => {
  return post(counterKey);
}
export const decrementCount = () => {
  return post('decrement');
}
export const resetCount = () => {
  return del(counterKey);
}
export const getCount = () => {
  return get(counterKey);
}

export default {
  incrementCount,
  decrementCount,
  resetCount,
  getCount
}