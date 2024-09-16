import { create } from "zustand";
import {
  BrownMale,
  CoolMale,
  ModelFemale,
  RedFemale,
  SmilingFemale,
} from "../assets";

const useShopProductsStore = create((set, get) => ({
  cat

  addReview: (review) =>
    set((state) => ({ reviews: [review, ...state.reviews] })),
  getReviewLength: () => get().reviews.length,
  toggleReviewLike: (id) =>
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === id ? { ...review, liked: !review.liked } : review
      ),
    })),
  toggleReviewReply: (id) =>
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === id ? { ...review, replying: !review.replying } : review
      ),
    })),
}));
export default useReviewStore;
