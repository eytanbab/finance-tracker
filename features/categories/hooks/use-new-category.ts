import { create } from 'zustand';

type useNewCategory = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewCategory = create<useNewCategory>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
