package com.yinyang.core.server.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Table;


@javax.persistence.Entity
@Table(name = "files")
public class FileEntity extends AbstractPersistable<Long> {

    @Getter
    @Setter
    @Column(name = "file_name")
    private String fileName;

    @Getter
    @Setter
    @Column(name = "mime_type")
    private String mimeType;

    @Getter
    @Setter
    @Column(name = "url")
    private String url;

    @Getter
    @Setter
    @Column(name = "alt")
    private String alt;

    @Getter
    @Setter
    @Column(name = "file_size")
    private Long fileSize;


}
