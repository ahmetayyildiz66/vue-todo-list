<template>
  <div>
    completed tasks - {{ getTasks }}
  </div>
</template>

<script>
import useTask from '../hooks/task'

export default {
  name: 'CompletedTasks',
  setup () {
    const { getTasks } = useTask()

    return {
      getTasks
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
