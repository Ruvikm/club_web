import http from "@/utils/request";

//获取社团列表
export async function getArticleApi(parms) {
  return await http.get("/api/club/article/list", parms);
}

export async function getArticleByIdApi(parms){
  return await http.getRestApi("/api/club/article", parms);
}
