package com.yinyang.core.server.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;


@EqualsAndHashCode
@javax.persistence.Entity
@Table(name = "reset_password_token")
public class ResetPasswordTokenEntity implements Entity {


    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
