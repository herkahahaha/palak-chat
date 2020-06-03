<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">enter message</label>
            <input v-model="newMessage" type="text" name="name" >
            <p v-if="feedback" class="red-text">{{feedback}}</p>
        </form>
    </div>
</template>

<script>
import dbFirebase from '@/firebase/init.js'
export default {
  name: 'NewMessage',
  props: {
    name: {
      type: String
    }
  },
  components: {
    dbFirebase
  },
  data () {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    // add message into firebase
    addMessage () {
      if (this.newMessage) {
        dbFirebase.collection('message').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        }).catch(err => { console.log(err) })
        this.newMessage = null
        this.feedback = null
      } else {
        this.feedback = 'you must enter message'
      }
    //   console.log(this.newMessage, this.name)
    }
  }

}
</script>
