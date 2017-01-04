export function isPlainObject(obj) {
  const isObjectLike = obj !== null && ( typeof obj === 'object' )
  if (!isObjectLike || Object.prototype.toString.call(obj) != '[object Object]') {
    return false
  }
  const proto = Object.getPrototypeOf(obj)
  if (proto === null) { return true }

  const Ctor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) == Function.prototype.toString.call(Object)
}

export default filter => props => {
  if (!isPlainObject(props)) throw new Error('props should be a plain object')
  const out = {}
  for (const key in props) {
    if (props.hasOwnProperty(key) && filter(key)) {
      out[key] = props[key]
    }
  }
  return out
}
