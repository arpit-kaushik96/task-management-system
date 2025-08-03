package com.example.taskmanagement.controller;

import com.example.taskmanagement.dto.CreateTaskRequest;
import com.example.taskmanagement.dto.TaskDto;
import com.example.taskmanagement.entity.Task;
import com.example.taskmanagement.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@Tag(name = "Task Management", description = "APIs for managing tasks")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    
    private final TaskService taskService;
    
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    
    @GetMapping
    @Operation(summary = "Get all tasks", description = "Retrieve all tasks with optional pagination")
    public ResponseEntity<List<TaskDto>> getAllTasks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        if (page == 0 && size == 10) {
            // Return all tasks without pagination
            List<TaskDto> tasks = taskService.getAllTasks();
            return ResponseEntity.ok(tasks);
        } else {
            // Return paginated tasks
            Pageable pageable = PageRequest.of(page, size);
            Page<TaskDto> tasks = taskService.getAllTasksPaginated(pageable);
            return ResponseEntity.ok(tasks.getContent());
        }
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get task by ID", description = "Retrieve a specific task by its ID")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable Long id) {
        TaskDto task = taskService.getTaskById(id);
        return ResponseEntity.ok(task);
    }
    
    @GetMapping("/user/{userId}")
    @Operation(summary = "Get tasks by user", description = "Retrieve all tasks for a specific user")
    public ResponseEntity<List<TaskDto>> getTasksByUser(@PathVariable Long userId) {
        List<TaskDto> tasks = taskService.getTasksByUser(userId);
        return ResponseEntity.ok(tasks);
    }
    
    @GetMapping("/status/{status}")
    @Operation(summary = "Get tasks by status", description = "Retrieve all tasks with a specific status")
    public ResponseEntity<List<TaskDto>> getTasksByStatus(@PathVariable Task.TaskStatus status) {
        List<TaskDto> tasks = taskService.getTasksByStatus(status);
        return ResponseEntity.ok(tasks);
    }
    
    @GetMapping("/priority/{priority}")
    @Operation(summary = "Get tasks by priority", description = "Retrieve all tasks with a specific priority")
    public ResponseEntity<List<TaskDto>> getTasksByPriority(@PathVariable Task.Priority priority) {
        List<TaskDto> tasks = taskService.getTasksByPriority(priority);
        return ResponseEntity.ok(tasks);
    }
    
    @PostMapping
    @Operation(summary = "Create a new task", description = "Create a new task for the authenticated user")
    public ResponseEntity<TaskDto> createTask(@Valid @RequestBody CreateTaskRequest request,
                                             Authentication authentication) {
        // In a real application, you would get the user ID from the authentication
        // For now, we'll use a default user ID (1)
        Long userId = 1L; // TODO: Extract from authentication
        
        TaskDto createdTask = taskService.createTask(request, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update a task", description = "Update an existing task by ID")
    public ResponseEntity<TaskDto> updateTask(@PathVariable Long id,
                                             @Valid @RequestBody CreateTaskRequest request) {
        TaskDto updatedTask = taskService.updateTask(id, request);
        return ResponseEntity.ok(updatedTask);
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a task", description = "Delete a task by ID")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/search")
    @Operation(summary = "Search tasks", description = "Search tasks by title or description")
    public ResponseEntity<List<TaskDto>> searchTasks(@RequestParam String keyword) {
        List<TaskDto> tasks = taskService.searchTasks(keyword);
        return ResponseEntity.ok(tasks);
    }
    
    @GetMapping("/overdue")
    @Operation(summary = "Get overdue tasks", description = "Retrieve all tasks that are overdue")
    public ResponseEntity<List<TaskDto>> getOverdueTasks() {
        List<TaskDto> tasks = taskService.getOverdueTasks();
        return ResponseEntity.ok(tasks);
    }
} 