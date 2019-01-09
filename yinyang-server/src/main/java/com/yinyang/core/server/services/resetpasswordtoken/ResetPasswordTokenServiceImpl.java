package com.yinyang.core.server.services.resetpasswordtoken;

import com.yinyang.core.server.domain.ResetPasswordTokenEntity;
import com.yinyang.core.server.repositories.resetpasswordtoken.ResetPasswordTokenDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Slf4j
@Service
public class ResetPasswordTokenServiceImpl implements ResetPasswordTokenService {

    @Autowired
    private ResetPasswordTokenDao dao;

    @Override
    @Transactional(readOnly = true)
    public List<ResetPasswordTokenEntity> findAll() {
        return this.dao.findAll();
    }

    @Override
    @Transactional
    public ResetPasswordTokenEntity save(ResetPasswordTokenEntity resetPasswordTokenEntity) {
        return dao.save(resetPasswordTokenEntity);
    }

    @Override
    @Transactional
    public void delete(ResetPasswordTokenEntity resetPasswordTokenEntity) {
        dao.delete(resetPasswordTokenEntity);
    }

    @Override
    @Transactional
    public Optional<ResetPasswordTokenEntity> findByToken(String token) {
        return dao.findByToken(token);
    }

}
