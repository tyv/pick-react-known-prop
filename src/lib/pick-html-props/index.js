import pickBy from 'lodash.pickby'
import isPlainObject from 'lodash.isplainobject'
import HTMLAttrs from 'html-attributes'

export default function(props) {
  if (!isPlainObject(props)) throw new Error('props should be a plain object')
  return pickBy(
    props,
    (val, prop) => Boolean(HTMLAttrs[prop]) || /^(data|aria)-/.test(prop)
  )
}
