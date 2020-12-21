<template>
  <form class="new-task">
    <input type="text" class="new-task__input" placeholder="Enter a task..">
    <button class="new-task__add" type="button">Add Task</button>
  </form>
</template>

<script>
export default {
  name: 'NewTask'
}
</script>

<style lang="scss" scoped>
.new-task{
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &__input{
    height: 4rem;
    width: 40%;
    margin-right: 1rem;
    padding-left: 1rem;
  }

  &__add{
    padding: .8rem 2rem;
    color: $color-white;
    background-color: $color-turquoise;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 5px;

    &:active{
      outline: none;
      border: none;
    }
  }
}
</style>
