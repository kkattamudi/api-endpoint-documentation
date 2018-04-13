/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-endpoint-documentation.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-repeat.d.ts" />
/// <reference path="../raml-aware/raml-aware.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../api-annotation-document/api-annotation-document.d.ts" />
/// <reference path="../api-parameters-document/api-parameters-document.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />

declare namespace ApiElements {

  /**
   * `api-endpoint-documentation`
   *
   * A component to generate documentation for an endpoint from AMF model
   *
   * This element works with [AMF](https://github.com/mulesoft/amf) data model.
   * To properly compute all the information relevant to endpoint documentation
   * set the following properties:
   *
   * - amfModel - as AMF's WebApi data model
   * - endpoint - As AMF's EndPoint data model
   *
   * When set, this will automatically populate the wiew with data.
   *
   * ## Updating API's base URI
   *
   * By default the component render the documentation as it is defined
   * in the AMF model. Sometimes, however, you may need to replace the base URI
   * of the API with something else. It is useful when the API does not
   * have base URI property defined (therefore this component render relative
   * paths instead of URIs) or when you want to manage different environments.
   *
   * To update base URI value either update `baseUri` property or use
   * `iron-meta` with key `ApiBaseUri`. First method is easier but the second
   * gives much more flexibility since it use a [monostate pattern](http://wiki.c2.com/?MonostatePattern)
   * to manage base URI property.
   *
   * When the component constructs the funal URI for the endpoint it does the following:
   * - if `baseUri` is set it uses this value as a base uri for the endpoint
   * - else if `iron-meta` with key `ApiBaseUri` exists and contains a value
   * it uses it uses this value as a base uri for the endpoint
   * - else if `amfModel` is set then it computes base uri value from main
   * model document
   * Then it concatenates computed base URI with `endpoint`'s path property.
   *
   * ### Example
   *
   * ```html
   * <iron-meta key="ApiBaseUri" value="https://domain.com"></iron-meta>
   * ```
   *
   * To update value of the `iron-meta`:
   * ```javascript
   * new Polymer.IronMeta({key: 'ApiBaseUri'}).value = 'https://other.domain';
   * ```
   *
   * Note: The element will not get notified about the change in `iron-meta`.
   * The change will be reflected whehn `amfModel` or `endpoint` property chnage.
   *
   * ## Styling
   *
   * `<api-endpoint-documentation>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-endpoint-documentation` | Mixin applied to this elment | `{}`
   * `--arc-font-headline` | Theme mixin, Applied to h1 element (title) | `{}`
   * `--arc-font-code1` | Theme mixin, applied to the URL area | `{}`
   * `--api-endpoint-documentation-url-font-size` | Font size of endpoin URL | `16px`
   * `--api-endpoint-documentation-url-background-color` | Background color of the URL section | `#424242`
   * `--api-endpoint-documentation-url-font-color` | Font color of the URL area | `#fff`
   */
  class ApiEndpointDocumentation extends Polymer.Element {

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

    /**
     * Generated AMF json/ld model form the API spec.
     * The element assumes the object of the first array item to be a
     * type of `"http://raml.org/vocabularies/document#Document`
     * on AMF vocabulary.
     *
     * It is only usefult for the element to resolve references.
     */
    amfModel: object|any[]|null;

    /**
     * Method's endpoint definition as a
     * `http://raml.org/vocabularies/http#endpoint` of AMF model.
     */
    endpoint: object|null|undefined;

    /**
     * A property to set to override AMF's model base URI information.
     * When this property is set, the `endpointUri` property is recalculated.
     */
    baseUri: string|null|undefined;

    /**
     * Endpoint name.
     * It should be either a "displayName" or endpoint's relative
     * path.
     */
    readonly endpointName: string|null|undefined;

    /**
     * Endpoint URI to display in main URL field.
     * This value is computed when `amfModel`, `endpoint` or `baseUri` change.
     */
    readonly endpointUri: string|null|undefined;

    /**
     * Computed value of method description from `method` property.
     */
    readonly description: string|null|undefined;

    /**
     * Computed value from current `method`. True if the model contains
     * custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;

    /**
     * Computed value of the `http://raml.org/vocabularies/http#server`
     * from `amfModel`
     */
    readonly server: object|null|undefined;

    /**
     * API base URI parameters defined in AMF api model
     */
    readonly serverVariables: any[]|null|undefined;

    /**
     * Endpoint's path parameters.
     */
    readonly endpointVariables: any[]|null|undefined;

    /**
     * Computed value if server and endpoint definition of API model has
     * defined any variables.
     */
    readonly hasPathParameters: boolean|null|undefined;

    /**
     * Computed value of AMF security definition from `method`
     * property.
     */
    readonly security: object|null|undefined;

    /**
     * Computed value, true if `security` has values.
     */
    readonly hasSecurity: boolean|null|undefined;

    /**
     * If set it will renders the view in the narrow layout.
     */
    narrow: boolean|null|undefined;

    /**
     * List of traits and resource types, if any.
     */
    readonly extendsTypes: Array<object|null>|null;

    /**
     * Computed value of a parent type.
     * In RAML it is resource type that can be applied to a resource.
     */
    readonly parentType: object|null|undefined;

    /**
     * Computed value, true if `parentType` has a value.
     */
    readonly hasParentType: boolean|null|undefined;

    /**
     * Computed value for parent type name.
     */
    readonly parentTypeName: string|null|undefined;

    /**
     * List of traits appied to this endpoint
     */
    readonly traits: Array<object|null>|null;

    /**
     * Computed value, true if the endpoint has traits.
     */
    readonly hasTraits: boolean|null|undefined;

    /**
     * True if the endpoint is extended by either traits or resource type.
     */
    readonly hasExtension: boolean|null|undefined;

    /**
     * Checks if property item has a type.
     *
     * @param model Model item.
     * @param type A type to lookup
     */
    _hasType(model: object|null, type: String|null): Boolean|null;

    /**
     * Gets a signle scalar value from a model.
     *
     * @param model Amf model to extract the value from.
     * @param key Model key to search for the value
     * @returns Value for key
     */
    _getValue(model: object|null, key: String|null): any|null;

    /**
     * Computes method's endpoint name.
     * It looks for `http://schema.org/name` in the endpoint definition and
     * if not found it uses path as name.
     *
     * @param endpoint Endpoint model.
     * @returns Endpoint name.
     */
    _computeEndpointName(endpoint: object|null): String|null;

    /**
     * Computes endpoint's URI based on `amfModel` and `endpoint` models.
     *
     * @param server Server model of AMF API.
     * @param endpoint Endpoint model
     * @param baseUri Current value of `baseUri` property
     * @returns Endpoint's URI
     */
    _computeEndpointUri(server: object|null, endpoint: object|null, baseUri: String|null): String|null;

    /**
     * Computes base URI value from either `baseUri`, `iron-meta` with
     * `ApiBaseUri` key or `amfModel` value (in this order).
     *
     * @param baseUri Value of `baseUri` property
     * @param server AMF API model for Server.
     * @returns Base uri value. Can be empty string.
     */
    _getBaseUri(baseUri: String|null, server: object|null): String|null;

    /**
     * Computes base URI from AMF model.
     *
     * @param server AMF API model for Server.
     * @returns Base uri value if exists.
     */
    _getAmfBaseUri(server: object|null): String|null|undefined;

    /**
     * Computes value for `server` property that is later used with other computations.
     *
     * @param model AMF model for an API
     * @returns The server model
     */
    _computeServer(model: any[]|object|null): object|null;

    /**
     * Computes value of `description` property.
     *
     * @param shape Shape of AMF model.
     * @returns Description if defined.
     */
    _computeDescription(shape: object|null): String|null|undefined;

    /**
     * Computes value for `hasCustomProperties` property.
     *
     * @param method AMF `supportedOperation` model
     */
    _computeHasCustomProperties(method: object|null): Boolean|null;

    /**
     * Computes value for `hasPathParameters` property
     *
     * @param sVars Current value of `serverVariables` property
     * @param eVars Current value of `endpointVariables` property
     */
    _computeHasPathParameters(sVars: any[]|null, eVars: any[]|null): Boolean|null;

    /**
     * Computes value for `serverVariables` property.
     *
     * @param server AMF API model for Server.
     * @returns Variables if defined.
     */
    _computeServerVariables(server: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `endpointVariables` property.
     *
     * @param endpoint Endpoint model
     * @returns Parameters if defined.
     */
    _computeEndpointVariables(endpoint: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `security` property
     *
     * @param shape AMF shape object
     */
    _computeSecurity(shape: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasSecurity` property.
     *
     * @param security Current value of `security` property
     */
    _computeHasSecurity(security: Array<object|null>|null): Boolean|null;

    /**
     * Computes `ectendsTypes`
     *
     * @param shape AMF shape to get `#extends` model
     */
    _computeExtendsTypes(shape: object|null): Array<object|null>|null|undefined;

    /**
     * Computes parent type as RAML's resource type.
     *
     * @param types Current value of `extendsTypes`
     */
    _computeParentType(types: Array<object|null>|null): object|null|undefined;

    /**
     * Computes value for `hasParentType` property
     *
     * @param type Parent resource type.
     */
    _computeHasParentType(type: object|null): Boolean|null;

    /**
     * Computes vaolue for `parentTypeName`
     *
     * @param type Parent type shape
     */
    _computeParentTypeName(type: object|null): String|null|undefined;

    /**
     * Computes value for `traits` property
     *
     * @param types Current value of `extendsTypes`
     */
    _computeTraits(types: Array<object|null>|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasTraits` property.
     *
     * @param traits Current value of `traits` property
     */
    _computeHasTraits(traits: Array<object|null>|null): Boolean|null;

    /**
     * Computes name of a trait.
     *
     * @param trait AMF trait definition
     * @returns Trait name if defined.
     */
    _computeTraitName(trait: object|null): String|null|undefined;

    /**
     * Computes value for `hasExtension` property
     */
    _computeHasExtension(hasTraits: Boolean|null, hasParentType: Boolean|null): Boolean|null;
  }
}

interface HTMLElementTagNameMap {
  "api-endpoint-documentation": ApiElements.ApiEndpointDocumentation;
}
