package com.yinyang.core.server.transfer;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserDto {


    private String name;

    private List<String> roles;

    private boolean activityFlag;

    public UserDto() {

    }

    public UserDto(String userName, List<String> roles) {
        this.name = userName;
        this.roles = roles;
    }

}

