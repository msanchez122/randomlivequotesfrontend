import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quotes from "../api/quoteAgent";
import Quote from "../components/Quote";
import { quote } from "../model/quote";

export default function Home() {
  const [quote, setQuote] = useState<quote>();
  const TIME_TO_CALL = 10000;

  useEffect(() => {
    Quotes.random().then((res) => {
      setQuote(res);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      Quotes.random().then((res) => {
        setQuote(res);
      });
    }, TIME_TO_CALL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Quote quoteString={quote?.quoteString} date={quote?.date}></Quote>
      <button>
        <Link to={"/dashboard"}>Administrar</Link>
      </button>
    </div>
  );
}
