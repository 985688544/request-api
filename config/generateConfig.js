const generateApiConfig = {}
module.exports = [
    {
        packageName: 'oms',
        outputDir: 'packages/oms/api',
        swaggerUrl: 'http://43.129.178.164:8070/v2/api-docs',
        generateApiConfig: {
          ...generateApiConfig
        },
      },
      {
        packageName: 'ems',
        outputDir: 'packages/ems/api',
        swaggerUrl: 'http://43.129.178.164:8070/v2/api-docs',
        generateApiConfig: {
          ...generateApiConfig
        },
      }
]