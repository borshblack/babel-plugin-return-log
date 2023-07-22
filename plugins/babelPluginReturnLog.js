const { default: template } = require("@babel/template");

module.exports = function babelPluginReturnLog({ types: t }) {
  return {
    visitor: {
      ReturnStatement(path, { opts }) {
        const styleStringLiterals = opts?.colours?.map((style) =>
          t.stringLiteral(style)
        );
        const templateString = template("%%expression%%");
        path.insertBefore(
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(t.identifier("console"), t.identifier("log")),
              [
                ...(styleStringLiterals ? t.stringLiteral("\x1b[0m") : []),
                ...(styleStringLiterals ?? []),
                templateString({ expression: path.node.argument }).expression,
                ...(styleStringLiterals ? t.stringLiteral("\x1b[0m") : []),
              ]
            )
          )
        );
      },
    },
  };
};
