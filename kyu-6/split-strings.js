function solution(str) {    
  const splitStrings = [];
  for (let i = 0; i < str.length; i+= 2) splitStrings.push(str[i]+(str[i+1] || '_'))
  return splitStrings
}