export default async function (req:any,res:any) {
  console.log(111)
  res.status(200).json({
    code:1,
    resultData:{
      msg:"测试成功"
    }
  })
}