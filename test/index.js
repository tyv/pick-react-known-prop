import assert from 'assert'
import pickHTMLProps from 'pick-html-props'
import pickSVGProps from 'pick-svg-props'
import {isPlainObject} from 'pick-props'
import _ from 'lodash'

const validReactHTMLProps = {
  id: 'id',
  'className': 'className',
  'role': 'role',
  'data-my-attr': 'data-my-attr',
  'aria-label': 'aria-label',
  'onClick': 'onClick',
  'onChange': 'onChange'
}

const validReactSVGProps = {
  externalResourcesRequired: 'externalResourcesRequired',
  z: 'z',
  x: 'x'
}

const invalidReactProps = {
  invalidProp: 'invalidProp',
  dataprop: 'dataprop',
  'invalid-prop': 'invalid-prop'
}

describe(
  'pickHTMLProps',
  () => {
    it('should delete only invalid React HTML props', () =>
      assert.deepEqual(
        pickHTMLProps({...validReactHTMLProps, ...invalidReactProps}),
        validReactHTMLProps
      )
    )

    it('should throw if props is not a plain object', () =>
      assert.throws(
        () => pickHTMLProps([]),
        (err) => {
          return err instanceof Error && err.message === 'props should be a plain object'
        }
      )
    )
  }
)

describe(
  'pickSVGProps',
  () => {
    it('should delete only invalid React SVG props', () =>
      assert.deepEqual(
        pickSVGProps({...validReactSVGProps, ...invalidReactProps}),
        validReactSVGProps
      )
    )

    it('should throw if props is not a plain object', () =>
      assert.throws(
        () => pickHTMLProps([]),
        (err) => {
          return err instanceof Error && err.message === 'props should be a plain object'
        }
      )
    )
  }
)

describe(
  'isPlainObject',
  () => {
    it('should detect plain objects', () => {
      function Foo() {
        this.a = 1
      }

      assert.strictEqual(isPlainObject({}), true)
      assert.strictEqual(isPlainObject({'a': 1}), true)
      assert.strictEqual(isPlainObject({'constructor': Foo}), true)
      assert.strictEqual(isPlainObject([1, 2, 3]), false)
      assert.strictEqual(isPlainObject(new Foo(1)), false)
    })

    it('should return `true` for objects with a `[[Prototype]]` of `null`', () => {
      const object = Object.create(null)
      assert.strictEqual(isPlainObject(object), true)

      object.constructor = Object.prototype.constructor
      assert.strictEqual(isPlainObject(object), true)
    })

    it('should return `true` for objects with a `valueOf` property', () => {
      assert.strictEqual(isPlainObject({'valueOf': 0}), true)
    })

    it('should return `false` for objects with a custom `[[Prototype]]`', () => {
      const object = Object.create({'a': 1})
      assert.strictEqual(isPlainObject(object), false)
    })

    it('should return `false` for non-Object objects', () => {
      assert.strictEqual(isPlainObject(arguments), false)
      assert.strictEqual(isPlainObject(Error), false)
      assert.strictEqual(isPlainObject(Math), false)
    })

    it('should return `false` for non-objects', () => {
      const falsey = [, null, undefined, false, 0, NaN, ''] // eslint-disable-line
      const expected = falsey.map(() => false)

      const actual = falsey.map((value, index) => {
        return index ? isPlainObject(value) : isPlainObject()
      })

      assert.deepEqual(actual, expected)

      assert.strictEqual(isPlainObject(true), false)
      assert.strictEqual(isPlainObject('a'), false)
      assert.strictEqual(isPlainObject(Symbol('a')), false)
    })

    it('should return `false` for objects with a read-only `Symbol.toStringTag` property', () => {
      const object = {}
      Object.defineProperty(object, Symbol.toStringTag, {
        'configurable': true,
        'enumerable': false,
        'writable': false,
        'value': 'X'
      })

      assert.deepEqual(isPlainObject(object), false)
    })

    it('should not mutate `value`', () => {
      const proto = {}
      proto[Symbol.toStringTag] = undefined
      const object = Object.create(proto)

      assert.strictEqual(isPlainObject(object), false)
      assert.strictEqual(!!_.has(object, Symbol.toStringTag), false)
    })
  }
)
