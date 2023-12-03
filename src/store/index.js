import { createStore } from 'vuex';
import message from './message';
import count from './count';

export const store = createStore({
  modules: {
    message,
    count,
  },
});
