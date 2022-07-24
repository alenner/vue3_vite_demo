// 环境变量
const serveConfig = {
  "VITE_APP_BASE_URL": "https://testsaasapi.shetuan.pro"
}

try {
  if (module) {
    module.exports = serveConfig
  } else {
    window.serverConfig = serveConfig
  }
} catch (e) {
  // 跳过
}