import { create } from "zustand";

const useScreenStore = create((set) => ({
  screenWidth: 500,
  updateScreenWidth: (screenWidth) => set(() => ({ screenWidth: screenWidth })),
}));
export default useScreenStore;
