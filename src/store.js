import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate'

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    count: 0,
    postList: [],
    activePost: null
  },

  actions: {
    loadPosts({ commit }) {

      if (this.state.postList.length == 0) {
        const api = 'https://www.reddit.com/r/all/top.json?limit=50';

        Vue.axios.get(api).then((response) => {
          commit('setPosts', response.data.data.children)
        });
      }
    }
  },

  mutations: {
    setPosts(state, coins) {
      state.postList = coins
    },
    dismissSingle(state, index) {
      state.postList.splice(index, 1);
    },
    getPosts(state, index) {
      state.activePost = null;
      state.activePost = state.postList[index];
    },
    dismissAll(state) {
      state.postList = [];
      state.activePost = null;
    },
  },
});

export default store;