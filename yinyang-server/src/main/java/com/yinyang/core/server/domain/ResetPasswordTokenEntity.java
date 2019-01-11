package com.yinyang.core.server.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;


@javax.persistence.Entity
@Table(name = "reset_password_token")
public class ResetPasswordTokenEntity extends AbstractPersistable<Long> {

    @Getter
    @Setter
    @Column(name = "token")
    private String token;

    @Getter
    @Setter
    @Fetch(FetchMode.JOIN)
    @ManyToOne()
    private UserEntity user;

    @Getter
    @Setter
    @Column(name = "effective_date")
    private java.sql.Timestamp effectiveDate;

}
