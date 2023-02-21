<template>
  <a href="#" class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h2>{{ modalTitle }}</h2>
      <p>{{ item.body }}</p>
    </div>
  </a>
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
  },
  computed: {
    modalTitle() {
      return "ID: " + this.item.id + " | " + this.item.title;
    }
  }
}
</script>

<style scoped>
  .backdrop {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    text-decoration: none;
    color: inherit;
  }

  .modal {
    width: 40%;
    padding: 20px;
    margin: 200px auto;
    border-radius: 10px;
    background: #FFF;
  }
</style>