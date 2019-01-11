package com.yinyang.core.server.repositories.accesstoken;


import com.yinyang.core.server.domain.AccessTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccessTokenDao extends JpaRepository<AccessTokenEntity, Long> {
    AccessTokenEntity findByToken(String token);
}
