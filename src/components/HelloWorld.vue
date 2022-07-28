<template>
  <div class="hello">
    <h1 @click="onClick">{{ msg }}</h1>
    <p>Compiled successfully</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getToken } from '@/service/login'
import { AppModule } from '@/store/modules/app'

@Component({
  name: 'HelloWorld',
  components:{
		
  }
})
export default class extends Vue {
	msg:string = 'Chrome43+ / vue + ts'

	mounted(){
	  // this.msg = AppModule.msg
	  console.log('create',AppModule.msg)
	}
	async onClick(){
	  // const res = await getToken({})
	  AppModule.setMsg('hello store')
	  this.msg = AppModule.msg
	}
	
}

</script>

<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
