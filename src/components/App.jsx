import { FormaPhonebook } from 'components/Phonebook/FormaPhonebook';
import { Contacts } from 'components/Phonebook/Contacts';
import { Filter } from 'components/Phonebook/Filter';
import { Container, Rotating } from './Phonebook/Phonebook.stiled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operation';
import { useEffect } from 'react';
import { RotatingLines } from  'react-loader-spinner'


export const App = () => {
  const dispatch = useDispatch();
  const { contacts} = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Container>
      <h2>Phonebook</h2>
      <FormaPhonebook />
      <h2>Contacts</h2>
      <Filter />
      {contacts.isLoading && !contacts.error && 
        <Rotating className="RotatingLines">
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Rotating>
      }
      <Contacts />
    </Container>
  );
};
