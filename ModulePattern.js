const Module = (function() {
    const privateMethod = function() {
        return 100;
    };

    const publicMethod = function() {
        var val = privateMethod();
        console.log('publicMethod',val);
    };

    return {
        publicMethod: publicMethod
    };
})();
Module.publicMethod(); // Output: publicMethod
//Module.privateMethod(); // Output: module.privateMethod is not a function