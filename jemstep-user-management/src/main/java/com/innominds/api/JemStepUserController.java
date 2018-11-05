package com.innominds.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/user")
public class JemStepUserController {

    private static final Logger LOGGER = Logger.getLogger(JemStepUserController.class);

	
	@Autowired
	private JemStepUserService jemstepUserService;
	
	@Autowired
	private Environment env;
	
	@Autowired
	private HttpSession session;
	
	@Autowired
	private HttpServletRequest request;
		
	@PostMapping(value="/getToken")
	public ResponseEntity<String> getAuthToken(@RequestBody String userPayLoad){
		LOGGER.info("Get getToken token  is:\t"+userPayLoad);
		String usergetAccesCode;
		try {
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		LOGGER.info("user getToken code:\t"+usergetAccesCode);
		
		String userCreatedResp = jemstepUserService.getauthToken(userPayLoad);
		
		StringBuilder str = new StringBuilder();
		str.append("{");
		str.append("    \"access_token\": "+"\""+userCreatedResp+"\""+",");
		str.append("    \"token_type\": \"bearer\",");
		str.append("    \"expires_in\": 299");
		str.append("}");		
		session.setAttribute("token",userCreatedResp);
		session.setAttribute("expires_in",299);
		return new ResponseEntity<String>(str.toString(), HttpStatus.CREATED);
		}
		catch (Exception e) {
			String message = e.getMessage();
			LOGGER.warn("exception message is:\t"+message);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	

	public boolean isEmailExisted(String userPayLoad,String listOfExistedEmails) {
		boolean isExisted = false;
		if(listOfExistedEmails != null && !listOfExistedEmails.isEmpty()) {
			String usersEmail = getUserEmail(userPayLoad);
			if(listOfExistedEmails.contains(usersEmail)) {
                isExisted = true;
			}
		}
		return isExisted;
	}
	
	private String validateToken() {
		String sessionToken = "";
		String authHeader = request.getHeader("Authorization");
		if(authHeader != null && ! authHeader.isEmpty()) {
			String headerToken = authHeader.split("\\ ")[1];
			 sessionToken = (String) session.getAttribute("token");
			if(headerToken.equals(sessionToken)) {
				return headerToken;
			}
		}else {
			throw new RuntimeException("Token is invalid");
		}
		return sessionToken;
	}
	
	@PostMapping(value="/createUser")
	public ResponseEntity<String> createUser(@RequestBody String userPayLoad){
		LOGGER.info("create user payload is:\t"+userPayLoad);
		String usergetAccesCode;
		try {
			
			String validatedToken = (String) session.getAttribute("token");
//			String  sessionToken = validateToken();
			System.out.println("header token is:\t"+validatedToken);
			
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		LOGGER.info("user Acces code:\t"+usergetAccesCode);		
		String userrerievdResp = jemstepUserService.retrievUser();
		LOGGER.info("All User :\t"+userrerievdResp);
	
		boolean isEmailExists = isEmailExisted(userPayLoad, userrerievdResp);
		LOGGER.info("is email existed :\t"+isEmailExists);
		if(isEmailExists) {
			StringBuilder str = new StringBuilder();
			str.append("{");
			str.append("  \"emailAlreadyExisted\":\"Email Already Existed\"");
			str.append("}");
			return new ResponseEntity<String>(str.toString(), HttpStatus.OK);
		}else {
			String userCreatedResp = jemstepUserService.createUser(userPayLoad);
			return new ResponseEntity<String>(userCreatedResp, HttpStatus.CREATED);
		}
		
		}
		catch (Exception e) {
			String message = e.getMessage();
			LOGGER.info("exception message is:\t"+message);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/retrievUser")
	public ResponseEntity<String> retrievUser(){
		try {
			LOGGER.info("retrievUser user is:\t");
			String userrerievdResp = jemstepUserService.retrievUser();
			LOGGER.info("resp is:\t"+userrerievdResp);
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
	        LOGGER.info("This is info message"+e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
			
	}
	
	
	@PutMapping(value="/emailOtpUser")
	public ResponseEntity<String> orpUser(@RequestBody String userPayLoad,HttpServletRequest req){
		LOGGER.info(" email otp is:\t"+userPayLoad);
		String usergetAccesCode;
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		LOGGER.info("user Acces code:\t"+usergetAccesCode);
		
		String code = req.getHeader("code");
		LOGGER.info("code is:\t"+code);
		
		String userEmalOtpRes = jemstepUserService.sendEmailOtp(userPayLoad,code);
		LOGGER.info("Response"+userEmalOtpRes);
		
		return new ResponseEntity<String>(userEmalOtpRes, HttpStatus.OK);
	}
	
	
	@PutMapping(value="/userUpdate")
	public ResponseEntity<String> userUpdate(@RequestBody String userPayLoad,HttpServletRequest req){
		LOGGER.info(" userUpdate is :\t"+userPayLoad);
		String usergetAccesCode;
		usergetAccesCode = userPayLoad.substring(1, userPayLoad.length()-1);
		
		LOGGER.info("user Acces code:\t"+usergetAccesCode);
		
		String code = req.getHeader("code");
		LOGGER.info("code is:\t"+code);
		
		String userUpdateRes = jemstepUserService.userUpdate(userPayLoad,code);
		LOGGER.info("Response"+userUpdateRes);
		
		return new ResponseEntity<String>(userUpdateRes, HttpStatus.OK);
	}
		
	@GetMapping(value="/userInfo")
	public ResponseEntity<String> userInfo(HttpServletRequest req){
		
		LOGGER.info("USER INFO METHOD");
		
		String code = req.getHeader("code");
		LOGGER.info("code is:\t"+code);
		
		String userinfoRec = jemstepUserService.userInfo(code);
		LOGGER.info("Response"+userinfoRec);
		
		return new ResponseEntity<String>(userinfoRec, HttpStatus.OK);
	}
	
	@GetMapping(value="/forgotUserInfo")
	public ResponseEntity<String> forgotUserInfo(HttpServletRequest req){
		
		LOGGER.info("forgotUserInfo METHOD");
		
		String code = req.getHeader("code");
		LOGGER.info("code is:\t"+code);
		
		String forgotUserInfoRec = jemstepUserService.forgotUserInfo(code);
		LOGGER.info("Response"+forgotUserInfoRec);
		
		return new ResponseEntity<String>(forgotUserInfoRec, HttpStatus.OK);
	}
	
	
	public String getUserEmail(String inputdata) {
		JSONObject json = new JSONObject(inputdata);
		JSONArray emailsArray = json.getJSONArray("emails");
		JSONObject userEmail = (JSONObject)emailsArray.get(0);
		String emailVal = String.valueOf(userEmail.get("value"));
		LOGGER.info("eamil val is:\t"+emailVal);
		return emailVal;
	}
	
     @GetMapping(value="forgotusername")    
	public String forgotusername() {
    	 System.out.println("For Got user");
		return "redirect:./index.html";
	}
	
	
	}
