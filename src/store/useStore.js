import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({
            // Theme State
            isDarkMode: false,
            toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

            // Project State (Mock)
            projects: [],
            setProjects: (projects) => set({ projects }),
        }),
        {
            name: 'portfolio-storage',
            partialize: (state) => ({ isDarkMode: state.isDarkMode }),
        }
    )
);

export default useStore;