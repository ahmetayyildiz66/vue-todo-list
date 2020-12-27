<template>
  <div class="container">
    <section class="todo-list">
      <DailyInfo />
      <ButtonTasks />
    </section>
    <section class="new-task">
      <NewTask />
    </section>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch } from 'vue'

import DailyInfo from './DailyInfo'
import ButtonTasks from './ButtonTasks'
import NewTask from './NewTask'

import useTask from '../hooks/task'

export default {
  name: 'AppContainer',
  components: {
    DailyInfo,
    ButtonTasks,
    NewTask
  },
  setup () {
    const route = useRoute()
    const { updateState } = useTask()

    watch(() => route.path, (newValue) => {
      if (newValue === '/') {
        updateState('incomplete')
      } else {
        updateState('completed')
      }
    })
  }
}
</script>

<style lang="scss" scoped>

.container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: $size-container-width;
  height: $size-container-height;
  background-color: $color-container;
  border-radius: $size-border-radius;
  box-shadow: 0 5px 15px 5px rgba($color-black, .3);
  padding: 4rem;
}

.todo-list{
  display: flex;
  align-items: flex-start;
}
</style>
