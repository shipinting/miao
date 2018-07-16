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
  difference: function(array, a) {
    var map = []
    var res = []
    for (var i = 0; i < a.length; i++) {
      map[a[i]] = 1
    }
    for (i = 0; i < array.length; i++) {
      if (!map[array[i]]) res.push(array[i])
    }
    return res    
  },

}