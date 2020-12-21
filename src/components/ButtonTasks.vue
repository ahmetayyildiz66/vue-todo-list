<template>
  <div class="tasks">
      <router-link to='/' class="tasks__sub tasks__incomplete">Incomplete Tasks</router-link>
      <router-link to='/completed' class="tasks__sub tasks__complete">Complete Tasks</router-link>
  </div>
</template>

<script>
export default {
  name: 'ButtonTasks'
}
</script>

<style lang="scss" scoped>
  .tasks{
    color: $color-white;
    font-size: 1.8rem;
    margin-left: auto;

    &__sub{
      cursor: pointer;
      color: $color-gray;
      text-decoration: none;

      &:active{
        color: inherit;
      }
    }

    &__incomplete{
      margin-right: 4rem;
    }
  }

  .router-link-active{
    color: $color-white;
  }
</style>
