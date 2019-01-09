package com.yinyang.core.server.repositories.file;


import com.yinyang.core.server.domain.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileDao extends JpaRepository<FileEntity, Long> {

}
