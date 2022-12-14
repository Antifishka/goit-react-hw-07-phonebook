import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectVisibleContacts } from "redux/selectors";
import { Contacts, ContactItem } from "./ContactList.styled";
// import { getVisibleContacts } from "helpers/getVisibleContacts";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <Contacts>
            {visibleContacts.map(({ id, name, phone }) =>
                <ContactItem key={id}>
                    <Contact id={id} name={name} phone={phone}/>
                </ContactItem>
            )}
        </Contacts>
    );
}; 


