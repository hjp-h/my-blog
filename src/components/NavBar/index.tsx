// config
import { NAV_LIST } from './config'
// cpnts
import { Button } from 'antd'
import Login from '../Login'
// import Link from 'next/link'
// hooks
import { useRouter } from 'next/router'
// style
import $style from './index.module.scss'
// types
import type { NextPage } from 'next'
import { useRef } from 'react'
const  NavBar:NextPage = () => {
  const {pathname} = useRouter();

  // 登录相关
  const loginRef = useRef<any>(null);
  const handleLogin = () => {
    console.log('login~');
    loginRef.current?.handleOpen();
  }
  return (
    <div className={$style.NavBar}>
      <div className={$style.NavBarLogo}>CODER-JP</div>
      <div className={$style.NavBarLink}>
        {
        NAV_LIST.map(item => (
          <Button type={pathname===item.key ? 'primary':undefined} key={item.key} href={item.key}>{item.label}</Button>
        ))
        }
      </div>
      <div className={$style.NavBarOperate}>
        <Button href={'/article'}>写文章</Button>
        <Button onClick={handleLogin}>登录</Button>
      </div>
      <Login ref={(el:any) => loginRef.current = el}/>
    </div>
  )
}
export default NavBar
