
/**
 * Client
**/

import * as runtime from './runtime';

export import DMMF = runtime.DMMF

/**
 * Prisma Errors
 */
export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
export import PrismaClientValidationError = runtime.PrismaClientValidationError

/**
 * Re-export of sql-template-tag
 */
export import sql = runtime.sqltag
export import empty = runtime.empty
export import join = runtime.join
export import raw = runtime.raw
export import Sql = runtime.Sql

/**
 * Decimal.js
 */
export import Decimal = runtime.Decimal

/**
 * Prisma Client JS version: 2.12.1
 * Query Engine version: cf0680a1bfe8d5e743dc659cc7f08009f9587d58
 */
export type PrismaVersion = {
  client: string
}

export const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export type InputJsonObject = {[Key in string]?: JsonValue}
 
export interface InputJsonArray extends Array<JsonValue> {}
 
export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
 type SelectAndInclude = {
  select: any
  include: any
}
type HasSelect = {
  select: any
}
type HasInclude = {
  include: any
}
type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;





/**
 * Model User
 */

export type User = {
  id: number
  name: string | null
  email: string | null
  isAdmin: boolean | null
  password: string | null
}

/**
 * Model Post
 */

export type Post = {
  id: number
  title: string | null
  state: string | null
  image: Prisma.JsonValue | null
  content: string | null
  summary: string | null
  publishedAt_utc: Date | null
  publishedAt_offset: string | null
  slug: string | null
  updatedAt_utc: Date | null
  updatedAt_offset: string | null
  createdAt_utc: Date | null
  createdAt_offset: string | null
  authorId: number | null
}

/**
 * Model Comment
 */

export type Comment = {
  id: number
  body: string | null
  posted_utc: Date | null
  posted_offset: string | null
  originalPostId: number | null
  authorId: number | null
}

/**
 * Model PostCategory
 */

export type PostCategory = {
  id: number
  name: string | null
  slug: string | null
}

/**
 * Model Donut
 */

export type Donut = {
  id: number
  title: string | null
  state: string | null
  publishedAt_utc: Date | null
  publishedAt_offset: string | null
  image: Prisma.JsonValue | null
  updatedAt_utc: Date | null
  updatedAt_offset: string | null
  createdAt_utc: Date | null
  createdAt_offset: string | null
  spotifyPlaylistId: number | null
}

/**
 * Model SpotifyPlaylist
 */

export type SpotifyPlaylist = {
  id: number
  title: string | null
  uri: string | null
  uid: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate;

  /**
   * `prisma.postCategory`: Exposes CRUD operations for the **PostCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCategories
    * const postCategories = await prisma.postCategory.findMany()
    * ```
    */
  get postCategory(): Prisma.PostCategoryDelegate;

  /**
   * `prisma.donut`: Exposes CRUD operations for the **Donut** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donuts
    * const donuts = await prisma.donut.findMany()
    * ```
    */
  get donut(): Prisma.DonutDelegate;

  /**
   * `prisma.spotifyPlaylist`: Exposes CRUD operations for the **SpotifyPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotifyPlaylists
    * const spotifyPlaylists = await prisma.spotifyPlaylist.findMany()
    * ```
    */
  get spotifyPlaylist(): Prisma.SpotifyPlaylistDelegate;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.12.1
   * Query Engine version: cf0680a1bfe8d5e743dc659cc7f08009f9587d58
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Comment: 'Comment',
    PostCategory: 'PostCategory',
    Donut: 'Donut',
    SpotifyPlaylist: 'SpotifyPlaylist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgresql?: Datasource
  }

  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: string
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }


  /**
   * Model User
   */


  export type AggregateUser = {
    count: number
    avg: UserAvgAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number
  }

  export type UserSumAggregateOutputType = {
    id: number
  }

  export type UserMinAggregateOutputType = {
    id: number
  }

  export type UserMaxAggregateOutputType = {
    id: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
  }

  export type AggregateUserArgs = {
    where?: UserWhereInput
    orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserDistinctFieldEnum>
    count?: true
    avg?: UserAvgAggregateInputType
    sum?: UserSumAggregateInputType
    min?: UserMinAggregateInputType
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends AggregateUserArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetUserAggregateScalarType<T[P]>
  }

  export type GetUserAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof UserAvgAggregateOutputType ? UserAvgAggregateOutputType[P] : never
  }
    
    

  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    isAdmin?: boolean
    password?: boolean
    Post?: boolean | FindManyPostArgs
    Comment?: boolean | FindManyCommentArgs
  }

  export type UserInclude = {
    Post?: boolean | FindManyPostArgs
    Comment?: boolean | FindManyCommentArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | FindManyUserArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Post'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'Post'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  export interface UserDelegate {
    /**
     * Find zero or one User that matches the filter.
     * @param {FindUniqueUserArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueUserArgs>(
      args: Subset<T, FindUniqueUserArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
    /**
     * Find the first User that matches the filter.
     * @param {FindFirstUserArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstUserArgs>(
      args?: Subset<T, FindFirstUserArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
    /**
     * Find zero or more Users that matches the filter.
     * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManyUserArgs>(
      args?: Subset<T, FindManyUserArgs>
    ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: Subset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: Subset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: Subset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args: Subset<T, UserDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Users.
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: Subset<T, UserUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: Subset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
    /**
     * Find zero or one User that matches the filter.
     * @param {FindUniqueUserArgs} args - Arguments to find a User
     * @deprecated This will be deprecated please use prisma.user.findUnique
     * @example
     * // Get one User
     * const user = await prisma.user.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueUserArgs>(
      args: Subset<T, FindUniqueUserArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyUserArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateUserArgs>(args: Subset<T, AggregateUserArgs>): Promise<GetUserAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Post<T extends FindManyPostArgs = {}>(args?: Subset<T, FindManyPostArgs>): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>;

    Comment<T extends FindManyCommentArgs = {}>(args?: Subset<T, FindManyCommentArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type FindUniqueUserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type FindFirstUserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserDistinctFieldEnum>
  }


  /**
   * User findMany
   */
  export type FindManyUserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * Determine the order of the Users to fetch.
    **/
    orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
    /**
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * The number of Users to fetch. If negative number, it will take Users before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserDistinctFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * The data needed to create a User.
    **/
    data: UserCreateInput
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * The data needed to update a User.
    **/
    data: UserUpdateInput
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: UserCreateInput
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: UserUpdateInput
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter which User to delete.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    count: number
    avg: PostAvgAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number
    authorId: number | null
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AggregatePostArgs = {
    where?: PostWhereInput
    orderBy?: XOR<Enumerable<PostOrderByInput>, PostOrderByInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostDistinctFieldEnum>
    count?: true
    avg?: PostAvgAggregateInputType
    sum?: PostSumAggregateInputType
    min?: PostMinAggregateInputType
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends AggregatePostArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetPostAggregateScalarType<T[P]>
  }

  export type GetPostAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof PostAvgAggregateOutputType ? PostAvgAggregateOutputType[P] : never
  }
    
    

  export type PostSelect = {
    id?: boolean
    title?: boolean
    state?: boolean
    image?: boolean
    content?: boolean
    summary?: boolean
    publishedAt_utc?: boolean
    publishedAt_offset?: boolean
    slug?: boolean
    updatedAt_utc?: boolean
    updatedAt_offset?: boolean
    createdAt_utc?: boolean
    createdAt_offset?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    categories?: boolean | FindManyPostCategoryArgs
    Comment?: boolean | FindManyCommentArgs
  }

  export type PostInclude = {
    author?: boolean | UserArgs
    categories?: boolean | FindManyPostCategoryArgs
    Comment?: boolean | FindManyCommentArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | FindManyPostArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'categories'
        ? Array < PostCategoryGetPayload<S['include'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'categories'
        ? Array < PostCategoryGetPayload<S['select'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['select'][P]>>  : never
  } 
    : Post
  : Post


  export interface PostDelegate {
    /**
     * Find zero or one Post that matches the filter.
     * @param {FindUniquePostArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniquePostArgs>(
      args: Subset<T, FindUniquePostArgs>
    ): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>
    /**
     * Find the first Post that matches the filter.
     * @param {FindFirstPostArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstPostArgs>(
      args?: Subset<T, FindFirstPostArgs>
    ): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>
    /**
     * Find zero or more Posts that matches the filter.
     * @param {FindManyPostArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManyPostArgs>(
      args?: Subset<T, FindManyPostArgs>
    ): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>
    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: Subset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: Subset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: Subset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args: Subset<T, PostDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Posts.
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: Subset<T, PostUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: Subset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
    /**
     * Find zero or one Post that matches the filter.
     * @param {FindUniquePostArgs} args - Arguments to find a Post
     * @deprecated This will be deprecated please use prisma.post.findUnique
     * @example
     * // Get one Post
     * const post = await prisma.post.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniquePostArgs>(
      args: Subset<T, FindUniquePostArgs>
    ): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyPostArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregatePostArgs>(args: Subset<T, AggregatePostArgs>): Promise<GetPostAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    categories<T extends FindManyPostCategoryArgs = {}>(args?: Subset<T, FindManyPostCategoryArgs>): CheckSelect<T, Promise<Array<PostCategory>>, Promise<Array<PostCategoryGetPayload<T>>>>;

    Comment<T extends FindManyCommentArgs = {}>(args?: Subset<T, FindManyCommentArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type FindUniquePostArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * Filter, which Post to fetch.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type FindFirstPostArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * Filter, which Post to fetch.
    **/
    where?: PostWhereInput
    orderBy?: XOR<Enumerable<PostOrderByInput>, PostOrderByInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostDistinctFieldEnum>
  }


  /**
   * Post findMany
   */
  export type FindManyPostArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * Filter, which Posts to fetch.
    **/
    where?: PostWhereInput
    /**
     * Determine the order of the Posts to fetch.
    **/
    orderBy?: XOR<Enumerable<PostOrderByInput>, PostOrderByInput>
    /**
     * Sets the position for listing Posts.
    **/
    cursor?: PostWhereUniqueInput
    /**
     * The number of Posts to fetch. If negative number, it will take Posts before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Posts.
    **/
    skip?: number
    distinct?: Enumerable<PostDistinctFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * The data needed to create a Post.
    **/
    data: PostCreateInput
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * The data needed to update a Post.
    **/
    data: PostUpdateInput
    /**
     * Choose, which Post to update.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: PostUpdateManyMutationInput
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * The filter to search for the Post to update in case it exists.
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
    **/
    create: PostCreateInput
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
    **/
    update: PostUpdateInput
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
    /**
     * Filter which Post to delete.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: XOR<PostSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostInclude, null>
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    count: number
    avg: CommentAvgAggregateOutputType | null
    sum: CommentSumAggregateOutputType | null
    min: CommentMinAggregateOutputType | null
    max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number
    originalPostId: number | null
    authorId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number
    originalPostId: number | null
    authorId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number
    originalPostId: number | null
    authorId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number
    originalPostId: number | null
    authorId: number | null
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    originalPostId?: true
    authorId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    originalPostId?: true
    authorId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    originalPostId?: true
    authorId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    originalPostId?: true
    authorId?: true
  }

  export type AggregateCommentArgs = {
    where?: CommentWhereInput
    orderBy?: XOR<Enumerable<CommentOrderByInput>, CommentOrderByInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentDistinctFieldEnum>
    count?: true
    avg?: CommentAvgAggregateInputType
    sum?: CommentSumAggregateInputType
    min?: CommentMinAggregateInputType
    max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends AggregateCommentArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetCommentAggregateScalarType<T[P]>
  }

  export type GetCommentAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof CommentAvgAggregateOutputType ? CommentAvgAggregateOutputType[P] : never
  }
    
    

  export type CommentSelect = {
    id?: boolean
    body?: boolean
    posted_utc?: boolean
    posted_offset?: boolean
    originalPost?: boolean | PostArgs
    originalPostId?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
  }

  export type CommentInclude = {
    originalPost?: boolean | PostArgs
    author?: boolean | UserArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | FindManyCommentArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'originalPost'
        ? PostGetPayload<S['include'][P]> | null :
        P extends 'author'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'originalPost'
        ? PostGetPayload<S['select'][P]> | null :
        P extends 'author'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : Comment
  : Comment


  export interface CommentDelegate {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {FindUniqueCommentArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueCommentArgs>(
      args: Subset<T, FindUniqueCommentArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment | null>, Prisma__CommentClient<CommentGetPayload<T> | null>>
    /**
     * Find the first Comment that matches the filter.
     * @param {FindFirstCommentArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstCommentArgs>(
      args?: Subset<T, FindFirstCommentArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment | null>, Prisma__CommentClient<CommentGetPayload<T> | null>>
    /**
     * Find zero or more Comments that matches the filter.
     * @param {FindManyCommentArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManyCommentArgs>(
      args?: Subset<T, FindManyCommentArgs>
    ): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>
    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: Subset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>
    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: Subset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>
    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: Subset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>
    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args: Subset<T, CommentDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Comments.
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: Subset<T, CommentUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: Subset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>
    /**
     * Find zero or one Comment that matches the filter.
     * @param {FindUniqueCommentArgs} args - Arguments to find a Comment
     * @deprecated This will be deprecated please use prisma.comment.findUnique
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueCommentArgs>(
      args: Subset<T, FindUniqueCommentArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment | null>, Prisma__CommentClient<CommentGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyCommentArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateCommentArgs>(args: Subset<T, AggregateCommentArgs>): Promise<GetCommentAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    originalPost<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>;

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type FindUniqueCommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * Filter, which Comment to fetch.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type FindFirstCommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * Filter, which Comment to fetch.
    **/
    where?: CommentWhereInput
    orderBy?: XOR<Enumerable<CommentOrderByInput>, CommentOrderByInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentDistinctFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type FindManyCommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * Filter, which Comments to fetch.
    **/
    where?: CommentWhereInput
    /**
     * Determine the order of the Comments to fetch.
    **/
    orderBy?: XOR<Enumerable<CommentOrderByInput>, CommentOrderByInput>
    /**
     * Sets the position for listing Comments.
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * The number of Comments to fetch. If negative number, it will take Comments before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Comments.
    **/
    skip?: number
    distinct?: Enumerable<CommentDistinctFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * The data needed to create a Comment.
    **/
    data: CommentCreateInput
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * The data needed to update a Comment.
    **/
    data: CommentUpdateInput
    /**
     * Choose, which Comment to update.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: CommentUpdateManyMutationInput
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * The filter to search for the Comment to update in case it exists.
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
    **/
    create: CommentCreateInput
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
    **/
    update: CommentUpdateInput
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
    /**
     * Filter which Comment to delete.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: XOR<CommentSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CommentInclude, null>
  }



  /**
   * Model PostCategory
   */


  export type AggregatePostCategory = {
    count: number
    avg: PostCategoryAvgAggregateOutputType | null
    sum: PostCategorySumAggregateOutputType | null
    min: PostCategoryMinAggregateOutputType | null
    max: PostCategoryMaxAggregateOutputType | null
  }

  export type PostCategoryAvgAggregateOutputType = {
    id: number
  }

  export type PostCategorySumAggregateOutputType = {
    id: number
  }

  export type PostCategoryMinAggregateOutputType = {
    id: number
  }

  export type PostCategoryMaxAggregateOutputType = {
    id: number
  }


  export type PostCategoryAvgAggregateInputType = {
    id?: true
  }

  export type PostCategorySumAggregateInputType = {
    id?: true
  }

  export type PostCategoryMinAggregateInputType = {
    id?: true
  }

  export type PostCategoryMaxAggregateInputType = {
    id?: true
  }

  export type AggregatePostCategoryArgs = {
    where?: PostCategoryWhereInput
    orderBy?: XOR<Enumerable<PostCategoryOrderByInput>, PostCategoryOrderByInput>
    cursor?: PostCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostCategoryDistinctFieldEnum>
    count?: true
    avg?: PostCategoryAvgAggregateInputType
    sum?: PostCategorySumAggregateInputType
    min?: PostCategoryMinAggregateInputType
    max?: PostCategoryMaxAggregateInputType
  }

  export type GetPostCategoryAggregateType<T extends AggregatePostCategoryArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetPostCategoryAggregateScalarType<T[P]>
  }

  export type GetPostCategoryAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof PostCategoryAvgAggregateOutputType ? PostCategoryAvgAggregateOutputType[P] : never
  }
    
    

  export type PostCategorySelect = {
    id?: boolean
    name?: boolean
    slug?: boolean
    from_categories?: boolean | FindManyPostArgs
  }

  export type PostCategoryInclude = {
    from_categories?: boolean | FindManyPostArgs
  }

  export type PostCategoryGetPayload<
    S extends boolean | null | undefined | PostCategoryArgs,
    U = keyof S
      > = S extends true
        ? PostCategory
    : S extends undefined
    ? never
    : S extends PostCategoryArgs | FindManyPostCategoryArgs
    ?'include' extends U
    ? PostCategory  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'from_categories'
        ? Array < PostGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostCategory ?PostCategory [P]
  : 
          P extends 'from_categories'
        ? Array < PostGetPayload<S['select'][P]>>  : never
  } 
    : PostCategory
  : PostCategory


  export interface PostCategoryDelegate {
    /**
     * Find zero or one PostCategory that matches the filter.
     * @param {FindUniquePostCategoryArgs} args - Arguments to find a PostCategory
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniquePostCategoryArgs>(
      args: Subset<T, FindUniquePostCategoryArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory | null>, Prisma__PostCategoryClient<PostCategoryGetPayload<T> | null>>
    /**
     * Find the first PostCategory that matches the filter.
     * @param {FindFirstPostCategoryArgs} args - Arguments to find a PostCategory
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstPostCategoryArgs>(
      args?: Subset<T, FindFirstPostCategoryArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory | null>, Prisma__PostCategoryClient<PostCategoryGetPayload<T> | null>>
    /**
     * Find zero or more PostCategories that matches the filter.
     * @param {FindManyPostCategoryArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCategories
     * const postCategories = await prisma.postCategory.findMany()
     * 
     * // Get first 10 PostCategories
     * const postCategories = await prisma.postCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCategoryWithIdOnly = await prisma.postCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManyPostCategoryArgs>(
      args?: Subset<T, FindManyPostCategoryArgs>
    ): CheckSelect<T, Promise<Array<PostCategory>>, Promise<Array<PostCategoryGetPayload<T>>>>
    /**
     * Create a PostCategory.
     * @param {PostCategoryCreateArgs} args - Arguments to create a PostCategory.
     * @example
     * // Create one PostCategory
     * const PostCategory = await prisma.postCategory.create({
     *   data: {
     *     // ... data to create a PostCategory
     *   }
     * })
     * 
    **/
    create<T extends PostCategoryCreateArgs>(
      args: Subset<T, PostCategoryCreateArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory>, Prisma__PostCategoryClient<PostCategoryGetPayload<T>>>
    /**
     * Delete a PostCategory.
     * @param {PostCategoryDeleteArgs} args - Arguments to delete one PostCategory.
     * @example
     * // Delete one PostCategory
     * const PostCategory = await prisma.postCategory.delete({
     *   where: {
     *     // ... filter to delete one PostCategory
     *   }
     * })
     * 
    **/
    delete<T extends PostCategoryDeleteArgs>(
      args: Subset<T, PostCategoryDeleteArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory>, Prisma__PostCategoryClient<PostCategoryGetPayload<T>>>
    /**
     * Update one PostCategory.
     * @param {PostCategoryUpdateArgs} args - Arguments to update one PostCategory.
     * @example
     * // Update one PostCategory
     * const postCategory = await prisma.postCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostCategoryUpdateArgs>(
      args: Subset<T, PostCategoryUpdateArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory>, Prisma__PostCategoryClient<PostCategoryGetPayload<T>>>
    /**
     * Delete zero or more PostCategories.
     * @param {PostCategoryDeleteManyArgs} args - Arguments to filter PostCategories to delete.
     * @example
     * // Delete a few PostCategories
     * const { count } = await prisma.postCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostCategoryDeleteManyArgs>(
      args: Subset<T, PostCategoryDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more PostCategories.
     * @param {PostCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCategories
     * const postCategory = await prisma.postCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostCategoryUpdateManyArgs>(
      args: Subset<T, PostCategoryUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one PostCategory.
     * @param {PostCategoryUpsertArgs} args - Arguments to update or create a PostCategory.
     * @example
     * // Update or create a PostCategory
     * const postCategory = await prisma.postCategory.upsert({
     *   create: {
     *     // ... data to create a PostCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCategory we want to update
     *   }
     * })
    **/
    upsert<T extends PostCategoryUpsertArgs>(
      args: Subset<T, PostCategoryUpsertArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory>, Prisma__PostCategoryClient<PostCategoryGetPayload<T>>>
    /**
     * Find zero or one PostCategory that matches the filter.
     * @param {FindUniquePostCategoryArgs} args - Arguments to find a PostCategory
     * @deprecated This will be deprecated please use prisma.postCategory.findUnique
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniquePostCategoryArgs>(
      args: Subset<T, FindUniquePostCategoryArgs>
    ): CheckSelect<T, Prisma__PostCategoryClient<PostCategory | null>, Prisma__PostCategoryClient<PostCategoryGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyPostCategoryArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregatePostCategoryArgs>(args: Subset<T, AggregatePostCategoryArgs>): Promise<GetPostCategoryAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostCategoryClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    from_categories<T extends FindManyPostArgs = {}>(args?: Subset<T, FindManyPostArgs>): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostCategory findUnique
   */
  export type FindUniquePostCategoryArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * Filter, which PostCategory to fetch.
    **/
    where: PostCategoryWhereUniqueInput
  }


  /**
   * PostCategory findFirst
   */
  export type FindFirstPostCategoryArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * Filter, which PostCategory to fetch.
    **/
    where?: PostCategoryWhereInput
    orderBy?: XOR<Enumerable<PostCategoryOrderByInput>, PostCategoryOrderByInput>
    cursor?: PostCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostCategoryDistinctFieldEnum>
  }


  /**
   * PostCategory findMany
   */
  export type FindManyPostCategoryArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * Filter, which PostCategories to fetch.
    **/
    where?: PostCategoryWhereInput
    /**
     * Determine the order of the PostCategories to fetch.
    **/
    orderBy?: XOR<Enumerable<PostCategoryOrderByInput>, PostCategoryOrderByInput>
    /**
     * Sets the position for listing PostCategories.
    **/
    cursor?: PostCategoryWhereUniqueInput
    /**
     * The number of PostCategories to fetch. If negative number, it will take PostCategories before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` PostCategories.
    **/
    skip?: number
    distinct?: Enumerable<PostCategoryDistinctFieldEnum>
  }


  /**
   * PostCategory create
   */
  export type PostCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * The data needed to create a PostCategory.
    **/
    data: PostCategoryCreateInput
  }


  /**
   * PostCategory update
   */
  export type PostCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * The data needed to update a PostCategory.
    **/
    data: PostCategoryUpdateInput
    /**
     * Choose, which PostCategory to update.
    **/
    where: PostCategoryWhereUniqueInput
  }


  /**
   * PostCategory updateMany
   */
  export type PostCategoryUpdateManyArgs = {
    data: PostCategoryUpdateManyMutationInput
    where?: PostCategoryWhereInput
  }


  /**
   * PostCategory upsert
   */
  export type PostCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * The filter to search for the PostCategory to update in case it exists.
    **/
    where: PostCategoryWhereUniqueInput
    /**
     * In case the PostCategory found by the `where` argument doesn't exist, create a new PostCategory with this data.
    **/
    create: PostCategoryCreateInput
    /**
     * In case the PostCategory was found with the provided `where` argument, update it with this data.
    **/
    update: PostCategoryUpdateInput
  }


  /**
   * PostCategory delete
   */
  export type PostCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
    /**
     * Filter which PostCategory to delete.
    **/
    where: PostCategoryWhereUniqueInput
  }


  /**
   * PostCategory deleteMany
   */
  export type PostCategoryDeleteManyArgs = {
    where?: PostCategoryWhereInput
  }


  /**
   * PostCategory without action
   */
  export type PostCategoryArgs = {
    /**
     * Select specific fields to fetch from the PostCategory
    **/
    select?: XOR<PostCategorySelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<PostCategoryInclude, null>
  }



  /**
   * Model Donut
   */


  export type AggregateDonut = {
    count: number
    avg: DonutAvgAggregateOutputType | null
    sum: DonutSumAggregateOutputType | null
    min: DonutMinAggregateOutputType | null
    max: DonutMaxAggregateOutputType | null
  }

  export type DonutAvgAggregateOutputType = {
    id: number
    spotifyPlaylistId: number | null
  }

  export type DonutSumAggregateOutputType = {
    id: number
    spotifyPlaylistId: number | null
  }

  export type DonutMinAggregateOutputType = {
    id: number
    spotifyPlaylistId: number | null
  }

  export type DonutMaxAggregateOutputType = {
    id: number
    spotifyPlaylistId: number | null
  }


  export type DonutAvgAggregateInputType = {
    id?: true
    spotifyPlaylistId?: true
  }

  export type DonutSumAggregateInputType = {
    id?: true
    spotifyPlaylistId?: true
  }

  export type DonutMinAggregateInputType = {
    id?: true
    spotifyPlaylistId?: true
  }

  export type DonutMaxAggregateInputType = {
    id?: true
    spotifyPlaylistId?: true
  }

  export type AggregateDonutArgs = {
    where?: DonutWhereInput
    orderBy?: XOR<Enumerable<DonutOrderByInput>, DonutOrderByInput>
    cursor?: DonutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DonutDistinctFieldEnum>
    count?: true
    avg?: DonutAvgAggregateInputType
    sum?: DonutSumAggregateInputType
    min?: DonutMinAggregateInputType
    max?: DonutMaxAggregateInputType
  }

  export type GetDonutAggregateType<T extends AggregateDonutArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetDonutAggregateScalarType<T[P]>
  }

  export type GetDonutAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof DonutAvgAggregateOutputType ? DonutAvgAggregateOutputType[P] : never
  }
    
    

  export type DonutSelect = {
    id?: boolean
    title?: boolean
    state?: boolean
    publishedAt_utc?: boolean
    publishedAt_offset?: boolean
    image?: boolean
    updatedAt_utc?: boolean
    updatedAt_offset?: boolean
    createdAt_utc?: boolean
    createdAt_offset?: boolean
    spotifyPlaylist?: boolean | SpotifyPlaylistArgs
    spotifyPlaylistId?: boolean
  }

  export type DonutInclude = {
    spotifyPlaylist?: boolean | SpotifyPlaylistArgs
  }

  export type DonutGetPayload<
    S extends boolean | null | undefined | DonutArgs,
    U = keyof S
      > = S extends true
        ? Donut
    : S extends undefined
    ? never
    : S extends DonutArgs | FindManyDonutArgs
    ?'include' extends U
    ? Donut  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'spotifyPlaylist'
        ? SpotifyPlaylistGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Donut ?Donut [P]
  : 
          P extends 'spotifyPlaylist'
        ? SpotifyPlaylistGetPayload<S['select'][P]> | null : never
  } 
    : Donut
  : Donut


  export interface DonutDelegate {
    /**
     * Find zero or one Donut that matches the filter.
     * @param {FindUniqueDonutArgs} args - Arguments to find a Donut
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueDonutArgs>(
      args: Subset<T, FindUniqueDonutArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut | null>, Prisma__DonutClient<DonutGetPayload<T> | null>>
    /**
     * Find the first Donut that matches the filter.
     * @param {FindFirstDonutArgs} args - Arguments to find a Donut
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstDonutArgs>(
      args?: Subset<T, FindFirstDonutArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut | null>, Prisma__DonutClient<DonutGetPayload<T> | null>>
    /**
     * Find zero or more Donuts that matches the filter.
     * @param {FindManyDonutArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donuts
     * const donuts = await prisma.donut.findMany()
     * 
     * // Get first 10 Donuts
     * const donuts = await prisma.donut.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donutWithIdOnly = await prisma.donut.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManyDonutArgs>(
      args?: Subset<T, FindManyDonutArgs>
    ): CheckSelect<T, Promise<Array<Donut>>, Promise<Array<DonutGetPayload<T>>>>
    /**
     * Create a Donut.
     * @param {DonutCreateArgs} args - Arguments to create a Donut.
     * @example
     * // Create one Donut
     * const Donut = await prisma.donut.create({
     *   data: {
     *     // ... data to create a Donut
     *   }
     * })
     * 
    **/
    create<T extends DonutCreateArgs>(
      args: Subset<T, DonutCreateArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut>, Prisma__DonutClient<DonutGetPayload<T>>>
    /**
     * Delete a Donut.
     * @param {DonutDeleteArgs} args - Arguments to delete one Donut.
     * @example
     * // Delete one Donut
     * const Donut = await prisma.donut.delete({
     *   where: {
     *     // ... filter to delete one Donut
     *   }
     * })
     * 
    **/
    delete<T extends DonutDeleteArgs>(
      args: Subset<T, DonutDeleteArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut>, Prisma__DonutClient<DonutGetPayload<T>>>
    /**
     * Update one Donut.
     * @param {DonutUpdateArgs} args - Arguments to update one Donut.
     * @example
     * // Update one Donut
     * const donut = await prisma.donut.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DonutUpdateArgs>(
      args: Subset<T, DonutUpdateArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut>, Prisma__DonutClient<DonutGetPayload<T>>>
    /**
     * Delete zero or more Donuts.
     * @param {DonutDeleteManyArgs} args - Arguments to filter Donuts to delete.
     * @example
     * // Delete a few Donuts
     * const { count } = await prisma.donut.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DonutDeleteManyArgs>(
      args: Subset<T, DonutDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Donuts.
     * @param {DonutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donuts
     * const donut = await prisma.donut.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DonutUpdateManyArgs>(
      args: Subset<T, DonutUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one Donut.
     * @param {DonutUpsertArgs} args - Arguments to update or create a Donut.
     * @example
     * // Update or create a Donut
     * const donut = await prisma.donut.upsert({
     *   create: {
     *     // ... data to create a Donut
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donut we want to update
     *   }
     * })
    **/
    upsert<T extends DonutUpsertArgs>(
      args: Subset<T, DonutUpsertArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut>, Prisma__DonutClient<DonutGetPayload<T>>>
    /**
     * Find zero or one Donut that matches the filter.
     * @param {FindUniqueDonutArgs} args - Arguments to find a Donut
     * @deprecated This will be deprecated please use prisma.donut.findUnique
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueDonutArgs>(
      args: Subset<T, FindUniqueDonutArgs>
    ): CheckSelect<T, Prisma__DonutClient<Donut | null>, Prisma__DonutClient<DonutGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyDonutArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateDonutArgs>(args: Subset<T, AggregateDonutArgs>): Promise<GetDonutAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donut.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DonutClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    spotifyPlaylist<T extends SpotifyPlaylistArgs = {}>(args?: Subset<T, SpotifyPlaylistArgs>): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist | null>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Donut findUnique
   */
  export type FindUniqueDonutArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * Filter, which Donut to fetch.
    **/
    where: DonutWhereUniqueInput
  }


  /**
   * Donut findFirst
   */
  export type FindFirstDonutArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * Filter, which Donut to fetch.
    **/
    where?: DonutWhereInput
    orderBy?: XOR<Enumerable<DonutOrderByInput>, DonutOrderByInput>
    cursor?: DonutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DonutDistinctFieldEnum>
  }


  /**
   * Donut findMany
   */
  export type FindManyDonutArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * Filter, which Donuts to fetch.
    **/
    where?: DonutWhereInput
    /**
     * Determine the order of the Donuts to fetch.
    **/
    orderBy?: XOR<Enumerable<DonutOrderByInput>, DonutOrderByInput>
    /**
     * Sets the position for listing Donuts.
    **/
    cursor?: DonutWhereUniqueInput
    /**
     * The number of Donuts to fetch. If negative number, it will take Donuts before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Donuts.
    **/
    skip?: number
    distinct?: Enumerable<DonutDistinctFieldEnum>
  }


  /**
   * Donut create
   */
  export type DonutCreateArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * The data needed to create a Donut.
    **/
    data: DonutCreateInput
  }


  /**
   * Donut update
   */
  export type DonutUpdateArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * The data needed to update a Donut.
    **/
    data: DonutUpdateInput
    /**
     * Choose, which Donut to update.
    **/
    where: DonutWhereUniqueInput
  }


  /**
   * Donut updateMany
   */
  export type DonutUpdateManyArgs = {
    data: DonutUpdateManyMutationInput
    where?: DonutWhereInput
  }


  /**
   * Donut upsert
   */
  export type DonutUpsertArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * The filter to search for the Donut to update in case it exists.
    **/
    where: DonutWhereUniqueInput
    /**
     * In case the Donut found by the `where` argument doesn't exist, create a new Donut with this data.
    **/
    create: DonutCreateInput
    /**
     * In case the Donut was found with the provided `where` argument, update it with this data.
    **/
    update: DonutUpdateInput
  }


  /**
   * Donut delete
   */
  export type DonutDeleteArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
    /**
     * Filter which Donut to delete.
    **/
    where: DonutWhereUniqueInput
  }


  /**
   * Donut deleteMany
   */
  export type DonutDeleteManyArgs = {
    where?: DonutWhereInput
  }


  /**
   * Donut without action
   */
  export type DonutArgs = {
    /**
     * Select specific fields to fetch from the Donut
    **/
    select?: XOR<DonutSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DonutInclude, null>
  }



  /**
   * Model SpotifyPlaylist
   */


  export type AggregateSpotifyPlaylist = {
    count: number
    avg: SpotifyPlaylistAvgAggregateOutputType | null
    sum: SpotifyPlaylistSumAggregateOutputType | null
    min: SpotifyPlaylistMinAggregateOutputType | null
    max: SpotifyPlaylistMaxAggregateOutputType | null
  }

  export type SpotifyPlaylistAvgAggregateOutputType = {
    id: number
  }

  export type SpotifyPlaylistSumAggregateOutputType = {
    id: number
  }

  export type SpotifyPlaylistMinAggregateOutputType = {
    id: number
  }

  export type SpotifyPlaylistMaxAggregateOutputType = {
    id: number
  }


  export type SpotifyPlaylistAvgAggregateInputType = {
    id?: true
  }

  export type SpotifyPlaylistSumAggregateInputType = {
    id?: true
  }

  export type SpotifyPlaylistMinAggregateInputType = {
    id?: true
  }

  export type SpotifyPlaylistMaxAggregateInputType = {
    id?: true
  }

  export type AggregateSpotifyPlaylistArgs = {
    where?: SpotifyPlaylistWhereInput
    orderBy?: XOR<Enumerable<SpotifyPlaylistOrderByInput>, SpotifyPlaylistOrderByInput>
    cursor?: SpotifyPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SpotifyPlaylistDistinctFieldEnum>
    count?: true
    avg?: SpotifyPlaylistAvgAggregateInputType
    sum?: SpotifyPlaylistSumAggregateInputType
    min?: SpotifyPlaylistMinAggregateInputType
    max?: SpotifyPlaylistMaxAggregateInputType
  }

  export type GetSpotifyPlaylistAggregateType<T extends AggregateSpotifyPlaylistArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetSpotifyPlaylistAggregateScalarType<T[P]>
  }

  export type GetSpotifyPlaylistAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof SpotifyPlaylistAvgAggregateOutputType ? SpotifyPlaylistAvgAggregateOutputType[P] : never
  }
    
    

  export type SpotifyPlaylistSelect = {
    id?: boolean
    title?: boolean
    uri?: boolean
    uid?: boolean
    Donut?: boolean | FindManyDonutArgs
  }

  export type SpotifyPlaylistInclude = {
    Donut?: boolean | FindManyDonutArgs
  }

  export type SpotifyPlaylistGetPayload<
    S extends boolean | null | undefined | SpotifyPlaylistArgs,
    U = keyof S
      > = S extends true
        ? SpotifyPlaylist
    : S extends undefined
    ? never
    : S extends SpotifyPlaylistArgs | FindManySpotifyPlaylistArgs
    ?'include' extends U
    ? SpotifyPlaylist  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Donut'
        ? Array < DonutGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SpotifyPlaylist ?SpotifyPlaylist [P]
  : 
          P extends 'Donut'
        ? Array < DonutGetPayload<S['select'][P]>>  : never
  } 
    : SpotifyPlaylist
  : SpotifyPlaylist


  export interface SpotifyPlaylistDelegate {
    /**
     * Find zero or one SpotifyPlaylist that matches the filter.
     * @param {FindUniqueSpotifyPlaylistArgs} args - Arguments to find a SpotifyPlaylist
     * @example
     * // Get one SpotifyPlaylist
     * const spotifyPlaylist = await prisma.spotifyPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueSpotifyPlaylistArgs>(
      args: Subset<T, FindUniqueSpotifyPlaylistArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist | null>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T> | null>>
    /**
     * Find the first SpotifyPlaylist that matches the filter.
     * @param {FindFirstSpotifyPlaylistArgs} args - Arguments to find a SpotifyPlaylist
     * @example
     * // Get one SpotifyPlaylist
     * const spotifyPlaylist = await prisma.spotifyPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstSpotifyPlaylistArgs>(
      args?: Subset<T, FindFirstSpotifyPlaylistArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist | null>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T> | null>>
    /**
     * Find zero or more SpotifyPlaylists that matches the filter.
     * @param {FindManySpotifyPlaylistArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotifyPlaylists
     * const spotifyPlaylists = await prisma.spotifyPlaylist.findMany()
     * 
     * // Get first 10 SpotifyPlaylists
     * const spotifyPlaylists = await prisma.spotifyPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotifyPlaylistWithIdOnly = await prisma.spotifyPlaylist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManySpotifyPlaylistArgs>(
      args?: Subset<T, FindManySpotifyPlaylistArgs>
    ): CheckSelect<T, Promise<Array<SpotifyPlaylist>>, Promise<Array<SpotifyPlaylistGetPayload<T>>>>
    /**
     * Create a SpotifyPlaylist.
     * @param {SpotifyPlaylistCreateArgs} args - Arguments to create a SpotifyPlaylist.
     * @example
     * // Create one SpotifyPlaylist
     * const SpotifyPlaylist = await prisma.spotifyPlaylist.create({
     *   data: {
     *     // ... data to create a SpotifyPlaylist
     *   }
     * })
     * 
    **/
    create<T extends SpotifyPlaylistCreateArgs>(
      args: Subset<T, SpotifyPlaylistCreateArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T>>>
    /**
     * Delete a SpotifyPlaylist.
     * @param {SpotifyPlaylistDeleteArgs} args - Arguments to delete one SpotifyPlaylist.
     * @example
     * // Delete one SpotifyPlaylist
     * const SpotifyPlaylist = await prisma.spotifyPlaylist.delete({
     *   where: {
     *     // ... filter to delete one SpotifyPlaylist
     *   }
     * })
     * 
    **/
    delete<T extends SpotifyPlaylistDeleteArgs>(
      args: Subset<T, SpotifyPlaylistDeleteArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T>>>
    /**
     * Update one SpotifyPlaylist.
     * @param {SpotifyPlaylistUpdateArgs} args - Arguments to update one SpotifyPlaylist.
     * @example
     * // Update one SpotifyPlaylist
     * const spotifyPlaylist = await prisma.spotifyPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpotifyPlaylistUpdateArgs>(
      args: Subset<T, SpotifyPlaylistUpdateArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T>>>
    /**
     * Delete zero or more SpotifyPlaylists.
     * @param {SpotifyPlaylistDeleteManyArgs} args - Arguments to filter SpotifyPlaylists to delete.
     * @example
     * // Delete a few SpotifyPlaylists
     * const { count } = await prisma.spotifyPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpotifyPlaylistDeleteManyArgs>(
      args: Subset<T, SpotifyPlaylistDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more SpotifyPlaylists.
     * @param {SpotifyPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotifyPlaylists
     * const spotifyPlaylist = await prisma.spotifyPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpotifyPlaylistUpdateManyArgs>(
      args: Subset<T, SpotifyPlaylistUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one SpotifyPlaylist.
     * @param {SpotifyPlaylistUpsertArgs} args - Arguments to update or create a SpotifyPlaylist.
     * @example
     * // Update or create a SpotifyPlaylist
     * const spotifyPlaylist = await prisma.spotifyPlaylist.upsert({
     *   create: {
     *     // ... data to create a SpotifyPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotifyPlaylist we want to update
     *   }
     * })
    **/
    upsert<T extends SpotifyPlaylistUpsertArgs>(
      args: Subset<T, SpotifyPlaylistUpsertArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T>>>
    /**
     * Find zero or one SpotifyPlaylist that matches the filter.
     * @param {FindUniqueSpotifyPlaylistArgs} args - Arguments to find a SpotifyPlaylist
     * @deprecated This will be deprecated please use prisma.spotifyPlaylist.findUnique
     * @example
     * // Get one SpotifyPlaylist
     * const spotifyPlaylist = await prisma.spotifyPlaylist.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueSpotifyPlaylistArgs>(
      args: Subset<T, FindUniqueSpotifyPlaylistArgs>
    ): CheckSelect<T, Prisma__SpotifyPlaylistClient<SpotifyPlaylist | null>, Prisma__SpotifyPlaylistClient<SpotifyPlaylistGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManySpotifyPlaylistArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateSpotifyPlaylistArgs>(args: Subset<T, AggregateSpotifyPlaylistArgs>): Promise<GetSpotifyPlaylistAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotifyPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpotifyPlaylistClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Donut<T extends FindManyDonutArgs = {}>(args?: Subset<T, FindManyDonutArgs>): CheckSelect<T, Promise<Array<Donut>>, Promise<Array<DonutGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SpotifyPlaylist findUnique
   */
  export type FindUniqueSpotifyPlaylistArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * Filter, which SpotifyPlaylist to fetch.
    **/
    where: SpotifyPlaylistWhereUniqueInput
  }


  /**
   * SpotifyPlaylist findFirst
   */
  export type FindFirstSpotifyPlaylistArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * Filter, which SpotifyPlaylist to fetch.
    **/
    where?: SpotifyPlaylistWhereInput
    orderBy?: XOR<Enumerable<SpotifyPlaylistOrderByInput>, SpotifyPlaylistOrderByInput>
    cursor?: SpotifyPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SpotifyPlaylistDistinctFieldEnum>
  }


  /**
   * SpotifyPlaylist findMany
   */
  export type FindManySpotifyPlaylistArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * Filter, which SpotifyPlaylists to fetch.
    **/
    where?: SpotifyPlaylistWhereInput
    /**
     * Determine the order of the SpotifyPlaylists to fetch.
    **/
    orderBy?: XOR<Enumerable<SpotifyPlaylistOrderByInput>, SpotifyPlaylistOrderByInput>
    /**
     * Sets the position for listing SpotifyPlaylists.
    **/
    cursor?: SpotifyPlaylistWhereUniqueInput
    /**
     * The number of SpotifyPlaylists to fetch. If negative number, it will take SpotifyPlaylists before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` SpotifyPlaylists.
    **/
    skip?: number
    distinct?: Enumerable<SpotifyPlaylistDistinctFieldEnum>
  }


  /**
   * SpotifyPlaylist create
   */
  export type SpotifyPlaylistCreateArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * The data needed to create a SpotifyPlaylist.
    **/
    data: SpotifyPlaylistCreateInput
  }


  /**
   * SpotifyPlaylist update
   */
  export type SpotifyPlaylistUpdateArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * The data needed to update a SpotifyPlaylist.
    **/
    data: SpotifyPlaylistUpdateInput
    /**
     * Choose, which SpotifyPlaylist to update.
    **/
    where: SpotifyPlaylistWhereUniqueInput
  }


  /**
   * SpotifyPlaylist updateMany
   */
  export type SpotifyPlaylistUpdateManyArgs = {
    data: SpotifyPlaylistUpdateManyMutationInput
    where?: SpotifyPlaylistWhereInput
  }


  /**
   * SpotifyPlaylist upsert
   */
  export type SpotifyPlaylistUpsertArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * The filter to search for the SpotifyPlaylist to update in case it exists.
    **/
    where: SpotifyPlaylistWhereUniqueInput
    /**
     * In case the SpotifyPlaylist found by the `where` argument doesn't exist, create a new SpotifyPlaylist with this data.
    **/
    create: SpotifyPlaylistCreateInput
    /**
     * In case the SpotifyPlaylist was found with the provided `where` argument, update it with this data.
    **/
    update: SpotifyPlaylistUpdateInput
  }


  /**
   * SpotifyPlaylist delete
   */
  export type SpotifyPlaylistDeleteArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
    /**
     * Filter which SpotifyPlaylist to delete.
    **/
    where: SpotifyPlaylistWhereUniqueInput
  }


  /**
   * SpotifyPlaylist deleteMany
   */
  export type SpotifyPlaylistDeleteManyArgs = {
    where?: SpotifyPlaylistWhereInput
  }


  /**
   * SpotifyPlaylist without action
   */
  export type SpotifyPlaylistArgs = {
    /**
     * Select specific fields to fetch from the SpotifyPlaylist
    **/
    select?: XOR<SpotifyPlaylistSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<SpotifyPlaylistInclude, null>
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserDistinctFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    isAdmin: 'isAdmin',
    password: 'password'
  };

  export type UserDistinctFieldEnum = (typeof UserDistinctFieldEnum)[keyof typeof UserDistinctFieldEnum]


  export const PostDistinctFieldEnum: {
    id: 'id',
    title: 'title',
    state: 'state',
    image: 'image',
    content: 'content',
    summary: 'summary',
    publishedAt_utc: 'publishedAt_utc',
    publishedAt_offset: 'publishedAt_offset',
    slug: 'slug',
    updatedAt_utc: 'updatedAt_utc',
    updatedAt_offset: 'updatedAt_offset',
    createdAt_utc: 'createdAt_utc',
    createdAt_offset: 'createdAt_offset',
    authorId: 'authorId'
  };

  export type PostDistinctFieldEnum = (typeof PostDistinctFieldEnum)[keyof typeof PostDistinctFieldEnum]


  export const CommentDistinctFieldEnum: {
    id: 'id',
    body: 'body',
    posted_utc: 'posted_utc',
    posted_offset: 'posted_offset',
    originalPostId: 'originalPostId',
    authorId: 'authorId'
  };

  export type CommentDistinctFieldEnum = (typeof CommentDistinctFieldEnum)[keyof typeof CommentDistinctFieldEnum]


  export const PostCategoryDistinctFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type PostCategoryDistinctFieldEnum = (typeof PostCategoryDistinctFieldEnum)[keyof typeof PostCategoryDistinctFieldEnum]


  export const DonutDistinctFieldEnum: {
    id: 'id',
    title: 'title',
    state: 'state',
    publishedAt_utc: 'publishedAt_utc',
    publishedAt_offset: 'publishedAt_offset',
    image: 'image',
    updatedAt_utc: 'updatedAt_utc',
    updatedAt_offset: 'updatedAt_offset',
    createdAt_utc: 'createdAt_utc',
    createdAt_offset: 'createdAt_offset',
    spotifyPlaylistId: 'spotifyPlaylistId'
  };

  export type DonutDistinctFieldEnum = (typeof DonutDistinctFieldEnum)[keyof typeof DonutDistinctFieldEnum]


  export const SpotifyPlaylistDistinctFieldEnum: {
    id: 'id',
    title: 'title',
    uri: 'uri',
    uid: 'uid'
  };

  export type SpotifyPlaylistDistinctFieldEnum = (typeof SpotifyPlaylistDistinctFieldEnum)[keyof typeof SpotifyPlaylistDistinctFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
    OR?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
    NOT?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
    id?: XOR<IntFilter, number>
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    isAdmin?: BoolNullableFilter | boolean | null
    password?: StringNullableFilter | string | null
    Post?: PostListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type PostWhereInput = {
    AND?: XOR<PostWhereInput, Enumerable<PostWhereInput>>
    OR?: XOR<PostWhereInput, Enumerable<PostWhereInput>>
    NOT?: XOR<PostWhereInput, Enumerable<PostWhereInput>>
    id?: XOR<IntFilter, number>
    title?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    image?: JsonNullableFilter
    content?: StringNullableFilter | string | null
    summary?: StringNullableFilter | string | null
    publishedAt_utc?: DateTimeNullableFilter | Date | string | null
    publishedAt_offset?: StringNullableFilter | string | null
    slug?: StringNullableFilter | string | null
    updatedAt_utc?: DateTimeNullableFilter | Date | string | null
    updatedAt_offset?: StringNullableFilter | string | null
    createdAt_utc?: DateTimeNullableFilter | Date | string | null
    createdAt_offset?: StringNullableFilter | string | null
    author?: UserRelationFilter | UserWhereInput | null
    authorId?: IntNullableFilter | number | null
    categories?: PostCategoryListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type PostOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    state?: SortOrder
    image?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    publishedAt_utc?: SortOrder
    publishedAt_offset?: SortOrder
    slug?: SortOrder
    updatedAt_utc?: SortOrder
    updatedAt_offset?: SortOrder
    createdAt_utc?: SortOrder
    createdAt_offset?: SortOrder
    authorId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type CommentWhereInput = {
    AND?: XOR<CommentWhereInput, Enumerable<CommentWhereInput>>
    OR?: XOR<CommentWhereInput, Enumerable<CommentWhereInput>>
    NOT?: XOR<CommentWhereInput, Enumerable<CommentWhereInput>>
    id?: XOR<IntFilter, number>
    body?: StringNullableFilter | string | null
    posted_utc?: DateTimeNullableFilter | Date | string | null
    posted_offset?: StringNullableFilter | string | null
    originalPost?: PostRelationFilter | PostWhereInput | null
    originalPostId?: IntNullableFilter | number | null
    author?: UserRelationFilter | UserWhereInput | null
    authorId?: IntNullableFilter | number | null
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    body?: SortOrder
    posted_utc?: SortOrder
    posted_offset?: SortOrder
    originalPostId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type PostCategoryWhereInput = {
    AND?: XOR<PostCategoryWhereInput, Enumerable<PostCategoryWhereInput>>
    OR?: XOR<PostCategoryWhereInput, Enumerable<PostCategoryWhereInput>>
    NOT?: XOR<PostCategoryWhereInput, Enumerable<PostCategoryWhereInput>>
    id?: XOR<IntFilter, number>
    name?: StringNullableFilter | string | null
    slug?: StringNullableFilter | string | null
    from_categories?: PostListRelationFilter
  }

  export type PostCategoryOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type PostCategoryWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type DonutWhereInput = {
    AND?: XOR<DonutWhereInput, Enumerable<DonutWhereInput>>
    OR?: XOR<DonutWhereInput, Enumerable<DonutWhereInput>>
    NOT?: XOR<DonutWhereInput, Enumerable<DonutWhereInput>>
    id?: XOR<IntFilter, number>
    title?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    publishedAt_utc?: DateTimeNullableFilter | Date | string | null
    publishedAt_offset?: StringNullableFilter | string | null
    image?: JsonNullableFilter
    updatedAt_utc?: DateTimeNullableFilter | Date | string | null
    updatedAt_offset?: StringNullableFilter | string | null
    createdAt_utc?: DateTimeNullableFilter | Date | string | null
    createdAt_offset?: StringNullableFilter | string | null
    spotifyPlaylist?: SpotifyPlaylistRelationFilter | SpotifyPlaylistWhereInput | null
    spotifyPlaylistId?: IntNullableFilter | number | null
  }

  export type DonutOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    state?: SortOrder
    publishedAt_utc?: SortOrder
    publishedAt_offset?: SortOrder
    image?: SortOrder
    updatedAt_utc?: SortOrder
    updatedAt_offset?: SortOrder
    createdAt_utc?: SortOrder
    createdAt_offset?: SortOrder
    spotifyPlaylistId?: SortOrder
  }

  export type DonutWhereUniqueInput = {
    id?: number
  }

  export type SpotifyPlaylistWhereInput = {
    AND?: XOR<SpotifyPlaylistWhereInput, Enumerable<SpotifyPlaylistWhereInput>>
    OR?: XOR<SpotifyPlaylistWhereInput, Enumerable<SpotifyPlaylistWhereInput>>
    NOT?: XOR<SpotifyPlaylistWhereInput, Enumerable<SpotifyPlaylistWhereInput>>
    id?: XOR<IntFilter, number>
    title?: StringNullableFilter | string | null
    uri?: StringNullableFilter | string | null
    uid?: StringNullableFilter | string | null
    Donut?: DonutListRelationFilter
  }

  export type SpotifyPlaylistOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    uri?: SortOrder
    uid?: SortOrder
  }

  export type SpotifyPlaylistWhereUniqueInput = {
    id?: number
  }

  export type UserCreateInput = {
    name?: XOR<string, null>
    email?: XOR<string, null>
    isAdmin?: XOR<boolean, null>
    password?: XOR<string, null>
    Post?: PostCreateManyWithoutAuthorInput
    Comment?: CommentCreateManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    email?: string | NullableStringFieldUpdateOperationsInput | null
    isAdmin?: boolean | NullableBoolFieldUpdateOperationsInput | null
    password?: string | NullableStringFieldUpdateOperationsInput | null
    Post?: PostUpdateManyWithoutAuthorInput
    Comment?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUpdateManyMutationInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    email?: string | NullableStringFieldUpdateOperationsInput | null
    isAdmin?: boolean | NullableBoolFieldUpdateOperationsInput | null
    password?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type PostCreateInput = {
    title?: XOR<string, null>
    state?: XOR<string, null>
    image?: XOR<InputJsonValue, null>
    content?: XOR<string, null>
    summary?: XOR<string, null>
    publishedAt_utc?: XOR<Date | string, null>
    publishedAt_offset?: XOR<string, null>
    slug?: XOR<string, null>
    updatedAt_utc?: XOR<Date | string, null>
    updatedAt_offset?: XOR<string, null>
    createdAt_utc?: XOR<Date | string, null>
    createdAt_offset?: XOR<string, null>
    author?: UserCreateOneWithoutPostInput
    categories?: PostCategoryCreateManyWithoutFrom_categoriesInput
    Comment?: CommentCreateManyWithoutOriginalPostInput
  }

  export type PostUpdateInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    summary?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    author?: UserUpdateOneWithoutPostInput
    categories?: PostCategoryUpdateManyWithoutFrom_categoriesInput
    Comment?: CommentUpdateManyWithoutOriginalPostInput
  }

  export type PostUpdateManyMutationInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    summary?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type CommentCreateInput = {
    body?: XOR<string, null>
    posted_utc?: XOR<Date | string, null>
    posted_offset?: XOR<string, null>
    originalPost?: PostCreateOneWithoutCommentInput
    author?: UserCreateOneWithoutCommentInput
  }

  export type CommentUpdateInput = {
    body?: string | NullableStringFieldUpdateOperationsInput | null
    posted_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    posted_offset?: string | NullableStringFieldUpdateOperationsInput | null
    originalPost?: PostUpdateOneWithoutCommentInput
    author?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUpdateManyMutationInput = {
    body?: string | NullableStringFieldUpdateOperationsInput | null
    posted_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    posted_offset?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type PostCategoryCreateInput = {
    name?: XOR<string, null>
    slug?: XOR<string, null>
    from_categories?: PostCreateManyWithoutCategoriesInput
  }

  export type PostCategoryUpdateInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
    from_categories?: PostUpdateManyWithoutCategoriesInput
  }

  export type PostCategoryUpdateManyMutationInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type DonutCreateInput = {
    title?: XOR<string, null>
    state?: XOR<string, null>
    publishedAt_utc?: XOR<Date | string, null>
    publishedAt_offset?: XOR<string, null>
    image?: XOR<InputJsonValue, null>
    updatedAt_utc?: XOR<Date | string, null>
    updatedAt_offset?: XOR<string, null>
    createdAt_utc?: XOR<Date | string, null>
    createdAt_offset?: XOR<string, null>
    spotifyPlaylist?: SpotifyPlaylistCreateOneWithoutDonutInput
  }

  export type DonutUpdateInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    spotifyPlaylist?: SpotifyPlaylistUpdateOneWithoutDonutInput
  }

  export type DonutUpdateManyMutationInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type SpotifyPlaylistCreateInput = {
    title?: XOR<string, null>
    uri?: XOR<string, null>
    uid?: XOR<string, null>
    Donut?: DonutCreateManyWithoutSpotifyPlaylistInput
  }

  export type SpotifyPlaylistUpdateInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    uri?: string | NullableStringFieldUpdateOperationsInput | null
    uid?: string | NullableStringFieldUpdateOperationsInput | null
    Donut?: DonutUpdateManyWithoutSpotifyPlaylistInput
  }

  export type SpotifyPlaylistUpdateManyMutationInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    uri?: string | NullableStringFieldUpdateOperationsInput | null
    uid?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: XOR<number, NestedIntFilter>
  }

  export type StringNullableFilter = {
    equals?: XOR<string, null>
    in?: XOR<Enumerable<string>, null>
    notIn?: XOR<Enumerable<string>, null>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: string | NestedStringNullableFilter | null
  }

  export type BoolNullableFilter = {
    equals?: XOR<boolean, null>
    not?: boolean | NestedBoolNullableFilter | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type JsonNullableFilter = {
    equals?: XOR<InputJsonValue, null>
    not?: XOR<InputJsonValue, null>
  }

  export type DateTimeNullableFilter = {
    equals?: XOR<Date | string, null>
    in?: XOR<Enumerable<Date> | Enumerable<string>, null>
    notIn?: XOR<Enumerable<Date> | Enumerable<string>, null>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: Date | string | NestedDateTimeNullableFilter | null
  }

  export type UserRelationFilter = {
    is?: XOR<UserWhereInput, null>
    isNot?: XOR<UserWhereInput, null>
  }

  export type IntNullableFilter = {
    equals?: XOR<number, null>
    in?: XOR<Enumerable<number>, null>
    notIn?: XOR<Enumerable<number>, null>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: number | NestedIntNullableFilter | null
  }

  export type PostCategoryListRelationFilter = {
    every?: PostCategoryWhereInput
    some?: PostCategoryWhereInput
    none?: PostCategoryWhereInput
  }

  export type PostRelationFilter = {
    is?: XOR<PostWhereInput, null>
    isNot?: XOR<PostWhereInput, null>
  }

  export type SpotifyPlaylistRelationFilter = {
    is?: XOR<SpotifyPlaylistWhereInput, null>
    isNot?: XOR<SpotifyPlaylistWhereInput, null>
  }

  export type DonutListRelationFilter = {
    every?: DonutWhereInput
    some?: DonutWhereInput
    none?: DonutWhereInput
  }

  export type PostCreateManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, Enumerable<PostCreateWithoutAuthorInput>>
    connect?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    connectOrCreate?: XOR<PostCreateOrConnectWithoutauthorInput, Enumerable<PostCreateOrConnectWithoutauthorInput>>
  }

  export type CommentCreateManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, Enumerable<CommentCreateWithoutAuthorInput>>
    connect?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    connectOrCreate?: XOR<CommentCreateOrConnectWithoutauthorInput, Enumerable<CommentCreateOrConnectWithoutauthorInput>>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: XOR<string, null>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: XOR<boolean, null>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, Enumerable<PostCreateWithoutAuthorInput>>
    connect?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    set?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    disconnect?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    delete?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    update?: XOR<PostUpdateWithWhereUniqueWithoutAuthorInput, Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>>
    updateMany?: XOR<PostUpdateManyWithWhereWithoutAuthorInput, Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>>
    deleteMany?: XOR<PostScalarWhereInput, Enumerable<PostScalarWhereInput>>
    upsert?: XOR<PostUpsertWithWhereUniqueWithoutAuthorInput, Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>>
    connectOrCreate?: XOR<PostCreateOrConnectWithoutauthorInput, Enumerable<PostCreateOrConnectWithoutauthorInput>>
  }

  export type CommentUpdateManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, Enumerable<CommentCreateWithoutAuthorInput>>
    connect?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    set?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    disconnect?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    delete?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    update?: XOR<CommentUpdateWithWhereUniqueWithoutAuthorInput, Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>>
    updateMany?: XOR<CommentUpdateManyWithWhereWithoutAuthorInput, Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>>
    deleteMany?: XOR<CommentScalarWhereInput, Enumerable<CommentScalarWhereInput>>
    upsert?: XOR<CommentUpsertWithWhereUniqueWithoutAuthorInput, Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>>
    connectOrCreate?: XOR<CommentCreateOrConnectWithoutauthorInput, Enumerable<CommentCreateOrConnectWithoutauthorInput>>
  }

  export type UserCreateOneWithoutPostInput = {
    create?: UserCreateWithoutPostInput
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
  }

  export type PostCategoryCreateManyWithoutFrom_categoriesInput = {
    create?: XOR<PostCategoryCreateWithoutFrom_categoriesInput, Enumerable<PostCategoryCreateWithoutFrom_categoriesInput>>
    connect?: XOR<PostCategoryWhereUniqueInput, Enumerable<PostCategoryWhereUniqueInput>>
    connectOrCreate?: XOR<PostCategoryCreateOrConnectWithoutfrom_categoriesInput, Enumerable<PostCategoryCreateOrConnectWithoutfrom_categoriesInput>>
  }

  export type CommentCreateManyWithoutOriginalPostInput = {
    create?: XOR<CommentCreateWithoutOriginalPostInput, Enumerable<CommentCreateWithoutOriginalPostInput>>
    connect?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    connectOrCreate?: XOR<CommentCreateOrConnectWithoutoriginalPostInput, Enumerable<CommentCreateOrConnectWithoutoriginalPostInput>>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: XOR<Date | string, null>
  }

  export type UserUpdateOneWithoutPostInput = {
    create?: UserCreateWithoutPostInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: UserUpdateWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
  }

  export type PostCategoryUpdateManyWithoutFrom_categoriesInput = {
    create?: XOR<PostCategoryCreateWithoutFrom_categoriesInput, Enumerable<PostCategoryCreateWithoutFrom_categoriesInput>>
    connect?: XOR<PostCategoryWhereUniqueInput, Enumerable<PostCategoryWhereUniqueInput>>
    set?: XOR<PostCategoryWhereUniqueInput, Enumerable<PostCategoryWhereUniqueInput>>
    disconnect?: XOR<PostCategoryWhereUniqueInput, Enumerable<PostCategoryWhereUniqueInput>>
    delete?: XOR<PostCategoryWhereUniqueInput, Enumerable<PostCategoryWhereUniqueInput>>
    update?: XOR<PostCategoryUpdateWithWhereUniqueWithoutFrom_categoriesInput, Enumerable<PostCategoryUpdateWithWhereUniqueWithoutFrom_categoriesInput>>
    updateMany?: XOR<PostCategoryUpdateManyWithWhereWithoutFrom_categoriesInput, Enumerable<PostCategoryUpdateManyWithWhereWithoutFrom_categoriesInput>>
    deleteMany?: XOR<PostCategoryScalarWhereInput, Enumerable<PostCategoryScalarWhereInput>>
    upsert?: XOR<PostCategoryUpsertWithWhereUniqueWithoutFrom_categoriesInput, Enumerable<PostCategoryUpsertWithWhereUniqueWithoutFrom_categoriesInput>>
    connectOrCreate?: XOR<PostCategoryCreateOrConnectWithoutfrom_categoriesInput, Enumerable<PostCategoryCreateOrConnectWithoutfrom_categoriesInput>>
  }

  export type CommentUpdateManyWithoutOriginalPostInput = {
    create?: XOR<CommentCreateWithoutOriginalPostInput, Enumerable<CommentCreateWithoutOriginalPostInput>>
    connect?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    set?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    disconnect?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    delete?: XOR<CommentWhereUniqueInput, Enumerable<CommentWhereUniqueInput>>
    update?: XOR<CommentUpdateWithWhereUniqueWithoutOriginalPostInput, Enumerable<CommentUpdateWithWhereUniqueWithoutOriginalPostInput>>
    updateMany?: XOR<CommentUpdateManyWithWhereWithoutOriginalPostInput, Enumerable<CommentUpdateManyWithWhereWithoutOriginalPostInput>>
    deleteMany?: XOR<CommentScalarWhereInput, Enumerable<CommentScalarWhereInput>>
    upsert?: XOR<CommentUpsertWithWhereUniqueWithoutOriginalPostInput, Enumerable<CommentUpsertWithWhereUniqueWithoutOriginalPostInput>>
    connectOrCreate?: XOR<CommentCreateOrConnectWithoutoriginalPostInput, Enumerable<CommentCreateOrConnectWithoutoriginalPostInput>>
  }

  export type PostCreateOneWithoutCommentInput = {
    create?: PostCreateWithoutCommentInput
    connect?: PostWhereUniqueInput
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput
  }

  export type UserCreateOneWithoutCommentInput = {
    create?: UserCreateWithoutCommentInput
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
  }

  export type PostUpdateOneWithoutCommentInput = {
    create?: PostCreateWithoutCommentInput
    connect?: PostWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: PostUpdateWithoutCommentInput
    upsert?: PostUpsertWithoutCommentInput
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput
  }

  export type UserUpdateOneWithoutCommentInput = {
    create?: UserCreateWithoutCommentInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: UserUpdateWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
  }

  export type PostCreateManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, Enumerable<PostCreateWithoutCategoriesInput>>
    connect?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    connectOrCreate?: XOR<PostCreateOrConnectWithoutcategoriesInput, Enumerable<PostCreateOrConnectWithoutcategoriesInput>>
  }

  export type PostUpdateManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, Enumerable<PostCreateWithoutCategoriesInput>>
    connect?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    set?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    disconnect?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    delete?: XOR<PostWhereUniqueInput, Enumerable<PostWhereUniqueInput>>
    update?: XOR<PostUpdateWithWhereUniqueWithoutCategoriesInput, Enumerable<PostUpdateWithWhereUniqueWithoutCategoriesInput>>
    updateMany?: XOR<PostUpdateManyWithWhereWithoutCategoriesInput, Enumerable<PostUpdateManyWithWhereWithoutCategoriesInput>>
    deleteMany?: XOR<PostScalarWhereInput, Enumerable<PostScalarWhereInput>>
    upsert?: XOR<PostUpsertWithWhereUniqueWithoutCategoriesInput, Enumerable<PostUpsertWithWhereUniqueWithoutCategoriesInput>>
    connectOrCreate?: XOR<PostCreateOrConnectWithoutcategoriesInput, Enumerable<PostCreateOrConnectWithoutcategoriesInput>>
  }

  export type SpotifyPlaylistCreateOneWithoutDonutInput = {
    create?: SpotifyPlaylistCreateWithoutDonutInput
    connect?: SpotifyPlaylistWhereUniqueInput
    connectOrCreate?: SpotifyPlaylistCreateOrConnectWithoutDonutInput
  }

  export type SpotifyPlaylistUpdateOneWithoutDonutInput = {
    create?: SpotifyPlaylistCreateWithoutDonutInput
    connect?: SpotifyPlaylistWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: SpotifyPlaylistUpdateWithoutDonutInput
    upsert?: SpotifyPlaylistUpsertWithoutDonutInput
    connectOrCreate?: SpotifyPlaylistCreateOrConnectWithoutDonutInput
  }

  export type DonutCreateManyWithoutSpotifyPlaylistInput = {
    create?: XOR<DonutCreateWithoutSpotifyPlaylistInput, Enumerable<DonutCreateWithoutSpotifyPlaylistInput>>
    connect?: XOR<DonutWhereUniqueInput, Enumerable<DonutWhereUniqueInput>>
    connectOrCreate?: XOR<DonutCreateOrConnectWithoutspotifyPlaylistInput, Enumerable<DonutCreateOrConnectWithoutspotifyPlaylistInput>>
  }

  export type DonutUpdateManyWithoutSpotifyPlaylistInput = {
    create?: XOR<DonutCreateWithoutSpotifyPlaylistInput, Enumerable<DonutCreateWithoutSpotifyPlaylistInput>>
    connect?: XOR<DonutWhereUniqueInput, Enumerable<DonutWhereUniqueInput>>
    set?: XOR<DonutWhereUniqueInput, Enumerable<DonutWhereUniqueInput>>
    disconnect?: XOR<DonutWhereUniqueInput, Enumerable<DonutWhereUniqueInput>>
    delete?: XOR<DonutWhereUniqueInput, Enumerable<DonutWhereUniqueInput>>
    update?: XOR<DonutUpdateWithWhereUniqueWithoutSpotifyPlaylistInput, Enumerable<DonutUpdateWithWhereUniqueWithoutSpotifyPlaylistInput>>
    updateMany?: XOR<DonutUpdateManyWithWhereWithoutSpotifyPlaylistInput, Enumerable<DonutUpdateManyWithWhereWithoutSpotifyPlaylistInput>>
    deleteMany?: XOR<DonutScalarWhereInput, Enumerable<DonutScalarWhereInput>>
    upsert?: XOR<DonutUpsertWithWhereUniqueWithoutSpotifyPlaylistInput, Enumerable<DonutUpsertWithWhereUniqueWithoutSpotifyPlaylistInput>>
    connectOrCreate?: XOR<DonutCreateOrConnectWithoutspotifyPlaylistInput, Enumerable<DonutCreateOrConnectWithoutspotifyPlaylistInput>>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: XOR<number, NestedIntFilter>
  }

  export type NestedStringNullableFilter = {
    equals?: XOR<string, null>
    in?: XOR<Enumerable<string>, null>
    notIn?: XOR<Enumerable<string>, null>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: string | NestedStringNullableFilter | null
  }

  export type NestedBoolNullableFilter = {
    equals?: XOR<boolean, null>
    not?: boolean | NestedBoolNullableFilter | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: XOR<Date | string, null>
    in?: XOR<Enumerable<Date> | Enumerable<string>, null>
    notIn?: XOR<Enumerable<Date> | Enumerable<string>, null>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: Date | string | NestedDateTimeNullableFilter | null
  }

  export type NestedIntNullableFilter = {
    equals?: XOR<number, null>
    in?: XOR<Enumerable<number>, null>
    notIn?: XOR<Enumerable<number>, null>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: number | NestedIntNullableFilter | null
  }

  export type PostCreateWithoutAuthorInput = {
    title?: XOR<string, null>
    state?: XOR<string, null>
    image?: XOR<InputJsonValue, null>
    content?: XOR<string, null>
    summary?: XOR<string, null>
    publishedAt_utc?: XOR<Date | string, null>
    publishedAt_offset?: XOR<string, null>
    slug?: XOR<string, null>
    updatedAt_utc?: XOR<Date | string, null>
    updatedAt_offset?: XOR<string, null>
    createdAt_utc?: XOR<Date | string, null>
    createdAt_offset?: XOR<string, null>
    categories?: PostCategoryCreateManyWithoutFrom_categoriesInput
    Comment?: CommentCreateManyWithoutOriginalPostInput
  }

  export type PostCreateOrConnectWithoutauthorInput = {
    where: PostWhereUniqueInput
    create: PostCreateWithoutAuthorInput
  }

  export type CommentCreateWithoutAuthorInput = {
    body?: XOR<string, null>
    posted_utc?: XOR<Date | string, null>
    posted_offset?: XOR<string, null>
    originalPost?: PostCreateOneWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutauthorInput = {
    where: CommentWhereUniqueInput
    create: CommentCreateWithoutAuthorInput
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: PostUpdateWithoutAuthorInput
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: PostUpdateManyMutationInput
  }

  export type PostScalarWhereInput = {
    AND?: XOR<PostScalarWhereInput, Enumerable<PostScalarWhereInput>>
    OR?: XOR<PostScalarWhereInput, Enumerable<PostScalarWhereInput>>
    NOT?: XOR<PostScalarWhereInput, Enumerable<PostScalarWhereInput>>
    id?: XOR<IntFilter, number>
    title?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    image?: JsonNullableFilter
    content?: StringNullableFilter | string | null
    summary?: StringNullableFilter | string | null
    publishedAt_utc?: DateTimeNullableFilter | Date | string | null
    publishedAt_offset?: StringNullableFilter | string | null
    slug?: StringNullableFilter | string | null
    updatedAt_utc?: DateTimeNullableFilter | Date | string | null
    updatedAt_offset?: StringNullableFilter | string | null
    createdAt_utc?: DateTimeNullableFilter | Date | string | null
    createdAt_offset?: StringNullableFilter | string | null
    authorId?: IntNullableFilter | number | null
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: PostUpdateWithoutAuthorInput
    create: PostCreateWithoutAuthorInput
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: CommentUpdateWithoutAuthorInput
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: CommentUpdateManyMutationInput
  }

  export type CommentScalarWhereInput = {
    AND?: XOR<CommentScalarWhereInput, Enumerable<CommentScalarWhereInput>>
    OR?: XOR<CommentScalarWhereInput, Enumerable<CommentScalarWhereInput>>
    NOT?: XOR<CommentScalarWhereInput, Enumerable<CommentScalarWhereInput>>
    id?: XOR<IntFilter, number>
    body?: StringNullableFilter | string | null
    posted_utc?: DateTimeNullableFilter | Date | string | null
    posted_offset?: StringNullableFilter | string | null
    originalPostId?: IntNullableFilter | number | null
    authorId?: IntNullableFilter | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: CommentUpdateWithoutAuthorInput
    create: CommentCreateWithoutAuthorInput
  }

  export type UserCreateWithoutPostInput = {
    name?: XOR<string, null>
    email?: XOR<string, null>
    isAdmin?: XOR<boolean, null>
    password?: XOR<string, null>
    Comment?: CommentCreateManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: UserCreateWithoutPostInput
  }

  export type PostCategoryCreateWithoutFrom_categoriesInput = {
    name?: XOR<string, null>
    slug?: XOR<string, null>
  }

  export type PostCategoryCreateOrConnectWithoutfrom_categoriesInput = {
    where: PostCategoryWhereUniqueInput
    create: PostCategoryCreateWithoutFrom_categoriesInput
  }

  export type CommentCreateWithoutOriginalPostInput = {
    body?: XOR<string, null>
    posted_utc?: XOR<Date | string, null>
    posted_offset?: XOR<string, null>
    author?: UserCreateOneWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutoriginalPostInput = {
    where: CommentWhereUniqueInput
    create: CommentCreateWithoutOriginalPostInput
  }

  export type UserUpdateWithoutPostInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    email?: string | NullableStringFieldUpdateOperationsInput | null
    isAdmin?: boolean | NullableBoolFieldUpdateOperationsInput | null
    password?: string | NullableStringFieldUpdateOperationsInput | null
    Comment?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUpsertWithoutPostInput = {
    update: UserUpdateWithoutPostInput
    create: UserCreateWithoutPostInput
  }

  export type PostCategoryUpdateWithWhereUniqueWithoutFrom_categoriesInput = {
    where: PostCategoryWhereUniqueInput
    data: PostCategoryUpdateWithoutFrom_categoriesInput
  }

  export type PostCategoryUpdateManyWithWhereWithoutFrom_categoriesInput = {
    where: PostCategoryScalarWhereInput
    data: PostCategoryUpdateManyMutationInput
  }

  export type PostCategoryScalarWhereInput = {
    AND?: XOR<PostCategoryScalarWhereInput, Enumerable<PostCategoryScalarWhereInput>>
    OR?: XOR<PostCategoryScalarWhereInput, Enumerable<PostCategoryScalarWhereInput>>
    NOT?: XOR<PostCategoryScalarWhereInput, Enumerable<PostCategoryScalarWhereInput>>
    id?: XOR<IntFilter, number>
    name?: StringNullableFilter | string | null
    slug?: StringNullableFilter | string | null
  }

  export type PostCategoryUpsertWithWhereUniqueWithoutFrom_categoriesInput = {
    where: PostCategoryWhereUniqueInput
    update: PostCategoryUpdateWithoutFrom_categoriesInput
    create: PostCategoryCreateWithoutFrom_categoriesInput
  }

  export type CommentUpdateWithWhereUniqueWithoutOriginalPostInput = {
    where: CommentWhereUniqueInput
    data: CommentUpdateWithoutOriginalPostInput
  }

  export type CommentUpdateManyWithWhereWithoutOriginalPostInput = {
    where: CommentScalarWhereInput
    data: CommentUpdateManyMutationInput
  }

  export type CommentUpsertWithWhereUniqueWithoutOriginalPostInput = {
    where: CommentWhereUniqueInput
    update: CommentUpdateWithoutOriginalPostInput
    create: CommentCreateWithoutOriginalPostInput
  }

  export type PostCreateWithoutCommentInput = {
    title?: XOR<string, null>
    state?: XOR<string, null>
    image?: XOR<InputJsonValue, null>
    content?: XOR<string, null>
    summary?: XOR<string, null>
    publishedAt_utc?: XOR<Date | string, null>
    publishedAt_offset?: XOR<string, null>
    slug?: XOR<string, null>
    updatedAt_utc?: XOR<Date | string, null>
    updatedAt_offset?: XOR<string, null>
    createdAt_utc?: XOR<Date | string, null>
    createdAt_offset?: XOR<string, null>
    author?: UserCreateOneWithoutPostInput
    categories?: PostCategoryCreateManyWithoutFrom_categoriesInput
  }

  export type PostCreateOrConnectWithoutCommentInput = {
    where: PostWhereUniqueInput
    create: PostCreateWithoutCommentInput
  }

  export type UserCreateWithoutCommentInput = {
    name?: XOR<string, null>
    email?: XOR<string, null>
    isAdmin?: XOR<boolean, null>
    password?: XOR<string, null>
    Post?: PostCreateManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: UserCreateWithoutCommentInput
  }

  export type PostUpdateWithoutCommentInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    summary?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    author?: UserUpdateOneWithoutPostInput
    categories?: PostCategoryUpdateManyWithoutFrom_categoriesInput
  }

  export type PostUpsertWithoutCommentInput = {
    update: PostUpdateWithoutCommentInput
    create: PostCreateWithoutCommentInput
  }

  export type UserUpdateWithoutCommentInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    email?: string | NullableStringFieldUpdateOperationsInput | null
    isAdmin?: boolean | NullableBoolFieldUpdateOperationsInput | null
    password?: string | NullableStringFieldUpdateOperationsInput | null
    Post?: PostUpdateManyWithoutAuthorInput
  }

  export type UserUpsertWithoutCommentInput = {
    update: UserUpdateWithoutCommentInput
    create: UserCreateWithoutCommentInput
  }

  export type PostCreateWithoutCategoriesInput = {
    title?: XOR<string, null>
    state?: XOR<string, null>
    image?: XOR<InputJsonValue, null>
    content?: XOR<string, null>
    summary?: XOR<string, null>
    publishedAt_utc?: XOR<Date | string, null>
    publishedAt_offset?: XOR<string, null>
    slug?: XOR<string, null>
    updatedAt_utc?: XOR<Date | string, null>
    updatedAt_offset?: XOR<string, null>
    createdAt_utc?: XOR<Date | string, null>
    createdAt_offset?: XOR<string, null>
    author?: UserCreateOneWithoutPostInput
    Comment?: CommentCreateManyWithoutOriginalPostInput
  }

  export type PostCreateOrConnectWithoutcategoriesInput = {
    where: PostWhereUniqueInput
    create: PostCreateWithoutCategoriesInput
  }

  export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    data: PostUpdateWithoutCategoriesInput
  }

  export type PostUpdateManyWithWhereWithoutCategoriesInput = {
    where: PostScalarWhereInput
    data: PostUpdateManyMutationInput
  }

  export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    update: PostUpdateWithoutCategoriesInput
    create: PostCreateWithoutCategoriesInput
  }

  export type SpotifyPlaylistCreateWithoutDonutInput = {
    title?: XOR<string, null>
    uri?: XOR<string, null>
    uid?: XOR<string, null>
  }

  export type SpotifyPlaylistCreateOrConnectWithoutDonutInput = {
    where: SpotifyPlaylistWhereUniqueInput
    create: SpotifyPlaylistCreateWithoutDonutInput
  }

  export type SpotifyPlaylistUpdateWithoutDonutInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    uri?: string | NullableStringFieldUpdateOperationsInput | null
    uid?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type SpotifyPlaylistUpsertWithoutDonutInput = {
    update: SpotifyPlaylistUpdateWithoutDonutInput
    create: SpotifyPlaylistCreateWithoutDonutInput
  }

  export type DonutCreateWithoutSpotifyPlaylistInput = {
    title?: XOR<string, null>
    state?: XOR<string, null>
    publishedAt_utc?: XOR<Date | string, null>
    publishedAt_offset?: XOR<string, null>
    image?: XOR<InputJsonValue, null>
    updatedAt_utc?: XOR<Date | string, null>
    updatedAt_offset?: XOR<string, null>
    createdAt_utc?: XOR<Date | string, null>
    createdAt_offset?: XOR<string, null>
  }

  export type DonutCreateOrConnectWithoutspotifyPlaylistInput = {
    where: DonutWhereUniqueInput
    create: DonutCreateWithoutSpotifyPlaylistInput
  }

  export type DonutUpdateWithWhereUniqueWithoutSpotifyPlaylistInput = {
    where: DonutWhereUniqueInput
    data: DonutUpdateWithoutSpotifyPlaylistInput
  }

  export type DonutUpdateManyWithWhereWithoutSpotifyPlaylistInput = {
    where: DonutScalarWhereInput
    data: DonutUpdateManyMutationInput
  }

  export type DonutScalarWhereInput = {
    AND?: XOR<DonutScalarWhereInput, Enumerable<DonutScalarWhereInput>>
    OR?: XOR<DonutScalarWhereInput, Enumerable<DonutScalarWhereInput>>
    NOT?: XOR<DonutScalarWhereInput, Enumerable<DonutScalarWhereInput>>
    id?: XOR<IntFilter, number>
    title?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    publishedAt_utc?: DateTimeNullableFilter | Date | string | null
    publishedAt_offset?: StringNullableFilter | string | null
    image?: JsonNullableFilter
    updatedAt_utc?: DateTimeNullableFilter | Date | string | null
    updatedAt_offset?: StringNullableFilter | string | null
    createdAt_utc?: DateTimeNullableFilter | Date | string | null
    createdAt_offset?: StringNullableFilter | string | null
    spotifyPlaylistId?: IntNullableFilter | number | null
  }

  export type DonutUpsertWithWhereUniqueWithoutSpotifyPlaylistInput = {
    where: DonutWhereUniqueInput
    update: DonutUpdateWithoutSpotifyPlaylistInput
    create: DonutCreateWithoutSpotifyPlaylistInput
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    summary?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    categories?: PostCategoryUpdateManyWithoutFrom_categoriesInput
    Comment?: CommentUpdateManyWithoutOriginalPostInput
  }

  export type CommentUpdateWithoutAuthorInput = {
    body?: string | NullableStringFieldUpdateOperationsInput | null
    posted_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    posted_offset?: string | NullableStringFieldUpdateOperationsInput | null
    originalPost?: PostUpdateOneWithoutCommentInput
  }

  export type PostCategoryUpdateWithoutFrom_categoriesInput = {
    name?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
  }

  export type CommentUpdateWithoutOriginalPostInput = {
    body?: string | NullableStringFieldUpdateOperationsInput | null
    posted_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    posted_offset?: string | NullableStringFieldUpdateOperationsInput | null
    author?: UserUpdateOneWithoutCommentInput
  }

  export type PostUpdateWithoutCategoriesInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    summary?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    slug?: string | NullableStringFieldUpdateOperationsInput | null
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    author?: UserUpdateOneWithoutPostInput
    Comment?: CommentUpdateManyWithoutOriginalPostInput
  }

  export type DonutUpdateWithoutSpotifyPlaylistInput = {
    title?: string | NullableStringFieldUpdateOperationsInput | null
    state?: string | NullableStringFieldUpdateOperationsInput | null
    publishedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    publishedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    image?: XOR<InputJsonValue, null>
    updatedAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    updatedAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
    createdAt_utc?: Date | string | NullableDateTimeFieldUpdateOperationsInput | null
    createdAt_offset?: string | NullableStringFieldUpdateOperationsInput | null
  }



  /**
   * Batch Payload for updateMany & deleteMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}

/*
* Exports for compatiblity introduced in 2.12.0
* Please import from the Prisma namespace instead
*/

/**
 * @deprecated Renamed to `Prisma.UserDistinctFieldEnum`
 */
export type UserDistinctFieldEnum = Prisma.UserDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.PostDistinctFieldEnum`
 */
export type PostDistinctFieldEnum = Prisma.PostDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.CommentDistinctFieldEnum`
 */
export type CommentDistinctFieldEnum = Prisma.CommentDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.PostCategoryDistinctFieldEnum`
 */
export type PostCategoryDistinctFieldEnum = Prisma.PostCategoryDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.DonutDistinctFieldEnum`
 */
export type DonutDistinctFieldEnum = Prisma.DonutDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistDistinctFieldEnum`
 */
export type SpotifyPlaylistDistinctFieldEnum = Prisma.SpotifyPlaylistDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.SortOrder`
 */
export type SortOrder = Prisma.SortOrder

/**
 * @deprecated Renamed to `Prisma.QueryMode`
 */
export type QueryMode = Prisma.QueryMode

/**
 * @deprecated Renamed to `Prisma.ModelName`
 */
export type ModelName = Prisma.ModelName

/**
 * @deprecated Renamed to `Prisma.AggregateUser`
 */
export type AggregateUser = Prisma.AggregateUser

/**
 * @deprecated Renamed to `Prisma.UserAvgAggregateOutputType`
 */
export type UserAvgAggregateOutputType = Prisma.UserAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.UserSumAggregateOutputType`
 */
export type UserSumAggregateOutputType = Prisma.UserSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.UserMinAggregateOutputType`
 */
export type UserMinAggregateOutputType = Prisma.UserMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.UserMaxAggregateOutputType`
 */
export type UserMaxAggregateOutputType = Prisma.UserMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateUserArgs`
 */
export type AggregateUserArgs = Prisma.AggregateUserArgs

/**
 * @deprecated Renamed to `Prisma.UserAvgAggregateInputType`
 */
export type UserAvgAggregateInputType = Prisma.UserAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserSumAggregateInputType`
 */
export type UserSumAggregateInputType = Prisma.UserSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserMinAggregateInputType`
 */
export type UserMinAggregateInputType = Prisma.UserMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserMaxAggregateInputType`
 */
export type UserMaxAggregateInputType = Prisma.UserMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserSelect`
 */
export type UserSelect = Prisma.UserSelect

/**
 * @deprecated Renamed to `Prisma.UserInclude`
 */
export type UserInclude = Prisma.UserInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueUserArgs`
 */
export type FindUniqueUserArgs = Prisma.FindUniqueUserArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstUserArgs`
 */
export type FindFirstUserArgs = Prisma.FindFirstUserArgs

/**
 * @deprecated Renamed to `Prisma.FindManyUserArgs`
 */
export type FindManyUserArgs = Prisma.FindManyUserArgs

/**
 * @deprecated Renamed to `Prisma.UserCreateArgs`
 */
export type UserCreateArgs = Prisma.UserCreateArgs

/**
 * @deprecated Renamed to `Prisma.UserUpdateArgs`
 */
export type UserUpdateArgs = Prisma.UserUpdateArgs

/**
 * @deprecated Renamed to `Prisma.UserUpdateManyArgs`
 */
export type UserUpdateManyArgs = Prisma.UserUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.UserUpsertArgs`
 */
export type UserUpsertArgs = Prisma.UserUpsertArgs

/**
 * @deprecated Renamed to `Prisma.UserDeleteArgs`
 */
export type UserDeleteArgs = Prisma.UserDeleteArgs

/**
 * @deprecated Renamed to `Prisma.UserDeleteManyArgs`
 */
export type UserDeleteManyArgs = Prisma.UserDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregatePost`
 */
export type AggregatePost = Prisma.AggregatePost

/**
 * @deprecated Renamed to `Prisma.PostAvgAggregateOutputType`
 */
export type PostAvgAggregateOutputType = Prisma.PostAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostSumAggregateOutputType`
 */
export type PostSumAggregateOutputType = Prisma.PostSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostMinAggregateOutputType`
 */
export type PostMinAggregateOutputType = Prisma.PostMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostMaxAggregateOutputType`
 */
export type PostMaxAggregateOutputType = Prisma.PostMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregatePostArgs`
 */
export type AggregatePostArgs = Prisma.AggregatePostArgs

/**
 * @deprecated Renamed to `Prisma.PostAvgAggregateInputType`
 */
export type PostAvgAggregateInputType = Prisma.PostAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostSumAggregateInputType`
 */
export type PostSumAggregateInputType = Prisma.PostSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostMinAggregateInputType`
 */
export type PostMinAggregateInputType = Prisma.PostMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostMaxAggregateInputType`
 */
export type PostMaxAggregateInputType = Prisma.PostMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostSelect`
 */
export type PostSelect = Prisma.PostSelect

/**
 * @deprecated Renamed to `Prisma.PostInclude`
 */
export type PostInclude = Prisma.PostInclude

/**
 * @deprecated Renamed to `Prisma.FindUniquePostArgs`
 */
export type FindUniquePostArgs = Prisma.FindUniquePostArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstPostArgs`
 */
export type FindFirstPostArgs = Prisma.FindFirstPostArgs

/**
 * @deprecated Renamed to `Prisma.FindManyPostArgs`
 */
export type FindManyPostArgs = Prisma.FindManyPostArgs

/**
 * @deprecated Renamed to `Prisma.PostCreateArgs`
 */
export type PostCreateArgs = Prisma.PostCreateArgs

/**
 * @deprecated Renamed to `Prisma.PostUpdateArgs`
 */
export type PostUpdateArgs = Prisma.PostUpdateArgs

/**
 * @deprecated Renamed to `Prisma.PostUpdateManyArgs`
 */
export type PostUpdateManyArgs = Prisma.PostUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.PostUpsertArgs`
 */
export type PostUpsertArgs = Prisma.PostUpsertArgs

/**
 * @deprecated Renamed to `Prisma.PostDeleteArgs`
 */
export type PostDeleteArgs = Prisma.PostDeleteArgs

/**
 * @deprecated Renamed to `Prisma.PostDeleteManyArgs`
 */
export type PostDeleteManyArgs = Prisma.PostDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateComment`
 */
export type AggregateComment = Prisma.AggregateComment

/**
 * @deprecated Renamed to `Prisma.CommentAvgAggregateOutputType`
 */
export type CommentAvgAggregateOutputType = Prisma.CommentAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CommentSumAggregateOutputType`
 */
export type CommentSumAggregateOutputType = Prisma.CommentSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CommentMinAggregateOutputType`
 */
export type CommentMinAggregateOutputType = Prisma.CommentMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CommentMaxAggregateOutputType`
 */
export type CommentMaxAggregateOutputType = Prisma.CommentMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateCommentArgs`
 */
export type AggregateCommentArgs = Prisma.AggregateCommentArgs

/**
 * @deprecated Renamed to `Prisma.CommentAvgAggregateInputType`
 */
export type CommentAvgAggregateInputType = Prisma.CommentAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CommentSumAggregateInputType`
 */
export type CommentSumAggregateInputType = Prisma.CommentSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CommentMinAggregateInputType`
 */
export type CommentMinAggregateInputType = Prisma.CommentMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CommentMaxAggregateInputType`
 */
export type CommentMaxAggregateInputType = Prisma.CommentMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CommentSelect`
 */
export type CommentSelect = Prisma.CommentSelect

/**
 * @deprecated Renamed to `Prisma.CommentInclude`
 */
export type CommentInclude = Prisma.CommentInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueCommentArgs`
 */
export type FindUniqueCommentArgs = Prisma.FindUniqueCommentArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstCommentArgs`
 */
export type FindFirstCommentArgs = Prisma.FindFirstCommentArgs

/**
 * @deprecated Renamed to `Prisma.FindManyCommentArgs`
 */
export type FindManyCommentArgs = Prisma.FindManyCommentArgs

/**
 * @deprecated Renamed to `Prisma.CommentCreateArgs`
 */
export type CommentCreateArgs = Prisma.CommentCreateArgs

/**
 * @deprecated Renamed to `Prisma.CommentUpdateArgs`
 */
export type CommentUpdateArgs = Prisma.CommentUpdateArgs

/**
 * @deprecated Renamed to `Prisma.CommentUpdateManyArgs`
 */
export type CommentUpdateManyArgs = Prisma.CommentUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.CommentUpsertArgs`
 */
export type CommentUpsertArgs = Prisma.CommentUpsertArgs

/**
 * @deprecated Renamed to `Prisma.CommentDeleteArgs`
 */
export type CommentDeleteArgs = Prisma.CommentDeleteArgs

/**
 * @deprecated Renamed to `Prisma.CommentDeleteManyArgs`
 */
export type CommentDeleteManyArgs = Prisma.CommentDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregatePostCategory`
 */
export type AggregatePostCategory = Prisma.AggregatePostCategory

/**
 * @deprecated Renamed to `Prisma.PostCategoryAvgAggregateOutputType`
 */
export type PostCategoryAvgAggregateOutputType = Prisma.PostCategoryAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostCategorySumAggregateOutputType`
 */
export type PostCategorySumAggregateOutputType = Prisma.PostCategorySumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostCategoryMinAggregateOutputType`
 */
export type PostCategoryMinAggregateOutputType = Prisma.PostCategoryMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostCategoryMaxAggregateOutputType`
 */
export type PostCategoryMaxAggregateOutputType = Prisma.PostCategoryMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregatePostCategoryArgs`
 */
export type AggregatePostCategoryArgs = Prisma.AggregatePostCategoryArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryAvgAggregateInputType`
 */
export type PostCategoryAvgAggregateInputType = Prisma.PostCategoryAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostCategorySumAggregateInputType`
 */
export type PostCategorySumAggregateInputType = Prisma.PostCategorySumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostCategoryMinAggregateInputType`
 */
export type PostCategoryMinAggregateInputType = Prisma.PostCategoryMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostCategoryMaxAggregateInputType`
 */
export type PostCategoryMaxAggregateInputType = Prisma.PostCategoryMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostCategorySelect`
 */
export type PostCategorySelect = Prisma.PostCategorySelect

/**
 * @deprecated Renamed to `Prisma.PostCategoryInclude`
 */
export type PostCategoryInclude = Prisma.PostCategoryInclude

/**
 * @deprecated Renamed to `Prisma.FindUniquePostCategoryArgs`
 */
export type FindUniquePostCategoryArgs = Prisma.FindUniquePostCategoryArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstPostCategoryArgs`
 */
export type FindFirstPostCategoryArgs = Prisma.FindFirstPostCategoryArgs

/**
 * @deprecated Renamed to `Prisma.FindManyPostCategoryArgs`
 */
export type FindManyPostCategoryArgs = Prisma.FindManyPostCategoryArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryCreateArgs`
 */
export type PostCategoryCreateArgs = Prisma.PostCategoryCreateArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateArgs`
 */
export type PostCategoryUpdateArgs = Prisma.PostCategoryUpdateArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateManyArgs`
 */
export type PostCategoryUpdateManyArgs = Prisma.PostCategoryUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpsertArgs`
 */
export type PostCategoryUpsertArgs = Prisma.PostCategoryUpsertArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryDeleteArgs`
 */
export type PostCategoryDeleteArgs = Prisma.PostCategoryDeleteArgs

/**
 * @deprecated Renamed to `Prisma.PostCategoryDeleteManyArgs`
 */
export type PostCategoryDeleteManyArgs = Prisma.PostCategoryDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateDonut`
 */
export type AggregateDonut = Prisma.AggregateDonut

/**
 * @deprecated Renamed to `Prisma.DonutAvgAggregateOutputType`
 */
export type DonutAvgAggregateOutputType = Prisma.DonutAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.DonutSumAggregateOutputType`
 */
export type DonutSumAggregateOutputType = Prisma.DonutSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.DonutMinAggregateOutputType`
 */
export type DonutMinAggregateOutputType = Prisma.DonutMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.DonutMaxAggregateOutputType`
 */
export type DonutMaxAggregateOutputType = Prisma.DonutMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateDonutArgs`
 */
export type AggregateDonutArgs = Prisma.AggregateDonutArgs

/**
 * @deprecated Renamed to `Prisma.DonutAvgAggregateInputType`
 */
export type DonutAvgAggregateInputType = Prisma.DonutAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.DonutSumAggregateInputType`
 */
export type DonutSumAggregateInputType = Prisma.DonutSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.DonutMinAggregateInputType`
 */
export type DonutMinAggregateInputType = Prisma.DonutMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.DonutMaxAggregateInputType`
 */
export type DonutMaxAggregateInputType = Prisma.DonutMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.DonutSelect`
 */
export type DonutSelect = Prisma.DonutSelect

/**
 * @deprecated Renamed to `Prisma.DonutInclude`
 */
export type DonutInclude = Prisma.DonutInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueDonutArgs`
 */
export type FindUniqueDonutArgs = Prisma.FindUniqueDonutArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstDonutArgs`
 */
export type FindFirstDonutArgs = Prisma.FindFirstDonutArgs

/**
 * @deprecated Renamed to `Prisma.FindManyDonutArgs`
 */
export type FindManyDonutArgs = Prisma.FindManyDonutArgs

/**
 * @deprecated Renamed to `Prisma.DonutCreateArgs`
 */
export type DonutCreateArgs = Prisma.DonutCreateArgs

/**
 * @deprecated Renamed to `Prisma.DonutUpdateArgs`
 */
export type DonutUpdateArgs = Prisma.DonutUpdateArgs

/**
 * @deprecated Renamed to `Prisma.DonutUpdateManyArgs`
 */
export type DonutUpdateManyArgs = Prisma.DonutUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.DonutUpsertArgs`
 */
export type DonutUpsertArgs = Prisma.DonutUpsertArgs

/**
 * @deprecated Renamed to `Prisma.DonutDeleteArgs`
 */
export type DonutDeleteArgs = Prisma.DonutDeleteArgs

/**
 * @deprecated Renamed to `Prisma.DonutDeleteManyArgs`
 */
export type DonutDeleteManyArgs = Prisma.DonutDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateSpotifyPlaylist`
 */
export type AggregateSpotifyPlaylist = Prisma.AggregateSpotifyPlaylist

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistAvgAggregateOutputType`
 */
export type SpotifyPlaylistAvgAggregateOutputType = Prisma.SpotifyPlaylistAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistSumAggregateOutputType`
 */
export type SpotifyPlaylistSumAggregateOutputType = Prisma.SpotifyPlaylistSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistMinAggregateOutputType`
 */
export type SpotifyPlaylistMinAggregateOutputType = Prisma.SpotifyPlaylistMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistMaxAggregateOutputType`
 */
export type SpotifyPlaylistMaxAggregateOutputType = Prisma.SpotifyPlaylistMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateSpotifyPlaylistArgs`
 */
export type AggregateSpotifyPlaylistArgs = Prisma.AggregateSpotifyPlaylistArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistAvgAggregateInputType`
 */
export type SpotifyPlaylistAvgAggregateInputType = Prisma.SpotifyPlaylistAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistSumAggregateInputType`
 */
export type SpotifyPlaylistSumAggregateInputType = Prisma.SpotifyPlaylistSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistMinAggregateInputType`
 */
export type SpotifyPlaylistMinAggregateInputType = Prisma.SpotifyPlaylistMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistMaxAggregateInputType`
 */
export type SpotifyPlaylistMaxAggregateInputType = Prisma.SpotifyPlaylistMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistSelect`
 */
export type SpotifyPlaylistSelect = Prisma.SpotifyPlaylistSelect

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistInclude`
 */
export type SpotifyPlaylistInclude = Prisma.SpotifyPlaylistInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueSpotifyPlaylistArgs`
 */
export type FindUniqueSpotifyPlaylistArgs = Prisma.FindUniqueSpotifyPlaylistArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstSpotifyPlaylistArgs`
 */
export type FindFirstSpotifyPlaylistArgs = Prisma.FindFirstSpotifyPlaylistArgs

/**
 * @deprecated Renamed to `Prisma.FindManySpotifyPlaylistArgs`
 */
export type FindManySpotifyPlaylistArgs = Prisma.FindManySpotifyPlaylistArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistCreateArgs`
 */
export type SpotifyPlaylistCreateArgs = Prisma.SpotifyPlaylistCreateArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpdateArgs`
 */
export type SpotifyPlaylistUpdateArgs = Prisma.SpotifyPlaylistUpdateArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpdateManyArgs`
 */
export type SpotifyPlaylistUpdateManyArgs = Prisma.SpotifyPlaylistUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpsertArgs`
 */
export type SpotifyPlaylistUpsertArgs = Prisma.SpotifyPlaylistUpsertArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistDeleteArgs`
 */
export type SpotifyPlaylistDeleteArgs = Prisma.SpotifyPlaylistDeleteArgs

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistDeleteManyArgs`
 */
export type SpotifyPlaylistDeleteManyArgs = Prisma.SpotifyPlaylistDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.UserWhereInput`
 */
export type UserWhereInput = Prisma.UserWhereInput

/**
 * @deprecated Renamed to `Prisma.UserOrderByInput`
 */
export type UserOrderByInput = Prisma.UserOrderByInput

/**
 * @deprecated Renamed to `Prisma.UserWhereUniqueInput`
 */
export type UserWhereUniqueInput = Prisma.UserWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.PostWhereInput`
 */
export type PostWhereInput = Prisma.PostWhereInput

/**
 * @deprecated Renamed to `Prisma.PostOrderByInput`
 */
export type PostOrderByInput = Prisma.PostOrderByInput

/**
 * @deprecated Renamed to `Prisma.PostWhereUniqueInput`
 */
export type PostWhereUniqueInput = Prisma.PostWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.CommentWhereInput`
 */
export type CommentWhereInput = Prisma.CommentWhereInput

/**
 * @deprecated Renamed to `Prisma.CommentOrderByInput`
 */
export type CommentOrderByInput = Prisma.CommentOrderByInput

/**
 * @deprecated Renamed to `Prisma.CommentWhereUniqueInput`
 */
export type CommentWhereUniqueInput = Prisma.CommentWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryWhereInput`
 */
export type PostCategoryWhereInput = Prisma.PostCategoryWhereInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryOrderByInput`
 */
export type PostCategoryOrderByInput = Prisma.PostCategoryOrderByInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryWhereUniqueInput`
 */
export type PostCategoryWhereUniqueInput = Prisma.PostCategoryWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.DonutWhereInput`
 */
export type DonutWhereInput = Prisma.DonutWhereInput

/**
 * @deprecated Renamed to `Prisma.DonutOrderByInput`
 */
export type DonutOrderByInput = Prisma.DonutOrderByInput

/**
 * @deprecated Renamed to `Prisma.DonutWhereUniqueInput`
 */
export type DonutWhereUniqueInput = Prisma.DonutWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistWhereInput`
 */
export type SpotifyPlaylistWhereInput = Prisma.SpotifyPlaylistWhereInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistOrderByInput`
 */
export type SpotifyPlaylistOrderByInput = Prisma.SpotifyPlaylistOrderByInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistWhereUniqueInput`
 */
export type SpotifyPlaylistWhereUniqueInput = Prisma.SpotifyPlaylistWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.UserCreateInput`
 */
export type UserCreateInput = Prisma.UserCreateInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateInput`
 */
export type UserUpdateInput = Prisma.UserUpdateInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateManyMutationInput`
 */
export type UserUpdateManyMutationInput = Prisma.UserUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.PostCreateInput`
 */
export type PostCreateInput = Prisma.PostCreateInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateInput`
 */
export type PostUpdateInput = Prisma.PostUpdateInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateManyMutationInput`
 */
export type PostUpdateManyMutationInput = Prisma.PostUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateInput`
 */
export type CommentCreateInput = Prisma.CommentCreateInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateInput`
 */
export type CommentUpdateInput = Prisma.CommentUpdateInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateManyMutationInput`
 */
export type CommentUpdateManyMutationInput = Prisma.CommentUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryCreateInput`
 */
export type PostCategoryCreateInput = Prisma.PostCategoryCreateInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateInput`
 */
export type PostCategoryUpdateInput = Prisma.PostCategoryUpdateInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateManyMutationInput`
 */
export type PostCategoryUpdateManyMutationInput = Prisma.PostCategoryUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.DonutCreateInput`
 */
export type DonutCreateInput = Prisma.DonutCreateInput

/**
 * @deprecated Renamed to `Prisma.DonutUpdateInput`
 */
export type DonutUpdateInput = Prisma.DonutUpdateInput

/**
 * @deprecated Renamed to `Prisma.DonutUpdateManyMutationInput`
 */
export type DonutUpdateManyMutationInput = Prisma.DonutUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistCreateInput`
 */
export type SpotifyPlaylistCreateInput = Prisma.SpotifyPlaylistCreateInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpdateInput`
 */
export type SpotifyPlaylistUpdateInput = Prisma.SpotifyPlaylistUpdateInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpdateManyMutationInput`
 */
export type SpotifyPlaylistUpdateManyMutationInput = Prisma.SpotifyPlaylistUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.IntFilter`
 */
export type IntFilter = Prisma.IntFilter

/**
 * @deprecated Renamed to `Prisma.StringNullableFilter`
 */
export type StringNullableFilter = Prisma.StringNullableFilter

/**
 * @deprecated Renamed to `Prisma.BoolNullableFilter`
 */
export type BoolNullableFilter = Prisma.BoolNullableFilter

/**
 * @deprecated Renamed to `Prisma.PostListRelationFilter`
 */
export type PostListRelationFilter = Prisma.PostListRelationFilter

/**
 * @deprecated Renamed to `Prisma.CommentListRelationFilter`
 */
export type CommentListRelationFilter = Prisma.CommentListRelationFilter

/**
 * @deprecated Renamed to `Prisma.JsonNullableFilter`
 */
export type JsonNullableFilter = Prisma.JsonNullableFilter

/**
 * @deprecated Renamed to `Prisma.DateTimeNullableFilter`
 */
export type DateTimeNullableFilter = Prisma.DateTimeNullableFilter

/**
 * @deprecated Renamed to `Prisma.UserRelationFilter`
 */
export type UserRelationFilter = Prisma.UserRelationFilter

/**
 * @deprecated Renamed to `Prisma.IntNullableFilter`
 */
export type IntNullableFilter = Prisma.IntNullableFilter

/**
 * @deprecated Renamed to `Prisma.PostCategoryListRelationFilter`
 */
export type PostCategoryListRelationFilter = Prisma.PostCategoryListRelationFilter

/**
 * @deprecated Renamed to `Prisma.PostRelationFilter`
 */
export type PostRelationFilter = Prisma.PostRelationFilter

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistRelationFilter`
 */
export type SpotifyPlaylistRelationFilter = Prisma.SpotifyPlaylistRelationFilter

/**
 * @deprecated Renamed to `Prisma.DonutListRelationFilter`
 */
export type DonutListRelationFilter = Prisma.DonutListRelationFilter

/**
 * @deprecated Renamed to `Prisma.PostCreateManyWithoutAuthorInput`
 */
export type PostCreateManyWithoutAuthorInput = Prisma.PostCreateManyWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateManyWithoutAuthorInput`
 */
export type CommentCreateManyWithoutAuthorInput = Prisma.CommentCreateManyWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.NullableStringFieldUpdateOperationsInput`
 */
export type NullableStringFieldUpdateOperationsInput = Prisma.NullableStringFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.NullableBoolFieldUpdateOperationsInput`
 */
export type NullableBoolFieldUpdateOperationsInput = Prisma.NullableBoolFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateManyWithoutAuthorInput`
 */
export type PostUpdateManyWithoutAuthorInput = Prisma.PostUpdateManyWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateManyWithoutAuthorInput`
 */
export type CommentUpdateManyWithoutAuthorInput = Prisma.CommentUpdateManyWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOneWithoutPostInput`
 */
export type UserCreateOneWithoutPostInput = Prisma.UserCreateOneWithoutPostInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryCreateManyWithoutFrom_categoriesInput`
 */
export type PostCategoryCreateManyWithoutFrom_categoriesInput = Prisma.PostCategoryCreateManyWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateManyWithoutOriginalPostInput`
 */
export type CommentCreateManyWithoutOriginalPostInput = Prisma.CommentCreateManyWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.NullableDateTimeFieldUpdateOperationsInput`
 */
export type NullableDateTimeFieldUpdateOperationsInput = Prisma.NullableDateTimeFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateOneWithoutPostInput`
 */
export type UserUpdateOneWithoutPostInput = Prisma.UserUpdateOneWithoutPostInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateManyWithoutFrom_categoriesInput`
 */
export type PostCategoryUpdateManyWithoutFrom_categoriesInput = Prisma.PostCategoryUpdateManyWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateManyWithoutOriginalPostInput`
 */
export type CommentUpdateManyWithoutOriginalPostInput = Prisma.CommentUpdateManyWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.PostCreateOneWithoutCommentInput`
 */
export type PostCreateOneWithoutCommentInput = Prisma.PostCreateOneWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOneWithoutCommentInput`
 */
export type UserCreateOneWithoutCommentInput = Prisma.UserCreateOneWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateOneWithoutCommentInput`
 */
export type PostUpdateOneWithoutCommentInput = Prisma.PostUpdateOneWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateOneWithoutCommentInput`
 */
export type UserUpdateOneWithoutCommentInput = Prisma.UserUpdateOneWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.PostCreateManyWithoutCategoriesInput`
 */
export type PostCreateManyWithoutCategoriesInput = Prisma.PostCreateManyWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateManyWithoutCategoriesInput`
 */
export type PostUpdateManyWithoutCategoriesInput = Prisma.PostUpdateManyWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistCreateOneWithoutDonutInput`
 */
export type SpotifyPlaylistCreateOneWithoutDonutInput = Prisma.SpotifyPlaylistCreateOneWithoutDonutInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpdateOneWithoutDonutInput`
 */
export type SpotifyPlaylistUpdateOneWithoutDonutInput = Prisma.SpotifyPlaylistUpdateOneWithoutDonutInput

/**
 * @deprecated Renamed to `Prisma.DonutCreateManyWithoutSpotifyPlaylistInput`
 */
export type DonutCreateManyWithoutSpotifyPlaylistInput = Prisma.DonutCreateManyWithoutSpotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.DonutUpdateManyWithoutSpotifyPlaylistInput`
 */
export type DonutUpdateManyWithoutSpotifyPlaylistInput = Prisma.DonutUpdateManyWithoutSpotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.NestedIntFilter`
 */
export type NestedIntFilter = Prisma.NestedIntFilter

/**
 * @deprecated Renamed to `Prisma.NestedStringNullableFilter`
 */
export type NestedStringNullableFilter = Prisma.NestedStringNullableFilter

/**
 * @deprecated Renamed to `Prisma.NestedBoolNullableFilter`
 */
export type NestedBoolNullableFilter = Prisma.NestedBoolNullableFilter

/**
 * @deprecated Renamed to `Prisma.NestedDateTimeNullableFilter`
 */
export type NestedDateTimeNullableFilter = Prisma.NestedDateTimeNullableFilter

/**
 * @deprecated Renamed to `Prisma.NestedIntNullableFilter`
 */
export type NestedIntNullableFilter = Prisma.NestedIntNullableFilter

/**
 * @deprecated Renamed to `Prisma.PostCreateWithoutAuthorInput`
 */
export type PostCreateWithoutAuthorInput = Prisma.PostCreateWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.PostCreateOrConnectWithoutauthorInput`
 */
export type PostCreateOrConnectWithoutauthorInput = Prisma.PostCreateOrConnectWithoutauthorInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateWithoutAuthorInput`
 */
export type CommentCreateWithoutAuthorInput = Prisma.CommentCreateWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateOrConnectWithoutauthorInput`
 */
export type CommentCreateOrConnectWithoutauthorInput = Prisma.CommentCreateOrConnectWithoutauthorInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput`
 */
export type PostUpdateWithWhereUniqueWithoutAuthorInput = Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateManyWithWhereWithoutAuthorInput`
 */
export type PostUpdateManyWithWhereWithoutAuthorInput = Prisma.PostUpdateManyWithWhereWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.PostScalarWhereInput`
 */
export type PostScalarWhereInput = Prisma.PostScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput`
 */
export type PostUpsertWithWhereUniqueWithoutAuthorInput = Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput`
 */
export type CommentUpdateWithWhereUniqueWithoutAuthorInput = Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateManyWithWhereWithoutAuthorInput`
 */
export type CommentUpdateManyWithWhereWithoutAuthorInput = Prisma.CommentUpdateManyWithWhereWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentScalarWhereInput`
 */
export type CommentScalarWhereInput = Prisma.CommentScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput`
 */
export type CommentUpsertWithWhereUniqueWithoutAuthorInput = Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.UserCreateWithoutPostInput`
 */
export type UserCreateWithoutPostInput = Prisma.UserCreateWithoutPostInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOrConnectWithoutPostInput`
 */
export type UserCreateOrConnectWithoutPostInput = Prisma.UserCreateOrConnectWithoutPostInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryCreateWithoutFrom_categoriesInput`
 */
export type PostCategoryCreateWithoutFrom_categoriesInput = Prisma.PostCategoryCreateWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryCreateOrConnectWithoutfrom_categoriesInput`
 */
export type PostCategoryCreateOrConnectWithoutfrom_categoriesInput = Prisma.PostCategoryCreateOrConnectWithoutfrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateWithoutOriginalPostInput`
 */
export type CommentCreateWithoutOriginalPostInput = Prisma.CommentCreateWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.CommentCreateOrConnectWithoutoriginalPostInput`
 */
export type CommentCreateOrConnectWithoutoriginalPostInput = Prisma.CommentCreateOrConnectWithoutoriginalPostInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateWithoutPostInput`
 */
export type UserUpdateWithoutPostInput = Prisma.UserUpdateWithoutPostInput

/**
 * @deprecated Renamed to `Prisma.UserUpsertWithoutPostInput`
 */
export type UserUpsertWithoutPostInput = Prisma.UserUpsertWithoutPostInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateWithWhereUniqueWithoutFrom_categoriesInput`
 */
export type PostCategoryUpdateWithWhereUniqueWithoutFrom_categoriesInput = Prisma.PostCategoryUpdateWithWhereUniqueWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateManyWithWhereWithoutFrom_categoriesInput`
 */
export type PostCategoryUpdateManyWithWhereWithoutFrom_categoriesInput = Prisma.PostCategoryUpdateManyWithWhereWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryScalarWhereInput`
 */
export type PostCategoryScalarWhereInput = Prisma.PostCategoryScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpsertWithWhereUniqueWithoutFrom_categoriesInput`
 */
export type PostCategoryUpsertWithWhereUniqueWithoutFrom_categoriesInput = Prisma.PostCategoryUpsertWithWhereUniqueWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateWithWhereUniqueWithoutOriginalPostInput`
 */
export type CommentUpdateWithWhereUniqueWithoutOriginalPostInput = Prisma.CommentUpdateWithWhereUniqueWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateManyWithWhereWithoutOriginalPostInput`
 */
export type CommentUpdateManyWithWhereWithoutOriginalPostInput = Prisma.CommentUpdateManyWithWhereWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.CommentUpsertWithWhereUniqueWithoutOriginalPostInput`
 */
export type CommentUpsertWithWhereUniqueWithoutOriginalPostInput = Prisma.CommentUpsertWithWhereUniqueWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.PostCreateWithoutCommentInput`
 */
export type PostCreateWithoutCommentInput = Prisma.PostCreateWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.PostCreateOrConnectWithoutCommentInput`
 */
export type PostCreateOrConnectWithoutCommentInput = Prisma.PostCreateOrConnectWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.UserCreateWithoutCommentInput`
 */
export type UserCreateWithoutCommentInput = Prisma.UserCreateWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOrConnectWithoutCommentInput`
 */
export type UserCreateOrConnectWithoutCommentInput = Prisma.UserCreateOrConnectWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateWithoutCommentInput`
 */
export type PostUpdateWithoutCommentInput = Prisma.PostUpdateWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.PostUpsertWithoutCommentInput`
 */
export type PostUpsertWithoutCommentInput = Prisma.PostUpsertWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateWithoutCommentInput`
 */
export type UserUpdateWithoutCommentInput = Prisma.UserUpdateWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.UserUpsertWithoutCommentInput`
 */
export type UserUpsertWithoutCommentInput = Prisma.UserUpsertWithoutCommentInput

/**
 * @deprecated Renamed to `Prisma.PostCreateWithoutCategoriesInput`
 */
export type PostCreateWithoutCategoriesInput = Prisma.PostCreateWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.PostCreateOrConnectWithoutcategoriesInput`
 */
export type PostCreateOrConnectWithoutcategoriesInput = Prisma.PostCreateOrConnectWithoutcategoriesInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateWithWhereUniqueWithoutCategoriesInput`
 */
export type PostUpdateWithWhereUniqueWithoutCategoriesInput = Prisma.PostUpdateWithWhereUniqueWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateManyWithWhereWithoutCategoriesInput`
 */
export type PostUpdateManyWithWhereWithoutCategoriesInput = Prisma.PostUpdateManyWithWhereWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.PostUpsertWithWhereUniqueWithoutCategoriesInput`
 */
export type PostUpsertWithWhereUniqueWithoutCategoriesInput = Prisma.PostUpsertWithWhereUniqueWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistCreateWithoutDonutInput`
 */
export type SpotifyPlaylistCreateWithoutDonutInput = Prisma.SpotifyPlaylistCreateWithoutDonutInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistCreateOrConnectWithoutDonutInput`
 */
export type SpotifyPlaylistCreateOrConnectWithoutDonutInput = Prisma.SpotifyPlaylistCreateOrConnectWithoutDonutInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpdateWithoutDonutInput`
 */
export type SpotifyPlaylistUpdateWithoutDonutInput = Prisma.SpotifyPlaylistUpdateWithoutDonutInput

/**
 * @deprecated Renamed to `Prisma.SpotifyPlaylistUpsertWithoutDonutInput`
 */
export type SpotifyPlaylistUpsertWithoutDonutInput = Prisma.SpotifyPlaylistUpsertWithoutDonutInput

/**
 * @deprecated Renamed to `Prisma.DonutCreateWithoutSpotifyPlaylistInput`
 */
export type DonutCreateWithoutSpotifyPlaylistInput = Prisma.DonutCreateWithoutSpotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.DonutCreateOrConnectWithoutspotifyPlaylistInput`
 */
export type DonutCreateOrConnectWithoutspotifyPlaylistInput = Prisma.DonutCreateOrConnectWithoutspotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.DonutUpdateWithWhereUniqueWithoutSpotifyPlaylistInput`
 */
export type DonutUpdateWithWhereUniqueWithoutSpotifyPlaylistInput = Prisma.DonutUpdateWithWhereUniqueWithoutSpotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.DonutUpdateManyWithWhereWithoutSpotifyPlaylistInput`
 */
export type DonutUpdateManyWithWhereWithoutSpotifyPlaylistInput = Prisma.DonutUpdateManyWithWhereWithoutSpotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.DonutScalarWhereInput`
 */
export type DonutScalarWhereInput = Prisma.DonutScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.DonutUpsertWithWhereUniqueWithoutSpotifyPlaylistInput`
 */
export type DonutUpsertWithWhereUniqueWithoutSpotifyPlaylistInput = Prisma.DonutUpsertWithWhereUniqueWithoutSpotifyPlaylistInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateWithoutAuthorInput`
 */
export type PostUpdateWithoutAuthorInput = Prisma.PostUpdateWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateWithoutAuthorInput`
 */
export type CommentUpdateWithoutAuthorInput = Prisma.CommentUpdateWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.PostCategoryUpdateWithoutFrom_categoriesInput`
 */
export type PostCategoryUpdateWithoutFrom_categoriesInput = Prisma.PostCategoryUpdateWithoutFrom_categoriesInput

/**
 * @deprecated Renamed to `Prisma.CommentUpdateWithoutOriginalPostInput`
 */
export type CommentUpdateWithoutOriginalPostInput = Prisma.CommentUpdateWithoutOriginalPostInput

/**
 * @deprecated Renamed to `Prisma.PostUpdateWithoutCategoriesInput`
 */
export type PostUpdateWithoutCategoriesInput = Prisma.PostUpdateWithoutCategoriesInput

/**
 * @deprecated Renamed to `Prisma.DonutUpdateWithoutSpotifyPlaylistInput`
 */
export type DonutUpdateWithoutSpotifyPlaylistInput = Prisma.DonutUpdateWithoutSpotifyPlaylistInput