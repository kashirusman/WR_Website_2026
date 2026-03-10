"use client";

interface CasePullQuoteProps {
  text: string;
}

export default function CasePullQuote({ text }: CasePullQuoteProps) {
  return (
    <div className="cs-quote">
      <p>{text}</p>
    </div>
  );
}
