import React from "react";
import RelatedPost from "./RelatedPost";
import BlogContent from "./BlogContent";
import "./blog.css";

export default function BlogPost() {
  return (
    <div>
        <BlogContent />
        <RelatedPost />
      </div>
  );
}
