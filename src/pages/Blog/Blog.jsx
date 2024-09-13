import React from "react";
import Content from "./Content";
import "./blog.css";
import NewsLetter from "../../components/NewsLetter";
import BlogHeader from "./BlogHeader";

export default function Blog() {
  return (
    <div>
      <BlogHeader />
      <Content />
      <NewsLetter />
    </div>
  );
}
