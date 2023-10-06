import {Form, Label} from './Phonebook.stiled';
import { addContact } from 'components/redux/operation';
import { contactsSelector } from 'components/redux/selector';
import { useDispatch, useSelector } from 'react-redux';

export const FormaPhonebook = () => {

    const contacts = useSelector(contactsSelector);

    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const {name, number} = evt.target.elements;
        if (!name.value.trim() || !number.value.trim()) 
            return form.reset();
        
        const isAlredyContacts = contacts.find(el => el.name === name.value);
        if (isAlredyContacts) return alert(`${name.value} is alredy in contacts.`);
    
        const newContacts = {
            name: name.value,   
            number: number.value,
        }
        dispatch(addContact(newContacts));

        form.reset();
    };
      
        return ( 
            <div>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </Label>
                    <Label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </Label>
                    <button type="submit">Add contact</button>
                </Form>
            </div>
        );
    }