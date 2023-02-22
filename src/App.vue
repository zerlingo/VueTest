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
    <p v-if="error">{{ error }}</p>

    <Modal v-if="showModal" :item="modalItem(openedItemId)" @close="toggleModal" />
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import List from "./components/List.vue";
import { computed, ref } from "vue";
import getList from "./composables/getList";

export default {
  name: 'App',
  components: { List, Modal },
  setup() {
    const showModal = ref(false);
    const openedItemId = ref(null);
    const request = ref('qui es');
    const { list, error, load } = getList();

    const modalItem = function (id) {
      return list.value.find((item) => item.id === id);
    }

    const toggleModal = function(value) {
      openedItemId.value = value;
      showModal.value = !showModal.value;
    };

    const searchResult = computed( () => {
      return list.value.filter((item) => item.title.includes(request.value) || item.body.includes(request.value));
    });

    const searchTitle = computed( () => {
      return "Search results for \"" + request.value + "\": " + searchResult.value.length;
    });

    load();

    return { showModal, openedItemId, request, list, error, modalItem, toggleModal, searchResult, searchTitle }
  },
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
