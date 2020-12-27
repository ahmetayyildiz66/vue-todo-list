<template>
    <section class="daily-info">
        <time class="daily-info__date">Monday, December 21</time>
        <span class="daily-info__task-count">{{ tasksLength }} Active Tasks</span>
    </section>
</template>

<script>
import useTask from '../hooks/task'

export default {
  name: 'DailyInfo',
  setup () {
    const { tasksLength } = useTask

    return {
      tasksLength
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-info{
    display: flex;
    flex-direction: column;
    &__date{
        font-size: 2rem;
        color: $color-white;
    }
    &__task-count{
        margin-top: .7rem;
        color: $color-turquoise;
        font-size: 1.5rem;
    }
}
</style>
