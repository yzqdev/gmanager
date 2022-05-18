// ==========================================================================
// This is auto-generated by gf cli tool. You may not really want to edit it.
// ==========================================================================

package department

import (
	"database/sql"
	"github.com/gogf/gf/v2/database/gdb"
)

// Entity is the golang structure for table sys_department.
type Entity struct {
	Id         int    `orm:"id,primary"  json:"id"`         // 主键
	ParentId   int    `orm:"parent_id"   json:"parentId"`   // 上级机构
	Name       string `orm:"name,unique" json:"name"`       // 部门/11111
	Code       string `orm:"code"        json:"code"`       // 机构编码
	Sort       int    `orm:"sort"        json:"sort"`       // 序号
	Linkman    string `orm:"linkman"     json:"linkman"`    // 联系人
	LinkmanNo  string `orm:"linkman_no"   json:"linkmanNo"` // 联系人电话
	Remark     string `orm:"remark"      json:"remark"`     // 机构描述
	Enable     int    `orm:"enable"      json:"enable"`     // 是否启用//radio/1,启用,2,禁用
	UpdateTime string `orm:"update_time" json:"updateTime"` // 更新时间
	UpdateId   int    `orm:"update_id"   json:"updateId"`   // 更新人
	CreateTime string `orm:"create_time" json:"createTime"` // 创建时间
	CreateId   int    `orm:"create_id"   json:"createId"`   // 创建者

	ParentName string `json:"parentName" gconv:"parentName,omitempty"` // 父节点名称
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
