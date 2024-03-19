"use client";

import { useState, useEffect } from "react";
const Button = () => {
  const [create, setCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //create variable new data with only day and month and year
  const dates = new Date();
  const day = dates.getDate();
  const month = dates.getMonth() + 1;
  const year = dates.getFullYear();
  const newDate = `${day}/${month}/${year}`;
  const [date, setDate] = useState(newDate);

  const createCircular = async () => {
    if (title.length > 0 && content.length > 0) {
      try {
        const result = await fetch(`/api/createCircular`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            circular: {
              title,
              content,
              date,
            },
          }),
        });
      } catch (error) {
        console.error(error);
      }

      setTitle("");
      setContent("");
    }
    setCreate(false);
  };
  return (
    <>
      <button
        onClick={() => {
          setCreate(true);
        }}
      >
        Crear circular
      </button>

      {create && (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <input
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Content"
          />
          <input value={newDate} />
          <button onClick={createCircular}>Crear</button>
        </div>
      )}
    </>
  );
};
export default Button;
