import axios from 'axios';

var ContentType;
(function (ContentType) {
  ContentType["Json"] = "application/json";
  ContentType["FormData"] = "multipart/form-data";
  ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
class HttpClient {
    instance;
    securityData = null;
    securityWorker;
    secure;
    format;
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
      this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "//43.129.178.164:8070" });
      this.secure = secure;
      this.format = format;
      this.securityWorker = securityWorker;
    }
    setSecurityData = (data) => {
      this.securityData = data;
    };
    mergeRequestParams(params1, params2) {
      return {
        ...this.instance.defaults,
        ...params1,
        ...(params2 || {}),
        headers: {
          ...(this.instance.defaults.headers || {}),
          ...(params1.headers || {}),
          ...((params2 && params2.headers) || {}),
        },
      };
    }
    createFormData(input) {
      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(key, property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`);
        return formData;
      }, new FormData());
    }
    request = async ({ secure, path, type, query, format, body, ...params }) => {
      const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      const responseFormat = (format && this.format) || void 0;
      if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
        requestParams.headers.common = { Accept: "*/*" };
        requestParams.headers.post = {};
        requestParams.headers.put = {};
        body = this.createFormData(body);
      }
      return this.instance.request({
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      });
    };
}
/**
 * @title 奈飞直通车运营商Server系统-RESTFUL APIs
 * @version 1.0
 * @termsOfService http://blog.didispace.com/
 * @baseUrl //43.129.178.164:8070
 * @contact ARZ
 *
 * 更多Spring Boot相关文章请关注：http://blog.didispace.com/
 */
class Api {
    http;
    constructor(http) {
      this.http = http;
    }
    getDic = {
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
      getDicUsingGet: (query, status, params = {}) => this.http.request({
        path: `/dictionary/getDic`,
        method: "GET",
        query: query,
        body: status,
        type: ContentType.Json,
        ...params,
      }),
    };
    getDicList = {
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
      getDicListUsingGet: (query, status, params = {}) => this.http.request({
        path: `/dictionary/getDicList`,
        method: "GET",
        query: query,
        body: status,
        type: ContentType.Json,
        ...params,
      }),
    };
    getImageCode = {
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
      getImageCodeUsingGet: (params = {}) => this.http.request({
        path: `/login/getImageCode`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),
    };
    getUserInfo = {
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
      getUserInfoUsingGet: (params = {}) => this.http.request({
        path: `/login/getUserInfo`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),
    };
    login = {
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
      loginUsingPost: (user, params = {}) => this.http.request({
        path: `/login/login`,
        method: "POST",
        body: user,
        type: ContentType.Json,
        ...params,
      }),
    };
    updatePassword = {
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
      updatePasswordUsingPost: (account, params = {}) => this.http.request({
        path: `/login/updatePassword`,
        method: "POST",
        body: account,
        type: ContentType.Json,
        ...params,
      }),
    };
    addPickUp = {
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
      addPickUpUsingPost: (提取申请对象, params = {}) => this.http.request({
        path: `/order/addPickUp`,
        method: "POST",
        body: 提取申请对象,
        type: ContentType.Json,
        ...params,
      }),
    };
    cancelById = {
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
      cancelByIdUsingGet: (query, params = {}) => this.http.request({
        path: `/order/cancelById`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
    };
    exportData = {
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
      exportDataUsingGet: (query, params = {}) => this.http.request({
        path: `/order/exportData`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
    };
    getCommissionByUserId = {
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
      getCommissionByUserIdUsingGet: (params = {}) => this.http.request({
        path: `/order/getCommissionByUserId`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),
    };
    getOrderListByUserId = {
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
      getOrderListByUserIdUsingGet: (query, params = {}) => this.http.request({
        path: `/order/getOrderListByUserId`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
    };
    getPickupListByUserId = {
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
      getPickupListByUserIdUsingGet: (query, params = {}) => this.http.request({
        path: `/order/getPickupListByUserId`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
    };
    sendWxCode = {
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
      sendWxCodeUsingGet: (params = {}) => this.http.request({
        path: `/order/sendWxCode`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),
    };
    sendOfficialAccountsTemplateMsg = {
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
      sendOfficialAccountsTemplateMsgUsingPost: (sendOfficialAccountsTemplateMsg, params = {}) => this.http.request({
        path: `/wxTemplateMsg/sendOfficialAccountsTemplateMsg`,
        method: "POST",
        body: sendOfficialAccountsTemplateMsg,
        type: ContentType.Json,
        ...params,
      }),
    };
}

export { Api, ContentType, HttpClient };
