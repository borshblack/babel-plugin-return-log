function getLiteralByValue(value, t) {
  switch (typeof value) {
    case "bigint":
      return t.bigIntLiteral(value);
    case "number":
      return t.numericLiteral(value);
    case "boolean":
      return t.booleanLiteral(value);
    case "string":
      return t.stringLiteral(value);
    case "object":
      return value === null
        ? t.nullLiteral(value)
        : getObjectExpression(value, t);
  }
}

function getObjectExpression(object, t) {
  const entries = Object.entries(object);
  if (!entries.length) return;

  return t.objectExpression(
    entries.map(([key, value]) => {
      const keyExpression = t.stringLiteral(key);
      const valueExpression = getLiteralByValue(value, t);

      return t.objectProperty(keyExpression, valueExpression);
    })
  );
}

module.exports = {
  getObjectExpression,
  getLiteralByValue,
};
