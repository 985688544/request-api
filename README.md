# request-api
lerna+rollup对指定子包的api文件进行编译打包为js与.d.ts模块


```bash
  yarn add oms-request-api  
```

## Usage 🍉

创建一个utils/request.ts对请求做中间件处理

`utils/request.ts`

```ts
import { Api, HttpClient } from "oms-request-api";
import { AxiosRequestConfig, AxiosResponse } from "axios";

//处理查询参数为数组的情况
import * as qs from "qs";
const http = new HttpClient();

//默认请求中间件
const requestMiddleWare = (config: AxiosRequestConfig) => {
  config = {
    ...config,
    headers: {
      user_token: localStorage.getItem("token") ?? "",
      // user_id: '8',
    },
    paramsSerializer: (params: unknown) => {
      return qs.stringify(params, { arrayFormat: "comma" });
    },
  };
  return config;
};

//默认响应中间件
const responseMiddleWare = (res: AxiosResponse) => {
  if (res.status !== 200) {
    // TODO自定义一些拦截配置
    throw new Error("请求出错");
  }
  console.log(res, "返回值");
  return res.data.data;
};

const responseErrHandler = (error: any) => {
  return new Promise<Response>((resolve, reject) => {
    reject(error.response.data);
  });
};

http.instance.interceptors.request.use(requestMiddleWare);
http.instance.interceptors.response.use(responseMiddleWare, responseErrHandler);

const api = new Api(http);
export default api;

```

``` vue
// 使用
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import api from "@/utils/request";
export default {
  data() {
    return {};
  },
  mounted() {
    api.getDic.getDicUsingGet({ code: "2" }, true).then((res) => {
      console.log(res, "Res");
    });
  },
};
</script>
```


## config is required 🐞

`package.json`

```js
  // 公共generate生成配置，具体配置可参考https://github.com/yjh30/swagger-api-codegen-cli/blob/master/swagger-ts-api.md
const generateApiConfig = {
  axios: true,
  // modular: true,
  routeTypes: true,
  moduleNameFirstTag: false,
  moduleNameIndex: 1,
}

// eslint-disable-next-line no-restricted-globals
module.exports =  [
  {
    packageName: 'oms-request-api',
    outputDir: 'packages/oms-request-api/api',
    swaggerUrl: 'http://43.129.178.164:8070/v2/api-docs',
    generateApiConfig: {
      ...generateApiConfig
    },
  },
  {
    packageName: 'ems-request-api',
    outputDir: 'packages/ems-request-api/api',
    swaggerUrl: 'http://43.129.178.164:8070/v2/api-docs',
    generateApiConfig: {
      ...generateApiConfig
    },
  }
]

```