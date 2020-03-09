<template>
  <section>
    <div>
      <!-- <Logo :width="350"/> -->
      <div style="text-align: center;">
        <h1>Maller<span class="green">Net</span></h1>
        <h4>Bored? Hang out at the mall.</h4>
        <p><br /></p>
        <NLink to="mall/"><button type="button" class="btn btn-primary btn-lg">Shopping</button></NLink>
        <NLink to="kiosk/"><button type="button" class="btn btn-primary btn-lg">Kiosk</button></NLink>
        <NLink to="arcade/"><button type="button" class="btn btn-primary btn-lg">Games</button></NLink>
        <NLink to="chatbox/"><button type="button" class="btn btn-primary btn-lg">Chat</button></NLink>
        <NLink to="workers/"><button type="button" class="btn btn-primary btn-lg">Workers</button></NLink>
      <br /><br /> 
      <NLink to="news/"><button type="button" class="btn btn-primary btn-lg">What's New</button></NLink>
      <NLink to="status/"><button type="button" class="btn btn-primary btn-lg">Status</button></NLink>
      
      <NLink to="settings/"><button type="button" class="btn btn-primary btn-lg">Settings</button></NLink>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import IconLink from '~/components/IconLink.vue'

export default {
  components: {
    Logo,
    IconLink
  }
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
