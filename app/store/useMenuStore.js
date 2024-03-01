import { create } from 'zustand'

export const useMenuStore = create((set) => ({
    isOpen: false,
    opneMobileMenu: () => set((state) => ({ isOpne: !state.isOpne })),
    closeMobileMenu: () => set({ isOpne: false }),
}))