# Full-Stack Interview Preparation Guide

## 🎯 Overview
This guide covers essential topics for full-stack interviews focusing on Next.js and Java Spring Boot. Each section includes common questions, detailed explanations, and code examples.

## 📚 Next.js Interview Questions

### 1. App Router vs Pages Router

**Q: What's the difference between App Router and Pages Router in Next.js?**

**A:** 
- **Pages Router** (Traditional): File-based routing in `pages/` directory
- **App Router** (New): Directory-based routing in `app/` directory with React Server Components

**Key Differences:**
```typescript
// Pages Router (pages/users/[id].tsx)
export default function UserPage({ user }) {
  return <div>{user.name}</div>
}

export async function getServerSideProps({ params }) {
  const user = await fetchUser(params.id)
  return { props: { user } }
}

// App Router (app/users/[id]/page.tsx)
export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id)
  return <div>{user.name}</div>
}
```

### 2. Server Components vs Client Components

**Q: Explain Server Components and when to use them**

**A:**
- **Server Components**: Render on server, no JavaScript sent to client
- **Client Components**: Render on client, interactive with JavaScript

```typescript
// Server Component (default in App Router)
async function UserList() {
  const users = await fetchUsers()
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

// Client Component (use 'use client' directive)
'use client'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

### 3. Data Fetching Patterns

**Q: What are the different data fetching methods in Next.js?**

**A:**
```typescript
// 1. Server Components (App Router)
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetch(`/api/users/${userId}`)
  return <div>{user.name}</div>
}

// 2. API Routes
// app/api/users/[id]/route.ts
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await getUser(params.id)
  return Response.json(user)
}

// 3. Client-side fetching
'use client'
import { useEffect, useState } from 'react'

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser)
  }, [userId])
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>
}
```

## ☕ Java Spring Boot Interview Questions

### 1. Spring Boot Auto-configuration

**Q: How does Spring Boot auto-configuration work?**

**A:** Spring Boot uses `@EnableAutoConfiguration` to automatically configure beans based on:
- Classpath dependencies
- Properties in `application.properties`
- Custom configurations

```java
@SpringBootApplication
public class TaskManagementApplication {
    public static void main(String[] args) {
        SpringApplication.run(TaskManagementApplication.class, args);
    }
}

// Custom auto-configuration
@Configuration
@ConditionalOnClass(DataSource.class)
@EnableConfigurationProperties(DatabaseProperties.class)
public class DatabaseAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource(DatabaseProperties properties) {
        return DataSourceBuilder.create()
            .url(properties.getUrl())
            .username(properties.getUsername())
            .password(properties.getPassword())
            .build();
    }
}
```

### 2. Dependency Injection

**Q: Explain dependency injection in Spring**

**A:** DI is a design pattern where dependencies are injected rather than created by the class itself.

```java
@Service
public class TaskService {
    private final TaskRepository taskRepository;
    
    // Constructor injection (recommended)
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(TaskStatus status);
}
```

### 3. JPA vs Hibernate

**Q: What's the difference between JPA and Hibernate?**

**A:**
- **JPA**: Java Persistence API - specification/interface
- **Hibernate**: Implementation of JPA specification

```java
// JPA Entity
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Enumerated(EnumType.STRING)
    private TaskStatus status;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    
    // Getters and setters
}

// Hibernate-specific annotations (optional)
@Entity
@Table(name = "tasks")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Task {
    // ... same as above
}
```

## 🔐 Authentication & Security

### JWT Authentication Flow

```java
// Spring Security Configuration
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
}

// JWT Service
@Service
public class JwtService {
    
    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)
            .compact();
    }
    
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
```

## 🗄️ Database Design

### Entity Relationships

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String email;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Task> tasks;
}

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @ManyToMany
    @JoinTable(
        name = "task_tags",
        joinColumns = @JoinColumn(name = "task_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags;
}
```

## 🧪 Testing

### Unit Testing with JUnit 5

```java
@ExtendWith(MockitoExtension.class)
class TaskServiceTest {
    
    @Mock
    private TaskRepository taskRepository;
    
    @InjectMocks
    private TaskService taskService;
    
    @Test
    void shouldCreateTask() {
        // Given
        TaskDto taskDto = new TaskDto("Test Task", "Description");
        Task task = new Task();
        task.setId(1L);
        task.setTitle("Test Task");
        
        when(taskRepository.save(any(Task.class))).thenReturn(task);
        
        // When
        Task result = taskService.createTask(taskDto);
        
        // Then
        assertThat(result.getTitle()).isEqualTo("Test Task");
        verify(taskRepository).save(any(Task.class));
    }
}
```

## 🚀 System Design Questions

### 1. Design a Task Management System

**Requirements:**
- Users can create, read, update, delete tasks
- Tasks have priority, status, due date
- Users can assign tasks to others
- Real-time notifications
- Search and filtering

**Architecture:**
```
Frontend (Next.js) → API Gateway → Backend Services → Database
                                    ↓
                              Message Queue → Notification Service
```

**Database Schema:**
```sql
-- Users table
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks table
CREATE TABLE tasks (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('TODO', 'IN_PROGRESS', 'DONE') DEFAULT 'TODO',
    priority ENUM('LOW', 'MEDIUM', 'HIGH') DEFAULT 'MEDIUM',
    due_date TIMESTAMP,
    user_id BIGINT,
    assigned_to BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (assigned_to) REFERENCES users(id)
);
```

### 2. Scalability Considerations

**Horizontal Scaling:**
- Load balancer for multiple backend instances
- Database read replicas
- Caching with Redis
- CDN for static assets

**Performance Optimization:**
- Database indexing
- Connection pooling
- API response caching
- Pagination for large datasets

## 💡 Coding Challenges

### 1. Implement CRUD Operations

```typescript
// Next.js API Route
// app/api/tasks/route.ts
export async function GET() {
  const tasks = await prisma.task.findMany({
    include: { user: true }
  })
  return Response.json(tasks)
}

export async function POST(request: Request) {
  const body = await request.json()
  const task = await prisma.task.create({
    data: body,
    include: { user: true }
  })
  return Response.json(task, { status: 201 })
}
```

```java
// Spring Boot Controller
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    
    private final TaskService taskService;
    
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    
    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        return ResponseEntity.ok(taskService.getAllTasks());
    }
    
    @PostMapping
    public ResponseEntity<TaskDto> createTask(@Valid @RequestBody CreateTaskRequest request) {
        TaskDto task = taskService.createTask(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(task);
    }
}
```

### 2. Form Validation

```typescript
// Next.js with React Hook Form + Zod
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH'])
})

type TaskFormData = z.infer<typeof taskSchema>

function TaskForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema)
  })
  
  const onSubmit = async (data: TaskFormData) => {
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} />
      {errors.title && <span>{errors.title.message}</span>}
      <button type="submit">Create Task</button>
    </form>
  )
}
```

## 🎯 Interview Tips

### Technical Interview Preparation
1. **Practice coding**: Use platforms like LeetCode, HackerRank
2. **Build projects**: Create portfolio projects demonstrating full-stack skills
3. **Understand fundamentals**: Focus on core concepts rather than memorizing syntax
4. **System design**: Practice designing scalable systems
5. **Testing**: Be prepared to write unit tests during interviews

### Common Interview Questions
- Explain the difference between REST and GraphQL
- How would you handle authentication in a microservices architecture?
- What are the benefits of using TypeScript?
- How does Spring Boot's auto-configuration work?
- Explain the concept of dependency injection
- How would you optimize database queries?
- What are the different types of testing?

### Behavioral Questions
- Describe a challenging project you worked on
- How do you handle conflicts in a team?
- What's your approach to learning new technologies?
- How do you stay updated with industry trends?
- Describe a time when you had to debug a complex issue

## 📚 Additional Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components RFC](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
- [Next.js App Router](https://nextjs.org/docs/app)

### Spring Boot
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Security Reference](https://docs.spring.io/spring-security/reference/)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)

### General
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Clean Code by Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350884)
- [Design Patterns](https://refactoring.guru/design-patterns) 