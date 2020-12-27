<template>
  <div>
    completed tasks - {{ getFilteredTasks }}
  </div>
</template>

<script>
import useTask from '../hooks/task'

export default {
  name: 'CompletedTasks',
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
