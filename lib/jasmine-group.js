(function() {
    var globals = [];
    window.suitList = {};
    var object, _i, suite;

    if (typeof global !== "undefined" && global !== null) {
        globals.push(global);
    }

    if (typeof window !== "undefined" && window !== null) {
        globals.push(window);
    }

    if (groupsConfig) {
        if (groupsConfig.length === 0) {
            for (_i = 0; _i < globals.length; _i++) {
                object = globals[_i];
                object['gdescribe'] = function(group, description, specDefinitions) {
                    suite = describe(description, specDefinitions);
                    return suite;
                }
            }
        } else {
            for (_i = 0; _i < globals.length; _i++) {
                object = globals[_i];
                object['gdescribe'] = function(group, description, specDefinitions) {
                    if (groupsConfig.indexOf(group) > -1) {
                        window.suitList[groupsConfig.indexOf(group)] = window.suitList[groupsConfig.indexOf(group)] || [];
                        window.suitList[groupsConfig.indexOf(group)].push({'description':description, 'specDefinitions':specDefinitions});
                    }
                }
            }
        }
    } else {
        console.warn('[Error] Failed to retrieve group settings');
    }
}).call(this);