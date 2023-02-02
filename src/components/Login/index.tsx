// style
import $style from './index.module.scss'
// react
import React,{useImperativeHandle, useState } from 'react'
// cpnt
import { Button, message } from 'antd'
import { CommonObject } from '@/types/common'
import CountDown from '../CountDown'
// service
import {getVerifyCode} from '@/service/modules/Login/index.service'

const Login = React.forwardRef<any,CommonObject>((props,ref) => {
  // 控制显示与隐藏
  const [isShowLogin,setIsShowLogin] = useState<boolean>(false);
  useImperativeHandle(ref,() => ({
    handleOpen(){
      setIsShowLogin(true)
    },
  }))

  // 短信验证码计时器相关
  const [isShowCountDown,setIsShowCountDown] = useState<boolean>(false);
  const handleShowVerifyCode = () => {
    // 调用短信平台接口
    if(!formData.phone){
      message.warning("请填写手机号！")
      return;
    }
    setIsShowCountDown(true);
    getVerifyCode({})
  }
  const handleCountEnd = () => {
    setIsShowCountDown(false);
    console.log('end')
  }

  // 登录相关
  const [formData,setFormData] = useState<{phone:string,verifyCode:string}>({phone:'',verifyCode:''})
  const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }
  const handleLogin = () => {
    console.log('login')
  }
  const handleOtherLogin = () => {
    console.log('ologin')
  }
  const handleClose = () => {
    setIsShowLogin(false)
  }
  return (
    isShowLogin ? <div className={$style.LoginArea}>
      <div className={$style.LoginBox}>
        <div className={$style.LoginTitle}>
          <span>手机号登录</span>
          <span className={$style.LoginClose} onClick={handleClose}>x</span>
        </div>
        <div className={$style.LoginContent}>
          <input name="phone" onChange={handleFormChange} value={formData.phone} placeholder='请输入手机号'/>
          <input name="verifyCode" onChange={handleFormChange} value={formData.verifyCode} placeholder='请输入验证码'/>
          <div onClick={handleShowVerifyCode} className={$style.LoginVerify}>{isShowCountDown ? <CountDown timeout={10} onEnd={handleCountEnd}/> : "获取验证码"}</div>
        </div>
        <div className={$style.LoginBtn}>
          <Button type='primary' onClick={handleLogin}>登录</Button>
        </div>
        <div className={$style.LoginFooter}>
          <Button type='link' onClick={handleOtherLogin}>使用Github登录</Button><br/>
          <span className={$style.LoginPrivacy}>注册登录即表示同意隐私<a href="https://moco.imooc.com/privacy.html" target="_blank" rel="noreferrer">政策</a></span>
        </div>
      </div>
    </div> : null
  )
})
Login.displayName = "Login"
export default Login