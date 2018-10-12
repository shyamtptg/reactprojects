package com.innominds.api;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.security.cert.X509Certificate;

import org.apache.http.Consts;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

public class JemstepApiProxy {
	JemUserBean jemUserBean;

	public static String getAuthToken(String tokenUrl, String authorizationToken) {
		String authToken = null;
		try {
			CloseableHttpClient httpclient = getCloseableClient();
			List<NameValuePair> form = new ArrayList<NameValuePair>();
			form.add(new BasicNameValuePair("grant_type", "client_credentials"));
			UrlEncodedFormEntity entity = new UrlEncodedFormEntity(form, Consts.UTF_8);

			HttpPost httppost = new HttpPost(tokenUrl);
			httppost.setHeader("Content-type", "application/x-www-form-urlencoded");
			httppost.setHeader("Authorization", "Basic " + authorizationToken);
			// httppost.setHeader("grant_type", "client_credentials");

			httppost.setEntity(entity);

			CloseableHttpResponse response = httpclient.execute(httppost);
			System.out.println(response.getStatusLine());

			httpclient.execute(httppost);
			System.out.println(response.getStatusLine());
			System.out.println(response.getEntity().getContent());
			BufferedInputStream bis = new BufferedInputStream(response.getEntity().getContent());
			ByteArrayOutputStream buf = new ByteArrayOutputStream();
			int result = bis.read();
			while (result != -1) {
				buf.write((byte) result);
				result = bis.read();
			}
			// StandardCharsets.UTF_8.name() > JDK 7
			System.out.println(buf.toString("UTF-8"));
			String resp = buf.toString("UTF-8");
			if (resp != null && !resp.isEmpty()) {
				String token = resp.split("\\:")[1];
				System.out.println("token is:\t" + token);
				authToken = token.split("\\,")[0];
				System.out.println("authToken is:\t" + authToken);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return authToken;
	}

	public static String createUser(String tokenUrl, JemUserBean jemUser) {
		String authToken = null;
		try {
			authToken = getAuthToken("https://myinno.myglu.com/oxauth/restv1/token", "QCFGMTU3LjBBNUIuOUE3Ni42QTdEITAwMDEhMjA2My44MjQ5ITAwMDghQkQ2MS40ODczLkJCRjcuMEUyQzpwYXNzd29yZA==");
			authToken = authToken.substring(1, authToken.length()-1);
			CloseableHttpClient httpclient = getCloseableClient();
			List<NameValuePair> form = new ArrayList<NameValuePair>();

			HttpPost httppost = new HttpPost(tokenUrl);
			httppost.setHeader("Content-type", "application/json");
			httppost.setHeader("Authorization", "Bearer " + authToken);
			// httppost.setHeader("grant_type", "client_credentials");

			String createUserPayLoad = getCreateUserPayLoad(jemUser);
			StringEntity payLoadEntity = new StringEntity(createUserPayLoad);
			httppost.setEntity(payLoadEntity);

			CloseableHttpResponse response = httpclient.execute(httppost);
			System.out.println(response.getStatusLine());

			httpclient.execute(httppost);
			System.out.println(response.getStatusLine());
			System.out.println(response.getEntity().getContent());
			BufferedInputStream bis = new BufferedInputStream(response.getEntity().getContent());
			ByteArrayOutputStream buf = new ByteArrayOutputStream();
			int result = bis.read();
			while (result != -1) {
				buf.write((byte) result);
				result = bis.read();
			}
			// StandardCharsets.UTF_8.name() > JDK 7
			System.out.println(buf.toString("UTF-8"));
			String resp = buf.toString("UTF-8");
			if (resp != null && !resp.isEmpty()) {
				String token = resp.split("\\:")[1];
				System.out.println("token is:\t" + token);
				authToken = token.split("\\,")[0];
				System.out.println("authToken is:\t" + authToken);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return authToken;
	}

	public static String createUser(String tokenUrl,String loginAuthToken, String createUserPayLoad) {
		String createUserResp = null;
		try {
			
			CloseableHttpClient httpclient = getCloseableClient();
			List<NameValuePair> form = new ArrayList<NameValuePair>();

			HttpPost httppost = new HttpPost(tokenUrl);
			httppost.setHeader("Content-type", "application/json");
			httppost.setHeader("Authorization", "Bearer " + loginAuthToken);
			// httppost.setHeader("grant_type", "client_credentials");

			StringEntity payLoadEntity = new StringEntity(createUserPayLoad);
			httppost.setEntity(payLoadEntity);

			CloseableHttpResponse response = httpclient.execute(httppost);
			System.out.println(response.getStatusLine());
			int statusCode = response.getStatusLine().getStatusCode();
			System.out.println("status code is:\t"+statusCode);
			//httpclient.execute(httppost);
			System.out.println("status line:\t"+response.getStatusLine());
			System.out.println("content is:\t"+response.getEntity().getContent());
			BufferedInputStream bis = new BufferedInputStream(response.getEntity().getContent());
			ByteArrayOutputStream buf = new ByteArrayOutputStream();
			int result = bis.read();
			while (result != -1) {
				buf.write((byte) result);
				result = bis.read();
			}
			// StandardCharsets.UTF_8.name() > JDK 7
			//System.out.println(buf.toString("UTF-8"));
			createUserResp = buf.toString("UTF-8");
			System.out.println("create user resp is:\t"+createUserResp);
			
		} catch (Exception e) {
			System.out.println("error message is:\t"+e.getMessage());
		}
		return createUserResp;
	}

	
	
	
	
	
	
	
	
	public static CloseableHttpClient getCloseableClient()
			throws NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
		SSLContextBuilder builder = new SSLContextBuilder();
		builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
		SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
		CloseableHttpClient httpclient = HttpClients.custom().setSSLSocketFactory(sslsf).build();
		return httpclient;
	}

	public static void main(String[] args) throws ClientProtocolException, IOException, NoSuchAlgorithmException,
			KeyStoreException, KeyManagementException {
		
		
		 String tokenUrl = "https://myinno.myglu.com/oxauth/restv1/token";
		 String fixedAuthToken = "QCFGMTU3LjBBNUIuOUE3Ni42QTdEITAwMDEhMjA2My44MjQ5ITAwMDghQkQ2MS40ODczLkJCRjcuMEUyQzpwYXNzd29yZA==";
		
		//String authToken = getAuthToken(tokenUrl, fixedAuthToken);
		//System.out.println("authtoken is:\t"+authToken);		
		
		JemUserBean jem = new JemUserBean();
		jem.setUsername("Mahesh");
		jem.setEmail("mahesh@innominds.com");
		jem.setPassword("testUser");
		jem.setDisplayName("MaheshG");
		System.out.println(getCreateUserPayLoad((jem)));
		
		/*String resp = createUser("https://myinno.myglu.com/identity/restv1/scim/v2/Users", jem);
		System.out.println(resp);*/
	    String rerievUserUrl ="https://myinno.myglu.com/identity/restv1/scim/v2/Users";
		String authTken = getAuthToken(tokenUrl, fixedAuthToken);
		authTken = authTken.substring(1, authTken.length()-1);
		System.out.println("resp is:\t"+retrievUser(rerievUserUrl, authTken));
		
	}
	
	
	public static String getCreateUserPayLoad(JemUserBean jemUserBean ) {
		StringBuilder str = new StringBuilder();
		
		str.append("{");
		str.append("	\"schemas\": [\"urn:ietf:params:scim:schemas:core:2.0:User\"],");
		str.append("	\"externalId\": \"12345\",");
		str.append("	\"userName\":\""+jemUserBean.getUsername()+"\",");
		str.append("	\"name\": {");
		str.append("		\"givenName\": \"json\",");
		str.append("		\"familyName\": \"json\"");
		str.append("	},");
		str.append("	\"displayName\":\""+jemUserBean.getDisplayName()+"\",");
		str.append("	\"nickName\": \"json\",");
		str.append("	\"profileUrl\": \"http://www.gluu.org/\",");
		str.append("	\"emails\": [{");
		str.append("			\"value\":\""+jemUserBean.getEmail()+"\",");
		str.append("			\"type\": \"work\",");
		str.append("			\"primary\": true");
		str.append("		},");
		str.append("		{");
		str.append("			\"value\": \"json2@gluu.org\",");
		str.append("			\"type\": \"home\",");
		str.append("			\"primary\": false");
		str.append("		}");
		str.append("	],");
		str.append("	\"addresses\": [{");
		str.append("		\"type\": \"work\",");
		str.append("		\"streetAddress\": \"621 East 6th Street Suite 200\",");
		str.append("		\"locality\": \"Austin\",");
		str.append("		\"region\": \"TX\",");
		str.append("		\"postalCode\": \"78701\",");
		str.append("		\"country\": \"US\",");
		str.append("		\"formatted\": \"621 East 6th Street Suite 200  Austin , TX 78701 US\",");
		str.append("		\"primary\": true");
		str.append("	}],");
		str.append("	\"phoneNumbers\": [{");
		str.append("		\"value\": \"646-345-2346\",");
		str.append("		\"type\": \"work\"");
		str.append("	}],");
		str.append("	\"ims\": [{");
		str.append("		\"value\": \"test_user\",");
		str.append("		\"type\": \"Skype\"");
		str.append("	}],");
		str.append("	\"userType\": \"CEO\",");
		str.append("	\"title\": \"CEO\",");
		str.append("	\"preferredLanguage\": \"en-us\",");
		str.append("	\"locale\": \"en_US\",");
		str.append("	\"active\": true,");
		str.append("	\"password\":\""+jemUserBean.getPassword()+"\",");
		str.append("	\"roles\": [{");
		str.append("		\"value\": \"Owner\"");
		str.append("	}],");
		str.append("	\"entitlements\": [{");
		str.append("		\"value\": \"full access\"");
		str.append("	}],");
		str.append("	\"x509Certificates\": [{");
		str.append("		\"value\": \"MIIDQzCCAqy...blah...blah\"");
		str.append("	}]");
		str.append("}");
		
		return str.toString();
	}

	
	private static HttpHeaders createHttpHeaders(String authToken)
	{
	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.add("Authorization", "Bearer " + authToken);
	    return headers;
	}
	
	public static String retrievUser(String rerievUserUrl, String authToken) {
		
		String retievUserResp = null;
		try {
			
			SSLContextBuilder builder = new SSLContextBuilder();
			builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
			SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
			
					    CloseableHttpClient httpClient = HttpClients.custom()
		                    .setSSLSocketFactory(sslsf)
		                    .build();

		    HttpComponentsClientHttpRequestFactory requestFactory =
		                    new HttpComponentsClientHttpRequestFactory();

		    requestFactory.setHttpClient(httpClient);
		    
			RestTemplate restTemplate = new RestTemplate(requestFactory);
			HttpHeaders headers = createHttpHeaders(authToken);
	        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
	        ResponseEntity<String> response = restTemplate.exchange(rerievUserUrl, HttpMethod.GET, entity, String.class);
	        System.out.println("Result - status ("+ response.getStatusCode() + ") has body: " + response.hasBody());
	        retievUserResp = response.getBody();
			
/*			CloseableHttpClient httpclient = getCloseableClient();
			List<NameValuePair> form = new ArrayList<NameValuePair>();

			HttpPost httppost = new HttpPost(rerievUserUrl);
			httppost.setHeader("Content-type", "application/json");
			httppost.setHeader("Authorization", "Bearer " + authToken);
			// httppost.setHeader("grant_type", "client_credentials");

			StringEntity payLoadEntity = new StringEntity(createUserPayLoad);
			httppost.setEntity(payLoadEntity);

			CloseableHttpResponse response = httpclient.execute(httppost);
			System.out.println("status line is:\t"+response.getStatusLine().getStatusCode());

			//httpclient.execute(httppost);
			//System.out.println(response.getStatusLine());
			//System.out.println(response.getEntity().getContent());
			BufferedInputStream bis = new BufferedInputStream(response.getEntity().getContent());
			ByteArrayOutputStream buf = new ByteArrayOutputStream();
			int result = bis.read();
			while (result != -1) {
				buf.write((byte) result);
				result = bis.read();
			}
			// StandardCharsets.UTF_8.name() > JDK 7
			System.out.println(buf.toString("UTF-8"));
			retievUserResp = buf.toString("UTF-8");
			
		*/	
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		System.out.println("retievUserResp is:\t"+retievUserResp);
		return retievUserResp;
		
	}

	public static String emailOtpUser(String emailurl, String authToken, String userPayLoad) {
		String emailOtpResp = null;
			try {
				
				System.out.println("USER EMAIL URL %%% "+emailurl);
				SSLContextBuilder builder = new SSLContextBuilder();
				builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
				SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
				
						    CloseableHttpClient httpClient = HttpClients.custom()
			                    .setSSLSocketFactory(sslsf)
			                    .build();

			    HttpComponentsClientHttpRequestFactory requestFactory =
			                    new HttpComponentsClientHttpRequestFactory();

			    requestFactory.setHttpClient(httpClient);
			    
				RestTemplate restTemplate = new RestTemplate(requestFactory);
				HttpHeaders headers = createHttpHeaders(authToken);
		        HttpEntity<String> entity = new HttpEntity<String>(userPayLoad, headers);
		        ResponseEntity<String> response = restTemplate.exchange(emailurl, HttpMethod.PUT, entity, String.class);
		        System.out.println("Result - status ("+ response.getStatusCode() + ") has body: " + response.hasBody());
		        emailOtpResp = response.getBody();
				System.out.println("Eamil otp"+emailOtpResp);
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return emailOtpResp;

		
	}

	public static String updateUser(String updateUrl, String authToken, String userPayLoad) {
		
		String userUpdateresp = null;
		try {
			
			System.out.println("Update User Url  %%% "+updateUrl);
			SSLContextBuilder builder = new SSLContextBuilder();
			builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
			SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
			
					    CloseableHttpClient httpClient = HttpClients.custom()
		                    .setSSLSocketFactory(sslsf)
		                    .build();

		    HttpComponentsClientHttpRequestFactory requestFactory =
		                    new HttpComponentsClientHttpRequestFactory();

		    requestFactory.setHttpClient(httpClient);
		    
			RestTemplate restTemplate = new RestTemplate(requestFactory);
			HttpHeaders headers = createHttpHeaders(authToken);
	        HttpEntity<String> entity = new HttpEntity<String>(userPayLoad, headers);
	        ResponseEntity<String> response = restTemplate.exchange(updateUrl, HttpMethod.PUT, entity, String.class);
	        System.out.println("Result - status ("+ response.getStatusCode() + ") has body: " + response.hasBody());
	        userUpdateresp = response.getBody();
			System.out.println("Update Url Resp"+userUpdateresp);
		
	} catch (Exception e) {
		System.out.println(e.getMessage());
	}
		
		
		return userUpdateresp;
	}

	public static String userInfo(String updateUrl, String authToken) {
		String userInfo = null;
		try {
			
			System.out.println("Update User Url  %%% "+updateUrl);
			SSLContextBuilder builder = new SSLContextBuilder();
			builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
			SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
			
					    CloseableHttpClient httpClient = HttpClients.custom()
		                    .setSSLSocketFactory(sslsf)
		                    .build();

		    HttpComponentsClientHttpRequestFactory requestFactory =
		                    new HttpComponentsClientHttpRequestFactory();

		    requestFactory.setHttpClient(httpClient);
		    
			RestTemplate restTemplate = new RestTemplate(requestFactory);
			HttpHeaders headers = createHttpHeaders(authToken);
	        HttpEntity<String> entity = new HttpEntity<String>(headers);
	        ResponseEntity<String> response = restTemplate.exchange(updateUrl, HttpMethod.GET, entity, String.class);
	        System.out.println("Result - status ("+ response.getStatusCode() + ") has body: " + response.hasBody());
	        userInfo = response.getBody();
			System.out.println("Update Url Resp"+userInfo);
		
	} catch (Exception e) {
		System.out.println(e.getMessage());
	}
		
		
		return userInfo;		
	}
	
}
