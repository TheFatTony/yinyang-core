package io.yinyang.core.dao.user;


import io.yinyang.core.dao.Dao;
import io.yinyang.core.entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public interface UserDao extends Dao<UserEntity, Long> {
    UserEntity loadUserByUsername(String username);

    UserEntity findByName(String name);
}
