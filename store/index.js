import Vuex from "vuex";

const createStore = () =>
  new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
      nama: "andra"
    },
    getters: {
      getUom: state => state.nama
    },
    mutations: {
      setUser(state, payload) {
        state.nama = payload;
      }
    }
  });

export default createStore;
