import { createContext, useState } from "react";

export const NewCommentaryContext = createContext();

export function NewCommentaryState({children}){

    const [ newCommentaryState, setNewCommentaryState ] = useState(false);

    return (
        <NewCommentaryContext.Provider value={ { newCommentaryState, setNewCommentaryState } }>
            {children}
        </NewCommentaryContext.Provider>
    )
}