<template>
  <div class="container-fluid">
    <h1>Settings</h1>
    <p>Adjust Your Settings.</p>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north"><button type="button" class="btn btn-primary btn-lg btn-block">Mall North</button></NLink></div>
        <div class="col-sm-9">Mall North is the Retail Sector. You can find most of the shops here.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="south"><button type="button" class="btn btn-primary btn-lg btn-block">Mall South</button></NLink></div>
        <div class="col-sm-9">Mall South is the Service Wing. You can improve your worker's condition.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="east"><button type="button" class="btn btn-primary btn-lg btn-block">Mall East</button></NLink></div>
        <div class="col-sm-9">Mall East is the Entertainment Quater. Take some time to relax here.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="west"><button type="button" class="btn btn-primary btn-lg btn-block">Mall West</button></NLink></div>
        <div class="col-sm-9">Mall West is the Sponsor Area. Here you can also build your personal store.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="central"><button type="button" class="btn btn-primary btn-lg btn-block">Mall Central</button></NLink></div>
        <div class="col-sm-9">Mall Central is where you'll find the Food Court. Come and take a delicious bite.</div>
      </div>
    <p style="text-align: center;"><NLink to="/"><button type="button" class="btn btn-primary btn-lg btn-block">Go Outside</button></NLink></p>
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
/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
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