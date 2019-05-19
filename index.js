// add solution here
let emptyArr = []
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for(let i = 0; i < arrayMusicians.length; i++){
      emptyArr.push(arrayMusicians[i] + " plays "+ arrayInstruments[i])
  }

  return(emptyArr)
}
