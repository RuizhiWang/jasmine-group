(function() {
    if (Object.keys(window.suitList).length != 0) {
        var _j, _k, suitObject;
        for(_j =0; _j< groupsConfig.length; _j++) {
            if (window.suitList.hasOwnProperty(_j)) {
                for (_k = 0; _k < window.suitList[_j].length; _k++) {
                    suitObject = window.suitList[_j][_k];
                    describe(suitObject.description, suitObject.specDefinitions);
                }
            }
        }
    }
}).call(this);