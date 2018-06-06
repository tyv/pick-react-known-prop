import pickProps from '../pick-props'
import SVGAttrs from 'svg-attributes'

export default pickProps(prop => Boolean(SVGAttrs[prop]))
