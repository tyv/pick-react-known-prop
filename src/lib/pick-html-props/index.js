import HTMLAttrs from 'html-attributes'
import mapKeys from 'lodash.mapkeys'
import pickProps from '../pick-props'

const replacements = {
  class: 'className',
  for: 'htmlFor',
  allowTransparency: 'allowtransparency',
  charset: 'charSet',
  isMap: 'ismap',
  itemId: 'itemID',
  typeMustMatch: 'typemustmatch'
}

const replacedHTMLAttrs = mapKeys(HTMLAttrs, (v, k) => replacements[k] || k)

const extra = [
  'about', 'datatype', 'defaultValue', 'inlist', 'prefix', 'property',
  'resource', 'typeof', 'vocab', 'autoCapitalize', 'autoCorrect',
  'color', 'itemProp', 'itemScope', 'itemType', 'itemRef', 'security',
  'unselectable', 'results', 'autoSave',

  // handlers:
  'onBlur', 'onChange', 'onClick', 'onContextMenu', 'onCopy',
  'onCut', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter',
  'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop',
  'onFocus', 'onInput', 'onKeyDown', 'onKeyPress', 'onKeyUp',
  'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove',
  'onMouseOut', 'onMouseOver', 'onMouseUp', 'onPaste',
  'onScroll', 'onSubmit', 'onTouchCancel', 'onTouchEnd', 'onTouchMove',
  'onTouchStart', 'onWheel', 'onCompositionEnd', 'onCompositionStart',
  'onCompositionUpdate', 'onInvalid', 'onPointerDown', 'onPointerMove',
  'onPointerUp', 'onPointerCancel', 'onGotPointerCapture',
  'onLostPointerCapture', 'onPointerEnter', 'onPointerLeave', 'onPointerOver',
  'onPointerOut', 'onSelect', 'onAbort', 'onCanPlay', 'onCanPlayThrough',
  'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError',
  'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay',
  'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking',
  'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting',
  'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd',
  'onAnimationIteration', 'onTransitionEnd', 'onToggle'
]


const ReactHTMLAttrs = {
  ...replacedHTMLAttrs,
  ...extra.reduce((attrs, prop) => {
    attrs[prop] = prop
    return attrs
  }, {})
}

export default pickProps(prop => Boolean(ReactHTMLAttrs[prop]) || /^(data|aria)-/.test(prop))
