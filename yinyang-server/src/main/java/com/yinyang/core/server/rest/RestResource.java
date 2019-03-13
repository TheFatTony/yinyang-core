package com.yinyang.core.server.rest;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public abstract class RestResource <D, E> {

    protected Class<D> dtoClass;

    protected Class<E> entityClass;

    protected ModelMapper modelMapper;

    public RestResource(Class<D> dtoClass, Class<E> entityClass) {
        this.dtoClass = dtoClass;
        this.entityClass = entityClass;
        this.modelMapper = new ModelMapper();
    }

    protected D convertToDto(E entity) {
        return modelMapper.map(entity, dtoClass);
    }

    protected E convertToEntity(D dto) {
        return modelMapper.map(dto, entityClass);
    }

    protected List<D> convertListOfDto(List<E> list) {
        return list.stream().map(o -> modelMapper.map(o, dtoClass)).collect(Collectors.toList());
    }


}
