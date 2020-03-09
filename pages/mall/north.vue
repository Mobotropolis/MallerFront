<template>
  <div class="container-fluid">
    <div>
      <h1>Mall North</h1>
      <p>Mall North is the Retail Sector. You can find most of the shops here. </p>
      
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-toys"><button type="button" class="btn btn-primary btn-lg btn-block">Toy</button></NLink></div>
        <div class="col-sm-9">The toy shop.<br />
        Next Toy reshop is in <span id="toytime"> </span>.
        </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-gifts"><button type="button" class="btn btn-primary btn-lg btn-block">Gifts</button></NLink></div>
        <div class="col-sm-9">Gifts for people.<br />
        Next Gift reshop is in <span id="gifttime"> </span>.
        </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-books"><button type="button" class="btn btn-primary btn-lg btn-block">Books</button></NLink></div>
        <div class="col-sm-9">Nice books to read.<br />
        Next Book reshop is in <span id="booktime"> </span>.
        </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-games"><button type="button" class="btn btn-primary btn-lg btn-block">Games</button></NLink></div>
        <div class="col-sm-9">Physical and video(!) games. <br />
        Next Games reshop is in <span id="gamestime"> </span>.
        </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-electronics"><button type="button" class="btn btn-primary btn-lg btn-block">Electronics</button></NLink></div>
        <div class="col-sm-9">Some dated gadgetry. <br />
        Next Electronics reshop is in <span id="electronicstime"> </span>.
        </div>
      </div>
      <div class="row" style="margin: 5px;">
        <div class="col-sm-3"><NLink to="north-seasonal"><button type="button" class="btn btn-primary btn-lg btn-block">Seasonal</button></NLink></div>
        <div class="col-sm-9">Stuff for V-Day. <br />
        Next Seasonal reshop is in <span id="seasonaltime"> </span>.
        </div>
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

//function startTimer(duration, display) {
    //var timer = duration, minutes, seconds;
    //setInterval(function () {
        //minutes = parseInt(timer / 60, 10)
        //seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        //seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.textContent = minutes + ":" + seconds;

       // if (--timer < 0) {
           // timer = duration;
       // }
    //}, 1000);
//}
 
//window.onload = function () {
    //var toyTimer = Math.floor(Math.random() * 300) + 300,
        //display = document.querySelector('#toytime');
    //startTimer(toyTimer, display);
    
     //var giftTimer = Math.floor(Math.random() * 300) + 300,
        //display = document.querySelector('#gifttime');
    //startTimer(giftTimer, display);
//};
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