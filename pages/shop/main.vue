<template>
  <div class="container-fluid">
    <h1>Your Shop</h1>
    <p>No Shop? Setting Up a Shop is as Easy As ...</p>
      <div class="row">
        <div class="col-sm-3"><NLink to="mall/north"><button type="button" class="btn btn-primary btn-lg btn-block">Manage Store</button></NLink></div>
        <div class="col-sm-9">Give your shop a unique look and feel.</div>
      </div>
      <div class="row">
        <div class="col-sm-3"><NLink to="mall/south"><button type="button" class="btn btn-primary btn-lg btn-block">Manage Stock</button></NLink></div>
        <div class="col-sm-9">Determine what people get when they come to your store.</div>
      </div>
      <div class="row">
        <div class="col-sm-3"><NLink to="mall/east"><button type="button" class="btn btn-primary btn-lg btn-block">Manage Workers</button></NLink></div>
        <div class="col-sm-9">Manage your workers. Don't have any? You can recruit some here.</div>
      </div>
      <div class="row">
        <div class="col-sm-3"><NLink to="mall/west"><button type="button" class="btn btn-primary btn-lg btn-block">Open Store</button></NLink></div>
        <div class="col-sm-9">All set? Make your store open for business.</div>
      </div>

    <p style="text-align: center;"><NLink to="mall/west"><button type="button" class="btn btn-secondary btn-lg">Back to the Mall</button></NLink></p>
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