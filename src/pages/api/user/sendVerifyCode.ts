import type { NextApiRequest,NextApiResponse } from "next"
export default async function (req:NextApiRequest,res:NextApiResponse) {
  console.log(111)
  res.status(200).json({
    code:1,
    resultData:{
      msg:"测试成功"
    }
  })
}