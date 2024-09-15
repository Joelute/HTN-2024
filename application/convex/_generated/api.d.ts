/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as mutations_addCommunication from "../mutations/addCommunication.js";
import type * as mutations_addUser from "../mutations/addUser.js";
import type * as mutations_deleteCommunication from "../mutations/deleteCommunication.js";
import type * as mutations_deleteUser from "../mutations/deleteUser.js";
import type * as queries_getAllUsers from "../queries/getAllUsers.js";
import type * as queries_getUserById from "../queries/getUserById.js";
import type * as queries_getUserCommunications from "../queries/getUserCommunications.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "mutations/addCommunication": typeof mutations_addCommunication;
  "mutations/addUser": typeof mutations_addUser;
  "mutations/deleteCommunication": typeof mutations_deleteCommunication;
  "mutations/deleteUser": typeof mutations_deleteUser;
  "queries/getAllUsers": typeof queries_getAllUsers;
  "queries/getUserById": typeof queries_getUserById;
  "queries/getUserCommunications": typeof queries_getUserCommunications;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
