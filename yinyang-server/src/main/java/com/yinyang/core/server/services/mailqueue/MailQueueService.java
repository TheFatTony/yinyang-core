package com.yinyang.core.server.services.mailqueue;


import com.yinyang.core.server.domain.MailQueueEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MailQueueService {

    List<MailQueueEntity> findAll();

    MailQueueEntity find(Long id);

    void create(MailQueueEntity mailQueue);

    void delete(Long id);

    void sendAllMail();
}
