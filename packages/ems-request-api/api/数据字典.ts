import {
  IGetDicListUsingGetParams,
  IGetDicListUsingGetPayload,
  IGetDicUsingGetParams,
  IResult,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class 数据字典<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 获取数据字典
   *
   * @tags 数据字典
   * @name GetDicUsingGet
   * @summary 获取数据字典
   * @request GET:/dictionary/getDic
   * @response `200` `IResult` 请求成功
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` 请求路径没有或页面跳转路径不对
   */
  getDicUsingGet = (query: IGetDicUsingGetParams, status: any, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/dictionary/getDic`,
      method: "GET",
      query: query,
      body: status,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取多个数据字典
   *
   * @tags 数据字典
   * @name GetDicListUsingGet
   * @summary 获取多个数据字典
   * @request GET:/dictionary/getDicList
   * @response `200` `IResult` 请求成功
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` 请求路径没有或页面跳转路径不对
   */
  getDicListUsingGet = (
    query: IGetDicListUsingGetParams,
    status: IGetDicListUsingGetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IResult, unknown>({
      path: `/dictionary/getDicList`,
      method: "GET",
      query: query,
      body: status,
      type: ContentType.Json,
      ...params,
    });
}
