import { create } from "zustand";
import {
  BrownMale,
  CoolMale,
  ModelFemale,
  RedFemale,
  SmilingFemale,
} from "../assets";

const useReviewStore = create((set, get) => ({
  reviews: [
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
  ],

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
