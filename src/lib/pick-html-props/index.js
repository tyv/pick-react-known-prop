import pickBy from 'lodash.pickby'
import isPlainObject from 'lodash.isplainobject'
import HTMLAttrs from 'html-attributes'

const extra = [
  'about', 'datatype', 'inlist', 'prefix', 'property',
  'resource', 'typeof', 'vocab', 'autoCapitalize', 'autoCorrect',
  'color', 'itemProp', 'itemScope', 'itemType', 'itemRef', 'itemID',
  'security', 'unselectable', 'results', 'autoSave',

  // handlers:
  'onBlur', 'onChange', 'onClick', 'onContextMenu', 'onCopy',
  'onCut', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter',
  'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop',
  'onFocus', 'onInput', 'onKeyDown', 'onKeyPress', 'onKeyUp',
  'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove',
  'onMouseOut', 'onMouseOver', 'onMouseUp', 'onPaste',
  'onScroll', 'onSubmit', 'onTouchCancel', 'onTouchEnd', 'onTouchMove',
  'onTouchStart', 'onWheel'
]


const ReactHTMLAttrs = {
  ...HTMLAttrs,
  ...extra.reduce((attrs, prop) => {
    attrs[prop] = prop
    return attrs
  }, {})
}

export default function(props) {
  if (!isPlainObject(props)) throw new Error('props should be a plain object')
  return pickBy(
    props,
    (val, prop) => Boolean(ReactHTMLAttrs[prop]) || /^(data|aria)-/.test(prop)
  )
}
