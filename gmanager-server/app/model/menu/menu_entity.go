// ==========================================================================
// This is auto-generated by gf cli tool. You may not really want to edit it.
// ==========================================================================

package menu

import (
	"database/sql"
	"github.com/gogf/gf/database/gdb"
)

// Entity is the golang structure for table sys_menu.
type Entity struct {
	Id         int    `orm:"id,primary"  json:"id"`         // 主键
	ParentId   int    `orm:"parent_id"   json:"parentId"`   // 父id
	Name       string `orm:"name"        json:"name"`       // 名称/11111
	Icon       string `orm:"icon"        json:"icon"`       // 菜单图标
	IsSvg      string `orm:"isSvg"        json:"isSvg"`     // 菜单图标
	Urlkey     string `orm:"urlkey"      json:"urlkey"`     // 菜单key
	Url        string `orm:"url"         json:"url"`        // 链接地址
	Perms      string `orm:"perms"       json:"perms"`      // 授权(多个用逗号分隔，如：user:list,user:create)
	Status     int    `orm:"status"      json:"status"`     // 状态//radio/2,隐藏,1,显示
	Type       int    `orm:"type"        json:"type"`       // 类型//select/1,目录,2,菜单,3,按钮
	Sort       int    `orm:"sort"        json:"sort"`       // 排序
	Level      int    `orm:"level"       json:"level"`      // 级别
	Enable     int    `orm:"enable"      json:"enable"`     // 是否启用//radio/1,启用,2,禁用
	UpdateTime string `orm:"update_time" json:"updateTime"` // 更新时间
	UpdateId   int    `orm:"update_id"   json:"updateId"`   // 更新人
	CreateTime string `orm:"create_time" json:"createTime"` // 创建时间
	CreateId   int    `orm:"create_id"   json:"createId"`   // 创建者

	UpdateName string `json:"updateName,omitempty" gconv:"updateName,omitempty"`
	CreateName string `json:"createName,omitempty" gconv:"createName,omitempty"`
}

// OmitEmpty sets OPTION_OMITEMPTY option for the model, which automatically filers
// the data and where attributes for empty values.
func (r *Entity) OmitEmpty() *arModel {
	return Model.Data(r).OmitEmpty()
}

// Inserts does "INSERT...INTO..." statement for inserting current object into table.
func (r *Entity) Insert() (result sql.Result, err error) {
	return Model.Data(r).Insert()
}

// Replace does "REPLACE...INTO..." statement for inserting current object into table.
// If there's already another same record in the table (it checks using primary key or unique index),
// it deletes it and insert this one.
func (r *Entity) Replace() (result sql.Result, err error) {
	return Model.Data(r).Replace()
}

// Save does "INSERT...INTO..." statement for inserting/updating current object into table.
// It updates the record if there's already another same record in the table
// (it checks using primary key or unique index).
func (r *Entity) Save() (result sql.Result, err error) {
	return Model.Data(r).Save()
}

// Update does "UPDATE...WHERE..." statement for updating current object from table.
// It updates the record if there's already another same record in the table
// (it checks using primary key or unique index).
func (r *Entity) Update() (result sql.Result, err error) {
	return Model.Data(r).Where(gdb.GetWhereConditionOfStruct(r)).Update()
}

// Delete does "DELETE FROM...WHERE..." statement for deleting current object from table.
func (r *Entity) Delete() (result sql.Result, err error) {
	return Model.Where(gdb.GetWhereConditionOfStruct(r)).Delete()
}