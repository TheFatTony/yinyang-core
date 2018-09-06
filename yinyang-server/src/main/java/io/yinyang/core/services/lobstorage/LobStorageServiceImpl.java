package io.yinyang.core.services.lobstorage;


import io.yinyang.core.dao.lobstorage.LobStorageDao;
import io.yinyang.core.entity.LobStorageEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LobStorageServiceImpl implements LobStorageService {


    @Autowired
    private LobStorageDao lobStorageDao;

    protected LobStorageServiceImpl() {
    }

    @Override
    public LobStorageEntity findByFileId(Long fileId) {
        return lobStorageDao.findByFileId(fileId);
    }
}
