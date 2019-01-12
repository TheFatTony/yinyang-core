package com.yinyang.core.server.test;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;

import javax.sql.DataSource;
import java.sql.SQLException;

public class TestApplicationContextInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {


    public void initialize(ConfigurableApplicationContext applicationContext) {
        DataSource dataSource = DataSourceBuilder
                .create()
                .username("root")
                .password(BaseAppTest.mysql.getPassword())
                .url(BaseAppTest.mysql.getJdbcUrl() + "?useSSL=false")
                .driverClassName("com.mysql.jdbc.Driver")
                .build();

        try {
            TestUtils.initFunction(dataSource.getConnection());
        } catch (SQLException e) {
            e.printStackTrace();
        }


        TestPropertyValues values = TestPropertyValues.of(
                "spring.datasource.url=" + BaseAppTest.mysql.getJdbcUrl() + "?useSSL=false",
                "spring.datasource.username=" + BaseAppTest.mysql.getUsername(),
                "spring.datasource.password=" + BaseAppTest.mysql.getPassword(),
                "yinyang.composer.url=http://localhost:3000/api",
                "yinyang.client.url=http://localhost:4200",
                "spring.datasource.driver-class-name=com.mysql.jdbc.Driver",
                "spring.datasource.type = org.apache.tomcat.jdbc.pool.DataSource",
                "spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect",
                "spring.jpa.properties.hibernate.id.new_generator_mappings=false");

        values.applyTo(applicationContext);
    }


}
