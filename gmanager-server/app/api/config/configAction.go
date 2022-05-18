package config

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/glog"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/util/gconv"
	"gmanager/app/service/config"
	"gmanager/library/base"
)

type Action struct {
	base.BaseRouter
}

// path: /index
func (action *Action) Index(r *ghttp.Request) {
	tplFile := "pages/system/config_index.html"
	err := r.Response.WriteTpl(tplFile, g.Map{
		"now": gtime.Datetime(),
	})

	if err != nil {
		glog.Error(context.TODO(), err)
	}
}

// path: /get/{id}
func (action *Action) Get(r *ghttp.Request) {
	id := r.Get("id").Int64()
	model, err := config.GetById(id)
	if err != nil {
		base.Fail(r, err.Error())
	}

	base.Succ(r, model)
}

// path: /delete/{id}
func (action *Action) Delete(r *ghttp.Request) {
	id := r.Get("id").Int64()
	_, err := config.Delete(id, base.GetUser(r).Id)
	if err != nil {
		base.Fail(r, err.Error())
	}

	base.Succ(r, "")
}

// path: /save
func (action *Action) Save(r *ghttp.Request) {
	request := new(config.Request)
	err := gconv.Struct(r.GetQueryMap(), request)
	if err != nil {
		glog.Error(context.TODO(), "save struct error", err)
		base.Error(r, "获取参数异常")
	}

	request.UserId = base.GetUser(r).Id
	_, err = config.Save(request)
	if err != nil {
		base.Fail(r, "保存失败")
	}

	base.Succ(r, "")
}

// path: /list
func (action *Action) List(r *ghttp.Request) {
	form := base.NewForm(r.GetQueryMap())

	list, err := config.List(&form)
	if err != nil {
		glog.Error(context.TODO(), "page error", err)
		base.Error(r, err.Error())
	}

	base.Succ(r, list)
}

// path: /page
func (action *Action) Page(r *ghttp.Request) {
	form := base.NewForm(r.GetQueryMap())
	page, err := config.Page(&form)
	if err != nil {
		glog.Error(context.TODO(), "page error", err)
		base.Error(r, err.Error())
	}

	base.Succ(r,
		g.Map{
			"page":    form.Page,
			"rows":    page,
			"total":   form.TotalPage,
			"records": form.TotalSize,
		})
}

// path: /jqgrid
func (action *Action) Jqgrid(r *ghttp.Request) {
	form := base.NewForm(r.GetQueryMap())
	page, err := config.Page(&form)
	if err != nil {
		glog.Error(context.TODO(), "jqgrid error", err)
		base.Error(r, err.Error())
	}

	r.Response.WriteJson(g.Map{
		"page":    form.Page,
		"rows":    page,
		"total":   form.TotalPage,
		"records": form.TotalSize,
	})
}

// path: /type
func (action *Action) Type(r *ghttp.Request) {
	form := base.NewForm(r.GetQueryMap())

	//userId := base.GetUser(r).Id
	//user := SysUser{Id: userId}.Get()
	form.SetParam("parentId", "0")
	form.OrderBy = "sort asc,create_time desc"

	list, err := config.List(&form)
	if err != nil {
		glog.Error(context.TODO(), "type error", err)
		base.Error(r, err.Error())
	}
	base.Succ(r, list)
}
