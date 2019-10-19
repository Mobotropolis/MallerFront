<template>
  <div class="container-fluid">
    <div>
      <h1>Mall South</h1>
      <p>Mall South is the Service Wing. You can improve your worker's condition. </p>

      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south/welcomecenter"><button type="button" class="btn btn-primary btn-lg btn-block">Welcome Center</button></NLink></div>
        <div class="col-sm-9">A prize every day just for coming to the mall.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south/pharmacy"><button type="button" class="btn btn-primary btn-lg btn-block">Pharmacy</button></NLink></div>
        <div class="col-sm-9">Workers not feeling good? Maybe this'll help.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south/jobs"><button type="button" class="btn btn-primary btn-lg btn-block">Jobs Board</button></NLink></div>
        <div class="col-sm-9">Everyone has a little something to do.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south/salon"><button type="button" class="btn btn-primary btn-lg btn-block">The Salon</button></NLink></div>
        <div class="col-sm-9">Fix up your worker's appearance.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south/fitness"><button type="button" class="btn btn-primary btn-lg btn-block">Fitness Center</button></NLink></div>
        <div class="col-sm-9">Fix up your worker's condition.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south/daily"><button type="button" class="btn btn-primary btn-lg btn-block">Snowball Melt</button></NLink></div>
        <div class="col-sm-9">Stuff for Christmas.</div>
      </div>

      <p><NLink to="lobby"><button type="button" class="btn btn-primary btn-lg btn-block">Back to Lobby</button></NLink></p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: (process.server ? 'server' : 'client')
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 20px;
}
</style>