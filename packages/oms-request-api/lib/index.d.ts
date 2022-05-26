import { AxiosRequestConfig, ResponseType, AxiosInstance, AxiosResponse } from 'axios';

interface IPickupVo {
    /** @format date-time */
    addTime?: string;
    bankCardNumber?: string;
    bankName?: string;
    bankUserName?: string;
    haveMoney?: string;
    /** @format int32 */
    id?: number;
    key?: string;
    keyCode?: string;
    /** @format date-time */
    modTime?: string;
    pickUpCash?: number;
    refuseReason?: string;
    /** @format int32 */
    status?: number;
    stillMoney?: string;
    thirdAdminId?: string;
    totalMoney?: string;
    wxResult?: string;
    /** @format date-time */
    wxTime?: string;
}
/**
 * 返回响应数据
 */
interface IResult {
    /**
     * 请求结果编码 200成功
     * @format int32
     */
    code?: number;
    /** 对象结果 */
    data?: IResultData;
    err?: string;
    /** 错误信息 */
    message?: string;
    type?: string;
}
interface IResultData {
    items?: object;
    /** @format int32 */
    total?: number;
}
interface ISendOfficialAccountsTemplateMsg {
    customerId?: string;
    firstParams?: string;
    keywordParams?: string[];
    remarkParams?: string[];
    /** @format int32 */
    templateId?: number;
    toOpenIds?: string[];
}
interface IUser {
    key?: string;
    oldPassword?: string;
    password?: string;
    username?: string;
    validateCode?: string;
}
interface IGetDicUsingGetParams {
    /** code */
    字典类型: string;
    /**
     * 1
     * @format int32
     */
    启用状态?: number;
}
/**
 * @format int32
 */
declare type IGetDicListUsingGetPayload = number;
interface IGetDicListUsingGetParams {
    /** codes */
    codes: string[];
    /**
     * 1
     * @format int32
     */
    启用状态?: number;
}
interface ICancelByIdUsingGetParams {
    /**
     * id
     * @format int32
     */
    id: number;
}
interface IExportDataUsingGetParams {
    /** startTime */
    startTime?: string;
    /** endTime */
    endTime?: string;
    /**
     * renew
     * @format int32
     */
    renew?: number;
}
interface IGetOrderListByUserIdUsingGetParams {
    /** startTime */
    startTime?: string;
    /** endTime */
    endTime?: string;
    /**
     * renew
     * @format int32
     */
    renew?: number;
}
interface IGetPickupListByUserIdUsingGetParams {
    /**
     * startPage
     * @format int32
     */
    startPage: number;
    /**
     * pageSize
     * @format int32
     */
    pageSize: number;
}

declare type QueryParamsType = Record<string | number, any>;
interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
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
declare class Api<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    getDic: {
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
        getDicUsingGet: (query: IGetDicUsingGetParams, status: any, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    getDicList: {
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
        getDicListUsingGet: (query: IGetDicListUsingGetParams, status: IGetDicListUsingGetPayload, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    getImageCode: {
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
        getImageCodeUsingGet: (params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    getUserInfo: {
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
        getUserInfoUsingGet: (params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    login: {
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
        loginUsingPost: (user: IUser, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    updatePassword: {
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
        updatePasswordUsingPost: (account: IUser, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    addPickUp: {
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
        addPickUpUsingPost: (提取申请对象: IPickupVo, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    cancelById: {
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
        cancelByIdUsingGet: (query: ICancelByIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    exportData: {
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
        exportDataUsingGet: (query: IExportDataUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    getCommissionByUserId: {
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
        getCommissionByUserIdUsingGet: (params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    getOrderListByUserId: {
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
        getOrderListByUserIdUsingGet: (query: IGetOrderListByUserIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    getPickupListByUserId: {
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
        getPickupListByUserIdUsingGet: (query: IGetPickupListByUserIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    sendWxCode: {
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
        sendWxCodeUsingGet: (params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
    sendOfficialAccountsTemplateMsg: {
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
        sendOfficialAccountsTemplateMsgUsingPost: (sendOfficialAccountsTemplateMsg: ISendOfficialAccountsTemplateMsg, params?: RequestParams) => Promise<AxiosResponse<IResult>>;
    };
}

export { Api, ApiConfig, ContentType, FullRequestParams, HttpClient, ICancelByIdUsingGetParams, IExportDataUsingGetParams, IGetDicListUsingGetParams, IGetDicListUsingGetPayload, IGetDicUsingGetParams, IGetOrderListByUserIdUsingGetParams, IGetPickupListByUserIdUsingGetParams, IPickupVo, IResult, IResultData, ISendOfficialAccountsTemplateMsg, IUser, QueryParamsType, RequestParams };
