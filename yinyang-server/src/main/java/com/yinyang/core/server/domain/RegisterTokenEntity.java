package com.yinyang.core.server.domain;


import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@javax.persistence.Entity
@Table(name = "register_token")
public class RegisterTokenEntity extends YAbstractPersistable<Long> {

    @Getter
    @Setter
    @Column(name = "token")
    @NotNull
    private String token;

    @Getter
    @Setter
    @Column(name = "user_name")
    @NotNull
    @Size(min = 5, message = "Email should be at least 5 characters")
    @Email
    private String userName;

    @Getter
    @Setter
    @Fetch(FetchMode.JOIN)
    @ManyToOne()
    @NotNull
    private UserTypeEntity userType;

    @Getter
    @Setter
    @Column(name = "effective_date")
    private java.sql.Timestamp effectiveDate;


}
