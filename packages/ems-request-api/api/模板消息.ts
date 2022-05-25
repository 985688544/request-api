import { IResult, ISendOfficialAccountsTemplateMsg } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class 模板消息<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 模板消息
   * @name SendOfficialAccountsTemplateMsgUsingPost
   * @summary sendOfficialAccountsTemplateMsg
   * @request POST:/wxTemplateMsg/sendOfficialAccountsTemplateMsg
   * @response `200` `IResult` OK
   * @response `201` `unknown` Created
   * @response `401` `unknown` Unauthorized
   * @response `403` `unknown` Forbidden
   * @response `404` `unknown` Not Found
   */
  sendOfficialAccountsTemplateMsgUsingPost = (
    sendOfficialAccountsTemplateMsg: ISendOfficialAccountsTemplateMsg,
    params: RequestParams = {},
  ) =>
    this.http.request<IResult, unknown>({
      path: `/wxTemplateMsg/sendOfficialAccountsTemplateMsg`,
      method: "POST",
      body: sendOfficialAccountsTemplateMsg,
      type: ContentType.Json,
      ...params,
    });
}
