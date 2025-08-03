package com.example.taskmanagement.dto;

import com.example.taskmanagement.entity.Task;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public class CreateTaskRequest {
    
    @NotBlank(message = "Title is required")
    private String title;
    
    private String description;
    
    @NotNull(message = "Status is required")
    private Task.TaskStatus status;
    
    @NotNull(message = "Priority is required")
    private Task.Priority priority;
    
    private LocalDateTime dueDate;
    
    private Long assignedToId;
    
    // Constructors
    public CreateTaskRequest() {}
    
    public CreateTaskRequest(String title, String description, Task.TaskStatus status, 
                           Task.Priority priority, LocalDateTime dueDate, Long assignedToId) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.dueDate = dueDate;
        this.assignedToId = assignedToId;
    }
    
    // Getters and Setters
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Task.TaskStatus getStatus() {
        return status;
    }
    
    public void setStatus(Task.TaskStatus status) {
        this.status = status;
    }
    
    public Task.Priority getPriority() {
        return priority;
    }
    
    public void setPriority(Task.Priority priority) {
        this.priority = priority;
    }
    
    public LocalDateTime getDueDate() {
        return dueDate;
    }
    
    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }
    
    public Long getAssignedToId() {
        return assignedToId;
    }
    
    public void setAssignedToId(Long assignedToId) {
        this.assignedToId = assignedToId;
    }
} 