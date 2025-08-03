# Task Management Frontend - Next.js 14

## 🚀 Overview
A modern, responsive frontend application built with Next.js 14 for managing tasks. This application provides an intuitive interface for creating, editing, deleting, and organizing tasks with advanced filtering and search capabilities.

## 🏗️ Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Build Tool**: npm

## 📋 Features
- ✅ **CRUD Operations**: Create, read, update, and delete tasks
- ✅ **Real-time Search**: Search tasks by title and description
- ✅ **Advanced Filtering**: Filter by status and priority
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Form Validation**: Client-side validation with Zod
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Loading States**: Smooth loading indicators
- ✅ **Modern UI**: Clean, intuitive interface with Tailwind CSS
- ✅ **Type Safety**: Full TypeScript support

## 🛠️ Prerequisites
- Node.js 18+ 
- npm or yarn
- Backend API running (Spring Boot application)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

### 3. Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── tasks/             # Tasks pages
│       └── page.tsx       # Main tasks page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── Button.tsx    # Button component
│   │   └── TaskCard.tsx  # Task card component
│   └── forms/            # Form components
│       └── TaskForm.tsx  # Task form component
├── lib/                  # Utilities and configurations
│   ├── api.ts           # API client
│   ├── store.ts         # Zustand store
│   └── utils.ts         # Utility functions
├── types/               # TypeScript type definitions
│   └── index.ts         # Main types
└── hooks/               # Custom React hooks
```

## 🎨 Components

### Button Component
A versatile button component with multiple variants and sizes:
```tsx
<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`, `danger`
**Sizes**: `sm`, `md`, `lg`

### TaskCard Component
Displays individual tasks with status, priority, and actions:
```tsx
<TaskCard
  task={task}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

### TaskForm Component
Form for creating and editing tasks with validation:
```tsx
<TaskForm
  task={editingTask}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
  loading={loading}
/>
```

## 🔧 State Management

### Zustand Store
The application uses Zustand for state management with the following features:

```typescript
const {
  tasks,           // Array of tasks
  loading,         // Loading state
  error,           // Error state
  fetchTasks,      // Fetch all tasks
  createTask,      // Create new task
  updateTask,      // Update existing task
  deleteTask,      // Delete task
  searchTasks,     // Search tasks
  // ... more actions
} = useTaskStore();
```

## 🌐 API Integration

### API Client
The application uses Axios for API communication with automatic error handling:

```typescript
// Task API functions
const taskApi = {
  getAll: () => Promise<Task[]>,
  getById: (id: number) => Promise<Task>,
  create: (task: CreateTaskRequest) => Promise<Task>,
  update: (id: number, task: UpdateTaskRequest) => Promise<Task>,
  delete: (id: number) => Promise<void>,
  search: (keyword: string) => Promise<Task[]>,
  // ... more methods
};
```

## 🎯 Key Features

### Task Management
- **Create Tasks**: Add new tasks with title, description, status, priority, and due date
- **Edit Tasks**: Modify existing task details
- **Delete Tasks**: Remove tasks with confirmation
- **View Tasks**: Display tasks in a responsive grid layout

### Search and Filtering
- **Search**: Search tasks by title and description
- **Status Filter**: Filter by task status (TODO, IN_PROGRESS, DONE, CANCELLED)
- **Priority Filter**: Filter by priority level (LOW, MEDIUM, HIGH, URGENT)
- **Clear Filters**: Reset all filters to show all tasks

### User Experience
- **Responsive Design**: Works seamlessly across all device sizes
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time validation with helpful error messages
- **Modal Dialogs**: Clean modal interface for forms

## 🎨 Styling

### Tailwind CSS
The application uses Tailwind CSS for styling with custom utilities:

```typescript
// Utility functions for consistent styling
export function getStatusColor(status: TaskStatus): string {
  switch (status) {
    case 'TODO': return 'bg-gray-100 text-gray-800 border-gray-300';
    case 'IN_PROGRESS': return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'DONE': return 'bg-green-100 text-green-800 border-green-300';
    case 'CANCELLED': return 'bg-red-100 text-red-800 border-red-300';
  }
}
```

## 🔍 TypeScript

### Type Safety
Full TypeScript support with comprehensive type definitions:

```typescript
export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  user: User;
  assignedTo?: User;
  createdAt: string;
  updatedAt: string;
}
```

## 🧪 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Quality
- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (if configured)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

### API Configuration
Update the API base URL in `src/lib/api.ts` if needed:
```typescript
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api',
  // ... other config
});
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 Integration

### Backend API
This frontend is designed to work with the Spring Boot backend API. Ensure the backend is running and accessible at the configured URL.

### API Endpoints
The frontend expects the following API endpoints:
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task
- `GET /api/tasks/search` - Search tasks
- And more...

## 📝 Notes
- The application requires a running backend API
- CORS is configured on the backend to allow requests from `http://localhost:3000`
- Authentication is currently disabled for development purposes
- The application uses optimistic updates for better UX

## 🔗 Related Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
