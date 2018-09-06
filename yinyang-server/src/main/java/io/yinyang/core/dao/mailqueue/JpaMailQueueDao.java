package io.yinyang.core.dao.mailqueue;


import io.yinyang.core.dao.JpaDao;
import io.yinyang.core.entity.MailQueueEntity;
import org.springframework.stereotype.Component;

@Component
public class JpaMailQueueDao extends JpaDao<MailQueueEntity, Long> implements MailQueueDao {


    public JpaMailQueueDao() {
        super(MailQueueEntity.class);
    }


}
