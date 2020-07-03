document.getElementById('count').value = "0";
function start(){
  var count = document.getElementById('count').value;
  var co = parseInt(count);
  co = co + 1;
  document.getElementById('count').value = co;

}

function stop(){
  var count = document.getElementById('count').value;
  var co = parseInt(count);
    co = co - 1;
    document.getElementById('count').value = co;

}

function reset(){
  document.getElementById('count').value = "0";
}
