# .CatalogAPIApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNamespace**](CatalogAPIApi.md#createNamespace) | **POST** /v1/{prefix}/namespaces | Create a namespace
[**createTable**](CatalogAPIApi.md#createTable) | **POST** /v1/{prefix}/namespaces/{namespace}/tables | Create a table in the given namespace
[**dropNamespace**](CatalogAPIApi.md#dropNamespace) | **DELETE** /v1/{prefix}/namespaces/{namespace} | Drop a namespace from the catalog. Namespace must be empty.
[**dropTable**](CatalogAPIApi.md#dropTable) | **DELETE** /v1/{prefix}/namespaces/{namespace}/tables/{table} | Drop a table from the catalog
[**listNamespaces**](CatalogAPIApi.md#listNamespaces) | **GET** /v1/{prefix}/namespaces | List namespaces, optionally providing a parent namespace to list underneath
[**listTables**](CatalogAPIApi.md#listTables) | **GET** /v1/{prefix}/namespaces/{namespace}/tables | List all table identifiers underneath a given namespace
[**loadNamespaceMetadata**](CatalogAPIApi.md#loadNamespaceMetadata) | **GET** /v1/{prefix}/namespaces/{namespace} | Load the metadata properties for a namespace
[**loadTable**](CatalogAPIApi.md#loadTable) | **GET** /v1/{prefix}/namespaces/{namespace}/tables/{table} | Load a table from the catalog
[**renameTable**](CatalogAPIApi.md#renameTable) | **POST** /v1/{prefix}/tables/rename | Rename a table from its current name to a new name
[**reportMetrics**](CatalogAPIApi.md#reportMetrics) | **POST** /v1/{prefix}/namespaces/{namespace}/tables/{table}/metrics | Send a metrics report to this endpoint to be processed by the backend
[**tableExists**](CatalogAPIApi.md#tableExists) | **HEAD** /v1/{prefix}/namespaces/{namespace}/tables/{table} | Check if a table exists
[**updateProperties**](CatalogAPIApi.md#updateProperties) | **POST** /v1/{prefix}/namespaces/{namespace}/properties | Set or remove properties on a namespace
[**updateTable**](CatalogAPIApi.md#updateTable) | **POST** /v1/{prefix}/namespaces/{namespace}/tables/{table} | Commit updates to a table


# **createNamespace**
> CreateNamespace200Response createNamespace()

Create a namespace, with an optional set of properties. The server might also add properties, such as `last_modified_time` etc.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiCreateNamespaceRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // CreateNamespaceRequest (optional)
  createNamespaceRequest: {
    namespace: ["accounting","tax"],
    properties: {},
  },
};

apiInstance.createNamespace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNamespaceRequest** | **CreateNamespaceRequest**|  |
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined


### Return type

**CreateNamespace200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Represents a successful call to create a namespace. Returns the namespace created, as well as any properties that were stored for the namespace, including those the server might have added. Implementations are not required to support namespace properties. |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**406** | Not Acceptable / Unsupported Operation. The server does not support this operation. |  -  |
**409** | Conflict - The namespace already exists |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTable**
> LoadTableResult createTable()

Create a table or start a create transaction, like atomic CTAS.  If `stage-create` is false, the table is created immediately.  If `stage-create` is true, the table is not created, but table metadata is initialized and returned. The service should prepare as needed for a commit to the table commit endpoint to complete the create transaction. The client uses the returned metadata to begin a transaction. To commit the transaction, the client sends all create and subsequent changes to the table commit route. Changes from the table create operation include changes like AddSchemaUpdate and SetCurrentSchemaUpdate that set the initial table state.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiCreateTableRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // CreateTableRequest (optional)
  createTableRequest: {
    name: "name_example",
    location: "location_example",
    schema: null,
    partitionSpec: {
      fields: [
        {
          fieldId: 1,
          sourceId: 1,
          name: "name_example",
          transform: "["identity","year","month","day","hour","bucket[256]","truncate[16]"]",
        },
      ],
    },
    writeOrder: {
      fields: [
        {
          sourceId: 1,
          transform: "["identity","year","month","day","hour","bucket[256]","truncate[16]"]",
          direction: "asc",
          nullOrder: "nulls-first",
        },
      ],
    },
    stageCreate: true,
    properties: {
      "key": "key_example",
    },
  },
};

apiInstance.createTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTableRequest** | **CreateTableRequest**|  |
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined


### Return type

**LoadTableResult**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Table metadata result after creating a table |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - The namespace specified does not exist |  -  |
**409** | Conflict - The table already exists |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dropNamespace**
> void dropNamespace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiDropNamespaceRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
};

apiInstance.dropNamespace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success, no content |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - Namespace to delete does not exist. |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dropTable**
> void dropTable()

Remove a table from the catalog

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiDropTableRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // string | A table name
  table: "sales",
  // boolean | Whether the user requested to purge the underlying table's data and metadata (optional)
  purgeRequested: false,
};

apiInstance.dropTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined
 **table** | [**string**] | A table name | defaults to undefined
 **purgeRequested** | [**boolean**] | Whether the user requested to purge the underlying table&#39;s data and metadata | (optional) defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success, no content |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - NoSuchTableException, Table to drop does not exist |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespaces**
> ListNamespaces200Response listNamespaces()

List all namespaces at a certain level, optionally starting from a given parent namespace. For example, if table accounting.tax.paid exists, using 'SELECT NAMESPACE IN accounting' would translate into `GET /namespaces?parent=accounting` and must return a namespace, [\"accounting\", \"tax\"]. If `parent` is not provided, all top-level namespaces should be listed.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiListNamespacesRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | An optional namespace, underneath which to list namespaces. If not provided or empty, all top-level namespaces should be listed. If parent is a multipart namespace, the parts must be separated by the unit separator (`0x1F`) byte. (optional)
  parent: "accounting%1Ftax",
};

apiInstance.listNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **parent** | [**string**] | An optional namespace, underneath which to list namespaces. If not provided or empty, all top-level namespaces should be listed. If parent is a multipart namespace, the parts must be separated by the unit separator (&#x60;0x1F&#x60;) byte. | (optional) defaults to undefined


### Return type

**ListNamespaces200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of namespaces |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - Namespace provided in the &#x60;parent&#x60; query parameter is not found. |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTables**
> ListTables200Response listTables()

Return all table identifiers under this namespace

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiListTablesRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
};

apiInstance.listTables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined


### Return type

**ListTables200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of table identifiers |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - The namespace specified does not exist |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loadNamespaceMetadata**
> LoadNamespaceMetadata200Response loadNamespaceMetadata()

Return all stored metadata properties for a given namespace

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiLoadNamespaceMetadataRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
};

apiInstance.loadNamespaceMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined


### Return type

**LoadNamespaceMetadata200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a namespace, as well as any properties stored on the namespace if namespace properties are supported by the server. |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - Namespace not found |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loadTable**
> LoadTableResult loadTable()

Load a table from the catalog.  The response contains both configuration and table metadata. The configuration, if non-empty is used as additional configuration for the table that overrides catalog configuration. For example, this configuration may change the FileIO implemented used for the table.  The response also contains the table's full metadata.  The catalog configuration may contain credentials that should be used for subsequent requests for the table. The configuration key \"token\" is used to pass an access token to be used as a bearer token for table requests. Otherwise, a token may be passed using a RFC 8693 token type as a configuration key. For example, \"urn:ietf:params:oauth:token-type:jwt=<JWT-token>\".

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiLoadTableRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // string | A table name
  table: "sales",
};

apiInstance.loadTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined
 **table** | [**string**] | A table name | defaults to undefined


### Return type

**LoadTableResult**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Table metadata result when loading a table |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - NoSuchTableException, table to load does not exist |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **renameTable**
> void renameTable(renameTableRequest)

Rename a table from one identifier to another. It's valid to move a table across namespaces, but the server implementation is not required to support it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiRenameTableRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // RenameTableRequest | Current table identifier to rename and new table identifier to rename to
  renameTableRequest: {
    source: {
      namespace: ["accounting","tax"],
      name: "name_example",
    },
    destination: {
      namespace: ["accounting","tax"],
      name: "name_example",
    },
  },
};

apiInstance.renameTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameTableRequest** | **RenameTableRequest**| Current table identifier to rename and new table identifier to rename to |
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - NoSuchTableException, Table to rename does not exist - NoSuchNamespaceException, The target namespace of the new table identifier does not exist |  -  |
**406** | Not Acceptable / Unsupported Operation. The server does not support this operation. |  -  |
**409** | Conflict - The target table identifier to rename to already exists |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reportMetrics**
> void reportMetrics(reportMetricsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiReportMetricsRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // string | A table name
  table: "sales",
  // ReportMetricsRequest | The request containing the metrics report to be sent
  reportMetricsRequest: null,
};

apiInstance.reportMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportMetricsRequest** | **ReportMetricsRequest**| The request containing the metrics report to be sent |
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined
 **table** | [**string**] | A table name | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success, no content |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - NoSuchTableException, table to load does not exist |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tableExists**
> void tableExists()

Check if a table exists within a given namespace. This request does not return a response body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiTableExistsRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // string | A table name
  table: "sales",
};

apiInstance.tableExists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined
 **table** | [**string**] | A table name | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Table Exists |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProperties**
> UpdateProperties200Response updateProperties()

Set and/or remove properties on a namespace. The request body specifies a list of properties to remove and a map of key value pairs to update. Properties that are not in the request are not modified or removed by this call. Server implementations are not required to support namespace properties.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiUpdatePropertiesRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // UpdateNamespacePropertiesRequest (optional)
  updateNamespacePropertiesRequest: {
    removals: ["department","access_group"],
    updates: {"owner":"Hank Bendickson"},
  },
};

apiInstance.updateProperties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateNamespacePropertiesRequest** | **UpdateNamespacePropertiesRequest**|  |
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined


### Return type

**UpdateProperties200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON data response for a synchronous update properties request. |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - Namespace not found |  -  |
**406** | Not Acceptable / Unsupported Operation. The server does not support this operation. |  -  |
**422** | Unprocessable Entity - A property key was included in both &#x60;removals&#x60; and &#x60;updates&#x60; |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**5XX** | A server-side problem that might not be addressable from the client side. Used for server 5xx errors without more specific documentation in individual routes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTable**
> UpdateTable200Response updateTable()

Commit updates to a table.  Commits have two parts, requirements and updates. Requirements are assertions that will be validated before attempting to make and commit changes. For example, `assert-ref-snapshot-id` will check that a named ref's snapshot ID has a certain value.  Updates are changes to make to table metadata. For example, after asserting that the current main ref is at the expected snapshot, a commit may add a new child snapshot and set the ref to the new snapshot id.  Create table transactions that are started by createTable with `stage-create` set to true are committed using this route. Transactions should include all changes to the table, including table initialization, like AddSchemaUpdate and SetCurrentSchemaUpdate. The `assert-create` requirement is used to ensure that the table was not created concurrently.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CatalogAPIApi(configuration);

let body:.CatalogAPIApiUpdateTableRequest = {
  // string | An optional prefix in the path
  prefix: "prefix_example",
  // string | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (`0x1F`) byte.
  namespace: "accounting",
  // string | A table name
  table: "sales",
  // CommitTableRequest (optional)
  commitTableRequest: {
    requirements: [
      {
        requirement: "assert-create",
        ref: "ref_example",
        uuid: "uuid_example",
        snapshotId: 1,
        lastAssignedFieldId: 1,
        currentSchemaId: 1,
        lastAssignedPartitionId: 1,
        defaultSpecId: 1,
        defaultSortOrderId: 1,
      },
    ],
    updates: [
      null,
    ],
  },
};

apiInstance.updateTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitTableRequest** | **CommitTableRequest**|  |
 **prefix** | [**string**] | An optional prefix in the path | defaults to undefined
 **namespace** | [**string**] | A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte. | defaults to undefined
 **table** | [**string**] | A table name | defaults to undefined


### Return type

**UpdateTable200Response**

### Authorization

[BearerAuth](README.md#BearerAuth), [OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response used when a table is successfully updated. The table metadata JSON is returned in the metadata field. The corresponding file location of table metadata must be returned in the metadata-location field. Clients can check whether metadata has changed by comparing metadata locations. |  -  |
**400** | Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure, such as invalid json. Usually serves application/json content, although in some cases simple text/plain content might be returned by the server&#39;s middleware. |  -  |
**401** | Unauthorized. Authentication is required and has failed or has not yet been provided. |  -  |
**403** | Forbidden. Authenticated user does not have the necessary permissions. |  -  |
**404** | Not Found - NoSuchTableException, table to load does not exist |  -  |
**409** | Conflict - CommitFailedException, one or more requirements failed. The client may retry. |  -  |
**419** | Credentials have timed out. If possible, the client should refresh credentials and retry. |  -  |
**500** | An unknown server-side problem occurred; the commit state is unknown. |  -  |
**503** | The service is not ready to handle the request. The client should wait and retry.  The service may additionally send a Retry-After header to indicate when to retry. |  -  |
**504** | A server-side gateway timeout occurred; the commit state is unknown. |  -  |
**5XX** | A server-side problem that might not be addressable on the client. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


