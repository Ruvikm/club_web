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
export async function getChoiceListApi(parm){
  return await http.get("/api/club/apply/DepChoiceList",parm)
}
