import HTMLAttrs from 'html-attributes'
import pickProps from '../pick-props'

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

export default pickProps(prop => Boolean(ReactHTMLAttrs[prop]) || /^(data|aria)-/.test(prop))
