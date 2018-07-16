var shipinting = {
  chunk: function f(array,size) {
    var res = []    
    for (var i = 0; i < array.length; i += size) {      
      res.push(array.slice(i,i + size))
    }
    return res
  },
}