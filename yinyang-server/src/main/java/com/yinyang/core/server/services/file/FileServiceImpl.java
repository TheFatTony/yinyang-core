package com.yinyang.core.server.services.file;


import com.yinyang.core.server.domain.FileEntity;
import com.yinyang.core.server.repositories.file.FileDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Slf4j
@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileDao fileDao;

    protected FileServiceImpl() {
    }

    @Override
    @Transactional(readOnly = true)
    public FileEntity find(Long id) {
        return this.fileDao.findById(id).get();
    }

    @Override
    @Transactional(readOnly = true)
    public List<FileEntity> findAll() {
        return fileDao.findAll();
    }

    @Override
    public FileEntity save(FileEntity fileEntity) {
        return fileDao.save(fileEntity);
    }
}
