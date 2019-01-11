package com.yinyang.core.server.repositories.mailqueue;

import com.yinyang.core.server.domain.MailQueueEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MailQueueDao extends JpaRepository<MailQueueEntity, Long> {


}
