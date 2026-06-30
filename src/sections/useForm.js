import { useState, useEffect } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [response, setResponse] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateApiCall = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const handleSubmit = async (e, { processingMessage, successMessage, errorMessage }) => {
    e.preventDefault();
    setResponse({ message: processingMessage, type: 'processing' });

    try {
      await simulateApiCall(1500);
      setResponse({ message: successMessage, type: 'success' });
      setFormData(initialState);
    } catch {
      setResponse({ message: errorMessage, type: 'error' });
    }
  };

  useEffect(() => {
    if (response.type === 'success') {
      const timer = setTimeout(() => setResponse({ message: '', type: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [response]);

  return { formData, response, handleChange, handleSubmit };
};

export default useForm;