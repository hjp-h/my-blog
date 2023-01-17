// config
import { NAV_LIST } from './config'
// cpnts
import { Button } from 'antd'
// import Link from 'next/link'
// hooks
import { useRouter } from 'next/router'
// style
import $style from './index.module.scss'
// types
import type { NextPage } from 'next'
const  NavBar:NextPage = () => {
  const {pathname} = useRouter();
  return (
    <div className={$style.NavBar}>
      <div className={$style.NavBarLogo}>扣得布罗克</div>
      <div className={$style.NavBarLink}>
        {
        NAV_LIST.map(item => (
          <Button type={pathname===item.key ? 'primary':undefined} key={item.key} href={item.key}>{item.label}</Button>
        ))
        }
      </div>
      <div className={$style.NavBarOperate}>
        <Button href={'/article'}>写文章</Button>
        <Button href={'/login'}>登录</Button>
      </div>
    </div>
  )
}
export default NavBar
