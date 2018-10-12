package com.innominds.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/user")
public class JemStepUserController {

	@Autowired
	private JemStepUserService jemstepUserService;
	
	@Autowired
	private Environment env;
	
	@PostMapping(value="/createUser")
	public ResponseEntity<String> createUser(@RequestBody String userPayLoad){
		System.out.println("create user payload is:\t"+userPayLoad);
		String usergetAccesCode;
		try {
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		System.out.println("user Acces code:\t"+usergetAccesCode);
		
		String userCreatedResp = jemstepUserService.createUser(userPayLoad);
		
		return new ResponseEntity<String>(userCreatedResp, HttpStatus.CREATED);
		}
		catch (Exception e) {
			String message = e.getMessage();
			System.out.println("exception message is:\t"+message);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/retrievUser")
	public ResponseEntity<String> retrievUser(){
		try {
			System.out.println("retrievUser user is:\t");
			String userrerievdResp = jemstepUserService.retrievUser();
			System.out.println("resp is:\t"+userrerievdResp);
			if(userrerievdResp != null && !userrerievdResp.isEmpty()) {
				return new ResponseEntity<String>(userrerievdResp, HttpStatus.OK);
			}else {
				StringBuilder sb = new StringBuilder();
				sb.append("{");
				sb.append("\"code\":"+HttpStatus.NO_CONTENT.value()+",");
				sb.append("\"code\":"+"\"No content found Found\"");
				sb.append("}");
				return new ResponseEntity<String>(sb.toString(), HttpStatus.NO_CONTENT);
			}
		}catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
	
	
	@PutMapping(value="/emailOtpUser")
	public ResponseEntity<String> orpUser(@RequestBody String userPayLoad,HttpServletRequest req){
		System.out.println(" email otp is:\t"+userPayLoad);
		String usergetAccesCode;
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		System.out.println("user Acces code:\t"+usergetAccesCode);
		
		String code = req.getHeader("code");
		System.out.println("code is:\t"+code);
		
		String userEmalOtpRes = jemstepUserService.sendEmailOtp(userPayLoad,code);
		System.out.println("Response"+userEmalOtpRes);
		
		return new ResponseEntity<String>(userEmalOtpRes, HttpStatus.OK);
	}
	
	
	@PutMapping(value="/userUpdate")
	public ResponseEntity<String> userUpdate(@RequestBody String userPayLoad,HttpServletRequest req){
		System.out.println(" userUpdate is :\t"+userPayLoad);
		String usergetAccesCode;
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		System.out.println("user Acces code:\t"+usergetAccesCode);
		
		String code = req.getHeader("code");
		System.out.println("code is:\t"+code);
		
		String userUpdateRes = jemstepUserService.userUpdate(userPayLoad,code);
		System.out.println("Response"+userUpdateRes);
		
		return new ResponseEntity<String>(userUpdateRes, HttpStatus.OK);
	}
	
	
	
	
	@GetMapping(value="/userInfo")
	public ResponseEntity<String> userInfo(HttpServletRequest req){
		
		System.out.println("USER INFO METHOD");
		
		String code = req.getHeader("code");
		System.out.println("code is:\t"+code);
		
		String userinfoRec = jemstepUserService.userInfo(code);
		System.out.println("Response"+userinfoRec);
		
		return new ResponseEntity<String>(userinfoRec, HttpStatus.OK);
	}
	
	
	
	
	}
