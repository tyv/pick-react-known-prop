import isPlainObject from './lodash.is-plain-object'

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
