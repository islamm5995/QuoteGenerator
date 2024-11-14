import React, { useState } from 'react';
import './QuoteGenerator.css'; // Подключим стили из отдельного файла CSS
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Иконки для стиля

const QuoteGenerator = () => {
  const quotes = [
    { text: "Жизнь — это то, что с тобой происходит, пока ты строишь планы.", author: "Джон Леннон" },
    { text: "Всегда верь в себя. Ты сильнее, чем думаешь.", author: "Неизвестный" },
    { text: "Счастье не зависит от того, что происходит вокруг, оно зависит от того, что происходит внутри.", author: "Будда" },
    { text: "Успех — это не конечная цель, а путь к ней.", author: "Уинстон Черчилль" },
    { text: "Каждая трудность — это шаг к успеху.", author: "Томас Эдисон" }
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const [quote, setQuote] = useState(getRandomQuote());

  const handleClick = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="quote-container">
      <div className="quote-box">
        <FaQuoteLeft className="quote-icon left" />
        <p className="quote-text">{quote.text}</p>
        <FaQuoteRight className="quote-icon right" />
        <p className="quote-author">- {quote.author}</p>
      </div>
      <button onClick={handleClick} className="quote-button">
        Новая цитата
      </button>
    </div>
  );
};

export default QuoteGenerator;
