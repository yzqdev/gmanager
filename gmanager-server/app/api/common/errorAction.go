package common

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/glog"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
	"gmanager/library/base"
)

func Error301(r *ghttp.Request) {
	respError(r, 301)
}

func Error404(r *ghttp.Request) {
	respError(r, 404)
}

func Error500(r *ghttp.Request) {
	respError(r, 500)
}

func respError(r *ghttp.Request, errorCode int) {
	glog.Println(r.URL.Path, errorCode, "error page")
	if gstr.Contains(r.URL.Path, "html") {
		err := r.Response.WriteTpl("error/"+gconv.String(errorCode)+".html", g.Map{
			"error": "",
		})

		if err != nil {
			glog.Error(err)
		}
	} else {
		base.Resp(r, errorCode, "error page", r.URL.Path)
	}
}
