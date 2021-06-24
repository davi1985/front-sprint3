import { createContext, useState } from 'react';

export const AlertContext = createContext([]);

export function AlertProvider({ children }) {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function alert(message, success) {
    setMessage(message);
    setSuccess(success);

    setTimeout(() => setMessage(), [4000]);
  }
  return (
    <AlertContext.Provider value={{ message, success, alert }}>
      {children}
    </AlertContext.Provider>
  );
}
