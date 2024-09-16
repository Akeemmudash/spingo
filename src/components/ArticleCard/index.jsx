import { Link } from "react-router-dom";
import Button from "../Button";
import PropTypes from "prop-types";
import "./article-card.css";

export default function ArticleCard({
  imageSrc,
  title,
  blogID,
  variant = "dateType",
  date = `${new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`,
  layoutType = "vertical",
}) {
  return (
    <Link
      to={`/blog/${blogID}/blog-post`}
      className={`article__card w-full d-flex ${
        layoutType !== "" ? layoutType : null
      }`}
    >
      <div className="card__head rounded-3 overflow-hidden">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card__body">
        <h3 className="article__title fw-medium font-primary">{title}</h3>
        {variant === "buttonType" ? (
          <Button
            buttonType="link"
            to={`blog/${blogID}/blog-post`}
            hasUnderlineAndArrow
            variant="underline"
            className="fs-7 pb-1 "
          >
            Read More
          </Button>
        ) : (
          <p>{date}</p>
        )}
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  blogID: PropTypes.string,
  date: PropTypes.string,
  variant: PropTypes.string,
  layoutType: PropTypes.oneOf(["vertical", "horizontal"]),
};
