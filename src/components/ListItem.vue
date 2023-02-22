<template>
  <div>
    <article class="list-item">
      <a href="#" class="list-item__link" @click="openModal">
        <h3 class="list-item__title">{{ itemTitle }}</h3>
        <p>{{ item.body }}</p>
      </a>
    </article>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ListItem",
  props: ['item'],
  setup(props, context) {
    const openModal = () => {
      context.emit('openModal', props.item.id);
    };

    const itemTitle =  computed(() => {
      return "ID: " + props.item.id + " | " + props.item.title;
    });

    return { openModal, itemTitle }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {

    &__link {
      display: block;
      padding: 20px;
      border-radius: 10px;
      color: inherit;
      text-decoration: none;
      background: rgba(255,255,255, 0.1);
      cursor: pointer;

      &:hover {
        background: rgba(255,255,255, 0.15);
      }
    }

    &__title {
      margin-top: 0;
    }
  }
</style>