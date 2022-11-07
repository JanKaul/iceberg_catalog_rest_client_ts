// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetToken200Response } from '../models/GetToken200Response';
import { GetToken400Response } from '../models/GetToken400Response';
import { TokenType } from '../models/TokenType';

/**
 * no description
 */
export class OAuth2APIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Exchange credentials for a token using the OAuth2 client credentials flow or token exchange.  This endpoint is used for three purposes - 1. To exchange client credentials (client ID and secret) for an access token This uses the client credentials flow. 2. To exchange a client token and an identity token for a more specific access token This uses the token exchange flow. 3. To exchange an access token for one with the same claims and a refreshed expiration period This uses the token exchange flow.  For example, a catalog client may be configured with client credentials from the OAuth2 Authorization flow. This client would exchange its client ID and secret for an access token using the client credentials request with this endpoint (1). Subsequent requests would then use that access token.  Some clients may also handle sessions that have additional user context. These clients would use the token exchange flow to exchange a user token (the \"subject\" token) from the session for a more specific access token for that user, using the catalog's access token as the \"actor\" token (2). The user ID token is the \"subject\" token and can be any token type allowed by the OAuth2 token exchange flow, including a unsecured JWT token with a sub claim. This request should use the catalog's bearer token in the \"Authorization\" header.  Clients may also use the token exchange flow to refresh a token that is about to expire by sending a token exchange request (3). The request's \"subject\" token should be the expiring token. This request should use the subject token in the \"Authorization\" header.
     * Get a token using an OAuth2 flow
     * @param grantType 
     * @param scope 
     * @param clientId Client ID  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header.
     * @param clientSecret Client secret  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header.
     * @param requestedTokenType 
     * @param subjectToken Subject token for token exchange request
     * @param subjectTokenType 
     * @param actorToken Actor token for token exchange request
     * @param actorTokenType 
     */
    public async getToken(grantType?: string, scope?: string, clientId?: string, clientSecret?: string, requestedTokenType?: TokenType, subjectToken?: string, subjectTokenType?: TokenType, actorToken?: string, actorTokenType?: TokenType, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/v1/oauth/tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (scope !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('scope', scope as any);
        }
        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (requestedTokenType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('requested_token_type', requestedTokenType as any);
        }
        if (subjectToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('subject_token', subjectToken as any);
        }
        if (subjectTokenType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('subject_token_type', subjectTokenType as any);
        }
        if (actorToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('actor_token', actorToken as any);
        }
        if (actorTokenType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('actor_token_type', actorTokenType as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OAuth2APIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getToken(response: ResponseContext): Promise<GetToken200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetToken200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetToken200Response", ""
            ) as GetToken200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GetToken400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetToken400Response", ""
            ) as GetToken400Response;
            throw new ApiException<GetToken400Response>(response.httpStatusCode, "OAuth2 error response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GetToken400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetToken400Response", ""
            ) as GetToken400Response;
            throw new ApiException<GetToken400Response>(response.httpStatusCode, "OAuth2 error response", body, response.headers);
        }
        if (isCodeInRange("5XX", response.httpStatusCode)) {
            const body: GetToken400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetToken400Response", ""
            ) as GetToken400Response;
            throw new ApiException<GetToken400Response>(response.httpStatusCode, "OAuth2 error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetToken200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetToken200Response", ""
            ) as GetToken200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
