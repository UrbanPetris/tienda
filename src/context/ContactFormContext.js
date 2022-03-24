import { useState, createContext, useContext } from "react";

const ContactFormContext = createContext();
export const useContactForm = () => {
  return useContext(ContactFormContext);
};

export const ContactFormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [contactformvalidated, setContactFormValidated] = useState(false);

  const contact = {
    name: name,
    lastname: lastname,
    phone: phone,
    address: address,
    comment: comment,
  };

  return (
    <ContactFormContext.Provider
      value={{
        name,
        setName,
        lastname,
        setLastName,
        phone,
        setPhone,
        address,
        setAddress,
        comment,
        setComment,
        contactformvalidated,
        setContactFormValidated,
        contact,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
