function shout(string){
return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  if (whisper(string) === string){
    return "I can't hear you!"
  } else if (shout(string) === string){
    return shout("yes indeed!")
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}