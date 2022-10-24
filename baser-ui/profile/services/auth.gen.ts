/** Generate by swagger-axios-codegen */
// @ts-ignore
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-ignore
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class LoginService {
  /**
   * Login to default provider
   */
  static login(
    params: {
      /**  */
      redirectUri?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/login';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { redirect_uri: params['redirectUri'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Login by using the basic authentication
   */
  static login1(
    params: {
      /**  */
      redirectUri?: string;
      /** requestBody */
      body?: BasicLogin;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { redirect_uri: params['redirectUri'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Login to specific OAuth2 provider (google, facebook,..) by redirects
   */
  static login2(
    params: {
      /**  */
      provider: string;
      /**  */
      redirectUri?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/login/{provider}';
      url = url.replace('{provider}', params['provider'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { redirect_uri: params['redirectUri'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class LogoutService {
  /**
   * Remove cookies and sign user out of the system
   */
  static logout(
    params: {
      /** URL that user will be redirected to */
      redirectUri?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/logout';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { redirect_uri: params['redirectUri'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class LogtoService {
  /**
   * Login to user by code (code, email, phone) or id
   */
  static logto(
    params: {
      /**  */
      user: string;
      /**  */
      redirectUri?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/logto/{user}';
      url = url.replace('{user}', params['user'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { redirect_uri: params['redirectUri'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class PasswordService {
  /**
   *
   */
  static create(
    params: {
      /**  */
      redirectUri?: string;
      /** requestBody */
      body?: ForgetPasswordRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/password/forget/create';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { redirect_uri: params['redirectUri'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static confirm(
    params: {
      /** requestBody */
      body?: ResetPasswordConfirmRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/password/forget/confirm';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ProfileService {
  /**
   * [LOGGEDIN] Get current logged in User profile, NEW user does not have roles info. Return HTTP-401 for INACTIVE users
   */
  static profile(options: IRequestOptions = {}): Promise<user> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [LOGGEDIN] Update user profile. Return HTTP-401 for INACTIVE/Invalid users, HTTP-400 for invalid input
   */
  static profile1(
    params: {
      /** requestBody */
      body?: user;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
 * [ADMIN] Admin submit Basic profile (email/pass login) to register for NEW user account to the system.
This type of user has almost nothing, just profile, no roles. Only after approval from Admin, the status NEW -> ACTIVE
user can have roles in JWT, therefore they can access other business features.
Return HTTP-201 for already created or duplicated info, HTTP-400 for invalid input, HTTP-401 for invalid user
 */
  static profile2(
    params: {
      /** requestBody */
      body?: Registration;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [LOGGEDIN] Get User profile for active LOGGED IN user (Return HTTP-401 for NEW/INACTIVE users)
   */
  static profile3(
    params: {
      /**  */
      id: string;
      /**  */
      fields?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any | null> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [USER] Search for profile that require at least 3 chars and optional meta info
   */
  static search(
    params: {
      /**  */
      term: string;
      /**  */
      isSystem?: boolean;
      /**  */
      isPublisher?: boolean;
      /**  */
      isSupplier?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<user[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        term: params['term'],
        is_system: params['isSystem'],
        is_publisher: params['isPublisher'],
        is_supplier: params['isSupplier']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [LOGGEDIN] User change their password, need current password. Return HTTP-401 for INACTIVE/Invalid users, HTTP-400 for invalid input
   */
  static change(
    params: {
      /** requestBody */
      body?: BasicPasswordUpdate;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/password/change';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Reset anyone password by Admin. Return HTTP-404 for non-existance profile, HTTP-400 for invalid input, HTTP-401 for invalid user
   */
  static reset(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/password/reset';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Activate user profile: NEW -> ACTIVE. Return HTTP-404 for non-existance profile, HTTP-401 for invalid user
   */
  static activate(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/activate';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Deactivate user profile: NEW / ACTIVE -> INACTIVE. Return HTTP-404 for non-existance profile, HTTP-401 for invalid user
   */
  static deactivate(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/deactivate';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Reactivate an INACTIVE user profile: INACTIVE -> ACTIVE. Return HTTP-404 for non-existance profile, HTTP-401 for invalid user
   */
  static reactivate(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/reactivate';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Update user roles. Return HTTP-404 for non-existance profile, HTTP-401 for invalid user, HTTP-400 for invalid input
   */
  static roles(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/roles';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Update user roles. Return HTTP-404 for non-existance profile, HTTP-401 for invalid user, HTTP-400 for invalid input
   */
  static add(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/roles/add';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * [ADMIN] Update user roles. Return HTTP-404 for non-existance profile, HTTP-401 for invalid user, HTTP-400 for invalid input
   */
  static remove(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/profile/{id}/roles/remove';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class StatusService {
  /**
   * Get loggin status: 1 if logged-in, otherwise 0
   */
  static status(options: IRequestOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/status';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface BasicLogin {
  /**  */
  name: string;

  /** https:\/\/www.npmjs.com\/package\/js-sha256
sha256('The quick brown fox jumps over the lazy dog') => d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592 */
  sha256: string;
}

export interface BasicPasswordUpdate {
  /** Current user password
https:\/\/www.npmjs.com\/package\/js-sha256
sha256('The quick brown fox jumps over the lazy dog') => d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592 */
  curent_sha256: string;

  /** New user password
https:\/\/www.npmjs.com\/package\/js-sha256
sha256('The quick brown fox jumps over the lazy dog') => d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592 */
  new_sha256: string;
}

export interface ForgetPasswordRequest {
  /**  */
  email?: string;
}

export interface Registration {
  /**  */
  login?: BasicLogin;

  /**  */
  user?: user;
}

export interface ResetPasswordConfirmRequest {
  /**  */
  t?: string;

  /**  */
  new_sha256?: string;
}

export interface user {
  /** Default null, to use https:\/\/cdn.selless.com\/u\/a\/{profile-id} */
  avatar?: string;

  /** (419) 306-2827 */
  phone?: string;

  /** Beutler */
  last_name?: string;

  /** Lauril */
  first_name?: string;

  /** No. 407 */
  address1?: string;

  /** Lynshire Lane */
  address2?: string;

  /** 45840 */
  postal_code?: string;

  /** Findlay */
  city?: string;

  /** Ohio */
  state?: string;

  /** US */
  country?: string;

  /** United States */
  country_code?: string;

  /** National ID\/Passport No */
  passport?: string;

  /**  */
  skype?: string;

  /**  */
  wechat?: string;

  /**  */
  name2?: string;

  /**  */
  email2?: string;

  /**  */
  phone2?: string;

  /**  */
  skype2?: string;

  /**  */
  wechat2?: string;

  /**  */
  provider?: provider_type;

  /**  */
  meta?: user_meta;

  /** Unique login name for the profile, email will be used as default, also using for login and search */
  code?: string;

  /**  */
  status?: profile_status;

  /**  */
  name?: string;

  /** some.one@aol.com */
  email?: string;

  /**  */
  roles?: string[];

  /**  */
  id?: string;
}

export interface user_meta {
  /**  */
  is_system?: boolean;

  /**  */
  is_publisher?: boolean;

  /**  */
  is_supplier?: boolean;
}

export enum profile_status {
  'NEW' = 'NEW',
  'ACTIVE' = 'ACTIVE',
  'INACTIVE' = 'INACTIVE'
}

export enum provider_type {
  'BASIC' = 'BASIC',
  'GOOGLE' = 'GOOGLE',
  'FACEBOOK' = 'FACEBOOK',
  'MICROSOFT' = 'MICROSOFT'
}
