// 组件相关
import NavBar from '../NavBar'
import Footer from '../Footer'
// 样式相关
import $style from './index.module.scss'
import React from 'react'
type IProps = {
  children:React.ReactNode
}
const Layout = (props:IProps) => {
  const {children} = props
  return (
    <div className={$style.Layout}>
      <NavBar></NavBar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  )
}
export default Layout