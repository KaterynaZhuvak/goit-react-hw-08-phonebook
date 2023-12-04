import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { StyledNewContactForm } from './Styled';

import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/Contacts/contacts.reducer';
import { selectContacts } from 'redux/Contacts/contacts.selectors';
import { selectAuthUserData } from 'redux/Auth/auth.selectors';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.number().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const userData = useSelector(selectAuthUserData);

  const handleAddContact = contact => {
    if (
      contacts.some(
        item => item.name === contact.name || item.number === contact.number
      )
    ) {
      alert('Contact already exists');
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
  };

  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values);
    resetForm();
  };

  return (
    <StyledNewContactForm>
      <div className="container">
        <h1 className="title">Hello {userData.name}!</h1>
        <div className="box-shadow">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <Form action="submit">
              <label htmlFor="">
                <p className="input-title">Name</p>
                <Field
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Bob Pummer"
                />
                <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
              </label>
              <label htmlFor="">
                <p className="input-title">Number</p>
                <Field
                  className="input"
                  type="tel"
                  name="number"
                  placeholder="06844673287"
                />
                <ErrorMessage name="number" render={msg => <div>{msg}</div>} />
              </label>
              <button className="button-add-contact" type="submit">
                Save
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </StyledNewContactForm>
  );
};
