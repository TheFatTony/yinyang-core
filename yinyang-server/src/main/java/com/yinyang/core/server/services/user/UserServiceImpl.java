package com.yinyang.core.server.services.user;


import com.yinyang.core.server.domain.AccessTokenEntity;
import com.yinyang.core.server.domain.MailQueueEntity;
import com.yinyang.core.server.domain.ResetPasswordTokenEntity;
import com.yinyang.core.server.domain.UserEntity;
import com.yinyang.core.server.exceptions.InvalidOldPasswordException;
import com.yinyang.core.server.repositories.user.UserDao;
import com.yinyang.core.server.services.accesstoken.AccessTokenService;
import com.yinyang.core.server.services.auth.AuthService;
import com.yinyang.core.server.services.mailqueue.MailQueueService;
import com.yinyang.core.server.services.resetpasswordtoken.ResetPasswordTokenService;
import com.yinyang.core.server.transfer.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.StringWriter;
import java.util.List;
import java.util.Locale;
import java.util.UUID;


@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private AuthService authService;

    @Autowired
    private AccessTokenService accessTokenService;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private ResetPasswordTokenService resetPasswordTokenService;

    @Autowired
    private MailQueueService mailQueueService;

    @Autowired
    private VelocityEngine velocityEngine;

    @Autowired
    private MessageSource messageSource;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Value("${malevich.client.url}")
    private String clientUrl;

    protected UserServiceImpl() {
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) {
        UserDetails ud = this.userDao.findByName(username);
        if (ud == null)
            throw new UsernameNotFoundException("User not found");
        return ud;
    }

    @Transactional
    public UserEntity findUserByAccessToken(String accessTokenString) {
        AccessTokenEntity accessTokenEntity = this.accessTokenService.findByToken(accessTokenString);

        if (null == accessTokenEntity) {
            return null;
        }

        if (accessTokenEntity.isExpired()) {
            this.accessTokenService.delete(accessTokenEntity);
            return null;
        }

        return accessTokenEntity.getUser();
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserEntity> findAll() {
        return userDao.findAll();
    }

    @Override
    @Transactional
    public UserEntity save(UserEntity userEntity) {
        return userDao.save(userEntity);
    }

    @Override
    @Transactional
    public UserEntity findByName(String name) {
        return userDao.findByName(name);
    }

    @Override
    @Transactional
    public void lock(String name, boolean flag) {
        if (flag)
            flag = false;
        else
            flag = true;

        this.userDao.lock(name, flag);
    }

    @Override
    @Transactional
    public void setPassword(String name, String pass) {
        this.userDao.changePassword(name, encoder.encode(pass));
    }

    @Override
    @Transactional
    public ResetPasswordTokenEntity reset(String lang, String userName) {
        UserEntity user = findByName(userName);
        ResetPasswordTokenEntity entity = new ResetPasswordTokenEntity();
        entity.setUser(user);
        entity.setToken(UUID.randomUUID().toString());
        entity.setEffectiveDate(new java.sql.Timestamp(System.currentTimeMillis()));
        entity = resetPasswordTokenService.save(entity);

        VelocityContext context = new VelocityContext();
        context.put("link", clientUrl + "/#/user/password/reset?token=" + entity.getToken());
        context.put("email", user.getUsername());

        StringWriter stringWriter = new StringWriter();
        velocityEngine.mergeTemplate("templates/mail/user_reset_password_link_template_" + lang + ".vm", "UTF-8", context, stringWriter);
        mailQueueService.create(new MailQueueEntity(entity.getUser().getUsername(), messageSource.getMessage("reset.password.confirm", null, new Locale(lang)), stringWriter.toString()));

        return entity;
    }

    @Override
    @Transactional
    public UserEntity setNewPassword(String token, String password) {
        ResetPasswordTokenEntity tokenEntity = resetPasswordTokenService.findByToken(token).get();

        UserEntity userEntity = tokenEntity.getUser();
        userEntity.setPassword(bCryptPasswordEncoder.encode(password));
        userEntity = save(userEntity);
        resetPasswordTokenService.delete(tokenEntity);

        return userEntity;
    }

    @Override
    @Transactional
    public UserEntity changePassword(String oldPassword, String newPassword) {

        UserDto userDto = authService.getUser();
        UserEntity userEntity = findByName(userDto.getName());

        if (!bCryptPasswordEncoder.matches(oldPassword, userEntity.getPassword()))
            throw new InvalidOldPasswordException();

        userEntity.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userEntity = save(userEntity);

        return userEntity;
    }
}
