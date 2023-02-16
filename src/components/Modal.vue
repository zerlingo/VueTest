<template>
  <div @click.self="closeModal" class="backdrop">
    <div class="modal">
      <h2>{{ "ID: " + item.id + " | " + item.title }}</h2>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: [
      'item'
  ],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
  }

  .modal {
    width: 40%;
    padding: 20px;
    margin: 200px auto;
    border-radius: 10px;
    background: #FFF;
  }
</style>