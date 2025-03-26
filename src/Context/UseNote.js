import React, { useContext, useState } from "react";
import { createContext } from "react";

export const NoteContext=createContext(
    {
        note:{
            id: 1,
            title:"Title",
            description:"Description",
        },
        addNote:(note)=>{},
        updateNote:(id,note)=>{},
        deleteNote:(id)=>{},
        alertMessage:(mess)=>{},
    },
);



export default function useNote() {
  return useContext(NoteContext)
}

export const NoteProvider=NoteContext.Provider;


