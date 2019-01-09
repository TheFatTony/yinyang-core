package com.yinyang.core.server.services.resetpasswordtoken;

import com.yinyang.core.server.domain.ResetPasswordTokenEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public interface ResetPasswordTokenService {

    List<ResetPasswordTokenEntity> findAll();

    ResetPasswordTokenEntity save(ResetPasswordTokenEntity resetPasswordTokenEntity);

    void delete(ResetPasswordTokenEntity resetPasswordTokenEntity);

    Optional<ResetPasswordTokenEntity> findByToken(String token);
}
