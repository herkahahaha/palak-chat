<template>
    <div class="chat container">
      <h1 class="center teal-text" >Hello!</h1>
      <div class="card">
        <div class="card-content center-align">
          <form @submit.prevent="enterChat">
            <label for="name">name</label>
            <input v-model="name" type="text" placeholder="enter message">
            <p v-if="feedback" class="red-text" >{{feedback}}</p>
            <button class="btn teal">Enter Chat</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      console.log(this.name)
      if (this.name) {
        // doing something
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        // if not show this
        this.feedback = 'enter your name please'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.chat {
  max-width: 400px;
  margin-top:100px;
}
</style>
