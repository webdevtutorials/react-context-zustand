// src / utils / composeProviders.jsx

export const Compose = ({ providers, children }) => {
    return providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>
    }, children);
};