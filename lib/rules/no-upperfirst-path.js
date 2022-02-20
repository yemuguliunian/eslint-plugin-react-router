module.exports = {
    meta: {
        docs: {
            description: 'no upperfirst path',
            category: 'Possible Errors',
            recommended: false,
        },
        fixable: null,
        schema: [],
        messages: {
            avoidMethod: 'first letter must be lowercase',
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
                if (node.key.name === 'path') {
                    const path = node.value.value.replace(/^\//, '');
                    if (/[A-Z][A-Za-z0-9]*/.test(path)) {
                        context.report({
                            node,
                            messageId: 'avoidMethod',
                        });
                    }
                }
            },
        };
    },
};
