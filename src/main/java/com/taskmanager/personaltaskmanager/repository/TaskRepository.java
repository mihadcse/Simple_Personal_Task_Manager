package com.taskmanager.personaltaskmanager.repository;

import com.taskmanager.personaltaskmanager.model.Task;
import com.taskmanager.personaltaskmanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByUser(User user);
}
