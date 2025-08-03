# Frontend Folder Structure Guide

## 🎯 Recommended Structure

```
frontend/src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route groups
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/              # Route groups
│   │   ├── tasks/
│   │   ├── projects/
│   │   └── settings/
│   ├── api/                      # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                   # Atomic Design Components
│   ├── atoms/                    # Basic building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.styles.ts
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Typography/
│   │   └── Icon/
│   ├── molecules/                # Simple combinations
│   │   ├── SearchBar/
│   │   ├── FormField/
│   │   └── Card/
│   ├── organisms/                # Complex components
│   │   ├── TaskCard/
│   │   ├── TaskForm/
│   │   └── Navigation/
│   └── templates/                # Page layouts
│       ├── DashboardLayout/
│       └── AuthLayout/
├── features/                     # Feature-based organization
│   ├── tasks/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── auth/
│   └── projects/
├── shared/                       # Shared utilities
│   ├── components/               # Shared components
│   ├── hooks/                    # Custom hooks
│   ├── utils/                    # Utility functions
│   ├── constants/                # App constants
│   └── types/                    # Shared types
├── lib/                          # Third-party integrations
│   ├── api.ts                    # API client
│   ├── store.ts                  # State management
│   └── utils.ts                  # Utility functions
└── styles/                       # Global styles
    ├── globals.css
    └── components.css
```

## 🏗️ Atomic Design Principles

### 1. **Atoms** (Basic building blocks)
- Button, Input, Typography, Icon
- Each in its own folder with:
  - `Component.tsx` - Main component
  - `Component.styles.ts` - Styling logic
  - `index.ts` - Exports

### 2. **Molecules** (Simple combinations)
- SearchBar (Input + Button)
- FormField (Input + Label + Error)
- Card (Container + Content)

### 3. **Organisms** (Complex components)
- TaskCard (Card + Button + Status)
- TaskForm (Multiple FormFields + Submit)
- Navigation (Logo + Menu + User)

### 4. **Templates** (Page layouts)
- DashboardLayout
- AuthLayout
- ErrorLayout

## 📁 Feature-Based Organization

### Benefits:
- **Scalability**: Easy to add new features
- **Maintainability**: Related code is grouped together
- **Team Collaboration**: Different teams can work on different features
- **Code Splitting**: Natural boundaries for lazy loading

### Structure:
```
features/tasks/
├── components/          # Feature-specific components
├── hooks/              # Feature-specific hooks
├── services/           # API calls for this feature
├── types/              # TypeScript types
├── utils/              # Feature-specific utilities
└── index.ts            # Public API exports
```

## 🔧 Best Practices

### 1. **Component Organization**
```typescript
// ✅ Good: Atomic design with separate styling
components/atoms/Button/
├── Button.tsx          // Component logic
├── Button.styles.ts    // Styling logic
└── index.ts           // Clean exports

// ✅ Good: Feature-based organization
features/tasks/
├── components/
├── hooks/
└── services/
```

### 2. **Import/Export Strategy**
```typescript
// ✅ Good: Clean imports
import { Button } from '@/components/atoms/Button';
import { useTasks } from '@/features/tasks/hooks';

// ❌ Bad: Deep imports
import Button from '@/components/atoms/Button/Button';
```

### 3. **Type Safety**
```typescript
// ✅ Good: Centralized types
// shared/types/index.ts
export interface User {
  id: string;
  name: string;
}

// ✅ Good: Feature-specific types
// features/tasks/types/index.ts
export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
```

### 4. **State Management**
```typescript
// ✅ Good: Feature-based stores
// features/tasks/store.ts
export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),
}));
```

## 🚀 Migration Strategy

### Phase 1: Create New Structure
1. Create new folders following atomic design
2. Move existing components to appropriate levels
3. Update imports gradually

### Phase 2: Refactor Components
1. Split large components into atoms/molecules
2. Extract reusable logic into hooks
3. Create feature-based organization

### Phase 3: Optimize
1. Implement code splitting
2. Add proper TypeScript types
3. Optimize bundle size

## 📋 Checklist for New Components

- [ ] Place in correct atomic level
- [ ] Create separate styling file
- [ ] Add proper TypeScript types
- [ ] Include index.ts for clean exports
- [ ] Add JSDoc comments
- [ ] Write unit tests
- [ ] Make it reusable and configurable

## 🎨 Benefits of This Structure

1. **Maintainability**: Easy to find and modify code
2. **Reusability**: Components are properly abstracted
3. **Scalability**: Structure grows with your application
4. **Team Collaboration**: Clear boundaries and responsibilities
5. **Performance**: Natural code splitting opportunities
6. **Type Safety**: Proper TypeScript organization
7. **Testing**: Easy to test isolated components 