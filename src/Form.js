import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
