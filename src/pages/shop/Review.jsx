import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./shop.css";
import {
  ModelFemale,
  RedFemale,
  BrownMale,
  SmilingFemale,
  CoolMale,
} from "../../assets";
import FiveStarRating from "../../components/FiveStarRating";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const Review = () => {
  const [selectedItem, setSelectedItem] = useState("Select an option");

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "August 25, 2024",
      text: "I recently purchased the Bosch Premium Brake Pads Set for my sedan, and I couldn’t be more satisfied. The installation was straightforward, and the improvement in braking performance is immediately noticeable. The brakes are quiet and responsive, giving me confidence while driving. Highly recommend these brake pads for anyone looking for quality and durability!",
      picture: ModelFemale,
      liked: false,
      replying: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      date: "September 2, 2024",
      text: "I decided to upgrade my car’s brake system and went with the Bosch Premium Brake Pads. The difference is clear—better braking performance and almost no brake dust. I also appreciate the prompt delivery and excellent customer service from Vescan. Will definitely buy again!",
      picture: RedFemale,
      liked: false,
      replying: false,
    },
    {
      id: 3,
      name: "Bob Johnson",
      rating: 3,
      date: "September 3, 2024",
      text: "As a towing service operator, reliability is crucial for our fleet. We've been using parts from Vescan for a while now, and they never disappoint. The Bosch brake pads are a game-changer—superb stopping power and they last longer than other brands we’ve tried. Great product for anyone in the automotive industry!",
      picture: BrownMale,
      liked: false,
      replying: false,
    },
    {
      id: 4,
      name: "Sofia Harvetz",
      rating: 3,
      date: "September 3, 2024",
      text: "I decided to upgrade my car’s brake system and went with the Bosch Premium Brake Pads. The difference is clear—better braking performance and almost no brake dust. I also appreciate the prompt delivery and excellent customer service from Vescan. Will definitely buy again!",
      picture: SmilingFemale,
      liked: false,
      replying: false,
    },
    {
      id: 5,
      name: "Nicolas Jensen",
      rating: 3,
      date: "September 3, 2024",
      text: "I recently purchased the Bosch Premium Brake Pads Set for my sedan, and I couldn’t be more satisfied. The installation was straightforward, and the improvement in braking performance is immediately noticeable. The brakes are quiet and responsive, giving me confidence while driving. Highly recommend these brake pads for anyone looking for quality and durability!",
      picture: CoolMale,
      liked: false,
      replying: false,
    },
  ]);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const toggleLike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, liked: !review.liked } : review
      )
    );
  };

  const toggleReply = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, replying: !review.replying } : review
      )
    );
  };

  return (
    <div>
      <div>
        <h3>Customer Reviews</h3>
        <div className="reviewStar d-flex">
          <FiveStarRating
            rating={3}
            className="custom-star-rating"
            onRate={(rating) => console.log(`Rated: ${rating}`)}
          />{" "}
          11 reviews
        </div>
        <div className="input-container">
          <input
            type="text"
            className="write-review"
            placeholder="Write your review..."
          />
          <button className="btn writeReview">Write Review</button>
        </div>
        <div className="review-header">
          <h3>11 Reviews</h3>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="body" id="dropdown-basic">
              {selectedItem} <FaChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
              <Dropdown.Item eventKey="Oldest">Oldest</Dropdown.Item>
              <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="reviews-list">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="review-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <img src={review.picture} alt="" />
              <div className="review-details">
                <div className="review-header">
                  <h4>{review.name}</h4>
                </div>
                <div className="review-rating">
                  <FiveStarRating
                    rating={review.rating}
                    className="custom-star-rating"
                  />
                </div>
                <p className="reviewP">{review.text}</p>
                <div className="btns d-flex">
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
                  >
                    Reply
                  </motion.p>
                </div>
                <AnimatePresence>
                  {review.replying && (
                    <motion.div
                      className="reply-input"
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
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
