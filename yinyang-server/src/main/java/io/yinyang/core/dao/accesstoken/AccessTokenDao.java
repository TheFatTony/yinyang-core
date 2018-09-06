package io.yinyang.core.dao.accesstoken;


import io.yinyang.core.dao.Dao;
import io.yinyang.core.entity.AccessTokenEntity;
import org.springframework.stereotype.Component;


@Component
public interface AccessTokenDao extends Dao<AccessTokenEntity, Long> {
    AccessTokenEntity findByToken(String accessTokenString);
}
