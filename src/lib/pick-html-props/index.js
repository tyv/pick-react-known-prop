import HTMLAttrs from 'html-attributes'
import pickProps from '../pick-props'

const extra = [
  'about', 'datatype', 'defaultChecked', 'defaultValue', 'inlist', 'prefix',
  'property', 'resource', 'typeof', 'vocab', 'autoCapitalize', 'autoCorrect',
  'color', 'itemProp', 'itemScope', 'itemType', 'itemRef', 'itemID',
  'security', 'unselectable', 'results', 'autoSave', 'allowtransparency',
  'charSet', 'ismap', 'typemustmatch',

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
  ...HTMLAttrs,
  ...extra.reduce((attrs, prop) => {
    attrs[prop] = prop
    return attrs
  }, {})
}

export default pickProps(prop => Boolean(ReactHTMLAttrs[prop]) || /^(data|aria)-/.test(prop))
