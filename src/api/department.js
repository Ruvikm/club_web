import http from "@/utils/request";

//获取社团列表
export async function getClubListApi(parms) {
  return await http.get("/api/club/department/list", parms);
}

//申请社团
export async function addApplyApi(parm) {
  return await http.post("/api/club/apply", parm);
}

//获取社团部门
export async function getChoiceListApi(parm) {
  return await http.get("/api/club/apply/DepChoiceList", parm);
}

//申请创建社团
export async function addClubApplyApi(parm) {
  return await http.post("/api/club/createClub", parm);
}

//获取创建社团审批列表
export async function CheckStateApi(parm) {
  return await http.get("/api/club/createClub/checkState", parm);
}
