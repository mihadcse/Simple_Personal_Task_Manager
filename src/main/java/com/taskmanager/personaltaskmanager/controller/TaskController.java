package com.taskmanager.personaltaskmanager.controller;

import com.taskmanager.personaltaskmanager.model.Task;
import com.taskmanager.personaltaskmanager.model.User;
import com.taskmanager.personaltaskmanager.service.TaskService;
import com.taskmanager.personaltaskmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class TaskController {
    @Autowired
    private TaskService taskService;
    @Autowired
    private UserService userService;

    @PostMapping("/add-tasks/{username}")
    public Task createTask(@PathVariable String username, @RequestBody Task task) {
        User user = userService.findByUsername(username);
        task.setUser(user);
        return taskService.saveTask(task);
    }

    @GetMapping("/tasks/{username}")
    public List<Task> getTasks(@PathVariable String username) {
        User user = userService.findByUsername(username);
        //task.setUser(user);
        return taskService.getUserTasks(user);
    }
    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

}
