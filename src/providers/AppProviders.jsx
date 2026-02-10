// src / providers / AppProviders.jsx

import { Compose } from '../utils/composeProviders';
import { StatelessProvider } from '../features/myFeature/context/StatelessContext';

const AppProviders = ({ children }) => (
    <Compose providers={[StatelessProvider]}>
        {children}
    </Compose>
);

export default AppProviders;