<template>
  <v-app id="root">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum earum expedita, ipsam laudantium molestias necessitatibus nisi quos similique sit ullam voluptate voluptatem, voluptates! Cumque est excepturi iusto neque similique?</span>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'host',
  components: {
  }
})
export default class App extends Vue {
  checkbox = true
  date = ''
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
