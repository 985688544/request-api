export interface IPickupVo {
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
export interface IResult {
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

export interface IResultData {
  items?: object;

  /** @format int32 */
  total?: number;
}

export interface ISendOfficialAccountsTemplateMsg {
  customerId?: string;
  firstParams?: string;
  keywordParams?: string[];
  remarkParams?: string[];

  /** @format int32 */
  templateId?: number;
  toOpenIds?: string[];
}

export interface IUser {
  key?: string;
  oldPassword?: string;
  password?: string;
  username?: string;
  validateCode?: string;
}

export interface IGetDicUsingGetParams {
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
export type IGetDicListUsingGetPayload = number;

export interface IGetDicListUsingGetParams {
  /** codes */
  codes: string[];

  /**
   * 1
   * @format int32
   */
  启用状态?: number;
}

export interface ICancelByIdUsingGetParams {
  /**
   * id
   * @format int32
   */
  id: number;
}

export interface IExportDataUsingGetParams {
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

export interface IGetOrderListByUserIdUsingGetParams {
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

export interface IGetPickupListByUserIdUsingGetParams {
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
