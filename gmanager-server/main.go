package main

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/swagger"
	_ "gmanager/boot"
	_ "gmanager/router"
)

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @termsOfService http://swagger.io/terms/
func main() {
	s := g.Server()
	s.SetServerRoot("./gmanager")
	s.AddStaticPath("/static", "gmanager/static")

	s.Plugin(&swagger.Swagger{})
	g.Server().Run()
}
