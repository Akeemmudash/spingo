import React from "react";
import Content from "../Blog/BlogListingLayout";
import PageHeader from "./PageHeader";
import "./blog.css";
import NewsLetter from "../../components/NewsLetter";

export default function Blog() {
  return (
    <div>
      <PageHeader />
      <Content />
      <NewsLetter />
    </div>
  );
}
