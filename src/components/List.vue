<template>
  <div class="list">
    <ListItem v-for="item in list" :key="item.id" :item="item" @openModal="openChildModal" class="list__list-item" />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  name: "List",
  props: [
    'list'
  ],
  components: {ListItem},
  methods: {
    openChildModal(id) {
      this.$emit('openChildModal', id);
    }
  }
}
</script>

<style scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;
    min-height: 40px;
    padding: 20px;
    background: #42b983;
  }
</style>