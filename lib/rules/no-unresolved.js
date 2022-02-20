const path = require('path');
const fileExistsWithCaseSync = require('../utils/fileExistsWithCaseSync');
const statSync = require('../utils/statSync');

module.exports = {
    meta: {
        docs: {
            description: 'no unresolved',
            category: 'Possible Errors',
            recommended: false,
        },
        fixable: null,
        schema: [],
        messages: {
            avoidMethod: 'Casing of {{name}} does not match the underlying filesystem.',
        },
    },

    create: function (context) {
        return {
            'VariableDeclaration VariableDeclarator ArrayExpression ObjectExpression Property': (
                node,
            ) => {
                const fileName = context.getPhysicalFilename();
                if (!fileName.endsWith('config/routes.js')) {
                    return;
                }
                if (node.key.name === 'component') {
                    const component = node.value.value.replace('@', '../src');
                    let resolvePath = path.resolve(path.dirname(fileName), component);
                    const stat = statSync(resolvePath);
                    if (stat) {
                        if (stat.isDirectory()) {
                            resolvePath = `${resolvePath}/index.js`;
                        }
                    } else {
                        resolvePath = `${resolvePath}.js`;
                    }
                    if (!fileExistsWithCaseSync(resolvePath)) {
                        context.report({
                            node,
                            messageId: 'avoidMethod',
                            data: {
                                name: node.value.value,
                            },
                        });
                    }
                }
            },
        };
    },
};
