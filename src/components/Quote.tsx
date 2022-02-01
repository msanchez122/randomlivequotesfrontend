import react from "react";

interface Props {
  quoteString: String | undefined;
  date: Date | undefined;
}

export default function Quote({ quoteString, date }: Props) {
  return (
    <>
      {quoteString && date && (
        <div>
          <p>{`"${quoteString}"`}</p>
          <p>{`${date}`}</p>
        </div>
      )}
    </>
  );
}
