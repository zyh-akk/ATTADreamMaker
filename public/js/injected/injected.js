(function(){
hasOperate(winReload, 1800000);
})()

function winReload() {
  location.reload();
}
function  hasOperate(callback, second) { //second是检测未操作的时间，秒为单位，callback是该时间段未点击需要执行的函数
  var status = true;
  var timer;

  document.body.onmousedown = function () {
      status = true;
  }
  document.body.onmouseup = function () {
      countTime();
  }

  function countTime() {

      setInterval(function() {
          if (!status) {
              callback();
              status = true;
          }
      }, 1);

      if(timer){
          clearInterval(timer);
      }

      timer = setInterval(function () {
          status = false;
      }, second);
  }
  countTime();
}
