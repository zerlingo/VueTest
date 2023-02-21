<template>
  <div>
    <div id="app">
      <h1>Cards with modal</h1>
    </div>

    <div class="search">
      <label for="request" class="search__request-label">Search: </label>
      <input v-model="request"
             id="request"
             type="text"
             class="search__request">
      <div v-if="request" class="search__results">
        <List :list="searchResult" :title="searchTitle" @openChildModal="toggleModal" />
      </div>
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
      list: [],
      showModal: false,
      openedItemId: null,
      request: 'qui es'
    }
  },
  methods: {
    toggleModal(value) {
      console.log('3333');
      this.openedItemId = value;
      this.showModal = !this.showModal;
    },
    modalItem(id) {
      return this.list.find((item) => item.id === id);
    }
  },
  computed: {
    searchResult() {
      return this.list.filter((item) => item.title.includes(this.request) || item.body.includes(this.request));
    },
    searchTitle() {
      return "Search results for \"" + this.request + "\": " + this.searchResult.length;
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => this.list = data.slice(0,20));
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  padding: 0;
}

.search {
  padding: 0 20px;

  &__request {
    display: block;
    margin-bottom: 20px;
  }

  &__request-label {
    display: block;
    margin-bottom: 5px;
  }

  &__results {
    margin-bottom: 20px;
  }
}
</style>
