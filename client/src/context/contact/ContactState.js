import React, { useReducer } from "react";
import uuid from "uuid";

import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        date: "2019-10-03T12:16:09.212Z",
        _id: "5d95e78736461e26acc04106",
        name: "Mr Smith",
        email: "smith@smith.com",
        phone: "000-000-000-001",
        user: "5d934ce59e3db603685f21df",
        __v: 0
      },
      {
        type: "personal",
        date: "2019-10-03T12:16:09.212Z",
        _id: "5d95e81c36461e26acc04108",
        name: "harry whity",
        email: "harry@gmail.com",
        phone: "111-111-111",
        user: "5d934ce59e3db603685f21df",
        __v: 0
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
