import { createContext } from "react";
import User from "./Users";

export const TodoUserContext = createContext<{
    usersContext: User[];
    addUser: (item: string) => void;
    removeUser: (index: number) => void;
}>({
    usersContext: [],
    addUser: () => {},
    removeUser: () => {},
});