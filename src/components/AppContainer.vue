<template>
  <div class="container">
    <section class="todo-list">
      <DailyInfo />
      <ButtonTasks />
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import DailyInfo from './DailyInfo'
import ButtonTasks from './ButtonTasks'

export default {
  name: 'AppContainer',
  components: {
    DailyInfo,
    ButtonTasks
  }
}
</script>

    ButtonTasks
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
