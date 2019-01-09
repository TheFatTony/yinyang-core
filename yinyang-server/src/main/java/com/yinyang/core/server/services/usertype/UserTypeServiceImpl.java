package com.yinyang.core.server.services.usertype;

import com.yinyang.core.server.domain.UserTypeEntity;
import com.yinyang.core.server.repositories.usertype.UserTypeDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Slf4j
@Service
public class UserTypeServiceImpl implements UserTypeService {

    @Autowired
    private UserTypeDao userTypeDao;


    @Override
    @Transactional(readOnly = true)
    public List<UserTypeEntity> findAll() {
        return this.userTypeDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public UserTypeEntity getOne(Long id) {
        return userTypeDao.getOne(id);
    }

}
