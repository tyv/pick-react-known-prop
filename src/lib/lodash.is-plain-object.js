export default function isPlainObject(obj) {
  const isObjectLike = obj !== null && ( typeof obj === 'object' )
  if (!isObjectLike || Object.prototype.toString.call(obj) !== '[object Object]') {
    return false
  }
  const proto = Object.getPrototypeOf(obj)
  if (proto === null) { return true }

  const Ctor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
}
