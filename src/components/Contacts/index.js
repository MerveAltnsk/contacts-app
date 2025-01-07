import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'

import './style.css'

function Contacts() {
    const [contacts, setContacts] = useState([
      {fullname: 'John Doe', phone_number: '123'},
      {fullname: 'Jane Smith', phone_number: '456'}
    ]); //kayıtlarımın tutulacağı satate, veri tipi array olacak [] birden fazla elemanı burda tutmak istiyorum

    useEffect(() => {
        console.log(contacts);
    }, [contacts])


  return (
    //Form ve List componentlerini burada çağırıyoruz
    <div id="container">

      <h1>Contacts</h1>

      <List contacts = {contacts} />   {/* Eklenen kayıtları buraya prompt olarak gönderiyoruz */}
      <Form addContact = {setContacts} contacts = {contacts}/>
      
    </div>
  )
}

export default Contacts
