<template>
  <div class="container-fluid">
      <h1>Mall West</h1>
        <p>Mall West is the Sponsor Area. Here you can also build your personal store.  </p>

      <div class="row" style="margin: 5px;"> 
        <div class="col-sm-3"><a href="#"><button type="button" class="btn btn-primary btn-lg btn-block">Your Shop</button></a></div>
        <div class="col-sm-9">Everyone can have a store (and a series of potentional problems) at MallerNet. Make yours today. </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><a href="#"><button type="button" class="btn btn-primary btn-lg btn-block">Merch Store</button></a></div>
        <div class="col-sm-9">Like the site? Why not buy some merchandise to support it? </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><a href="#"><button type="button" class="btn btn-primary btn-lg btn-block">Sponsor Shop 1</button></a></div>
        <div class="col-sm-9">A shop from one of our sponsors. </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><a href="#"><button type="button" class="btn btn-primary btn-lg btn-block">Sponsor Shop 2</button></a></div>
        <div class="col-sm-9">A shop from one of our sponsors.</div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><a href="#"><button type="button" class="btn btn-primary btn-lg btn-block">Sponsor Shop 3</button></a></div>
        <div class="col-sm-9">A shop from one of our sponsors.</div>
      </div>

        <NLink to="lobby"><button type="button" class="btn btn-primary btn-lg btn-block">Back to Lobby</button></NLink>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  }
};
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