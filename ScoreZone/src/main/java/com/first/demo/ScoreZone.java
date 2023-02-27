package com.first.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.first.demo.*")

public class ScoreZone {

	public static void main(String[] args) {
		SpringApplication.run(ScoreZone.class, args);
		
	}

}
