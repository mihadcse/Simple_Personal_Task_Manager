package com.taskmanager.personaltaskmanager.repository;

import com.taskmanager.personaltaskmanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
