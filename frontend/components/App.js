import React from 'react';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';
import { QuotesProvider } from '/frontend/context/QuotesContext'; // Adjust the path as necessary

export default function App() {
  return (
    <QuotesProvider>
      <div id="mp">
        <h2>Module Project</h2>
        <Quotes />
        <QuoteForm />
      </div>
    </QuotesProvider>
  );
}
