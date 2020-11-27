<template>
  <div class="realty">
    <div class="realty__item" v-for="entity of entities" :key="entity.id">
      <div class="realty__wrapper">
        <img class="realty__img" src="../assets/flat.jpg" alt="Недвижимость" />
        <div class="realty__likes">
          <img
            @click="unlikeEntity(entity)"
            v-if="entity.isLiked"
            src="../assets/home-bold-liked.svg"
            alt=""
            class="realty__like"
          />
          <img
            @click="likeEntity(entity)"
            v-else
            src="../assets/home-bold.svg"
            alt=""
            class="realty__like"
          />
        </div>
      </div>
      <div class="realty__info">
        <p class="realty__price">{{ entity.price }} &#8381;</p>
        <p class="realty__desc">
          {{ entity.rooms }}-комн. кв., {{ entity.squaring }} м
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Realty",
  data() {
    return {
      object: {
        price: 22000000,
        rooms: 5,
        squaring: 300,
        isLiked: false,
      },
    };
  },
  methods: {
    unlikeEntity(entity) {
      this.$store.dispatch("unlike", entity);
    },
    likeEntity(entity) {
      this.$store.dispatch("like", entity);
    },
  },
  created() {
    this.$store.dispatch("initEntities");
  },
  computed: {
    entities() {
      return this.$store.getters.getEntities;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.realty {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  outline: 1px solid green;
  &__item {
    border: 1px solid #ccc;
    width: 320px;
    margin: 20px;
    box-sizing: border-box;
  }
  &__wrapper {
    // outline: 1px solid green;
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  &__img {
    width: 100%;
    min-height: 200px;
  }
  &__likes {
    display: block;
    height: 40px;
    background: rgba(0, 0, 0, 0.1);
    width: 40px;
    // outline: 1px solid red;
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
  &__like {
    display: block;
    position: absolute;
    width: 40px;
  }
}
</style>
