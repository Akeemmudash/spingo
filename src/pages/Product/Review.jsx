import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import StarRating from "../../components/StarRating";
import { useReviewStore } from "../../store";
import { ArrowRight } from "../../assets/icons";
import Button from "../../components/Button";

const Review = () => {
  const [selectedItem, setSelectedItem] = useState("Select an option");
  const reviews = useReviewStore((state) => state.reviews);
  const toggleLike = useReviewStore((state) => state.toggleReviewLike);
  const toggleReply = useReviewStore((state) => state.toggleReviewReply);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  return (
    <div>
      <div>
        <h2 className="mb-4">Customer Reviews</h2>
        <div className="reviewStar d-flex align-items-baseline mb-4">
          <span className="fs-5">
            <StarRating color="black" />
          </span>
          <span className="ms-2 fs-7">11 reviews</span>
        </div>
        <div className="input-container mb-5">
          <input
            type="text"
            className="write-review mb-0"
            placeholder="Share your thoughts"
          />
          <button className="write-review-btn">
            <span className="btn__text d-none d-lg-block px-4">
              Write Review
            </span>
            <span className="btn__icon d-block d-lg-none">
              <ArrowRight strokeWidth={2} />
            </span>
          </button>
        </div>
        <div className="d-flex  flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 gap-sm-0">
          <h3 className="review-list__header font-primary"> 11 Reviews</h3>
          <select
            aria-label="sort"
            className="review-filter px-4  rounded-3 fw-semibold "
          >
            <option value="newest" className="px-2">
              Newest
            </option>
            <option value="oldest">Oldest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
        <div className="reviews-list mt-5">
          {reviews.map((review) => (
            <>
              <motion.div
                key={review.id}
                className="review-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="review-item__header d-flex gap-3 gap-lg-0">
                  <div className="review-item__img">
                    <img
                      src={review.picture}
                      alt=""
                      className="rounded-circle "
                    />
                  </div>
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <h4>{review.name}</h4>
                    <div className="review-rating">
                      <StarRating
                        rating={review.rating}
                        className="custom-star-rating"
                      />
                    </div>
                  </div>
                </div>
                <div className="review-details">
                  <p className="review-item__body  py-2">{review.text}</p>
                  <div className="review-item-action-btns d-flex mb-1 fs-8 text-base-gray mt-2 fw-semibold gap-4">
                    <motion.p
                      onClick={() => toggleLike(review.id)}
                      className={review.liked ? "liked" : ""}
                      initial={{ scale: 1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      {review.liked ? "Unlike" : "Like"}
                    </motion.p>
                    <motion.p
                      onClick={() => toggleReply(review.id)}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="text-capitalize"
                    >
                      {review.replying ? "close" : "reply"}
                    </motion.p>
                  </div>
                  <AnimatePresence>
                    {review.replying && (
                      <motion.form
                        className="reply-input d-flex gap-2 mt-2 flex-column flex-md-row"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <input
                          type="text"
                          placeholder="Write your reply..."
                          className="form-control"
                        />
                        <Button variant="black"> Reply</Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <hr />
            </>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="loadMore">Load More</button>
      </div>
    </div>
  );
};

export default Review;
