package com.yinyang.core.server.domain;

import com.yinyang.core.server.core.validation.ValidPassword;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;


@javax.persistence.Entity(name = "user")
@Table(name = "user")
public class UserEntity extends YAbstractPersistable<Long> implements UserDetails {

    @Getter
    @Setter
    @Column(name = "name")
    @Email
    private String name;

    @Setter
    @Column(name = "password")
    @NotNull
    @ValidPassword
    private String password;

    @Getter
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "roles_id", referencedColumnName = "id"))
    private Set<Role> roles = new HashSet<>();

    @Getter
    @Setter
    @Column(name = "activity_flag")
    private boolean activityFlag;

    protected UserEntity() {
    }

    public UserEntity(String name, String passwordHash) {
        this.name = name;
        this.password = passwordHash;
    }

    public UserEntity(String name, String password, Set<Role> roles, boolean activityFlag) {
        this.name = name;
        this.password = password;
        this.roles = roles;
        this.activityFlag = activityFlag;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return activityFlag;
    }
}
