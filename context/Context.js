import { createContext, useState } from "react";

export const UserContext = createContext(null);

const Context = (props) => {
    const [User, setUser] = useState([]);

    return (
        <UserContext.Provider value={[User, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Context;