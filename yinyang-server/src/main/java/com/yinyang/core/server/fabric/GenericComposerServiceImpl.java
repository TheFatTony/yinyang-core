package com.yinyang.core.server.fabric;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;


@Slf4j
public abstract class GenericComposerServiceImpl<T> implements GenericComposerService<T> {

    @Value("${yinyang.composer.url}")
    private String composerUrl;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HttpHeaders fabricHeaders;

    private String endpoint;

    protected GenericComposerServiceImpl(String endpoint) {
        setEndpoint(endpoint);
    }


    protected void doPost(Object arg) {
        HttpEntity<Object> requestBody = new HttpEntity(arg, fabricHeaders);
        try {
            ResponseEntity<String> res = restTemplate.exchange(composerUrl + "/" + endpoint, HttpMethod.POST, requestBody, String.class);
        } catch (RestClientException e) {
            String errorResponse = ((HttpStatusCodeException) e).getResponseBodyAsString();
            log.trace(errorResponse);
            throw e;
        }
    }

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }
}
