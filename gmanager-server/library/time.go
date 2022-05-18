package library

import "github.com/gogf/gf/v2/os/gtime"

func GetNow() string {
	return gtime.Datetime()
}
