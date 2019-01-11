package com.yinyang.core.server.services.accesstoken;

import com.yinyang.core.server.domain.AccessTokenEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface AccessTokenService {

    List<AccessTokenEntity> findAll();

    AccessTokenEntity findByToken(String accessToken);

    void delete(AccessTokenEntity accessTokenEntity);

}
