package com.yinyang.core.server.domain;


import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.lang.Nullable;

import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@MappedSuperclass
public abstract class YAbstractPersistable<PK extends Serializable> extends AbstractPersistable<PK> {


    @Override
    public void setId(@Nullable PK id) {
        super.setId(id);
    }
}
