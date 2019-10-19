<template>
  <div class="container-fluid">
    <div>
      <h1>Mall Central</h1>
      <p>Mall Central is where you'll find the Food Court. Coime and take a delicious bite.  </p>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central-lurkerburger"><button type="button" class="btn btn-primary btn-lg btn-block">Lurker Burger</button></NLink></div>
        <div class="col-sm-9">A burger place.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central-moobie"><button type="button" class="btn btn-primary btn-lg btn-block">Fanciful Moobie Cafe</button></NLink></div>
        <div class="col-sm-9">Coffee and drinks.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central-wings"><button type="button" class="btn btn-primary btn-lg btn-block">Wings & Thangs</button></NLink></div>
        <div class="col-sm-9">Chicken and biscuits.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central-texmex"><button type="button" class="btn btn-primary btn-lg btn-block">Tex, Mex and the Rest</button></NLink></div>
        <div class="col-sm-9">Tacos, burritos and nachos.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central-bakery"><button type="button" class="btn btn-primary btn-lg btn-block">Make and Bake</button></NLink></div>
        <div class="col-sm-9">Sweet treats from the bakery.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central-freesamples"><button type="button" class="btn btn-primary btn-lg btn-block">Free Samples</button></NLink></div>
        <div class="col-sm-9">Getting Oatmeals in for Winter.</div>
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