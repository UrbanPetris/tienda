import { createContext, useContext } from "react";
import { useLocalStorage } from "../services/firebase/useLocalStorage";

const ContactFormContext = createContext();
export const useContactForm = () => {
  return useContext(ContactFormContext);
};

export const ContactFormProvider = ({ children }) => {
  const [name, setName] = useLocalStorage("name", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [address, setAddress] = useLocalStorage("address", "");
  const [comment, setComment] = useLocalStorage("comment", "");
  const [contactFormValidated, setContactFormValidated] = useLocalStorage(
    "contactFormValidatedState",
    false
  );

  const contact = {
    name: name,
    lastName: lastName,
    phone: phone,
    address: address,
    comment: comment,
  };

  return (
    <ContactFormContext.Provider
      value={{
        name,
        setName,
        lastName,
        setLastName,
        phone,
        setPhone,
        address,
        setAddress,
        comment,
        setComment,
        contactFormValidated,
        setContactFormValidated,
        contact,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
