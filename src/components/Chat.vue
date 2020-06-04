<template>
  <div class="chat container">
    <h2 class="center teal-text">Palak Chat</h2>
    <div class="card">
      <div class="card-container">
        <ul class="message" v-chat-scroll>
          <!-- consume already data from db and display it -->
          <!-- using v-for to loop the data and bind the key with id -->
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}} :</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
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
import dbFirebase from '@/firebase/init.js'
import moment from 'moment'

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
      messages: []

    }
  },
  created () {
    // print data from database to our interrface
    let ref = dbFirebase.collection('message').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      // console.log(snapshot.docChanges())
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc
          this.messages.push({
            // parse object data to array data 'messages'
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
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
  max-height: 300px;
  overflow: auto;
}
</style>
