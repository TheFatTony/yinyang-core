package com.yinyang.core.server.domain;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;


@javax.persistence.Entity
@Table(name = "lob_storage")
public class LobStorageEntity extends YAbstractPersistable<Long> {

    @Getter
    @Setter
    @OneToOne
    private FileEntity file;

    @Getter
    @Setter
    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "content")
    private byte[] content;

}
