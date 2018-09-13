function forLoop(array) {
  for (i = 0; i < 25; i++) {
  if (i === 1) {
    array.push(`I am 1 strange loop.`)
  }
  }  
  
  array.push(`I am ${i} strange loops.`)
}

function whileLoop(num) {
  let countdown = num;
  
  while (countdown > 0) {
    console.log(--countdown)
  }
  
  return "done"
}