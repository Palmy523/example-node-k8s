import { post, get, del } from './serviceUtility';

export const incrementCount = () => {
  return post('increment');
}
export const decrementCount = () => {
  return post('decrement');
}
export const resetCount = () => {
  return del('increment');
}
export const getCount = () => {
  return get('increment');
}

export default {
  incrementCount,
  decrementCount,
  resetCount,
  getCount
}