import React, { useState, useContext } from 'react';
import { QuotesContext } from '../context/QuotesContext';


const QuoteForm = () => {
  const { createQuote } = useContext(QuotesContext);
  const [authorName, setAuthorName] = useState('');
  const [quoteText, setQuoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({ authorName, quoteText });
    setAuthorName('');
    setQuoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields and submission button */}
    </form>
  );
};

export default QuoteForm;