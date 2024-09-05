import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="blogpost-container">
      <h2>Blog Post ID: {id}</h2>
      
    </div>
  );
}
