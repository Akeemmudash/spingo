import BlogListingLayout from "./BlogListingLayout";
import BlogPageHeader from "./BlogPageHeader";
import NewsLetter from "../../components/NewsLetter";
import "./blog-listing.css";

export default function ReadBlog() {
  return (
    <article>
      <BlogPageHeader />
      <BlogListingLayout />
      <NewsLetter />
    </article>
  );
}
