package common

import (
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"gmanager/app/constants"
)

// Login 登录页面


// 调试页面
func Debug(r *ghttp.Request) {
	if constants.DEBUG {
		constants.DEBUG = false
		g.DB().SetDebug(false)
		r.Response.Writeln("debug close ~!~ ")
	} else {
		constants.DEBUG = true
		g.DB().SetDebug(true)
		r.Response.Writeln("debug open ~!~ ")
	}
}
