package io.yinyang.core.dao.usertype;

import io.yinyang.core.dao.JpaDao;
import io.yinyang.core.entity.UserTypeEntity;
import org.springframework.stereotype.Component;


@Component
public class JpaUserTypeDao extends JpaDao<UserTypeEntity, Long> implements UserTypeDao{

	public JpaUserTypeDao() {
		super(UserTypeEntity.class);
	}

}
