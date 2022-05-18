package boot

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/glog"
	"net/http"
)

// CORS 允许接口跨域请求
func CORS(r *ghttp.Request) {
	// 使用框架默认的 CORS 设置
	r.Response.CORSDefault()
	if r.Method == "OPTIONS" {
		r.Response.WriteStatusExit(http.StatusOK)
	} else {
		r.Middleware.Next()
	}
}

// 用于配置初始化.
func init() {
	glog.Info(context.TODO(), "########service start...")

	v := g.View()
	c := g.Config()
	s := g.Server()
	s.BindMiddleware("/**", CORS)
	// 配置对象及视图对象配置
	c.AddPath("config")

	v.AddPath("template")
	glog.SetStdoutPrint(true)
	s.SetNameToUriType(ghttp.UriTypeAllLower)

	glog.Info(context.TODO(), "########service finish.")
}
