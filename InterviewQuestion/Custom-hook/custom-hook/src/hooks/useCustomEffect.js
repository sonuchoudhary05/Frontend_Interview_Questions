import React from "react";

const useCustomEffect = (callback, dependencies) => {
    const isFirstRender = React.useRef(true);
    const prevDependencies = React.useRef([]);
    // first Render
    if(isFirstRender.current){
        isFirstRender.current = false;
        const cleanup = callback();
        if(cleanup && typeof cleanup === 'function'){
            return cleanup;
        }
    }
    // dependancy change

    const isDependancyChange = dependencies ? JSON.stringify(prevDependencies.current) !== JSON.stringify(dependencies) : true;
    if(isDependancyChange){
        const cleanup = callback();
        if(cleanup && typeof cleanup === 'function' && dependencies){
            return cleanup;
        }
    }
    prevDependencies.current = dependencies;
};

export default useCustomEffect;