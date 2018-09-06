package io.yinyang.core.dao.file;


import io.yinyang.core.dao.Dao;
import io.yinyang.core.entity.FileEntity;
import org.springframework.stereotype.Component;


@Component
public interface FileDao extends Dao<FileEntity, Long> {

    FileEntity find(Long id);
}
