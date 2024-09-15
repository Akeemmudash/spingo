import Button from "../../components/Button";
import ArticleCard from "../../components/ArticleCard";

export default function ArticlesSection() {
  return (
    <section className="container">
      <div className="heading d-flex align-items-center justify-content-between mt-5">
        <h2>Latest Articles</h2>
        <Button
          buttonType="link"
          variant="underline"
          hasUnderlineAndArrow
          className="text-base-black"
          to="/blog"
        >
          View all
        </Button>
      </div>
      <div className="section__body">
        <div className="articles__grid row ">
          <div className="col-md-6 col-lg-4 col-12">
            <ArticleCard
              title="Enhancing Vehicle Maintenance"
              variant="buttonType"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <ArticleCard
              title="Enhancing Vehicle Maintenance"
              variant="buttonType"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <ArticleCard
              title="Enhancing Vehicle Maintenance"
              variant="buttonType"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
