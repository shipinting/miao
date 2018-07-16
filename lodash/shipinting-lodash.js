var shipinting = {
  chunk: function(array,size) {
    var res = []    
    for (var i = 0; i < array.length; i += size) {      
      res.push(array.slice(i,i + size))
    }
    return res
  },
  compact: function(array) {
    for (var i = 0; i < array.length; i++) {
      if (!array[i]) {
        array.splice(i,1)
        i--
      }
    }
    return array
  },

}