package io.yinyang.core.dao.lobstorage;


import io.yinyang.core.dao.Dao;
import io.yinyang.core.entity.LobStorageEntity;
import org.springframework.stereotype.Component;


@Component
public interface LobStorageDao extends Dao<LobStorageEntity, Long> {

    LobStorageEntity find(Long id);

    LobStorageEntity findByFileId(Long fileId);
}
