<template>
  <li class="single-task">
    <span class="single-task__icon-checkmark" @click="onCheckmark"><IconCheckmark color="#8D9196" /> </span>
    <h4 class="single-task__name">{{ task.name }}</h4>
    <span class="single-task__icon-trash" @click="onTrashIcon"><IconTrash color="#8D9196"/></span>
  </li>
</template>

<script>
import IconCheckmark from '../icons/checkmark.svg'
import IconTrash from '../icons/trash.svg'
import useTask from '../hooks/task'

export default {
  name: 'SingleCompleteTask',
  props: {
    task: Object
  },
  components: {
    IconCheckmark,
    IconTrash
  },
  setup (props) {
    const { completeIncomplete, removeTask } = useTask()

    function onCheckmark () {
      completeIncomplete(props.task, 'completed')
    }

    function onTrashIcon () {
      removeTask(props.task.id)
    }

    return {
      props,
      onCheckmark,
      onTrashIcon
    }
  }
}
</script>

<style lang="scss" scoped>
.single-task{
  list-style: none;
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid $color-white;

  &__icon-checkmark{
    margin-right: 2rem;

    &:hover svg path, &:hover{
      stroke: $color-light-green;
      cursor: pointer;
    }
  }

  &__icon-trash{
    margin-left: auto;

    &:hover{
      cursor: pointer;
      stroke: $color-indian-red;
    }
  }

  &__name{
    color: $color-white;
  }
}
</style>
