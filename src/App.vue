<template>
  <div class="nav">
    <AppContainer />
  </div>
</template>

<script>
import AppContainer from './components/AppContainer'

export default {
  name: 'App',
  components: {
    AppContainer
  }
}
</script>

<style lang="scss">
@import './styles/sass/main.scss';

.route-enter-from,
.route-leave-to{
  opacity: 0;
  transform: translateY(-3rem);
}

.route-enter-active,
.route-leave-active{
  transition: all .3s ease;
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}
</style>
