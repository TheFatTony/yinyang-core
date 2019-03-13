package com.yinyang.core.server.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Table;


@javax.persistence.Entity
@Table(name = "roles")
@NoArgsConstructor
public class Role extends YAbstractPersistable<Long> implements GrantedAuthority {

    @Getter
    @Setter
    @Column(name = "role_name")
    private String role;

    public Role(Long id, String role) {
        this.setId(id);
        this.role = role;
    }

    @Override
    public String getAuthority() {
        return role;
    }
}
