package com.yinyang.core.server.services.accesstoken;

import com.yinyang.core.server.domain.AccessTokenEntity;
import com.yinyang.core.server.repositories.accesstoken.AccessTokenDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
public class AccessTokenServiceImpl implements AccessTokenService {

    @Autowired
    private AccessTokenDao accessTokenDao;


    @Override
    @Transactional(readOnly = true)
    public List<AccessTokenEntity> findAll() {
        return this.accessTokenDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public AccessTokenEntity findByToken(String accessToken) {
        return accessTokenDao.findByToken(accessToken);
    }

    @Override
    @Transactional
    public void delete(AccessTokenEntity accessTokenEntity) {
        accessTokenDao.delete(accessTokenEntity);
    }

}
