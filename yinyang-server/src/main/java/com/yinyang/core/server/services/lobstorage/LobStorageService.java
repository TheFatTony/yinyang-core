package com.yinyang.core.server.services.lobstorage;

import com.yinyang.core.server.domain.LobStorageEntity;
import org.springframework.stereotype.Service;


@Service
public interface LobStorageService {

    LobStorageEntity findByFileId(Long fileId);

    LobStorageEntity save(LobStorageEntity lobStorageEntity);
}
