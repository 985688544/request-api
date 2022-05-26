import axios from 'axios';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(_a) {
        var _this = this;
        if (_a === void 0) { _a = {}; }
        var securityWorker = _a.securityWorker, secure = _a.secure, format = _a.format, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = function (data) {
            _this.securityData = data;
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, responseFormat;
            var secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, body = _a.body, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker(this.securityData)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        responseFormat = (format && this.format) || void 0;
                        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                            requestParams.headers.common = { Accept: "*/*" };
                            requestParams.headers.post = {};
                            requestParams.headers.put = {};
                            body = this.createFormData(body);
                        }
                        return [2 /*return*/, this.instance.request(__assign(__assign({}, requestParams), { headers: __assign(__assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), params: query, responseType: responseFormat, data: body, url: path }))];
                }
            });
        }); };
        this.instance = axios.create(__assign(__assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "//43.129.178.164:8070" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        return __assign(__assign(__assign(__assign({}, this.instance.defaults), params1), (params2 || {})), { headers: __assign(__assign(__assign({}, (this.instance.defaults.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    HttpClient.prototype.createFormData = function (input) {
        return Object.keys(input || {}).reduce(function (formData, key) {
            var property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : "".concat(property));
            return formData;
        }, new FormData());
    };
    return HttpClient;
}());
/**
 * @title 奈飞直通车运营商Server系统-RESTFUL APIs
 * @version 1.0
 * @termsOfService http://blog.didispace.com/
 * @baseUrl //43.129.178.164:8070
 * @contact ARZ
 *
 * 更多Spring Boot相关文章请关注：http://blog.didispace.com/
 */
var Api = /** @class */ (function () {
    function Api(http) {
        var _this = this;
        this.getDic = {
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
            getDicUsingGet: function (query, status, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/dictionary/getDic", method: "GET", query: query, body: status, type: ContentType.Json }, params));
            }
        };
        this.getDicList = {
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
            getDicListUsingGet: function (query, status, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/dictionary/getDicList", method: "GET", query: query, body: status, type: ContentType.Json }, params));
            }
        };
        this.getImageCode = {
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
            getImageCodeUsingGet: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/login/getImageCode", method: "GET", type: ContentType.Json }, params));
            }
        };
        this.getUserInfo = {
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
            getUserInfoUsingGet: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/login/getUserInfo", method: "GET", type: ContentType.Json }, params));
            }
        };
        this.login = {
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
            loginUsingPost: function (user, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/login/login", method: "POST", body: user, type: ContentType.Json }, params));
            }
        };
        this.updatePassword = {
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
            updatePasswordUsingPost: function (account, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/login/updatePassword", method: "POST", body: account, type: ContentType.Json }, params));
            }
        };
        this.addPickUp = {
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
            addPickUpUsingPost: function (提取申请对象, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/addPickUp", method: "POST", body: 提取申请对象, type: ContentType.Json }, params));
            }
        };
        this.cancelById = {
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
            cancelByIdUsingGet: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/cancelById", method: "GET", query: query, type: ContentType.Json }, params));
            }
        };
        this.exportData = {
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
            exportDataUsingGet: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/exportData", method: "GET", query: query, type: ContentType.Json }, params));
            }
        };
        this.getCommissionByUserId = {
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
            getCommissionByUserIdUsingGet: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/getCommissionByUserId", method: "GET", type: ContentType.Json }, params));
            }
        };
        this.getOrderListByUserId = {
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
            getOrderListByUserIdUsingGet: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/getOrderListByUserId", method: "GET", query: query, type: ContentType.Json }, params));
            }
        };
        this.getPickupListByUserId = {
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
            getPickupListByUserIdUsingGet: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/getPickupListByUserId", method: "GET", query: query, type: ContentType.Json }, params));
            }
        };
        this.sendWxCode = {
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
            sendWxCodeUsingGet: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/order/sendWxCode", method: "GET", type: ContentType.Json }, params));
            }
        };
        this.sendOfficialAccountsTemplateMsg = {
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
            sendOfficialAccountsTemplateMsgUsingPost: function (sendOfficialAccountsTemplateMsg, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/wxTemplateMsg/sendOfficialAccountsTemplateMsg", method: "POST", body: sendOfficialAccountsTemplateMsg, type: ContentType.Json }, params));
            }
        };
        this.http = http;
    }
    return Api;
}());

export { Api, ContentType, HttpClient };
