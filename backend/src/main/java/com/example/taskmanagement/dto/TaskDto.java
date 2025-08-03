package com.example.taskmanagement.dto;

import com.example.taskmanagement.entity.Task;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class TaskDto {
    private Long id;
    private String title;
    private String description;
    private Task.TaskStatus status;
    private Task.Priority priority;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime dueDate;
    
    private UserDto user;
    private UserDto assignedTo;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime createdAt;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime updatedAt;
    
    // Constructors
    public TaskDto() {}
    
    public TaskDto(Long id, String title, String description, Task.TaskStatus status, 
                   Task.Priority priority, LocalDateTime dueDate, UserDto user, 
                   UserDto assignedTo, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.dueDate = dueDate;
        this.user = user;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
    // Static factory method to convert from Entity
    public static TaskDto fromEntity(Task task) {
        return new TaskDto(
            task.getId(),
            task.getTitle(),
            task.getDescription(),
            task.getStatus(),
            task.getPriority(),
            task.getDueDate(),
            task.getUser() != null ? UserDto.fromEntity(task.getUser()) : null,
            task.getAssignedTo() != null ? UserDto.fromEntity(task.getAssignedTo()) : null,
            task.getCreatedAt(),
            task.getUpdatedAt()
        );
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
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
    
    public UserDto getUser() {
        return user;
    }
    
    public void setUser(UserDto user) {
        this.user = user;
    }
    
    public UserDto getAssignedTo() {
        return assignedTo;
    }
    
    public void setAssignedTo(UserDto assignedTo) {
        this.assignedTo = assignedTo;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
} 