import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { quote } from "../model/quote";
import Quotes from "../api/quoteAgent";

const QuoteForm = () => {
  const [quote, setQuote] = useState<quote>({
    id: 0,
    quoteString: "",
    date: new Date().toISOString(),
    addDate: new Date().toISOString(),
    status: "A",
  });

  const handleSubmit = () => {
    setQuote({ ...quote, addDate: quote.date });
    Quotes.create(quote);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setQuote({ ...quote, [name]: value });
  };

  return (
    <div>
      <form>
        <label>
          Quote:
          <input
            type="text"
            name="quoteString"
            value={quote?.quoteString}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={quote?.date}
            onChange={handleInputChange}
          ></input>
        </label>
        <input type="button" onClick={handleSubmit} value={"Crear"}></input>
      </form>
      <button>
        <Link to={"/dashboard"}>Volver</Link>
      </button>
    </div>
  );
};
export default QuoteForm;
