'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const kebabCase = require('kebab-case');
const rules = require('./rules');

for (const rule in rules) {
  const reasons = rules[rule].reasons;
  module.exports[kebabCase(rule)] = {
    create (context) {
      return {
        CallExpression: function (node) {
          const callee = node.callee;
          const objectName = callee.object.name;

          if ((objectName === '_' || objectName === 'lodash' || objectName === 'underscore') && callee.property.name === rule) {
            context.report({
              node,
              message: reasons.join(', ')
            });
          }
        },
      };
    }
  };
}
