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
  difference: function(array, ...values) {
    var map = []
    var val = values[0]
    var res = []
    for (var i = 1; i < values.length; i++) {
      val = val.concat(values[i])
    }
    for (i = 0; i < val.length; i++) {
      map[val[i]] = 1
    }
    for (i = 0; i < array.length; i++) {
      if (!map[array[i]]) res.push(array[i])
    }
  return res    
  },
  unary: function(f) {
    return function(value) {
      return f(value)
    }
  }, 

}