<template>
    <div class="chat container">
        <h2 class="center teal-text" >Palak Chat </h2>
        <div class="card">
            <div class="card-container">
                <ul class="message">
                    <li>
                        <span class="teal-text">Name : {{this.name}}</span>
                        <span class="grey-text text-darken-3">Message</span>
                        <span class="grey-text time">Time: </span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <input type="text"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Chat',
  props: {
    name: String
  },
  data () {
    return {}
  }
}
</script>
<style>
.chat h2 {
    font-size: 1.6rem;
    margin-top: 2rem;
}
.chat .time {
    display: block;
    font-size: 1rem;
}
</style>
