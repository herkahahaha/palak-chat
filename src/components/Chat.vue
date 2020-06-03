<template>
  <div class="chat container">
    <h2 class="center teal-text">Palak Chat</h2>
    <div class="card">
      <div class="card-container">
        <ul class="message">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">Message</span>
            <span class="grey-text time">Time:</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
          <!-- using props must be bind the properties or have ":""   -->
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>
<script>
import NewMessage from '@/components/NewMessage'
export default {
  name: 'Chat',
  components: {
    NewMessage
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style>
.chat {
  max-width: 400px;
}
.chat h2 {
  font-size: 1.6rem;
  margin-top: 2rem;
}
.chat .time {
  display: block;
  font-size: 1rem;
}
.message {
  padding: 1rem;
  margin: 0 1rem;
}
</style>
