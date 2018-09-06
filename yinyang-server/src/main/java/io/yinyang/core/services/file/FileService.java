package io.yinyang.core.services.file;

import io.yinyang.core.entity.FileEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface FileService {

    FileEntity find(Long id);

    List<FileEntity> findAll();
}
