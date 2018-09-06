package io.yinyang.core.dao.mailqueue;

import io.yinyang.core.dao.Dao;
import io.yinyang.core.entity.MailQueueEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MailQueueDao extends Dao<MailQueueEntity, Long> {

    List<MailQueueEntity> findAll();

    MailQueueEntity find(Long id);
}
