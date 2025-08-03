package com.example.taskmanagement.service;

import com.example.taskmanagement.dto.CreateTaskRequest;
import com.example.taskmanagement.dto.TaskDto;
import com.example.taskmanagement.entity.Task;
import com.example.taskmanagement.entity.User;
import com.example.taskmanagement.exception.ResourceNotFoundException;
import com.example.taskmanagement.repository.TaskRepository;
import com.example.taskmanagement.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TaskService {
    
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    
    public TaskService(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }
    
    public List<TaskDto> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    public Page<TaskDto> getAllTasksPaginated(Pageable pageable) {
        return taskRepository.findAll(pageable)
                .map(TaskDto::fromEntity);
    }
    
    public TaskDto getTaskById(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
        return TaskDto.fromEntity(task);
    }
    
    public List<TaskDto> getTasksByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        return taskRepository.findByUser(user)
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    public List<TaskDto> getTasksByStatus(Task.TaskStatus status) {
        return taskRepository.findByStatus(status)
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    public List<TaskDto> getTasksByPriority(Task.Priority priority) {
        return taskRepository.findByPriority(priority)
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    public TaskDto createTask(CreateTaskRequest request, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());
        task.setPriority(request.getPriority());
        task.setDueDate(request.getDueDate());
        task.setUser(user);
        
        // Set assigned user if provided
        if (request.getAssignedToId() != null) {
            User assignedTo = userRepository.findById(request.getAssignedToId())
                    .orElseThrow(() -> new ResourceNotFoundException("Assigned user not found with id: " + request.getAssignedToId()));
            task.setAssignedTo(assignedTo);
        }
        
        Task savedTask = taskRepository.save(task);
        return TaskDto.fromEntity(savedTask);
    }
    
    public TaskDto updateTask(Long id, CreateTaskRequest request) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
        
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());
        task.setPriority(request.getPriority());
        task.setDueDate(request.getDueDate());
        
        // Update assigned user if provided
        if (request.getAssignedToId() != null) {
            User assignedTo = userRepository.findById(request.getAssignedToId())
                    .orElseThrow(() -> new ResourceNotFoundException("Assigned user not found with id: " + request.getAssignedToId()));
            task.setAssignedTo(assignedTo);
        } else {
            task.setAssignedTo(null);
        }
        
        Task updatedTask = taskRepository.save(task);
        return TaskDto.fromEntity(updatedTask);
    }
    
    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new ResourceNotFoundException("Task not found with id: " + id);
        }
        taskRepository.deleteById(id);
    }
    
    public List<TaskDto> searchTasks(String keyword) {
        return taskRepository.findByTitleOrDescriptionContaining(keyword)
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    public List<TaskDto> getOverdueTasks() {
        return taskRepository.findByDueDateBefore(LocalDateTime.now())
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
} 