# .OAuth2APIApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](OAuth2APIApi.md#getToken) | **POST** /v1/oauth/tokens | Get a token using an OAuth2 flow


# **getToken**
> GetToken200Response getToken()

Exchange credentials for a token using the OAuth2 client credentials flow or token exchange.  This endpoint is used for three purposes - 1. To exchange client credentials (client ID and secret) for an access token This uses the client credentials flow. 2. To exchange a client token and an identity token for a more specific access token This uses the token exchange flow. 3. To exchange an access token for one with the same claims and a refreshed expiration period This uses the token exchange flow.  For example, a catalog client may be configured with client credentials from the OAuth2 Authorization flow. This client would exchange its client ID and secret for an access token using the client credentials request with this endpoint (1). Subsequent requests would then use that access token.  Some clients may also handle sessions that have additional user context. These clients would use the token exchange flow to exchange a user token (the \"subject\" token) from the session for a more specific access token for that user, using the catalog's access token as the \"actor\" token (2). The user ID token is the \"subject\" token and can be any token type allowed by the OAuth2 token exchange flow, including a unsecured JWT token with a sub claim. This request should use the catalog's bearer token in the \"Authorization\" header.  Clients may also use the token exchange flow to refresh a token that is about to expire by sending a token exchange request (3). The request's \"subject\" token should be the expiring token. This request should use the subject token in the \"Authorization\" header.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2APIApi(configuration);

let body:.OAuth2APIApiGetTokenRequest = {
  // string (optional)
  grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
  // string (optional)
  scope: "scope_example",
  // string | Client ID  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header. (optional)
  clientId: "clientId_example",
  // string | Client secret  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header. (optional)
  clientSecret: "clientSecret_example",
  // TokenType (optional)
  requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
  // string | Subject token for token exchange request (optional)
  subjectToken: "subjectToken_example",
  // TokenType (optional)
  subjectTokenType: "urn:ietf:params:oauth:token-type:access_token",
  // string | Actor token for token exchange request (optional)
  actorToken: "actorToken_example",
  // TokenType (optional)
  actorTokenType: "urn:ietf:params:oauth:token-type:access_token",
};

apiInstance.getToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**string**]**Array<&#39;urn:ietf:params:oauth:grant-type:token-exchange&#39;>** |  | (optional) defaults to undefined
 **scope** | [**string**] |  | (optional) defaults to undefined
 **clientId** | [**string**] | Client ID  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header. | (optional) defaults to undefined
 **clientSecret** | [**string**] | Client secret  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header. | (optional) defaults to undefined
 **requestedTokenType** | **TokenType** |  | (optional) defaults to undefined
 **subjectToken** | [**string**] | Subject token for token exchange request | (optional) defaults to undefined
 **subjectTokenType** | **TokenType** |  | (optional) defaults to undefined
 **actorToken** | [**string**] | Actor token for token exchange request | (optional) defaults to undefined
 **actorTokenType** | **TokenType** |  | (optional) defaults to undefined


### Return type

**GetToken200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth2 token response for client credentials or token exchange |  -  |
**400** | OAuth2 error response |  -  |
**401** | OAuth2 error response |  -  |
**5XX** | OAuth2 error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


