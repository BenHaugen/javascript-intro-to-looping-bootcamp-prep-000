function forLoop(array) {
  for (i = 0; i < 25; i++){
  if (i === 1) {
    return "I am 1 strange loop"
  }
  }  
  
  return "I am ${i} strange loops."
}

function whileLoop(num) {
  let countdown = num;
  
  while (countdown > 0) {
    console.log(--countdown)
  }
  
  return "done"
}