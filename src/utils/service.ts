import { CommonObject } from "@/types/common";
/**
 * 
 * @param url /abc
 * @param json {a:1,b:2}
 * return /abc?a=1&b=2
 */
const formatUrlOnlyGet = (url:string,json?:CommonObject) => {
  let ret = url;
  const jsonEntries = json ? Object.entries(json) : null;
  if(jsonEntries?.length){
    jsonEntries.forEach((item,index) => {
      index===0 && (ret+="?");
      ret += `${item[0]}=${item[1]}`
      index !== jsonEntries.length && (ret += "&")
    })
    // 小技巧
    // ret += url.indexOf("?")===-1 ? "?" : ""
    // ret += Object.entries(jsonEntries).map(item => item.join("=")).join("&") 
  }
  return ret
}
export {
  formatUrlOnlyGet
}