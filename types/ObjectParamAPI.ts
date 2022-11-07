import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AddPartitionSpecUpdate } from '../models/AddPartitionSpecUpdate';
import { AddPartitionSpecUpdateAllOf } from '../models/AddPartitionSpecUpdateAllOf';
import { AddSchemaUpdate } from '../models/AddSchemaUpdate';
import { AddSchemaUpdateAllOf } from '../models/AddSchemaUpdateAllOf';
import { AddSnapshotUpdate } from '../models/AddSnapshotUpdate';
import { AddSnapshotUpdateAllOf } from '../models/AddSnapshotUpdateAllOf';
import { AddSortOrderUpdate } from '../models/AddSortOrderUpdate';
import { AddSortOrderUpdateAllOf } from '../models/AddSortOrderUpdateAllOf';
import { AndOrExpression } from '../models/AndOrExpression';
import { BaseUpdate } from '../models/BaseUpdate';
import { CatalogConfig } from '../models/CatalogConfig';
import { CommitTableRequest } from '../models/CommitTableRequest';
import { CounterResult } from '../models/CounterResult';
import { CreateNamespace200Response } from '../models/CreateNamespace200Response';
import { CreateNamespaceRequest } from '../models/CreateNamespaceRequest';
import { CreateTableRequest } from '../models/CreateTableRequest';
import { ErrorModel } from '../models/ErrorModel';
import { Expression } from '../models/Expression';
import { GetToken200Response } from '../models/GetToken200Response';
import { GetToken400Response } from '../models/GetToken400Response';
import { ListNamespaces200Response } from '../models/ListNamespaces200Response';
import { ListTables200Response } from '../models/ListTables200Response';
import { ListType } from '../models/ListType';
import { LiteralExpression } from '../models/LiteralExpression';
import { LoadNamespaceMetadata200Response } from '../models/LoadNamespaceMetadata200Response';
import { LoadTableResult } from '../models/LoadTableResult';
import { MapType } from '../models/MapType';
import { MetadataLogInner } from '../models/MetadataLogInner';
import { MetricResult } from '../models/MetricResult';
import { NotExpression } from '../models/NotExpression';
import { NullOrder } from '../models/NullOrder';
import { PartitionField } from '../models/PartitionField';
import { PartitionSpec } from '../models/PartitionSpec';
import { RemovePropertiesUpdate } from '../models/RemovePropertiesUpdate';
import { RemovePropertiesUpdateAllOf } from '../models/RemovePropertiesUpdateAllOf';
import { RemoveSnapshotRefUpdate } from '../models/RemoveSnapshotRefUpdate';
import { RemoveSnapshotsUpdate } from '../models/RemoveSnapshotsUpdate';
import { RemoveSnapshotsUpdateAllOf } from '../models/RemoveSnapshotsUpdateAllOf';
import { RenameTableRequest } from '../models/RenameTableRequest';
import { ReportMetricsRequest } from '../models/ReportMetricsRequest';
import { ScanReport } from '../models/ScanReport';
import { Schema } from '../models/Schema';
import { SchemaAllOf } from '../models/SchemaAllOf';
import { SetCurrentSchemaUpdate } from '../models/SetCurrentSchemaUpdate';
import { SetCurrentSchemaUpdateAllOf } from '../models/SetCurrentSchemaUpdateAllOf';
import { SetDefaultSortOrderUpdate } from '../models/SetDefaultSortOrderUpdate';
import { SetDefaultSortOrderUpdateAllOf } from '../models/SetDefaultSortOrderUpdateAllOf';
import { SetDefaultSpecUpdate } from '../models/SetDefaultSpecUpdate';
import { SetDefaultSpecUpdateAllOf } from '../models/SetDefaultSpecUpdateAllOf';
import { SetExpression } from '../models/SetExpression';
import { SetLocationUpdate } from '../models/SetLocationUpdate';
import { SetLocationUpdateAllOf } from '../models/SetLocationUpdateAllOf';
import { SetPropertiesUpdate } from '../models/SetPropertiesUpdate';
import { SetPropertiesUpdateAllOf } from '../models/SetPropertiesUpdateAllOf';
import { SetSnapshotRefUpdate } from '../models/SetSnapshotRefUpdate';
import { SetSnapshotRefUpdateAllOf } from '../models/SetSnapshotRefUpdateAllOf';
import { Snapshot } from '../models/Snapshot';
import { SnapshotLogInner } from '../models/SnapshotLogInner';
import { SnapshotReference } from '../models/SnapshotReference';
import { SnapshotSummary } from '../models/SnapshotSummary';
import { SortDirection } from '../models/SortDirection';
import { SortField } from '../models/SortField';
import { SortOrder } from '../models/SortOrder';
import { StructField } from '../models/StructField';
import { StructType } from '../models/StructType';
import { TableIdentifier } from '../models/TableIdentifier';
import { TableMetadata } from '../models/TableMetadata';
import { TableRequirement } from '../models/TableRequirement';
import { TableUpdate } from '../models/TableUpdate';
import { Term } from '../models/Term';
import { TimerResult } from '../models/TimerResult';
import { TokenType } from '../models/TokenType';
import { TransformTerm } from '../models/TransformTerm';
import { Type } from '../models/Type';
import { UnaryExpression } from '../models/UnaryExpression';
import { UpdateNamespacePropertiesRequest } from '../models/UpdateNamespacePropertiesRequest';
import { UpdateProperties200Response } from '../models/UpdateProperties200Response';
import { UpdateTable200Response } from '../models/UpdateTable200Response';
import { UpgradeFormatVersionUpdate } from '../models/UpgradeFormatVersionUpdate';
import { UpgradeFormatVersionUpdateAllOf } from '../models/UpgradeFormatVersionUpdateAllOf';

import { ObservableCatalogAPIApi } from "./ObservableAPI";
import { CatalogAPIApiRequestFactory, CatalogAPIApiResponseProcessor} from "../apis/CatalogAPIApi";

export interface CatalogAPIApiCreateNamespaceRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApicreateNamespace
     */
    prefix: string
    /**
     * 
     * @type CreateNamespaceRequest
     * @memberof CatalogAPIApicreateNamespace
     */
    createNamespaceRequest?: CreateNamespaceRequest
}

export interface CatalogAPIApiCreateTableRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApicreateTable
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApicreateTable
     */
    namespace: string
    /**
     * 
     * @type CreateTableRequest
     * @memberof CatalogAPIApicreateTable
     */
    createTableRequest?: CreateTableRequest
}

export interface CatalogAPIApiDropNamespaceRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApidropNamespace
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApidropNamespace
     */
    namespace: string
}

export interface CatalogAPIApiDropTableRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApidropTable
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApidropTable
     */
    namespace: string
    /**
     * A table name
     * @type string
     * @memberof CatalogAPIApidropTable
     */
    table: string
    /**
     * Whether the user requested to purge the underlying table&#39;s data and metadata
     * @type boolean
     * @memberof CatalogAPIApidropTable
     */
    purgeRequested?: boolean
}

export interface CatalogAPIApiListNamespacesRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApilistNamespaces
     */
    prefix: string
    /**
     * An optional namespace, underneath which to list namespaces. If not provided or empty, all top-level namespaces should be listed. If parent is a multipart namespace, the parts must be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApilistNamespaces
     */
    parent?: string
}

export interface CatalogAPIApiListTablesRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApilistTables
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApilistTables
     */
    namespace: string
}

export interface CatalogAPIApiLoadNamespaceMetadataRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApiloadNamespaceMetadata
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApiloadNamespaceMetadata
     */
    namespace: string
}

export interface CatalogAPIApiLoadTableRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApiloadTable
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApiloadTable
     */
    namespace: string
    /**
     * A table name
     * @type string
     * @memberof CatalogAPIApiloadTable
     */
    table: string
}

export interface CatalogAPIApiRenameTableRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApirenameTable
     */
    prefix: string
    /**
     * Current table identifier to rename and new table identifier to rename to
     * @type RenameTableRequest
     * @memberof CatalogAPIApirenameTable
     */
    renameTableRequest: RenameTableRequest
}

export interface CatalogAPIApiReportMetricsRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApireportMetrics
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApireportMetrics
     */
    namespace: string
    /**
     * A table name
     * @type string
     * @memberof CatalogAPIApireportMetrics
     */
    table: string
    /**
     * The request containing the metrics report to be sent
     * @type ReportMetricsRequest
     * @memberof CatalogAPIApireportMetrics
     */
    reportMetricsRequest: ReportMetricsRequest
}

export interface CatalogAPIApiTableExistsRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApitableExists
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApitableExists
     */
    namespace: string
    /**
     * A table name
     * @type string
     * @memberof CatalogAPIApitableExists
     */
    table: string
}

export interface CatalogAPIApiUpdatePropertiesRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApiupdateProperties
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApiupdateProperties
     */
    namespace: string
    /**
     * 
     * @type UpdateNamespacePropertiesRequest
     * @memberof CatalogAPIApiupdateProperties
     */
    updateNamespacePropertiesRequest?: UpdateNamespacePropertiesRequest
}

export interface CatalogAPIApiUpdateTableRequest {
    /**
     * An optional prefix in the path
     * @type string
     * @memberof CatalogAPIApiupdateTable
     */
    prefix: string
    /**
     * A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @type string
     * @memberof CatalogAPIApiupdateTable
     */
    namespace: string
    /**
     * A table name
     * @type string
     * @memberof CatalogAPIApiupdateTable
     */
    table: string
    /**
     * 
     * @type CommitTableRequest
     * @memberof CatalogAPIApiupdateTable
     */
    commitTableRequest?: CommitTableRequest
}

export class ObjectCatalogAPIApi {
    private api: ObservableCatalogAPIApi

    public constructor(configuration: Configuration, requestFactory?: CatalogAPIApiRequestFactory, responseProcessor?: CatalogAPIApiResponseProcessor) {
        this.api = new ObservableCatalogAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a namespace, with an optional set of properties. The server might also add properties, such as `last_modified_time` etc.
     * Create a namespace
     * @param param the request object
     */
    public createNamespace(param: CatalogAPIApiCreateNamespaceRequest, options?: Configuration): Promise<CreateNamespace200Response> {
        return this.api.createNamespace(param.prefix, param.createNamespaceRequest,  options).toPromise();
    }

    /**
     * Create a table or start a create transaction, like atomic CTAS.  If `stage-create` is false, the table is created immediately.  If `stage-create` is true, the table is not created, but table metadata is initialized and returned. The service should prepare as needed for a commit to the table commit endpoint to complete the create transaction. The client uses the returned metadata to begin a transaction. To commit the transaction, the client sends all create and subsequent changes to the table commit route. Changes from the table create operation include changes like AddSchemaUpdate and SetCurrentSchemaUpdate that set the initial table state.
     * Create a table in the given namespace
     * @param param the request object
     */
    public createTable(param: CatalogAPIApiCreateTableRequest, options?: Configuration): Promise<LoadTableResult> {
        return this.api.createTable(param.prefix, param.namespace, param.createTableRequest,  options).toPromise();
    }

    /**
     * Drop a namespace from the catalog. Namespace must be empty.
     * @param param the request object
     */
    public dropNamespace(param: CatalogAPIApiDropNamespaceRequest, options?: Configuration): Promise<void> {
        return this.api.dropNamespace(param.prefix, param.namespace,  options).toPromise();
    }

    /**
     * Remove a table from the catalog
     * Drop a table from the catalog
     * @param param the request object
     */
    public dropTable(param: CatalogAPIApiDropTableRequest, options?: Configuration): Promise<void> {
        return this.api.dropTable(param.prefix, param.namespace, param.table, param.purgeRequested,  options).toPromise();
    }

    /**
     * List all namespaces at a certain level, optionally starting from a given parent namespace. For example, if table accounting.tax.paid exists, using 'SELECT NAMESPACE IN accounting' would translate into `GET /namespaces?parent=accounting` and must return a namespace, [\"accounting\", \"tax\"]. If `parent` is not provided, all top-level namespaces should be listed.
     * List namespaces, optionally providing a parent namespace to list underneath
     * @param param the request object
     */
    public listNamespaces(param: CatalogAPIApiListNamespacesRequest, options?: Configuration): Promise<ListNamespaces200Response> {
        return this.api.listNamespaces(param.prefix, param.parent,  options).toPromise();
    }

    /**
     * Return all table identifiers under this namespace
     * List all table identifiers underneath a given namespace
     * @param param the request object
     */
    public listTables(param: CatalogAPIApiListTablesRequest, options?: Configuration): Promise<ListTables200Response> {
        return this.api.listTables(param.prefix, param.namespace,  options).toPromise();
    }

    /**
     * Return all stored metadata properties for a given namespace
     * Load the metadata properties for a namespace
     * @param param the request object
     */
    public loadNamespaceMetadata(param: CatalogAPIApiLoadNamespaceMetadataRequest, options?: Configuration): Promise<LoadNamespaceMetadata200Response> {
        return this.api.loadNamespaceMetadata(param.prefix, param.namespace,  options).toPromise();
    }

    /**
     * Load a table from the catalog.  The response contains both configuration and table metadata. The configuration, if non-empty is used as additional configuration for the table that overrides catalog configuration. For example, this configuration may change the FileIO implemented used for the table.  The response also contains the table's full metadata.  The catalog configuration may contain credentials that should be used for subsequent requests for the table. The configuration key \"token\" is used to pass an access token to be used as a bearer token for table requests. Otherwise, a token may be passed using a RFC 8693 token type as a configuration key. For example, \"urn:ietf:params:oauth:token-type:jwt=<JWT-token>\".
     * Load a table from the catalog
     * @param param the request object
     */
    public loadTable(param: CatalogAPIApiLoadTableRequest, options?: Configuration): Promise<LoadTableResult> {
        return this.api.loadTable(param.prefix, param.namespace, param.table,  options).toPromise();
    }

    /**
     * Rename a table from one identifier to another. It's valid to move a table across namespaces, but the server implementation is not required to support it.
     * Rename a table from its current name to a new name
     * @param param the request object
     */
    public renameTable(param: CatalogAPIApiRenameTableRequest, options?: Configuration): Promise<void> {
        return this.api.renameTable(param.prefix, param.renameTableRequest,  options).toPromise();
    }

    /**
     * Send a metrics report to this endpoint to be processed by the backend
     * @param param the request object
     */
    public reportMetrics(param: CatalogAPIApiReportMetricsRequest, options?: Configuration): Promise<void> {
        return this.api.reportMetrics(param.prefix, param.namespace, param.table, param.reportMetricsRequest,  options).toPromise();
    }

    /**
     * Check if a table exists within a given namespace. This request does not return a response body.
     * Check if a table exists
     * @param param the request object
     */
    public tableExists(param: CatalogAPIApiTableExistsRequest, options?: Configuration): Promise<void> {
        return this.api.tableExists(param.prefix, param.namespace, param.table,  options).toPromise();
    }

    /**
     * Set and/or remove properties on a namespace. The request body specifies a list of properties to remove and a map of key value pairs to update. Properties that are not in the request are not modified or removed by this call. Server implementations are not required to support namespace properties.
     * Set or remove properties on a namespace
     * @param param the request object
     */
    public updateProperties(param: CatalogAPIApiUpdatePropertiesRequest, options?: Configuration): Promise<UpdateProperties200Response> {
        return this.api.updateProperties(param.prefix, param.namespace, param.updateNamespacePropertiesRequest,  options).toPromise();
    }

    /**
     * Commit updates to a table.  Commits have two parts, requirements and updates. Requirements are assertions that will be validated before attempting to make and commit changes. For example, `assert-ref-snapshot-id` will check that a named ref's snapshot ID has a certain value.  Updates are changes to make to table metadata. For example, after asserting that the current main ref is at the expected snapshot, a commit may add a new child snapshot and set the ref to the new snapshot id.  Create table transactions that are started by createTable with `stage-create` set to true are committed using this route. Transactions should include all changes to the table, including table initialization, like AddSchemaUpdate and SetCurrentSchemaUpdate. The `assert-create` requirement is used to ensure that the table was not created concurrently.
     * Commit updates to a table
     * @param param the request object
     */
    public updateTable(param: CatalogAPIApiUpdateTableRequest, options?: Configuration): Promise<UpdateTable200Response> {
        return this.api.updateTable(param.prefix, param.namespace, param.table, param.commitTableRequest,  options).toPromise();
    }

}

import { ObservableConfigurationAPIApi } from "./ObservableAPI";
import { ConfigurationAPIApiRequestFactory, ConfigurationAPIApiResponseProcessor} from "../apis/ConfigurationAPIApi";

export interface ConfigurationAPIApiGetConfigRequest {
}

export class ObjectConfigurationAPIApi {
    private api: ObservableConfigurationAPIApi

    public constructor(configuration: Configuration, requestFactory?: ConfigurationAPIApiRequestFactory, responseProcessor?: ConfigurationAPIApiResponseProcessor) {
        this.api = new ObservableConfigurationAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  All REST clients should first call this route to get catalog configuration properties from the server to configure the catalog and its HTTP client. Configuration from the server consists of two sets of key/value pairs. - defaults -  properties that should be used as default configuration; applied before client configuration - overrides - properties that should be used to override client configuration; applied after defaults and client configuration  Catalog configuration is constructed by setting the defaults, then client- provided configuration, and finally overrides. The final property set is then used to configure the catalog.  For example, a default configuration property might set the size of the client pool, which can be replaced with a client-specific setting. An override might be used to set the warehouse location, which is stored on the server rather than in client configuration.  Common catalog configuration settings are documented at https://iceberg.apache.org/configuration/#catalog-properties 
     * List all catalog configuration settings
     * @param param the request object
     */
    public getConfig(param: ConfigurationAPIApiGetConfigRequest = {}, options?: Configuration): Promise<CatalogConfig> {
        return this.api.getConfig( options).toPromise();
    }

}

import { ObservableOAuth2APIApi } from "./ObservableAPI";
import { OAuth2APIApiRequestFactory, OAuth2APIApiResponseProcessor} from "../apis/OAuth2APIApi";

export interface OAuth2APIApiGetTokenRequest {
    /**
     * 
     * @type string
     * @memberof OAuth2APIApigetToken
     */
    grantType?: string
    /**
     * 
     * @type string
     * @memberof OAuth2APIApigetToken
     */
    scope?: string
    /**
     * Client ID  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header.
     * @type string
     * @memberof OAuth2APIApigetToken
     */
    clientId?: string
    /**
     * Client secret  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header.
     * @type string
     * @memberof OAuth2APIApigetToken
     */
    clientSecret?: string
    /**
     * 
     * @type TokenType
     * @memberof OAuth2APIApigetToken
     */
    requestedTokenType?: TokenType
    /**
     * Subject token for token exchange request
     * @type string
     * @memberof OAuth2APIApigetToken
     */
    subjectToken?: string
    /**
     * 
     * @type TokenType
     * @memberof OAuth2APIApigetToken
     */
    subjectTokenType?: TokenType
    /**
     * Actor token for token exchange request
     * @type string
     * @memberof OAuth2APIApigetToken
     */
    actorToken?: string
    /**
     * 
     * @type TokenType
     * @memberof OAuth2APIApigetToken
     */
    actorTokenType?: TokenType
}

export class ObjectOAuth2APIApi {
    private api: ObservableOAuth2APIApi

    public constructor(configuration: Configuration, requestFactory?: OAuth2APIApiRequestFactory, responseProcessor?: OAuth2APIApiResponseProcessor) {
        this.api = new ObservableOAuth2APIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Exchange credentials for a token using the OAuth2 client credentials flow or token exchange.  This endpoint is used for three purposes - 1. To exchange client credentials (client ID and secret) for an access token This uses the client credentials flow. 2. To exchange a client token and an identity token for a more specific access token This uses the token exchange flow. 3. To exchange an access token for one with the same claims and a refreshed expiration period This uses the token exchange flow.  For example, a catalog client may be configured with client credentials from the OAuth2 Authorization flow. This client would exchange its client ID and secret for an access token using the client credentials request with this endpoint (1). Subsequent requests would then use that access token.  Some clients may also handle sessions that have additional user context. These clients would use the token exchange flow to exchange a user token (the \"subject\" token) from the session for a more specific access token for that user, using the catalog's access token as the \"actor\" token (2). The user ID token is the \"subject\" token and can be any token type allowed by the OAuth2 token exchange flow, including a unsecured JWT token with a sub claim. This request should use the catalog's bearer token in the \"Authorization\" header.  Clients may also use the token exchange flow to refresh a token that is about to expire by sending a token exchange request (3). The request's \"subject\" token should be the expiring token. This request should use the subject token in the \"Authorization\" header.
     * Get a token using an OAuth2 flow
     * @param param the request object
     */
    public getToken(param: OAuth2APIApiGetTokenRequest = {}, options?: Configuration): Promise<GetToken200Response> {
        return this.api.getToken(param.grantType, param.scope, param.clientId, param.clientSecret, param.requestedTokenType, param.subjectToken, param.subjectTokenType, param.actorToken, param.actorTokenType,  options).toPromise();
    }

}
