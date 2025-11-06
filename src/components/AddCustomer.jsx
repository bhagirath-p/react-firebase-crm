import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleAdd = async () => {
    await addDoc(collection(db, "customers"), {
      name,
      email,
      phone,
      notes,
      createdAt: serverTimestamp(),
    });
    alert("Customer added");
  };

  return (
    <div>
      <h3>Add Customer</h3>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <textarea placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
