<template>
  <a href="#" class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h2>{{ modalTitle }}</h2>
      <p>{{ item.body }}</p>
    </div>
  </a>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Modal",
  props: ['item'],
  setup(props, context) {
    const closeModal = () => {
      context.emit('close');
    }

    const modalTitle = computed (() => {
      return "ID: " + props.item.id + " | " + props.item.title;
    });

    return { modalTitle, closeModal }
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