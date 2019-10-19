<template>
  <div class="container-fluid">
    <div>
      <h1>You are in the Mall East Neighborhood</h1>
        <p>Mall East is the Entertainment Quater. You'll be able to play games for prizes. </p>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east-arcade"><button type="button" class="btn btn-primary btn-lg btn-block">Arcade</button></NLink></div>
        <div class="col-sm-9">You know what this is.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east-wonderwheel"><button type="button" class="btn btn-primary btn-lg btn-block">Wonder Wheel</button></NLink></div>
        <div class="col-sm-9">Spin the wheel for some prizes.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east-scratchcards"><button type="button" class="btn btn-primary btn-lg btn-block">Scratchcards</button></NLink></div>
        <div class="col-sm-9">Choose your pick of tickets to win prizes.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east-lottery"><button type="button" class="btn btn-primary btn-lg btn-block">Lottery</button></NLink></div>
        <div class="col-sm-9">Choose your pick of tickets to win prizes.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east-wallostuff"><button type="button" class="btn btn-primary btn-lg btn-block">Wall-o-Stuff</button></NLink></div>
        <div class="col-sm-9">Wonder what's behind that door ...</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east-treasuremaps"><button type="button" class="btn btn-primary btn-lg btn-block">Treasure Maps</button></NLink></div>
        <div class="col-sm-9">Collect all 9 to receive a prize.</div>
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