import React from "react";
import { useLoaderData } from "react-router-dom";

const BookPage = () => {
  const book = useLoaderData();
  console.log(book);
  return <div>BookPage</div>;
};

export default BookPage;
