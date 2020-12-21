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

</style>
