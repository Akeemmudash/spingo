import RelatedPost from "./RelatedPost";
import BlogContent from "./BlogContent";
import "./blog.css";
import NewsLetter from "../../components/NewsLetter";

export default function BlogPost() {
  return (
    <div>
      <BlogContent />
      <RelatedPost />
      <NewsLetter />
    </div>
  );
}
