package com.yinyang.core.server.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;


@javax.persistence.Entity
@Table(name = "user_type")
public class UserTypeEntity extends AbstractPersistable<Long> {


    @Column(name = "type_name")
    @Getter
    @Setter
    private String typeName;

    @Column(name = "description")
    @Getter
    @Setter
    private String description;

}
