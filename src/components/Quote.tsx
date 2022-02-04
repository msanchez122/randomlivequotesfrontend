import React from "react";

interface Props {
  quoteString: String | undefined;
  date: string | undefined;
}

export default function Quote({ quoteString, date }: Props) {
  return (
    <>
      {quoteString && date && (
        <div>
          <p>{`"${quoteString}"`}</p>
          <p>{`${new Date(date).toLocaleDateString()}`}</p>
        </div>
      )}
    </>
  );
}
