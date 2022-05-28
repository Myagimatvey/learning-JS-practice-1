<template>
  <section class="users">
    <h2 class="users__title">
      Список случайно сгенерированных пользователей
    </h2>
    <div class="content-users">
      <div class="users__content"></div>
      <form class="users__search">
        <label>
          <span class="users__search-text">Найти пользователя по ID</span>
          <input class="users__input" type="text" data-search-user-input v-model="searchValue">
        </label>
      </form>

      <div class="users__wrapper">  
        <table class="users__table">
          <thead class="users__table-head">
            <th class="users__table-column" >ID пользователя</th>
            <th class="users__table-column">Имя пользователя:</th>
            <th class="users__table-column">Фамилия пользователя:</th>
          </thead>
          <tr class="users__table-row" v-for="item in users" :key="item.id">
            <td class="users__table-column">{{ item.id }}</td>
            <td class="users__table-column">{{ item.firstName }}</td>
            <td class="users__table-column">{{ item.lastName }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { randomUsersOrderId } from '../../scripts/modules/objects-methods';

export default {
  name: 'users-list',
  data() {
    return {
      users: randomUsersOrderId,
      searchValue: ''
    }
  },
  computed: {
    filterUsers() {
      return this.users.filter(user => {
        if(this.searchValue === user.firstName) {
          return true
        }
        if(this.searchValue === user.secondname) {
          return true
        }
      })
    }
  }
};

</script>

<style lang="scss" scoped>


.users {
  $this: &;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 0 25px 0;

  background-color: #0d5796;

  &__search {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    padding: 20px;
    margin-top: 20px;
    border-radius: 15px;
    background-color: #132345;
  }

  
  &__input {
    
  }

  &__search-text {
    color: #ffffff;
    margin-right: 15px;
  }

  &__title {
    color: #ffffff;
  }

  &__wrapper {
    margin-top: 20px;
    padding: 20px;

    border-radius: 15px;
    background-color: #132345;
    box-shadow: 0px -3px 18px 2px rgba(0, 0, 0, 0.25);
  }
  &__table {
    border-spacing: 0 10px;
  }

  &__table-head {
    padding: 10px 20px 20px 20px;
  }

  &__table-row {
    #{$this}__table-column {
      background-color: #3a496a;
      &:first-child {
        border-radius: 10px 0 0 10px;
      }
      &:last-child {
        border-radius: 0px 10px 10px 0;
      }
    }
  }

  &__table-column {
    padding: 20px;
    
    
    
    color: #ffffff;
    
  }
  
}

</style>
