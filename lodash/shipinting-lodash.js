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
  ary: function(f,n) {
    return function(...args){
      var val = args[0]
      for (var i = 1; i < args.length; i++) {
        val = val.concat(args[i])
      }
      val = val.slice(0,n)
      return f(...val)
    }
  },
  negate: function(f) {
    return function(...args) {
      return !f(...args)
    }
  },
  inRange: function(number, start, end) {
    if (arguments.length < 3) {
      end = start
      start = 0
    }
    if (start > end) {
      var t = start
      start = end
      end = t
    }
    if (number >= start && number < end) return true
    return false  
  },

}