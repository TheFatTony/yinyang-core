package com.yinyang.core.server.services.lobstorage;


import com.yinyang.core.server.domain.LobStorageEntity;
import com.yinyang.core.server.repositories.lobstorage.LobStorageDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Slf4j
@Service
public class LobStorageServiceImpl implements LobStorageService {


    @Autowired
    private LobStorageDao lobStorageDao;

    protected LobStorageServiceImpl() {
    }

    @Override
    @Transactional(readOnly = true)
    public LobStorageEntity findByFileId(Long fileId) {
        return lobStorageDao.findByFileId(fileId);
    }

    @Override
    public LobStorageEntity save(LobStorageEntity lobStorageEntity) {
        return lobStorageDao.save(lobStorageEntity);
    }
}
