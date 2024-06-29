// import Contact from "../Contact/Contact"
// import css from "./ContactList.module.css"
// export default function ContactList({contacts, onDelete}){
//     return(
//         <div>
//             <ul className={css.listItem}>
//                 {contacts.map(contact =>(
//                     <li key={contact.id} className={css.contactItem}>
//                         <Contact contact={contact} onDelete={onDelete}/>
//                     </li>
//                 ))}
//             </ul>
            
//         </div>
//     )
// }

import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
export default function ContactList({contacts, onDelete}){
    return(
        <div>
            <ul className={css.listItem}>
                {contacts.map(contact =>(
                    <li key={contact.id} className={css.contactItem}>
                        <Contact id={contact.id} 
                        name={contact.name}
                        number= {contact.number}
                        contact={contact} 
                        onDelete={onDelete}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}



