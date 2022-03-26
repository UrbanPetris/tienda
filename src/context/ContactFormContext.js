import { createContext, useContext } from "react";
import { useLocalStorage } from "../services/firebase/useLocalStorage";

const ContactFormContext = createContext();
export const useContactForm = () => {
  return useContext(ContactFormContext);
};

export const ContactFormProvider = ({ children }) => {
  // const nameState =
  //   localStorage.name != undefined
  //     ? JSON.parse(localStorage.getItem("name"))
  //     : "";
  // const lastNameState =
  //   localStorage.lastName != undefined
  //     ? JSON.parse(localStorage.getItem("lastName"))
  //     : "";
  // const phoneState =
  //   localStorage.phone != undefined
  //     ? JSON.parse(localStorage.getItem("phone"))
  //     : "";
  // const addressState =
  //   localStorage.address != undefined
  //     ? JSON.parse(localStorage.getItem("address"))
  //     : "";
  // const commentState =
  //   localStorage.comment != undefined
  //     ? JSON.parse(localStorage.getItem("comment"))
  //     : "";
  // const contactFormValidatedState =
  //   localStorage.contactFormValidated != undefined
  //     ? JSON.parse(localStorage.getItem("contactFormValidated"))
  //     : false;

  // const [name, setName] = useState(nameState);
  // const [lastName, setLastName] = useState(lastNameState);
  // const [phone, setPhone] = useState(phoneState);
  // const [address, setAddress] = useState(addressState);
  // const [comment, setComment] = useState(commentState);
  // const [contactFormValidated, setContactFormValidated] = useState(
  //   contactFormValidatedState
  // );

  const [name, setName] = useLocalStorage("name", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [address, setAddress] = useLocalStorage("address", "");
  const [comment, setComment] = useLocalStorage("comment", "");
  const [contactFormValidated, setContactFormValidated] = useLocalStorage(
    "contactFormValidatedState",
    false
  );

  // useEffect(() => {
  //   localStorage.setItem("name", JSON.stringify(name));
  //   localStorage.setItem("lastName", JSON.stringify(lastName));
  //   localStorage.setItem("phone", JSON.stringify(phone));
  //   localStorage.setItem("address", JSON.stringify(address));
  //   localStorage.setItem("comment", JSON.stringify(comment));
  //   localStorage.setItem(
  //     "contactFormValidated",
  //     JSON.stringify(contactFormValidated)
  //   );
  // }, [name, lastName, phone, address, comment, contactFormValidated]);

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
