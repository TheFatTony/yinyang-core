package com.yinyang.core.server.repositories.usertype;


import com.yinyang.core.server.domain.UserTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTypeDao extends JpaRepository<UserTypeEntity, Long> {


}
