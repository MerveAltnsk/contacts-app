import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([]); //kayıtlarımın tutulacağı satate, veri tipi array olacak [] birden fazla elemanı burda tutmak istiyorum

    useEffect(() => {
        console.log(contacts);
    }, [contacts])


  return (
    <div>
      <List contacts = {contacts} />   {/* Eklenen kayıtları buraya prompt olarak gönderiyoruz */}
      <Form addContact = {setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts
