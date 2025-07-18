package com.taskmanager.personaltaskmanager.service;

import com.taskmanager.personaltaskmanager.model.Task;
import com.taskmanager.personaltaskmanager.model.User;
import com.taskmanager.personaltaskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getUserTasks(User user) {
        return taskRepository.findByUser(user);
    }

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
