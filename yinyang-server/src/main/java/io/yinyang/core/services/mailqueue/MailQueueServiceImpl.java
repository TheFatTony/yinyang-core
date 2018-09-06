package io.yinyang.core.services.mailqueue;


import io.yinyang.core.dao.mailqueue.MailQueueDao;
import io.yinyang.core.entity.MailQueueEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;
import java.util.List;


@Service
public class MailQueueServiceImpl implements MailQueueService {

    @Autowired
    public JavaMailSender mailSender;

    @Autowired
    private MailQueueDao mailQueueDao;

    protected MailQueueServiceImpl() {
    }

    @Override
    @Transactional
    public List<MailQueueEntity> findAll() {
        return this.mailQueueDao.findAll();
    }

    @Override
    @Transactional
    public MailQueueEntity find(Long id) {
        return this.mailQueueDao.find(id);
    }

    @Override
    @Transactional
    public MailQueueEntity create(MailQueueEntity mailQueue) {
        return this.mailQueueDao.save(mailQueue);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        this.mailQueueDao.delete(id);
    }

    @Override
    public void sendAllMail() {
        for (MailQueueEntity item : this.findAll()) {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper;
            try {
                helper = new MimeMessageHelper(message, true);
                helper.setTo(item.getRecipient());
                helper.setSubject(item.getHeader());
                helper.setText(item.getBody(), true);
                mailSender.send(message);
                this.delete(item.getId());
            } catch (MessagingException e) {
                e.printStackTrace();
            }
        }
    }
}
