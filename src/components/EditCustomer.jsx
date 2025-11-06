import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

export default function EditCustomer({ customer }) {
  const [name, setName] = useState(customer.name);

  const handleUpdate = async () => {
    await updateDoc(doc(db, "customers", customer.id), { name });
    alert("Updated");
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}
