package io.yinyang.core.services.user;


import io.yinyang.core.dao.accesstoken.AccessTokenDao;
import io.yinyang.core.dao.user.UserDao;
import io.yinyang.core.entity.AccessTokenEntity;
import io.yinyang.core.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import io.yinyang.core.rest.utils.JWTUtil;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private AccessTokenDao accessTokenDao;

    @Autowired
    private JWTUtil jwtUtil;


    protected UserServiceImpl() {
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) {
        return this.userDao.loadUserByUsername(username);
    }

    @Override
    @Transactional
    public UserEntity findUserByAccessToken(String accessTokenString) {
        AccessTokenEntity accessTokenEntity = this.accessTokenDao.findByToken(accessTokenString);

        if (null == accessTokenEntity) {
            return null;
        }

        if (accessTokenEntity.isExpired()) {
            this.accessTokenDao.delete(accessTokenEntity);
            return null;
        }

        return accessTokenEntity.getUser();
    }

    @Override
    @Transactional
    public AccessTokenEntity createAccessToken(UserEntity user) {
        AccessTokenEntity accessTokenEntity = new AccessTokenEntity(user, jwtUtil.generateToken(user.getUsername()));
        return accessTokenEntity;
    }

    @Override
    public List<UserEntity> findAll() {
        return userDao.findAll();
    }
}
