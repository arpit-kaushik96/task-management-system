import { create } from 'zustand';
import { Task, TaskFilters, TaskStatus, TaskPriority, CreateTaskRequest } from '@/types';
import { taskApi } from './api';

interface TaskStore {
  // State
  tasks: Task[];
  loading: boolean;
  error: string | null;
  filters: TaskFilters;
  
  // Actions
  fetchTasks: () => Promise<void>;
  fetchTasksByStatus: (status: TaskStatus) => Promise<void>;
  fetchTasksByPriority: (priority: TaskPriority) => Promise<void>;
  fetchTasksByUser: (userId: number) => Promise<void>;
  searchTasks: (keyword: string) => Promise<void>;
  createTask: (task: CreateTaskRequest) => Promise<void>;
  updateTask: (id: number, task: CreateTaskRequest) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  setFilters: (filters: Partial<TaskFilters>) => void;
  clearError: () => void;
  clearTasks: () => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  // Initial state
  tasks: [],
  loading: false,
  error: null,
  filters: {},

  // Fetch all tasks
  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskApi.getAll();
      set({ tasks, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch tasks', 
        loading: false 
      });
    }
  },

  // Fetch tasks by status
  fetchTasksByStatus: async (status: TaskStatus) => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskApi.getByStatus(status);
      set({ tasks, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch tasks by status', 
        loading: false 
      });
    }
  },

  // Fetch tasks by priority
  fetchTasksByPriority: async (priority: TaskPriority) => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskApi.getByPriority(priority);
      set({ tasks, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch tasks by priority', 
        loading: false 
      });
    }
  },

  // Fetch tasks by user
  fetchTasksByUser: async (userId: number) => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskApi.getByUser(userId);
      set({ tasks, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch tasks by user', 
        loading: false 
      });
    }
  },

  // Search tasks
  searchTasks: async (keyword: string) => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskApi.search(keyword);
      set({ tasks, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to search tasks', 
        loading: false 
      });
    }
  },

  // Create new task
  createTask: async (task: CreateTaskRequest) => {
    set({ loading: true, error: null });
    try {
      const newTask = await taskApi.create(task);
      set(state => ({ 
        tasks: [...state.tasks, newTask], 
        loading: false 
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to create task', 
        loading: false 
      });
    }
  },

  // Update task
  updateTask: async (id: number, task: CreateTaskRequest) => {
    set({ loading: true, error: null });
    try {
      const updatedTask = await taskApi.update(id, task);
      set(state => ({ 
        tasks: state.tasks.map(t => t.id === id ? updatedTask : t), 
        loading: false 
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to update task', 
        loading: false 
      });
    }
  },

  // Delete task
  deleteTask: async (id: number) => {
    set({ loading: true, error: null });
    try {
      await taskApi.delete(id);
      set(state => ({ 
        tasks: state.tasks.filter(t => t.id !== id), 
        loading: false 
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to delete task', 
        loading: false 
      });
    }
  },

  // Set filters
  setFilters: (filters: Partial<TaskFilters>) => {
    set(state => ({ 
      filters: { ...state.filters, ...filters } 
    }));
  },

  // Clear error
  clearError: () => {
    set({ error: null });
  },

  // Clear tasks
  clearTasks: () => {
    set({ tasks: [] });
  },
})); 