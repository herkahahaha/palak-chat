<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="html">enter message</label>
            <input type="text" v-model="newMessage">
        </form>
    </div>
</template>

<script>
export default {
  name: 'NewMessage',
  props: ['name'],
  data () {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage () {
      console.log(this.newMessage, this.name, Date.now())
    }
  }

}
</script>
