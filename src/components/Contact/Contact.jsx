import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Contact({contact:{name, number, id}, onDelete }){
    return(
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.itemUser}>
                    <p><FaUser /></p>
                    <p className={css.text}>{name}</p>
                </div>
                <div className={css.itemUser}>
                    <p><BsFillTelephoneFill /></p>
                    <p className={css.text}>{number}</p>
                </div>
            </div>
            <button className={css.btn} onClick={()=> onDelete(id)}>Delete</button>
        </div>
    );
}



