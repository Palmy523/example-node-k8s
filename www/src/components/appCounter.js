
import { incrementCount, decrementCount, getCount, resetCount } from '../services/incrementService'

let vm;
export default {
  name: 'AppCounter',
  data: () => ({
    count: 0
  }),
  methods: {
    incrementCount: () => {
      console.log('incrementing count');
      incrementCount().then((res) => {
        vm.count = res.data.count;
      }).catch(vm.error);
    },
    decrementCount: () => {
      console.log('decrementing count');
      decrementCount().then((res) => {
        vm.count = res.data.count;
      }).catch(vm.error);
    },
    getCount: () => {
      console.log('getting count');
      getCount().then((res) => {
        vm.count = res.data.count;
      }).catch(vm.error);
    },
    resetCount: () => {
      console.log('resetting count');
      resetCount().then((res) => {
        vm.count = res.data.count;
      }).catch((err) => {
        vm.error(err);
      });
    },
    error: (err) => {
      console.error(err);
      vm.count = err.message;  
    }
  },
  created () {
    vm = this;
    vm.getCount();
  }
};