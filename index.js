// add solution here
let emptyArray = []
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for(let i = 0; i < arrayMusicians.length; i++){
      emptyArray.push(arrayMusicians[i] + " plays "+ arrayInstruments[i])
  }

  return(emptyArray)
}
