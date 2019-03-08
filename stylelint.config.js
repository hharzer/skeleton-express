/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: ['stylelint-order'],
  rules: {
    'block-no-empty': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'indentation': 2,
    'order/properties-order': [
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'float',
      'clear',
      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-count',
      'column-width',
      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'color',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'font-style',
      'font-variant',
      'font-weight',
      'letter-spacing',
      'line-height',
      'list-style',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-transform',
      'text-wrap',
      'white-space',
      'word-spacing',
      'border-collapse',
      'border-spacing',
      'box-shadow',
      'caption-side',
      'content',
      'cursor',
      'empty-cells',
      'opacity',
      'overflow',
      'quotes',
      'speak',
      'table-layout',
      'vertical-align',
      'visibility',
      'z-index',
    ],
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 4,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'double',
    'value-no-vendor-prefix': true,
  },
};
