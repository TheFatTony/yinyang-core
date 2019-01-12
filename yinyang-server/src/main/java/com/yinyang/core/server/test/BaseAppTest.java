package com.yinyang.core.server.test;

import org.junit.ClassRule;
import org.testcontainers.containers.MySQLContainer;

public class BaseAppTest {

    @ClassRule
    public static MySQLContainer mysql = new MySQLContainer("mysql:5.7.22");

//    @ClassRule
//    public static GenericContainer redis = new GenericContainer("hyperledger/composer-playground").withExposedPorts(8080);


}
