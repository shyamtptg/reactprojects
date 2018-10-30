package com.innominds.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class JemStepUserService {

	@Autowired
	private Environment env;
	
	public String createUser(String userPayLoad) {
		
		String createUserUrl = env.getProperty(JemSetpUserServiceConstants.CREATE_USER_URI);
		System.out.println("create user url is:\t"+createUserUrl);
		
		String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
		System.out.println("loginUrl is:\t"+loginUrl);
		
		String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
		System.out.println("fixedToken is:\t"+fixedToken);
		
		String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
		authToken = authToken.substring(1, authToken.length()-1);
		
		String createUserResp = JemstepApiProxy.createUser(createUserUrl, authToken,userPayLoad);
		return createUserResp;
	}

	public String retrievUser() {
		
		String rerievUserUrl = env.getProperty(JemSetpUserServiceConstants.RETRIEV_ALL_UERS);
		System.out.println("retriev user url is:\t"+rerievUserUrl);
				
		String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
		System.out.println("loginUrl is:\t"+loginUrl);
		
		String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
		System.out.println("fixedToken is:\t"+fixedToken);
		
		String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
		authToken = authToken.substring(1, authToken.length()-1);
		System.out.println("retrievToken is:\t"+authToken);
		String retievUserResp = JemstepApiProxy.retrievUser(rerievUserUrl, authToken);
		System.out.println("retrive user resp is:\t"+retievUserResp);
		return retievUserResp;
		
		
	}
	
	
public String sendEmailOtp(String userPayLoad,String code) {
		
		String emailOtpUserUrl = env.getProperty(JemSetpUserServiceConstants.EMAIL_OTP_USER);
		System.out.println("emailOtpUserUrl:\t"+emailOtpUserUrl);
		
		String emailurl=emailOtpUserUrl+code;
		String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
		System.out.println("loginUrl is:\t"+loginUrl);
		
		String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
		System.out.println("fixedToken is:\t"+fixedToken);
		
		String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
		authToken = authToken.substring(1, authToken.length()-1);
		
		String emailUserResp = JemstepApiProxy.emailOtpUser(emailurl, authToken,userPayLoad);
		return emailUserResp;
	}

public String userUpdate(String userPayLoad, String code) {
	
	String updateUser = env.getProperty(JemSetpUserServiceConstants.USER_UPDATE);
	System.out.println("updateUser:\t"+updateUser);
	
	String updateUrl=updateUser+code;
	String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
	System.out.println("loginUrl is:\t"+loginUrl);
	
	String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
	System.out.println("fixedToken is:\t"+fixedToken);
	
	String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
	authToken = authToken.substring(1, authToken.length()-1);
	
	String updateUserResp = JemstepApiProxy.updateUser(updateUrl, authToken,userPayLoad);

	return updateUserResp;
}

public String userInfo(String code) {
	String userInfo = env.getProperty(JemSetpUserServiceConstants.USER_NAME_FILTER_INFO);
	System.out.println("updateUser:\t"+userInfo);
	
	String userInfoUrl=userInfo+"\""+code+"\"";
	System.out.println("USRE INFO URL:\t"+userInfoUrl);
	String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
	System.out.println("loginUrl is:\t"+loginUrl);
	
	String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
	System.out.println("fixedToken is:\t"+fixedToken);
	
	String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
	authToken = authToken.substring(1, authToken.length()-1);
	
	String userInfoRec = JemstepApiProxy.userInfo(userInfoUrl, authToken);

	return userInfoRec;
}

public String getauthToken(String userPayLoad) {
	String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
	System.out.println("loginUrl is:\t"+loginUrl);
	
	String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
	System.out.println("fixedToken is:\t"+fixedToken);
	
	String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
	authToken = authToken.substring(1, authToken.length()-1);
	
	return authToken;
}

public String forgotUserInfo(String code) {
	// 
	String forgotUserInfo = env.getProperty(JemSetpUserServiceConstants.FORGOT_USER_FILTER_INFO);
	System.out.println("updateUser:\t"+forgotUserInfo);
	
	String userInfoUrl=forgotUserInfo+"\""+code+"\"";
	System.out.println("USRE INFO URL:\t"+userInfoUrl);
	String loginUrl = env.getProperty(JemSetpUserServiceConstants.LOGIN_URI);
	System.out.println("loginUrl is:\t"+loginUrl);
	
	String fixedToken = env.getProperty(JemSetpUserServiceConstants.FIXED_AUTH_TOKEN);
	System.out.println("fixedToken is:\t"+fixedToken);
	
	String authToken = JemstepApiProxy.getAuthToken(loginUrl, fixedToken);
	authToken = authToken.substring(1, authToken.length()-1);
	
	String forgotUserInfoRec = JemstepApiProxy.forgotUserInfo(userInfoUrl, authToken);

	return forgotUserInfoRec;
}
	
	
	
	
	
	
	
}
