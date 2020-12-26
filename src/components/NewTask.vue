<template>
  <form class="new-task">
    <input type="text" v-model="name" class="new-task__input" placeholder="Enter a task..">
    <button class="new-task__add" type="button" @click="addNewTask">Add Task</button>
    <p>{{ tasks }}</p>
  </form>
</template>

<script>
import { ref } from 'vue'
import useTask from '../hooks/task'

export default {
  name: 'NewTask',
  setup () {
    const name = ref('')
    const { tasks, addNew, getTasks } = useTask()

    function addNewTask () {
      addNew(name.value)
      name.value = ''
    }

    return {
      name,
      tasks,
      addNewTask,
      getTasks
    }
  }
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
