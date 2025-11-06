import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "customers"), (snapshot) => {
      setCustomers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <h3>Customers</h3>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} — {c.email} — {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
