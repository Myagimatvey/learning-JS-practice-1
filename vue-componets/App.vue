<template>
  <users-list />
</template>

<script>
import UsersList from './componets/users-list.vue';

export default {
  data() {
    return {
      greeting: 'Привет всем!'
    }
  },
  components: {
    UsersList
  }
}

</script>

<style>

</style>
