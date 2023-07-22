# babel-plugin-return-log
You can install the package via npm or yarn:
```bash
npm install -D babel-plugin-return-log
```
or
```bash
yarn add -d babel-plugin-return-log
```
This plugin allows you to output to the console everything that a particular function returns.
```javascript
function getUserName(user) {
  console.log(user.name); // this line was added after the plugin
  return user.name;
}
```

> This may be useful for debag, in version 1.0.0 the plugin is not flexible for configuration, in future versions we will fix it.

Since this is my first plugin, I don't expect it to be used by many developers, it's a training model.
