import Button from "../../components/Button";
import PropTypes from "prop-types";

export default function LatestArticlesSection() {
  return (
    <section className="container">
      <div className="heading d-flex align-items-center justify-content-between mt-5">
        <h2>Latest Articles</h2>
        <Button type="link" className="text-base-black">
          View all
        </Button>
      </div>
      <div className="section__body">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-12">
            <ArticleCard title="Enhancing Vehicle Maintenance" />
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <ArticleCard title="Enhancing Vehicle Maintenance" />
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <ArticleCard title="Enhancing Vehicle Maintenance" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ imageSrc, title }) {
  return (
    <div className="article__card">
      <div className="card__head">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card__body mt-2">
        <h3 className="article__title fw-medium font-primary">{title}</h3>
        <Button type="link" to="#" className="fs-7">
          Read More
        </Button>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
};
