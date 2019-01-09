package com.yinyang.core.server.repositories.registertoken;


import com.yinyang.core.server.domain.RegisterTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegisterTokenDao extends JpaRepository<RegisterTokenEntity, Long> {

    Optional<RegisterTokenEntity> findByToken(String token);

}
