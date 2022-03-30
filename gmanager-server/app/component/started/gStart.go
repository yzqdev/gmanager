package started

import (
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/os/glog"
	"github.com/gogf/gf/text/gstr"
	"github.com/gogf/gf/util/gconv"
)

var TableInfo g.MapStrStr

func StartLog() {
	var dbName = "gmanager"
	link := g.Config().GetString("database.link")
	if link != "" {
		dbName = gstr.Split(link, "/")[1]
	}
	r, err := g.DB().Table("INFORMATION_SCHEMA.TABLES").Fields(
		"table_name as name,table_comment as comment").Where(
		"table_schema = ?", dbName).Select()

	//r, err := g.DB().GetAll("SELECT table_name as name,table_comment as comment "+
	//	"FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = ?", dbName)
	if err != nil {
		glog.Error("gstart tables error", err)
	} else {
		TableInfo = g.MapStrStr{}
		list := r.List()
		for _, value := range list {
			TableInfo[gconv.String(value["name"])] = gconv.String(value["comment"])
		}
		glog.Info("gstart table info finish", TableInfo)
	}
}
