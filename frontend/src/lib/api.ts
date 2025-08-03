import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Task, CreateTaskRequest, UpdateTaskRequest, TaskStatus, TaskPriority } from '@/types';

// Create axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Task API functions
export const taskApi = {
  // Get all tasks
  getAll: async (page?: number, size?: number): Promise<Task[]> => {
    const params = new URLSearchParams();
    if (page !== undefined) params.append('page', page.toString());
    if (size !== undefined) params.append('size', size.toString());
    
    const response = await apiClient.get(`/tasks?${params.toString()}`);
    return response.data;
  },

  // Get task by ID
  getById: async (id: number): Promise<Task> => {
    const response = await apiClient.get(`/tasks/${id}`);
    return response.data;
  },

  // Get tasks by user
  getByUser: async (userId: number): Promise<Task[]> => {
    const response = await apiClient.get(`/tasks/user/${userId}`);
    return response.data;
  },

  // Get tasks by status
  getByStatus: async (status: TaskStatus): Promise<Task[]> => {
    const response = await apiClient.get(`/tasks/status/${status}`);
    return response.data;
  },

  // Get tasks by priority
  getByPriority: async (priority: TaskPriority): Promise<Task[]> => {
    const response = await apiClient.get(`/tasks/priority/${priority}`);
    return response.data;
  },

  // Create new task
  create: async (task: CreateTaskRequest): Promise<Task> => {
    const response = await apiClient.post('/tasks', task);
    return response.data;
  },

  // Update task
  update: async (id: number, task: UpdateTaskRequest): Promise<Task> => {
    const response = await apiClient.put(`/tasks/${id}`, task);
    return response.data;
  },

  // Delete task
  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/tasks/${id}`);
  },

  // Search tasks
  search: async (keyword: string): Promise<Task[]> => {
    const response = await apiClient.get(`/tasks/search?keyword=${encodeURIComponent(keyword)}`);
    return response.data;
  },

  // Get overdue tasks
  getOverdue: async (): Promise<Task[]> => {
    const response = await apiClient.get('/tasks/overdue');
    return response.data;
  },
};

// User API functions (for future use)
export const userApi = {
  // Get current user profile
  getProfile: async () => {
    const response = await apiClient.get('/users/profile');
    return response.data;
  },

  // Update user profile
  updateProfile: async (userData: Record<string, unknown>) => {
    const response = await apiClient.put('/users/profile', userData);
    return response.data;
  },
};

// Auth API functions (for future use)
export const authApi = {
  // Login
  login: async (credentials: { username: string; password: string }) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  // Register
  register: async (userData: { username: string; email: string; password: string; name: string }) => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },

  // Logout
  logout: async () => {
    await apiClient.post('/auth/logout');
    localStorage.removeItem('authToken');
  },
};

export default apiClient; 