import jpRequest from "@/service";
import { CommonObject } from "@/types/common";
export function getVerifyCode(query:CommonObject){
  return jpRequest.post("/api/user/sendVerifyCode",query)
}