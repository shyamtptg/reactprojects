package com.innominds;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.innominds.api.JemStepUserController;

@SpringBootApplication
@Controller
@RequestMapping("/")

public class JemstepUserManagementApplication {
    private static final Logger LOGGER = Logger.getLogger(JemStepUserController.class);


	public static void main(String[] args) {
		SpringApplication.run(JemstepUserManagementApplication.class, args);
	}
	
	@RequestMapping
	public String getSignupPage() {
		//return "forward:./index.html";
		return "redirect:./signup"; 
	}
	
	@GetMapping(value="/forgotusername")    
		public String forgotusername() {
		LOGGER.info("Forgot user");
			return "forward:./index.html";
		}
	 
	 @GetMapping(value="/forgotpassword")    
		public String forgotpassword() {
		 LOGGER.info("forgotpassword user");
			return "forward:./index.html";
		}
	

	 @GetMapping(value="/signup")    
		public String signup() {
		 LOGGER.info("signup user");
			return "forward:./index.html";
		}
}
