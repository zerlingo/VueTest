<template>
  <div class="list">
    <h2 v-if="title" class="list__title">{{ title }}</h2>
    <div v-if="list.length" class="list__content">
      <ListItem v-for="item in list" :key="item.id" :item="item" class="list__list-item" @openModal="openChildModal" />
    </div>
    <div v-else class="list__empty">
      <p>We found nothing :(</p>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  name: "List",
  props: [
    'title', 'list'
  ],
  components: {ListItem},
  methods: {
    openChildModal(id) {
      console.log('2222');
      this.$emit('openChildModal', id);
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    padding: 20px;
    background: #42b983;

    &__content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-template-rows: auto;
      grid-gap: 20px;
      min-height: 40px;
    }

    &__title {
      margin-top: 0;
      padding: 0;
    }
  }
</style>