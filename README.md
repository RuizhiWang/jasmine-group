# jasmine-group
Jasmine plugin to run JavaScript unit tests by groups and priorities. Tests will be selected for execution based on groups' setting.

# Motivation
**Existing issues:**  
1. Unlike JUnit (@Category) and PHPUnit (@group), Jasmine JavaScript unit testing does not support grouping test;  
2. Users have to manually set <code>fdescribe</code> to focus on several related test cases;  
3. The sequence of execution is restricted in the names of test cases. Users are hard to control the execution order.  
**Requirements:**  
1. Provide feature for grouping tests;  
2. Provide feature to run specific suite of tests easier;  
3. Provide feature to define the execution order easier.

# Installation
You can simple do it by running following command inside of your project directory:
```
    npm install jasmine-group --save-dev
```
**Please note**: This plugin is designed for running with <code>Karma</code>, the functionality may not working if only install this plugin.  
Also if you have <code>'karma-jasmine-group'</code> in your <code>package.json</code> devDependencies list, this plugin will be installed automatically.  
See [karma-jasmine-group](https://github.com/RuizhiWang/karma-jasmine-group) for more details.

# Configuration
Please see [karma-jasmine-group](https://github.com/RuizhiWang/karma-jasmine-group) for the settings in your Karma configuration.

# Usage
Once you have configured your Karma configuration, you can simple to replace 'describe' with 'gdescribe' and add the group name as the first parameter:
```javascript
    gdescribe('group1', 'TestSuit description', function() {
        it('TestCase description', function() {
            ......
        });
    });
```

# Contributors
Ruizhi Wang: crystalplan999@gmail.com  
Felice Geracitano: felice.geracitano@gmail.com

# License
MIT license, please see <code>LICENSE</code> file for details.