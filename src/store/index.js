import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    entities: [],
  },
  mutations: {
    INIT_ENTITIES: (state, entities) => {
      state.entities = entities;
    },
    LIKE: (state, entity) => {
      let likedEntity = state.entities.find(
        (stateEntity) => stateEntity.id == entity.id
      );
      likedEntity.isLiked = true;
    },
    UNLIKE: (state, entity) => {
      let unlikedEntity = state.entities.find(
        (stateEntity) => stateEntity.id == entity.id
      );
      unlikedEntity.isLiked = false;
    },
  },
  actions: {
    initEntities({ commit }) {
      axios
        .get("http://localhost:3000/entities")
        .then((res) => {
          console.log(res);
          commit("INIT_ENTITIES", res.data);
        })
        .catch((err) => console.log(err));
    },
    like({ commit }, entity) {
      commit("LIKE", entity);
    },
    unlike({ commit }, entity) {
      commit("UNLIKE", entity);
    },
  },
  getters: {
    getEntities(state) {
      return state.entities;
    },
  },
});
