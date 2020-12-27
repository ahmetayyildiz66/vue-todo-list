<template>
  <div>
    <ul v-for="task in getFilteredTasks" :key="task.id">
      <SingleCompleteTask :task="task"/>
    </ul>
  </div>
</template>

<script>
import useTask from '../hooks/task'
import SingleCompleteTask from '../components/SingleCompleteTask'

export default {
  name: 'IncompleteTasks',
  components: {
    SingleCompleteTask
  },
  setup () {
    const { getFilteredTasks } = useTask()

    return {
      getFilteredTasks
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
