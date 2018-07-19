var shipinting = {
  chunk: function(array,size) {
    var res = []    
    for (var i = 0; i < array.length; i += size) {      
      res.push(array.slice(i,i + size))
    }
    return res
  }
  ,compact: function(array) {
    for (var i = 0; i < array.length; i++) {
      if (!array[i]) {
        array.splice(i,1)
        i--
      }
    }
    return array
  }
  ,difference: function(array, ...values) {
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
  }
  ,differenceBy: (array, values, iteratee) => {
    var res = []
    var map = []
    if (typeof iteratee === 'function') {      
      for (var i of values) {
        map[iteratee(i)] = 1
      }
      for (var j of array) {
        if (!map[iteratee(j)]) res.push(j)
      }
    return res
    }else{
      for (var i of values) {
        map[i[iteratee]] = 1
      }
      for (var j of array) {
        if (!map[j[iteratee]]) res.push(j)
      }
    return res
    }
  }
  ,unary: function(f) {
    return function(value) {
      return f(value)
    }
  }
  ,ary: (func, n=func.length) => {
    return function(...args) {
      return func(...args.slice(0,n))
    }
  }
  ,negate: function(f) {
    return function(...args) {
      return !f(...args)
    }
  }
  ,inRange: function(number, start, end) {
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
  }
  ,add: function(a,b) {
    return a + b
  }
  ,divide: function(dividend,divisor) {
    return dividend / divisor
  }
  ,subtract: (minuend, subtrahend) => minuend - subtrahend
  ,multiply: (multiplier, multiplicand) => multiplier * multiplicand  
  ,max: function(array) {
    if (array.length === 0) return undefined
    return array.reduce((result,item,index,array) => {
      return result < item ? item : result
    },-Infinity)
  }
  ,min: function(array) {
    if (array.length === 0) return undefined
    return array.reduce((result,item,index,array) => {
      return result > item ? item : result
    },Infinity)
  }
  ,sum: function(array) {
    return array.reduce((result,item,index,array) => {
      return result + item
    },0)
  }
  ,differenceWith: function(array,values,comparator) {
    return array.filter(item => values.every(val => !comparator(item,val)))
  }
  ,drop: function(array, n) {
    if (n === undefined) n = 1
    return array.slice(n)
  }
  ,dropRight: function(array, n) {
    if (n === undefined) n = 1
    if (array.length <= n) return [] 
    return array.slice(0,array.length - n)
  }
  ,fill: (array, value, start, end) => {
    start = start || 0
    if (end === undefined) end = array.length
    for (var i = start; i < end; i++) {
        array[i] = value
      }
    return array
  }
  ,indexOf: (array, value, fromIndex) => {
    fromIndex = fromIndex || 0
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) return i
    }
    return -1
  }
  ,flatten: array => [].concat(...array)
  ,flattenDeep: array => {
    return array.reduce((result,item) => {
      if (!Array.isArray(item)) {
        result = [...result,item]
      }else{
        var temp = shipinting.flattenDeep(item)
        result = [...result,...temp]
      }      
      return result   
    },[])
  }
  ,flattenDepth: (array, depth) => {
    if (depth === 0) return array.slice()
    depth = depth || 1
    return array.reduce((result,item) => {      
      if (!Array.isArray(item)) {
        result = [...result,item]
      }else{
        var temp = shipinting.flattenDepth(item, depth - 1)
        result = [...result,...temp]
      }
      return result
    },[])
  }
  ,property: propname => obj => obj[propname]
  ,identity: value => value
  ,iteratee: (predicate = _.identity) => {
      if (typeof predicate === 'function') return predicate   
      if (typeof predicate === 'string')   return _.property(predicate)
      if (typeof predicate === 'object')   return _.matches(predicate)
      if (Array.isArray(predicate))   return _.matchesProperty(predicate)        
    }
  ,dropWhile: (array, predicate=_.identity) => {
    var f = shipinting.iteratee(predicate)
    for (var i = 0; i < array.length; i++) {
      if (!f(array[i])) return array.slice(i)      
    }
  }
  ,dropRightWhile: (array, predicate=_.identity) => {
    var func = shipinting.iteratee(predicate)
    for (var i = array.length - 1; i >= 0; i--) {
      if (!func(array[i])) return array.slice(0,i + 1)      
    }
  }  
  ,groupBy: (array, predicate=_.identity) => {
    var func = shipinting.iteratee(predicate)
    return array.reduce((result,item) => {
      var key = func(item)
      if (key in result) result[key].push(item)
      else result[key] = [item]
      return result  
    },{})
  }
  ,keyBy: (ary, key) => {
    var obj = {}
    for (var item of ary) {
      obj[item[key]] = item
    }
    return obj
  }


  
  


}