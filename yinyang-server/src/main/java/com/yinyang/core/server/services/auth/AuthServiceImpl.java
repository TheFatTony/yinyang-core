package com.yinyang.core.server.services.auth;


import com.yinyang.core.server.core.security.JWTUtil;
import com.yinyang.core.server.domain.AccessTokenEntity;
import com.yinyang.core.server.domain.UserEntity;
import com.yinyang.core.server.transfer.AccessTokenDto;
import com.yinyang.core.server.transfer.LoginFormDto;
import com.yinyang.core.server.transfer.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Slf4j
@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    protected AuthServiceImpl() {
    }


    public AccessTokenEntity createAccessToken(UserEntity user) {
        AccessTokenEntity accessTokenEntity = new AccessTokenEntity(user, jwtUtil.generateToken(user.getUsername()));
//        accessTokenDao.save(accessTokenEntity);
        return accessTokenEntity;
    }

    @Override
    @Transactional
    public UserEntity getUserEntity() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();
        UserEntity userDetails = null;
        try {
            userDetails = (UserEntity) principal;
        } catch (ClassCastException e) {
            return null;
        }
        return userDetails;
    }


    @Override
    @Transactional
    public UserDto getUserDto() {
        UserEntity userDetails = getUserEntity();
        return new UserDto(userDetails.getUsername(), this.createRoleMap(userDetails));
    }
    @Override
    public AccessTokenDto authenticate(LoginFormDto loginFormDto) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginFormDto.getUsername(), loginFormDto.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        return new AccessTokenDto(this.createAccessToken((UserEntity) authentication.getPrincipal()).getToken());
    }


    private List<String> createRoleMap(UserDetails userDetails) {
        List<String> roles = new ArrayList<String>();
        for (GrantedAuthority authority : userDetails.getAuthorities()) {
            roles.add(authority.getAuthority());
        }
        return roles;
    }

}
