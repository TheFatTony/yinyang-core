package com.yinyang.core.server.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;

@javax.persistence.Entity
@Table(name = "access_token")
public class AccessTokenEntity extends YAbstractPersistable<Long> {

    @Getter
    @Column
    private String token;

    @Getter
    @ManyToOne
    private UserEntity user;

    @Getter
    @Column
    private Date expiry;

    protected AccessTokenEntity() {

    }

    public AccessTokenEntity(UserEntity user, String token) {
        this.user = user;
        this.token = token;
    }

    public AccessTokenEntity(UserEntity user, String token, Date expiry) {
        this(user, token);
        this.expiry = expiry;
    }

    public boolean isExpired() {
        if (null == this.expiry) {
            return false;
        }

        return this.expiry.getTime() > System.currentTimeMillis();
    }
}
