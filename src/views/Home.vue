<template>
  <div class="home">
    <hello-world msg="Welcome to Your App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
	text-align: center;
	color: #2c3e50;
}
</style>
