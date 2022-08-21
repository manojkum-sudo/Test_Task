import { createContext, useState } from 'react';

export const Datavalue = createContext(null);

const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
    return (
        <Datavalue.Provider value={{ account, setAccount }}>
            {children}
        </Datavalue.Provider>
    )
}

export default ContextProvider;