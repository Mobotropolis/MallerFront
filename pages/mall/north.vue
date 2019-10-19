<template>
  <div class="container-fluid">
    <div>
      <h1>Mall North</h1>
      <p>Mall North is the Retail Sector. You can find most of the shops here. </p>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-toys"><button type="button" class="btn btn-primary btn-lg btn-block">Toy</button></NLink></div>
        <div class="col-sm-9">The toy shop.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-gifts"><button type="button" class="btn btn-primary btn-lg btn-block">Gifts</button></NLink></div>
        <div class="col-sm-9">Gifts for people.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-books"><button type="button" class="btn btn-primary btn-lg btn-block">Books</button></NLink></div>
        <div class="col-sm-9">Nice books to read.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-games"><button type="button" class="btn btn-primary btn-lg btn-block">Games</button></NLink></div>
        <div class="col-sm-9">Physical and video(!) games.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-electronics"><button type="button" class="btn btn-primary btn-lg btn-block">Electronics</button></NLink></div>
        <div class="col-sm-9">Some dated gadgetry.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-seasonal"><button type="button" class="btn btn-primary btn-lg btn-block">Seasonal</button></NLink></div>
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