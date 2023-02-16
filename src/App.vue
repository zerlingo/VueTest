<template>
  <div>
    <div id="app">
      <h1 @click="toggleModal">{{ title }}</h1>
    </div>
    <div v-if="list">
      <List :list="list" @openChildModal="toggleModal" />
    </div>
    <div v-else>
      Список ещё не загрузился...
    </div>

    <Modal v-if="showModal" :item="modalItem(openedItemId)" @close="toggleModal" />
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import List from "./components/List.vue";

export default {
  name: 'App',
  components: {
    List,
    Modal
  },
  data() {
    return {
      title: "Cards with modal",
      list: [],
      showModal: false,
      openedItemId: null
    }
  },
  methods: {
    toggleModal(value) {
      this.openedItemId = value;
      this.showModal = !this.showModal;
    },

    modalItem(id) {
      return this.list.find((item) => item.id === id);
    }
  },
  computed: {
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => this.list = data);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
