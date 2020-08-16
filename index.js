const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array){
  const win = array.find(obj=>obj.result ==="W");
  // if( win=== NaN){
  //   return undefined;
  // }
  if(win){
  return win.year;
  }
  else{
    return undefined;
  }
  
}
