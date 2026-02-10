// src / features / myFeature / context / StatelessContext.jsx

import { createSafeContext } from '../../../utils/createSafeContext';
import { staticData } from '../../../myData/staticData';

const [StatelessContext, useStatelessContext] = createSafeContext(
    "StatelessProvider",
    "useStatelessContext"
);

const StatelessProvider = ({ children }) => {
    return (
        <StatelessContext.Provider value={ staticData }>
            {children}
        </StatelessContext.Provider>
    );
};

export { StatelessProvider, useStatelessContext };