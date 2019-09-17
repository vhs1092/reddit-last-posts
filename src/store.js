import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    postList: [],
    activePost: null
  },

  actions: {
    loadPosts({ commit }) {
        const api = 'https://www.reddit.com/r/all/top.json?limit=50';
        Vue.axios.get(api).then((response) => {
          commit('setPosts', response.data.data.children)
        });
    }
  },

  mutations: {
    setPosts(state, data) {
      state.postList = data
    },
    getPosts(state, index) {
      state.activePost = null;
      state.activePost = state.postList[index];
    },
  },
});

export default store;
