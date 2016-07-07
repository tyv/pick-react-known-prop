import assert from 'assert'
import pickHTMLProps from 'pick-html-props'
import pickSVGProps from 'pick-svg-props'

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
