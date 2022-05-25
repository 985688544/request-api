// 
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
