import BlogListingLayout from "./BlogListingLayout";
import PageHeader from "./PageHeader";
import NewsLetter from "../../components/NewsLetter";
import "./blog-listing.css";

export default function ReadBlog() {
  return (
    <article>
      <PageHeader />
      <BlogListingLayout />
      <NewsLetter />
    </article>
  );
}
