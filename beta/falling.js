/*

          */
document.getElementById('falling').innerHTML += `
<style>
        
        .snowflake {
            color: #fff;
            font-size: 2em;
            font-family: Arial, sans-serif;
            text-shadow: 0 0 5px #fff;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
          }
          
          .snowflake,.snowflake .inner{animation-iteration-count:infinite;animation-play-state:running}@keyframes snowflakes-fall{0%{transform:translateY(0); opacity: 1;}100%{transform:translateY(110vh); opacity:0.25;}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0);transform: rotate(45deg);}50%{transform:translateX(80px);transform: rotate(-45deg);}}.snowflake{position:fixed;top:-3rem;-webkit-user-select:none;user-select:none;cursor:default;animation-name:snowflakes-shake;animation-duration:3s;animation-timing-function:ease-in-out}.snowflake .inner{animation-duration:10s;animation-name:snowflakes-fall;animation-timing-function:linear}.snowflake:nth-of-type(0){left:1%;animation-delay:0s}.snowflake:nth-of-type(0) .inner{animation-delay:0s}.snowflake:first-of-type{left:10%;animation-delay:1s}.snowflake:first-of-type .inner,.snowflake:nth-of-type(8) .inner{animation-delay:1s}.snowflake:nth-of-type(2){left:20%;animation-delay:.5s}.snowflake:nth-of-type(2) .inner,.snowflake:nth-of-type(6) .inner{animation-delay:6s}.snowflake:nth-of-type(3){left:30%;animation-delay:2s}.snowflake:nth-of-type(11) .inner,.snowflake:nth-of-type(3) .inner{animation-delay:4s}.snowflake:nth-of-type(4){left:40%;animation-delay:2s}.snowflake:nth-of-type(10) .inner,.snowflake:nth-of-type(4) .inner{animation-delay:2s}.snowflake:nth-of-type(5){left:50%;animation-delay:3s}.snowflake:nth-of-type(5) .inner{animation-delay:8s}.snowflake:nth-of-type(6){left:60%;animation-delay:2s}.snowflake:nth-of-type(7){left:70%;animation-delay:1s}.snowflake:nth-of-type(7) .inner{animation-delay:2.5s}.snowflake:nth-of-type(8){left:80%;animation-delay:0s}.snowflake:nth-of-type(9){left:90%;animation-delay:1.5s}.snowflake:nth-of-type(9) .inner{animation-delay:3s}.snowflake:nth-of-type(10){left:25%;animation-delay:0s}.snowflake:nth-of-type(11){left:65%;animation-delay:2.5s}
          </style>
          <div class="snowflakes" aria-hidden="true"><div class="snowflake" onclick="alert('h')">
              <div class="inner">🍂</div></div><div class="snowflake" style="z-index: 123;">
              <div class="inner">🍂</div></div><div class="snowflake" style="z-index: 123;">
              <div class="inner">🍂</div></div><div class="snowflake" style="z-index: 123;">
              <div class="inner">🍂</div></div><div class="snowflake">
              <div class="inner">🍂</div></div><div class="snowflake">
              <div class="inner">🍂</div></div><div class="snowflake" style="z-index: 123;">
              <div class="inner">🍂</div></div><div class="snowflake">
              <div class="inner">🍂</div></div><div class="snowflake" style="z-index: 123;">
              <div class="inner">🍂</div></div><div class="snowflake">
              <div class="inner">🍂</div></div><div class="snowflake" style="z-index: 123;">
              <div class="inner">🍂</div></div><div class="snowflake">
              <div class="inner">🍂</div></div>
          </div>
`
document.body.outerHTML += `<div id="Blursor"></div>
<style>
    #Blursor {
        height: 10rem; width: 10rem; border-radius: 1000px; background: #15b600; filter: blur(25px);
    }
    #Blursor {
background: linear-gradient(45deg, var(--colour-1), var(--colour-2));
position: absolute;
transform: translate(-10%, -10%);
box-shadow: 0 0 20px rgba(16, 0, 54, 0.2);
pointer-events: none; z-index: -1;
transition: 0.5s ease-out;
}
</style>
`
let myDiv = document.getElementById("Blursor");function isTouchDevice() {try {document.createEvent("TouchEvent");return true;} catch (e) {return false;};};const move = (e) => {try {var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;} catch (e) {};myDiv.style.left = x - 50 + "px";myDiv.style.top = y - 50 + "px";};document.addEventListener("mousemove", (e) => {move(e);});document.addEventListener("touchmove", (e) => {move(e);});