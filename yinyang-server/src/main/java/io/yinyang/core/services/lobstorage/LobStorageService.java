package io.yinyang.core.services.lobstorage;

import io.yinyang.core.entity.LobStorageEntity;
import org.springframework.stereotype.Service;


@Service
public interface LobStorageService {

    LobStorageEntity findByFileId(Long fileId);
}
