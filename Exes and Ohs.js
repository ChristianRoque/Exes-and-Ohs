function XO(str){
  news = str.toLowerCase()
  let x = 0
  let o = 0
  for (let i = 0; i < news.length; i++){
    if (news[i] === 'x') {
      x ++
    } 
    else if(news[i] === 'o'){
      o ++
    } 
  }
  return x === o
}