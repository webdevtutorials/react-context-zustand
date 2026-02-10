// src / utils / createSafeContext.js
import { createContext, useContext }  from 'react';

export const createSafeContext = ( providerName, hookName ) => {
    const Context = createContext(undefined);

    const useSafeHook = () => {
        const context = useContext(Context);
        if (context === undefined) {
            throw new Error(`${hookName} must be used withing ${providerName}`);
        }

        return context;
    };

    return [Context, useSafeHook];
};