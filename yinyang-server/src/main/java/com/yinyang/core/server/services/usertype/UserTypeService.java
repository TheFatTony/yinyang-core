package com.yinyang.core.server.services.usertype;

import com.yinyang.core.server.domain.UserTypeEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface UserTypeService {

    List<UserTypeEntity> findAll();

    UserTypeEntity getOne(Long id);

}
