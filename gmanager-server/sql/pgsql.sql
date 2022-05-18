/*
 Navicat Premium Data Transfer

 Source Server         : localpg
 Source Server Type    : PostgreSQL
 Source Server Version : 140002
 Source Host           : localhost:5432
 Source Catalog        : gmanager
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140002
 File Encoding         : 65001

 Date: 18/05/2022 08:48:08
*/


-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_config";
CREATE TABLE "public"."sys_config" (
  "id" int8 NOT NULL,
  "name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "key" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "value" varchar(4000) COLLATE "pg_catalog"."default" NOT NULL,
  "code" varchar(256) COLLATE "pg_catalog"."default",
  "data_type" int4,
  "parent_id" int8 NOT NULL,
  "parent_key" varchar(64) COLLATE "pg_catalog"."default",
  "sort" int4 NOT NULL,
  "project_id" int8,
  "copy_status" int2 NOT NULL,
  "change_status" int2 NOT NULL,
  "enable" int2,
  "update_time" varchar(24) COLLATE "pg_catalog"."default",
  "update_id" int8,
  "create_time" varchar(24) COLLATE "pg_catalog"."default",
  "create_id" int8
)
;
COMMENT ON COLUMN "public"."sys_config"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_config"."name" IS '名称';
COMMENT ON COLUMN "public"."sys_config"."key" IS '键';
COMMENT ON COLUMN "public"."sys_config"."value" IS '值';
COMMENT ON COLUMN "public"."sys_config"."code" IS '编码';
COMMENT ON COLUMN "public"."sys_config"."data_type" IS '数据类型//radio/1,KV,2,字典,3,数组';
COMMENT ON COLUMN "public"."sys_config"."parent_id" IS '类型';
COMMENT ON COLUMN "public"."sys_config"."sort" IS '排序号';
COMMENT ON COLUMN "public"."sys_config"."project_id" IS '项目ID';
COMMENT ON COLUMN "public"."sys_config"."copy_status" IS '拷贝状态 1 拷贝  2  不拷贝';
COMMENT ON COLUMN "public"."sys_config"."change_status" IS '1 不可更改 2 可以更改';
COMMENT ON COLUMN "public"."sys_config"."enable" IS '是否启用//radio/1,启用,2,禁用';
COMMENT ON COLUMN "public"."sys_config"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_config"."update_id" IS '更新人';
COMMENT ON COLUMN "public"."sys_config"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_config"."create_id" IS '创建者';
COMMENT ON TABLE "public"."sys_config" IS '系统配置表';

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO "public"."sys_config" VALUES (24, '系统参数', 'system', '', '', NULL, 0, NULL, 15, 1, 1, 2, 1, '2017-09-15 17:02:30', 4, '2017-09-15 16:54:52', 4);
INSERT INTO "public"."sys_config" VALUES (46, '日志控制配置', 'system.debug', 'false', '', NULL, 24, 'system', 15, 1, 1, 1, 1, '2019-02-24 00:00:08', 0, '2017-09-15 17:06:21', 4);
INSERT INTO "public"."sys_config" VALUES (47, '短信配置', 'sms', '', '', NULL, 0, '', 15, 1, 1, 2, 1, '2019-02-20 22:45:41', 1, '2017-09-15 17:06:56', 4);
INSERT INTO "public"."sys_config" VALUES (50, '短信账号', 'sms.username', 'test', '', NULL, 47, 'sms', 10, 1, 1, 2, 1, '2019-02-20 22:26:29', 1, '2019-02-18 01:07:47', 1);
INSERT INTO "public"."sys_config" VALUES (51, '短信密码', 'sms.passwd', '111111', '', NULL, 47, 'sms', 10, 1, 1, 2, 1, '2019-02-18 01:08:16', 1, '2019-02-18 01:08:16', 1);
INSERT INTO "public"."sys_config" VALUES (52, '短信类型', 'sms.type', '阿里云', '', NULL, 47, 'sms', 10, 1, 1, 2, 1, '2019-02-20 22:26:21', 1, '2019-02-20 22:26:21', 1);
INSERT INTO "public"."sys_config" VALUES (53, '性别', 'sex', '', '', NULL, 0, NULL, 90, 1, 1, 2, 1, '2019-02-20 23:35:18', 1, '2019-02-20 23:35:18', 1);
INSERT INTO "public"."sys_config" VALUES (54, '性别男', 'sex.male', '男', '1', NULL, 53, 'sex', 91, 1, 1, 2, 1, '2019-02-20 23:40:19', 1, '2019-02-20 23:35:45', 1);
INSERT INTO "public"."sys_config" VALUES (55, '性别女', 'sex.female', '女', '2', NULL, 53, 'sex', 92, 1, 1, 2, 1, '2019-02-20 23:40:24', 1, '2019-02-20 23:36:12', 1);
INSERT INTO "public"."sys_config" VALUES (56, '性别未知', 'sex.unknown', '未知', '3', NULL, 53, 'sex', 93, 1, 1, 2, 1, '2019-02-20 23:40:29', 1, '2019-02-20 23:36:46', 1);

-- ----------------------------
-- Table structure for sys_department
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_department";
CREATE TABLE "public"."sys_department" (
  "id" int8 NOT NULL,
  "parent_id" int4,
  "name" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "code" varchar(128) COLLATE "pg_catalog"."default",
  "sort" int4,
  "linkman" varchar(64) COLLATE "pg_catalog"."default",
  "linkman_no" varchar(32) COLLATE "pg_catalog"."default",
  "remark" varchar(128) COLLATE "pg_catalog"."default",
  "enable" int2,
  "update_time" varchar(24) COLLATE "pg_catalog"."default",
  "update_id" int8,
  "create_time" varchar(24) COLLATE "pg_catalog"."default",
  "create_id" int8
)
;
COMMENT ON COLUMN "public"."sys_department"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_department"."parent_id" IS '上级机构';
COMMENT ON COLUMN "public"."sys_department"."name" IS '部门/11111';
COMMENT ON COLUMN "public"."sys_department"."code" IS '机构编码';
COMMENT ON COLUMN "public"."sys_department"."sort" IS '序号';
COMMENT ON COLUMN "public"."sys_department"."linkman" IS '联系人';
COMMENT ON COLUMN "public"."sys_department"."linkman_no" IS '联系人电话';
COMMENT ON COLUMN "public"."sys_department"."remark" IS '机构描述';
COMMENT ON COLUMN "public"."sys_department"."enable" IS '是否启用//radio/1,启用,2,禁用';
COMMENT ON COLUMN "public"."sys_department"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_department"."update_id" IS '更新人';
COMMENT ON COLUMN "public"."sys_department"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_department"."create_id" IS '创建者';
COMMENT ON TABLE "public"."sys_department" IS '组织机构';

-- ----------------------------
-- Records of sys_department
-- ----------------------------
INSERT INTO "public"."sys_department" VALUES (10001, 0, 'FLY的狐狸', 'ABC000', 100, '', '', '', 1, '2017-04-28 01:16:43', 1, '2016-07-31 18:12:30', 1);
INSERT INTO "public"."sys_department" VALUES (10002, 10001, '开发组', 'ABC001', 101, NULL, NULL, NULL, 1, '2016-07-31 18:15:29', 1, '2016-07-31 18:15:29', 1);
INSERT INTO "public"."sys_department" VALUES (10003, 10001, '产品组', 'ABC003', 103, '', '', '', 1, '2017-04-28 00:58:41', 1, '2016-07-31 18:16:06', 1);
INSERT INTO "public"."sys_department" VALUES (10004, 10001, '运营组', 'ABC004', 104, NULL, NULL, NULL, 1, '2016-07-31 18:16:30', 1, '2016-07-31 18:16:30', 1);
INSERT INTO "public"."sys_department" VALUES (10005, 10001, '测试组', '12323', 10, '', '', '', 0, '2019-06-30 22:33:44', 1, '2017-10-18 18:13:09', 1);

-- ----------------------------
-- Table structure for sys_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_log";
CREATE TABLE "public"."sys_log" (
  "id" int8 NOT NULL,
  "log_type" int4 NOT NULL,
  "oper_object" varchar(64) COLLATE "pg_catalog"."default",
  "oper_table" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "oper_id" int4,
  "oper_type" varchar(64) COLLATE "pg_catalog"."default",
  "oper_remark" varchar(2000) COLLATE "pg_catalog"."default",
  "enable" int2,
  "update_time" varchar(24) COLLATE "pg_catalog"."default",
  "update_id" int8,
  "create_time" varchar(24) COLLATE "pg_catalog"."default",
  "create_id" int8
)
;
COMMENT ON COLUMN "public"."sys_log"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_log"."log_type" IS '类型';
COMMENT ON COLUMN "public"."sys_log"."oper_object" IS '操作对象';
COMMENT ON COLUMN "public"."sys_log"."oper_table" IS '操作表';
COMMENT ON COLUMN "public"."sys_log"."oper_id" IS '操作主键';
COMMENT ON COLUMN "public"."sys_log"."oper_type" IS '操作类型';
COMMENT ON COLUMN "public"."sys_log"."oper_remark" IS '操作备注';
COMMENT ON COLUMN "public"."sys_log"."enable" IS '是否启用//radio/1,启用,2,禁用';
COMMENT ON COLUMN "public"."sys_log"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_log"."update_id" IS '更新人';
COMMENT ON COLUMN "public"."sys_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_log"."create_id" IS '创建者';
COMMENT ON TABLE "public"."sys_log" IS '日志';

-- ----------------------------
-- Records of sys_log
-- ----------------------------
INSERT INTO "public"."sys_log" VALUES (11813, 1, '用户', 'sys_user', 1, '登录', '', 0, '2022-03-30 14:11:00', 1, '2022-03-30 14:11:00', 1);

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_menu";
CREATE TABLE "public"."sys_menu" (
  "id" int8 NOT NULL,
  "parent_id" int4 NOT NULL,
  "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "icon" varchar(50) COLLATE "pg_catalog"."default",
  "urlkey" varchar(256) COLLATE "pg_catalog"."default",
  "url" varchar(256) COLLATE "pg_catalog"."default",
  "perms" varchar(500) COLLATE "pg_catalog"."default",
  "status" int4,
  "type" int4,
  "sort" int4,
  "level" int4,
  "enable" int2,
  "update_time" varchar(24) COLLATE "pg_catalog"."default",
  "update_id" int8,
  "create_time" varchar(24) COLLATE "pg_catalog"."default",
  "create_id" int8
)
;
COMMENT ON COLUMN "public"."sys_menu"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_menu"."parent_id" IS '父id';
COMMENT ON COLUMN "public"."sys_menu"."name" IS '名称/11111';
COMMENT ON COLUMN "public"."sys_menu"."icon" IS '菜单图标';
COMMENT ON COLUMN "public"."sys_menu"."urlkey" IS '菜单key';
COMMENT ON COLUMN "public"."sys_menu"."url" IS '链接地址';
COMMENT ON COLUMN "public"."sys_menu"."perms" IS '授权(多个用逗号分隔，如：user:list,user:create)';
COMMENT ON COLUMN "public"."sys_menu"."status" IS '状态//radio/2,隐藏,1,显示';
COMMENT ON COLUMN "public"."sys_menu"."type" IS '类型//select/1,目录,2,菜单,3,按钮';
COMMENT ON COLUMN "public"."sys_menu"."sort" IS '排序';
COMMENT ON COLUMN "public"."sys_menu"."level" IS '级别';
COMMENT ON COLUMN "public"."sys_menu"."enable" IS '是否启用//radio/1,启用,2,禁用';
COMMENT ON COLUMN "public"."sys_menu"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_menu"."update_id" IS '更新人';
COMMENT ON COLUMN "public"."sys_menu"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_menu"."create_id" IS '创建者';
COMMENT ON TABLE "public"."sys_menu" IS '菜单';

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO "public"."sys_menu" VALUES (1, 20, '系统首页', 'welcome', 'home', '/welcome', '', 1, 2, 10, 2, 1, '2019-12-06 10:37:44', 1, '2015-04-27 17:28:06', 1);
INSERT INTO "public"."sys_menu" VALUES (2, 0, '系统管理', 'settings', 'system_root', NULL, NULL, 1, 1, 190, 1, 1, '2019-12-04 14:18:23', 1, '2015-04-27 17:28:06', 1);
INSERT INTO "public"."sys_menu" VALUES (3, 2, '组织机构', 'depart', 'department', '/system/department/index', NULL, 1, 2, 191, 2, 1, '2019-12-04 14:17:51', 1, '2015-04-27 17:28:25', 1);
INSERT INTO "public"."sys_menu" VALUES (4, 2, '用户管理', 'user_1', 'user', '/system/user/index', NULL, 1, 2, 192, 2, 1, '2019-12-04 14:14:06', 1, '2015-04-27 17:28:46', 1);
INSERT INTO "public"."sys_menu" VALUES (5, 2, '角色管理', 'role', 'role', '/system/role/index', NULL, 1, 2, 194, 2, 1, '2019-12-04 14:14:12', 1, '2015-04-27 17:29:13', 1);
INSERT INTO "public"."sys_menu" VALUES (6, 2, '菜单管理', 'menu', 'menu', '/system/menu/index', NULL, 1, 2, 196, 2, 1, '2019-12-04 14:14:33', 1, '2015-04-27 17:29:43', 1);
INSERT INTO "public"."sys_menu" VALUES (20, 0, '业务处理', 'business', 'home', '', '', 1, 1, 10, 1, 1, '2019-12-04 14:14:55', 1, '2019-02-17 23:24:08', 1);
INSERT INTO "public"."sys_menu" VALUES (37, 2, '参数配置', 'config', NULL, 'system/config/index', NULL, 1, 2, 198, 2, 1, '2019-12-12 15:31:40', 1, '2019-12-10 14:51:29', 1);
INSERT INTO "public"."sys_menu" VALUES (38, 2, '日志管理', 'log', 'log', 'system/log/index', NULL, 1, 2, 199, 2, 1, '2019-12-12 15:31:24', 1, '2019-12-10 14:55:22', 1);

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_role";
CREATE TABLE "public"."sys_role" (
  "id" int8 NOT NULL,
  "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "status" int4,
  "sort" int4,
  "remark" text COLLATE "pg_catalog"."default",
  "enable" int2,
  "update_time" varchar(24) COLLATE "pg_catalog"."default",
  "update_id" int8,
  "create_time" varchar(24) COLLATE "pg_catalog"."default",
  "create_id" int8
)
;
COMMENT ON COLUMN "public"."sys_role"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_role"."name" IS '名称/11111/';
COMMENT ON COLUMN "public"."sys_role"."status" IS '状态//radio/2,隐藏,1,显示';
COMMENT ON COLUMN "public"."sys_role"."sort" IS '排序';
COMMENT ON COLUMN "public"."sys_role"."remark" IS '说明//textarea';
COMMENT ON COLUMN "public"."sys_role"."enable" IS '是否启用//radio/1,启用,2,禁用';
COMMENT ON COLUMN "public"."sys_role"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_role"."update_id" IS '更新人';
COMMENT ON COLUMN "public"."sys_role"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_role"."create_id" IS '创建者';
COMMENT ON TABLE "public"."sys_role" IS '角色';

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO "public"."sys_role" VALUES (1, '测试角色', 1, 10, '', 1, '2019-07-03 00:55:45', 1, '2017-09-15 14:54:26', 1);

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_role_menu";
CREATE TABLE "public"."sys_role_menu" (
  "id" int8 NOT NULL,
  "role_id" int8 NOT NULL,
  "menu_id" int8 NOT NULL
)
;
COMMENT ON COLUMN "public"."sys_role_menu"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_role_menu"."role_id" IS '角色id';
COMMENT ON COLUMN "public"."sys_role_menu"."menu_id" IS '菜单id';
COMMENT ON TABLE "public"."sys_role_menu" IS '角色和菜单关联';

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO "public"."sys_role_menu" VALUES (48, 1, 20);
INSERT INTO "public"."sys_role_menu" VALUES (49, 1, 1);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_user";
CREATE TABLE "public"."sys_user" (
  "id" int8 NOT NULL,
  "uuid" varchar(32) COLLATE "pg_catalog"."default",
  "username" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "salt" varchar(16) COLLATE "pg_catalog"."default" NOT NULL,
  "real_name" varchar(32) COLLATE "pg_catalog"."default",
  "depart_id" int4,
  "user_type" int4,
  "status" int4,
  "thirdid" varchar(200) COLLATE "pg_catalog"."default",
  "endtime" varchar(32) COLLATE "pg_catalog"."default",
  "email" varchar(64) COLLATE "pg_catalog"."default",
  "tel" varchar(32) COLLATE "pg_catalog"."default",
  "address" varchar(32) COLLATE "pg_catalog"."default",
  "title_url" varchar(200) COLLATE "pg_catalog"."default",
  "remark" varchar(1000) COLLATE "pg_catalog"."default",
  "theme" varchar(64) COLLATE "pg_catalog"."default",
  "back_site_id" int4,
  "create_site_id" int4,
  "project_id" int8,
  "project_name" varchar(100) COLLATE "pg_catalog"."default",
  "enable" int2,
  "update_time" varchar(24) COLLATE "pg_catalog"."default",
  "update_id" int8,
  "create_time" varchar(24) COLLATE "pg_catalog"."default",
  "create_id" int8
)
;
COMMENT ON COLUMN "public"."sys_user"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_user"."uuid" IS 'UUID';
COMMENT ON COLUMN "public"."sys_user"."username" IS '登录名/11111';
COMMENT ON COLUMN "public"."sys_user"."password" IS '密码';
COMMENT ON COLUMN "public"."sys_user"."salt" IS '密码盐';
COMMENT ON COLUMN "public"."sys_user"."real_name" IS '真实姓名';
COMMENT ON COLUMN "public"."sys_user"."depart_id" IS '部门/11111/dict';
COMMENT ON COLUMN "public"."sys_user"."user_type" IS '类型//select/1,管理员,2,普通用户,3,前台用户,4,第三方用户,5,API用户';
COMMENT ON COLUMN "public"."sys_user"."status" IS '状态';
COMMENT ON COLUMN "public"."sys_user"."thirdid" IS '第三方ID';
COMMENT ON COLUMN "public"."sys_user"."endtime" IS '结束时间';
COMMENT ON COLUMN "public"."sys_user"."email" IS 'email';
COMMENT ON COLUMN "public"."sys_user"."tel" IS '手机号';
COMMENT ON COLUMN "public"."sys_user"."address" IS '地址';
COMMENT ON COLUMN "public"."sys_user"."title_url" IS '头像地址';
COMMENT ON COLUMN "public"."sys_user"."remark" IS '说明';
COMMENT ON COLUMN "public"."sys_user"."theme" IS '主题';
COMMENT ON COLUMN "public"."sys_user"."back_site_id" IS '后台选择站点ID';
COMMENT ON COLUMN "public"."sys_user"."create_site_id" IS '创建站点ID';
COMMENT ON COLUMN "public"."sys_user"."project_id" IS '项目ID';
COMMENT ON COLUMN "public"."sys_user"."project_name" IS '项目名称';
COMMENT ON COLUMN "public"."sys_user"."enable" IS '是否启用//radio/1,启用,2,禁用';
COMMENT ON COLUMN "public"."sys_user"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_user"."update_id" IS '更新人';
COMMENT ON COLUMN "public"."sys_user"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_user"."create_id" IS '创建者';
COMMENT ON TABLE "public"."sys_user" IS '用户';

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO "public"."sys_user" VALUES (1, '94091b1fa6ac4a27a06c0b92155aea6a', 'admin', '9fb3dc842c899aa63d6944a55080b795', '1111', '系统管理员', 10001, 1, 10, '', '', 'zcool321@sina.com', '123', '', '', '时间是最好的老师，但遗憾的是&mdash;&mdash;最后他把所有的学生都弄死了', 'flat', 5, 1, 1, 'test', 1, '2019-07-08 18:12:28', 1, '2017-03-19 20:41:25', 1);
INSERT INTO "public"."sys_user" VALUES (9, 'xa5450ztN08S37tKj93ujhJ66069q92R', 'test', 'ea8207ee50ccf367e99c8444fda7da32', 'GM26Mq', 'test', 10002, 2, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default', 0, 1, 0, NULL, 1, '2019-11-12 15:31:31', 1, '2019-07-11 15:49:24', 1);
INSERT INTO "public"."sys_user" VALUES (12, '8609WdcTI1337Y7e5kQ94v872Z02mh24', 'testLogin', '7f4d0d8db5546f395e87dfd294608b9b', '3n7Ci8', 'testLogin', 10002, 2, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default', 0, 1, 0, NULL, 1, '2019-11-12 15:31:08', 1, '2019-11-12 15:31:08', 1);
INSERT INTO "public"."sys_user" VALUES (13, 'PTMB2mcqk87n1x15K84E56T75SY11Q5w', 'testLogout', '961c0645f7ae271d6e1fc1ff01e786d7', '0X6509', 'testLogout', 10002, 2, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default', 0, 1, 0, NULL, 1, '2019-11-12 15:31:19', 1, '2019-11-12 15:31:19', 1);

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_user_role";
CREATE TABLE "public"."sys_user_role" (
  "id" int8 NOT NULL,
  "user_id" int8 NOT NULL,
  "role_id" int8 NOT NULL
)
;
COMMENT ON COLUMN "public"."sys_user_role"."id" IS '主键';
COMMENT ON COLUMN "public"."sys_user_role"."user_id" IS '用户id';
COMMENT ON COLUMN "public"."sys_user_role"."role_id" IS '角色id';
COMMENT ON TABLE "public"."sys_user_role" IS '用户和角色关联';

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO "public"."sys_user_role" VALUES (1, 1, 1);

-- ----------------------------
-- Primary Key structure for table sys_config
-- ----------------------------
ALTER TABLE "public"."sys_config" ADD CONSTRAINT "sys_config_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table sys_department
-- ----------------------------
CREATE UNIQUE INDEX "uni_depart_name" ON "public"."sys_department" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table sys_department
-- ----------------------------
ALTER TABLE "public"."sys_department" ADD CONSTRAINT "sys_department_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sys_log
-- ----------------------------
ALTER TABLE "public"."sys_log" ADD CONSTRAINT "sys_log_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sys_menu
-- ----------------------------
ALTER TABLE "public"."sys_menu" ADD CONSTRAINT "sys_menu_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sys_role
-- ----------------------------
ALTER TABLE "public"."sys_role" ADD CONSTRAINT "sys_role_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sys_role_menu
-- ----------------------------
ALTER TABLE "public"."sys_role_menu" ADD CONSTRAINT "sys_role_menu_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table sys_user
-- ----------------------------
CREATE UNIQUE INDEX "uni_user_username" ON "public"."sys_user" USING btree (
  "username" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table sys_user
-- ----------------------------
ALTER TABLE "public"."sys_user" ADD CONSTRAINT "sys_user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sys_user_role
-- ----------------------------
ALTER TABLE "public"."sys_user_role" ADD CONSTRAINT "sys_user_role_pkey" PRIMARY KEY ("id");
