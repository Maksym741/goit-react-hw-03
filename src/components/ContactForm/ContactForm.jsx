import { useId } from "react"
import css from "./ContactForm.module.css"
import { Field, Form, Formik, ErrorMessage} from "formik"
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name:Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number:Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});
export default function ContactForm({onAdd}){

const initialValues={
    name:"",
    number:""
}

    const nameFialdId = useId();
    const numderFialdId = useId();
    const handleSubmit = (values, actions)=>{
        onAdd(values);
    actions.resetForm();
}

    return(
        <Formik 
        initialValues={initialValues} 
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
            <Form className={css.container}>
                <div>
                    <label className={css.label}>Name</label>
                    <Field 
                    className={css.field} type="text" name="name" id={nameFialdId}/>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>
                <div>
                    <label className={css.label}>Number</label>
                    <Field className={css.field} type="text" name="number" id={numderFialdId}/>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}






