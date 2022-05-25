import { IResult, IUser } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class 用户登录<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 获取登录验证码
   *
   * @tags 用户登录
   * @name GetImageCodeUsingGet
   * @summary 获取登录验证码
   * @request GET:/login/getImageCode
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  getImageCodeUsingGet = (params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/login/getImageCode`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取用户信息包含推广码
   *
   * @tags 用户登录
   * @name GetUserInfoUsingGet
   * @summary 获取用户信息包含推广码
   * @request GET:/login/getUserInfo
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  getUserInfoUsingGet = (params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/login/getUserInfo`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 用户登录验证
   *
   * @tags 用户登录
   * @name LoginUsingPost
   * @summary 用户登录
   * @request POST:/login/login
   * @response `200` `IResult` 请求成功
   * @response `201` `unknown` Created
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` 请求路径没有或页面跳转路径不对
   */
  loginUsingPost = (user: IUser, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/login/login`,
      method: "POST",
      body: user,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 用户修改密码
   *
   * @tags 用户登录
   * @name UpdatePasswordUsingPost
   * @summary 用户修改密码
   * @request POST:/login/updatePassword
   * @response `200` `IResult` OK
   * @response `201` `unknown` Created
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  updatePasswordUsingPost = (account: IUser, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/login/updatePassword`,
      method: "POST",
      body: account,
      type: ContentType.Json,
      ...params,
    });
}
