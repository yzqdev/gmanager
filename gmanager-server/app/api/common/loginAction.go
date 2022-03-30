package common

import (
	"fmt"
	"github.com/gogf/gf/crypto/gmd5"
	"github.com/gogf/gf/net/ghttp"
	"github.com/gogf/gf/os/glog"
	"github.com/gogf/gf/util/gconv"
	"gmanager/app/constants"
	"gmanager/app/service/log"
	"gmanager/app/service/user"
	"gmanager/library"
	"gmanager/library/base"
	"gmanager/library/bean"
)

type LoginInput struct {
	Username string `p:"username"`
	Password string `p:"passwd"`
}
type Recover struct {
	Username string `p:"username"`
}

// Login 登录页面
// ShowAccount godoc
// @Summary Show a account
// @Description get string by ID
// @ID get-string-by-int
// @Accept  json
// @Produce  json
// @Param id path int true "Account ID"
// @Header 200 {string} Token "qwerty"
// @Router /accounts/{id} [get]


// 修改当前用户密码
func RecoverPassword(r *ghttp.Request) {

	request := new(user.Request)
	err := gconv.Struct(r.GetQueryMap(), request)
	if err != nil {
		glog.Error("save struct error", err)
		base.Error(r, "save error")
	}

	if err != nil {
		glog.Error(" Password error", err)
		base.Error(r, "密码错误.")
	}
	request.Password, _ = gmd5.Encrypt(request.Password + request.Salt)
	user.Save(request)

	if err != nil {
		glog.Error(" Password error", err)
		base.Error(r, "密码错误.")
	}

	base.Succ(r, "")
}
func GetUser(r *ghttp.Request) {
	username := r.GetString("username")

	model, err := user.GetByUsername(username)
	if err != nil {
		base.Error(r, "服务异常，请联系管理员")
	}

	//log.SaveLog(model, constants.RECOVER)

	base.Succ(r, model)
}

// LoginSubmit 登录认证
func LoginSubmit(r *ghttp.Request) (string, interface{}) {
	//username := r.GetString("username")
	//passwd := r.GetString("passwd")
	var req *LoginInput
	if err := r.Parse(&req); err != nil {
		return "", nil
	}
	username := req.Username
	passwd := req.Password
	fmt.Println(req.Username, req.Password, "登录请求")
	if username == "" || passwd == "" {
		base.Fail(r, "用户名或密码为空")
	}

	model, err := user.GetByUsername(username)
	if err != nil {
		base.Error(r, "服务异常，请联系管理员")
	}

	if model == nil || model.Id <= 0 {
		base.Fail(r, "用户名或密码错误.")
	}
	fmt.Println(model.Salt, model.Password, "等路过的人")
	if model.Enable != constants.EnableYes {
		base.Fail(r, "账号状态异常，请联系管理员")
	}

	reqPassword, err2 := gmd5.Encrypt(passwd + model.Salt)
	if err2 != nil {
		glog.Error("login password encrypt error", err2)
		base.Error(r, "用户名或者密码错误："+model.Username)
	}
	fmt.Println(reqPassword, model.Password, "连个秒")
	if reqPassword != model.Password {
		base.Fail(r, "用户名或者密码错误!")
	}

	sessionUser := bean.SessionUser{
		Id:       model.Id,
		Uuid:     model.Uuid,
		RealName: model.RealName,
		Username: model.Username,
	}

	// 登录日志
	model.UpdateTime = library.GetNow()
	model.UpdateId = model.Id
	log.SaveLog(model, constants.LOGIN)

	return username, sessionUser
}

// 登出
func LogoutBefore(r *ghttp.Request) bool {
	userId := base.GetUser(r).Id
	model, err := user.GetById(gconv.Int64(userId))
	if err != nil {
		glog.Warning("logout getUser error", err)
		return false
	} else if model.Id != userId {
		// 登出用户不存在
		glog.Warning("logout userId error", userId)
		return false
	}

	// 登出日志
	model.UpdateTime = library.GetNow()
	model.UpdateId = userId
	log.SaveLog(model, constants.LOGOUT)
	return true
}
