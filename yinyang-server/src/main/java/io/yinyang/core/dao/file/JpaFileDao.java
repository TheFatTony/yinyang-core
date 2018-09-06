package io.yinyang.core.dao.file;


import io.yinyang.core.dao.JpaDao;
import io.yinyang.core.entity.FileEntity;
import org.springframework.stereotype.Component;

@Component
public class JpaFileDao extends JpaDao<FileEntity, Long> implements FileDao {

    public JpaFileDao() {
        super(FileEntity.class);
    }

}
