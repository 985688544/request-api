import {
  ICancelByIdUsingGetParams,
  IExportDataUsingGetParams,
  IGetOrderListByUserIdUsingGetParams,
  IGetPickupListByUserIdUsingGetParams,
  IPickupVo,
  IResult,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class 订单<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 提交提取申请
   *
   * @tags 订单
   * @name AddPickUpUsingPost
   * @summary 提交提取申请
   * @request POST:/order/addPickUp
   * @response `200` `IResult` OK
   * @response `201` `unknown` Created
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  addPickUpUsingPost = (提取申请对象: IPickupVo, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/addPickUp`,
      method: "POST",
      body: 提取申请对象,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 取消提取申请
   *
   * @tags 订单
   * @name CancelByIdUsingGet
   * @summary 取消提取申请
   * @request GET:/order/cancelById
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  cancelByIdUsingGet = (query: ICancelByIdUsingGetParams, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/cancelById`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 导出明细
   *
   * @tags 订单
   * @name ExportDataUsingGet
   * @summary 导出明细
   * @request GET:/order/exportData
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  exportDataUsingGet = (query: IExportDataUsingGetParams, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/exportData`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 用户佣金查询
   *
   * @tags 订单
   * @name GetCommissionByUserIdUsingGet
   * @summary 用户佣金查询
   * @request GET:/order/getCommissionByUserId
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  getCommissionByUserIdUsingGet = (params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/getCommissionByUserId`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 数据查询
   *
   * @tags 订单
   * @name GetOrderListByUserIdUsingGet
   * @summary 数据查询
   * @request GET:/order/getOrderListByUserId
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  getOrderListByUserIdUsingGet = (query: IGetOrderListByUserIdUsingGetParams, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/getOrderListByUserId`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取提取记录
   *
   * @tags 订单
   * @name GetPickupListByUserIdUsingGet
   * @summary 获取提取记录
   * @request GET:/order/getPickupListByUserId
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  getPickupListByUserIdUsingGet = (query: IGetPickupListByUserIdUsingGetParams, params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/getPickupListByUserId`,
      method: "GET",
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 发送公众号验证码
   *
   * @tags 订单
   * @name SendWxCodeUsingGet
   * @summary 发送公众号验证码
   * @request GET:/order/sendWxCode
   * @response `200` `IResult` OK
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  sendWxCodeUsingGet = (params: RequestParams = {}) =>
    this.http.request<IResult, unknown>({
      path: `/order/sendWxCode`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });
}
