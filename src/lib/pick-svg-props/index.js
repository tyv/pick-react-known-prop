import pickProps from '../pick-props'
import SVGAttrs from 'svg-attributes'
import mapKeys from 'lodash.mapkeys'

const replacements = {
  class: 'className'
}

const replacedSVGAttrs = mapKeys(SVGAttrs, (v, k) => replacements[k] || k)

export default pickProps(prop => Boolean(replacedSVGAttrs[prop]))
