package com.example.taskmanagement.repository;

import com.example.taskmanagement.entity.Task;
import com.example.taskmanagement.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    
    List<Task> findByUser(User user);
    
    Page<Task> findByUser(User user, Pageable pageable);
    
    List<Task> findByAssignedTo(User assignedTo);
    
    List<Task> findByStatus(Task.TaskStatus status);
    
    List<Task> findByPriority(Task.Priority priority);
    
    List<Task> findByUserAndStatus(User user, Task.TaskStatus status);
    
    List<Task> findByDueDateBefore(LocalDateTime date);
    
    @Query("SELECT t FROM Task t WHERE t.user = :user AND t.dueDate BETWEEN :startDate AND :endDate")
    List<Task> findByUserAndDueDateBetween(@Param("user") User user, 
                                          @Param("startDate") LocalDateTime startDate, 
                                          @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT t FROM Task t WHERE t.title LIKE %:keyword% OR t.description LIKE %:keyword%")
    List<Task> findByTitleOrDescriptionContaining(@Param("keyword") String keyword);
} 