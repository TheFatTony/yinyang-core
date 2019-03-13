package com.yinyang.core.server.services.auth;

import com.yinyang.core.server.domain.UserEntity;
import com.yinyang.core.server.transfer.AccessTokenDto;
import com.yinyang.core.server.transfer.LoginFormDto;
import com.yinyang.core.server.transfer.UserDto;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {

    UserEntity getUserEntity();

    UserDto getUserDto();

    AccessTokenDto authenticate(LoginFormDto loginFormDto);
}
