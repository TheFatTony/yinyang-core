package com.yinyang.core.server.services.user;

import com.yinyang.core.server.domain.ResetPasswordTokenEntity;
import com.yinyang.core.server.domain.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public interface UserService extends UserDetailsService {

    UserEntity findUserByAccessToken(String accessTokenString);

    List<UserEntity> findAll();

    UserEntity save(UserEntity userEntity);

    UserEntity findByName(String name);

    void lock(String name, boolean flag);

    void setPassword(String name, String pass);

    ResetPasswordTokenEntity reset(String lang, String userName);

    UserEntity setNewPassword(String token, String password);

    UserEntity changePassword(String oldPassword, String newPassword);
}
