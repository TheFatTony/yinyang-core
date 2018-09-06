package io.yinyang.core.services.user;

import io.yinyang.core.entity.AccessTokenEntity;
import io.yinyang.core.entity.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService extends UserDetailsService {
    UserEntity findUserByAccessToken(String accessToken);

    AccessTokenEntity createAccessToken(UserEntity user);

    List<UserEntity> findAll();
}
