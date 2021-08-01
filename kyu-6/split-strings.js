function solution(str){    
    const splitStrings = [];
    
    for (let i = 0; i < str.length; i+= 2) {
        i == (str.length - 1) && str.length % 2 != 0 ? 
        splitStrings.push(str[i]+'_') : 
        splitStrings.push(str[i]+str[i+1])
    }
    
    return splitStrings
  }
