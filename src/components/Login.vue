<template>
    <div class="jjjj">
      <h1>login:</h1>
      <input type="text" v-model="name">
      {{name}} {{lastName}}
    </div>
</template>

<script>
	export default {
		name: "Login",
    data() {
		  return {
		    name: 'aaaaa',
        lastName: 'bbbbb'
      }
    },
    created() {
		  console.log('login')
    }
	}
</script>

<style scoped>

</style>
