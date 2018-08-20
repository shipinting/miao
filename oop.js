class MySet {  
  constructor(values = []) {
    this._values = []    
    values.forEach(this.add,this)
  }
  _indexOf(val) {
    if (val !== val) {
      for (let i = 0; i < this._values.length; i++) {
        if (this._values[i] !== this._values[i]) return i
      }
    }else{
      return this._values.indexOf(val)
    }
  }
  add(val) {
    if (this.has(val)) {
      return this
    }else{
      this._values.push(val)
    }
  }

  has(val) {
    return this._indexOf(val) >= 0
  }

  delete(val) {
    var idx = this._indexOf(val)
    if (idx >= 0) {
      this._values.splice(idx,1)
    }
    return this
  }

  clear() {
    this._values = []
    return this
  }
}

/*var MyMap = (function() {
  function indexOf(ary,value) {
    if (value !== value) {
      for (let i = 0; i < ary.length; i++) {
        if (ary[i] !== ary[i]) return i
      }
    }else{
      return ary.indexOf(value)
    }
  } 

  function MyMap(maps) {
    if (!(this instanceof MyMap)) {
    return new MyMap(maps)
  }
  if (!Array.isArray(maps)) {
    throw new Error("only accepting array")
  }
  this._keys = []
  this._values = []
  for (let paris of maps) {
    this.set(paris[0],paris[1])
  } 
}

  MyMap.prototype.get = function(key) {
    let index = indexOf(this._keys,key)
    if (index >= 0) {
      return this._values[index]
    }else{
      return undefined
    }
  }
  MyMap.prototype.set = function(key,value) {
    let index = indexOf(this._keys,key)
    if (index >= 0) {
      this._values[index] = value
    }else{
      this._keys.push(key)
      this._values.push(value)
    }
  }
  MyMap.prototype.has = function(key) {
    return indexOf(this._keys,key) >= 0
  }

  MyMap.prototype.delete = function(key) {
    let index = indexOf(this._keys,key)
    if (index >= 0) {
      this._keys.splice(index,1)
      this._values.splice(index,1)
    }
  }
  MyMap.prototype.clear = function() {
    this._keys = []
    this._values = []
  }
  Object.defineProperty(MyMap.prototype,'size', {
    get: function() {
      return this._keys.length
    }
  })

  MyMap.prototype.keys = function() {
    return this._keys
  }
  MyMap.prototype.values = function() {
    return this._values
  }
  return MyMap
}())*/




