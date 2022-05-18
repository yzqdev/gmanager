package started

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/glog"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
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
