import incrementer from '../redis/incrementer';
import { ApiInitFuncType } from './apiTypes';
export enum Urls {
  INCREMENT = '/increment',
  DECREMENT = '/decrement'
}

/**
 * Mixin the incrementer API to the app
 * @type {ApiInitFuncType}
 */
export const init : ApiInitFuncType = (app) => {
  /**
   * Adds 1 to the counter value
   */
  app.post(Urls.INCREMENT, async (req, res) => {
    const count = await incrementer.increment();
    res.json({ count });
  });

  /**
   * Subtracts 1 form the counter
   */
  app.post(Urls.DECREMENT, async (req, res) => {
    const count = await incrementer.decrement();
    res.json({ count });
  });

  /**
   * Reset the counter value 
   */
  app.delete(Urls.INCREMENT, async (req, res) => {
    const [ applied, count ] = await incrementer.resetCount();
    res.json({ applied, count });
  });

  /**
   * Get the counter value  
   */
  app.get(Urls.INCREMENT, async (req, res) => {
    const count = await incrementer.getCount();
    res.json({ count });
  });
};

export default init;