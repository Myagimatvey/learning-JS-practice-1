<template>
  <section class="users">
    <h2 class="users__title">
      Список случайно сгенерированных пользователей
    </h2>
    <div class="users__wrapper">
      <ul class="users__list">
        <li class="users__list-item" v-for="item in users">
          ID пользователя:{{ item.id }} Имя пользователя:{{ item.firstName }} Фамилия пользователя:{{ item.lastName }}
        </li>

      </ul>
    </div>

  </section>
</template>

<script>
import { randomUsersOrderId } from '../../scripts/modules/objects-methods';

export default {
  name: 'users-list',
  data() {
    return {
      users: randomUsersOrderId,
    }
  }
};

</script>

<style lang="scss" scoped>

.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__wrapper {
    margin-top: 50px;
    padding: 20px;

    border: 3px solid #34a9a9;
    border-radius: 10px;
  }

  &__list-item {
    border-bottom: 1px solid #bebebe;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
