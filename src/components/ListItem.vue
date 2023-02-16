<template>
  <div>
    <article @click="openModal" class="list-item">
      <h3>{{ "ID: " + item.id + " | " + item.title }}</h3>
      <p>{{ item.body }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: [
      'item'
  ],
  methods: {
    openModal() {
      this.$emit('openModal', this.item.id);
    }
  }
}
</script>

<style scoped>
  .list-item {
    cursor: pointer;
  }
</style>