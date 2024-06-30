import css from "./App.module.css"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import initialContacts from "../../ContactList.json"
import ContactList from "../ContactList/ContactList"
import { useEffect, useState } from "react"
export default function App (){
    

    const[contacts, setContacts] = useState(()=>{
        const savedContacts = localStorage.getItem("contacts");
        return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    })
    const[filter, setFilter] = useState('')

    useEffect(()=>{
        localStorage.setItem("contacts", JSON.stringify(contacts))
    },[contacts])

    // const addContact=(newContact)=>{
    //     setContacts((prevContacts)=>{
    //         return[...prevContacts,newContact]
    //     })
    // }

    const addContact=(newContact)=>{
        setContacts((prevContacts)=>{
            return[...prevContacts,{...newContact, id: Date.now()}];
        })
    }
    

    const deleteContact =(contactId)=>{
        setContacts((prevContacts)=>{
            return prevContacts.filter((contact)=> contact.id !== contactId) 
        })
    }

    const visibleContacts = contacts.filter((contact)=> 
    contact.name.toLowerCase().includes(filter.toLowerCase()))

    
    return(
<div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact}/>
    <SearchBox value={filter} onFilter={setFilter}/>
    <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
</div>

    )
}