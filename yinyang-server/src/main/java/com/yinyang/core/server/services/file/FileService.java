package com.yinyang.core.server.services.file;

import com.yinyang.core.server.domain.FileEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface FileService {

    FileEntity find(Long id);

    List<FileEntity> findAll();

    FileEntity save(FileEntity fileEntity);
}
