import React, { Fragment, useContext } from "react";

import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const contacts = contactContext.contacts;
  console.log(contactContext.contacts);
  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

export default Contacts;
