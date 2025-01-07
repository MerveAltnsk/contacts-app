import { useState, useEffect } from 'react';

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    //Formun içini temizlemek için
    //setForm({fullname: "", phone_number: ""});    1.yöntem
    setForm(initialFormValues);
  }, [contacts]);   //contacts değiştiğinde useEffect çalışacak

  //input un içeriği değiştiği anda onu state atabilmesi için bir fonksiyon yazıyoruz
  const onInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  //Butona tıklandığında yani form submit olduğunda çalışacak fonksiyon
  const onSubmit = (e) => {
    e.preventDefault();

    //Formun içeriğinin boş olup olmadığını kontrol ediyoruz, boşsa formu gönderme diyebiliriz
    if(form.fullname === "" || form.phone_number === ""){
      return false;
    }

    //Formun içeriğini addContact fonksiyonuna gönder
    addContact([...contacts, form]);
    console.log(form);

    //Formu sıfırlıyoruz
    setForm(initialFormValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input 
          name='fullname' 
          placeholder='Enter Full Name' 
          value={form.fullname}  //inputun value'ı formun state'ının fullname'ıyla eşitliyoruz
          onChange={onInputChange}
        />
      </div>

      <br />

      <div>
        <input 
          name='phone_number'
          placeholder='Enter Phone Number' 
          value={form.phone_number}
          onChange={onInputChange}
        />
      </div>

      <br />

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
