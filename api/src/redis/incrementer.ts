import * as redis from 'async-redis';
import { createClient } from './redis';

const client = createClient();
client.set('count', 0);

// async-redis multi client await doesn't work so we have to 
// resolve it using promises
const execMultiClient = (multiClient : any) : Promise<any> => {
  return new Promise((res, rej) => {
    multiClient.exec((err, replies) => {
      if(err) {
        rej(err);
      }
      res(replies);
    });
  });
}

/**
 * incr count key by 1
 * @return {Promise<number>} Promise that resolves to the current count
 */
const increment = async () : Promise<number> => {
  return client.incr('count');
}

/**
 * decr count key by 1
 * @return {Promise<number>} Promise that resolves to the current count
 */
const decrement = async () : Promise<number> => {
  return client.decr('count');
}

/**
 * gets the current count
 * @return {Promise<number>} Promise that resolves to the current count
 */
const getCount = async() : Promise<number> => {
  return client.get('count');
}

/**
 * resets the count to 0
 * @return {Promise<[string, number]>} Promise that resolves to an array where the 1st index is the set status and second is the current count
 */
const resetCount = async () : Promise<[string, number]> => {
  const multiClient = client.multi();
  multiClient.set('count', 0);
  multiClient.get('count');
  return execMultiClient(multiClient);
}

export default {
  increment,
  decrement,
  getCount,
  resetCount
}