// add solution here
var emptyArray = []
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for(var i = 0; i < arrayMusicians.length; i++){
      emptyArray.push(arrayMusicians[i] + " plays "+ arrayInstruments[i])
  }

  return(emptyArray)
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}
