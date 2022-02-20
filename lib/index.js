/**
 * @fileoverview lint react route
 * @author
 */
'use strict';

const requireIndex = require('requireindex');

module.exports = {
    rules: requireIndex(__dirname + '/rules'),
    configs: {
        recommended: {
            rules: {
                '@vtx/react-router/no-unresolved': 2,
                '@vtx/react-router/no-upperfirst-path': 2,
            },
        },
    },
};
