"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const ChildName = () => {
  const [childName, setChildName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save childName in some global state or pass it to next page
    router.push('/form/parentName');
  };

  return (
    <div>
      <h1>Enter Child's Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          placeholder="Child's Name"
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ChildName;
