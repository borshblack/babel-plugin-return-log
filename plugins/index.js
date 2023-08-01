module.exports = function babelPluginReturnLog({ types: t }) {
  return {
    visitor: {
      ReturnStatement(path) {
        path.insertBefore(
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(t.identifier("console"), t.identifier("log")),
              [path.node.argument]
            )
          )
        );
      },
    },
  };
};
