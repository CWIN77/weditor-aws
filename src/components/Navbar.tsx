import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from "next/link";
import styled from 'styled-components' 
import Svg_video from '../svgs/video.svg';
import Svg_box from '../svgs/box.svg';
import Svg_medal from '../svgs/medal.svg';
import Svg_video_bold from '../svgs/video_bold.svg';
import Svg_box_bold from '../svgs/box_bold.svg';
import Svg_medal_bold from '../svgs/medal_bold.svg';
import Svg_profile from '../svgs/profile.svg';
import Svg_more from '../svgs/more.svg';
import Svg_thumbnail  from '../svgs/thumbnail.svg';
import Svg_thumbnail_bold from '../svgs/thumbnail_bold.svg';

function Navbar() {
  const router = useRouter()
  const [page,setPage] = useState(router.pathname)
  const [isOver,setIsOver] = useState(false)
  const iconStyle = {width:16,height:16,fill:"#C8D4E6",style:{marginRight:6}}
  useEffect(()=>{
    window.addEventListener('scroll',()=>{setIsOver(window.scrollY > 68)})
  },[])
  return (
    <div style={{width:'100%'}}>
      <Top>
        <Title>Weditor</Title>
        <div style={{display:'flex',alignItems:'center'}}>
          <Svg_profile width={28} height={28} style={{margin:4,padding:2,width:36,height:36}}/>
          <Svg_more width={20} height={20} fill="#C8D4E6" style={{padding:6,display:'flex'}} />
        </div>
      </Top>
      <Nav>
        <Link href={"/"}>
          <NavBtn onClick={()=>{setPage("/")}}  page={`${page==="/"}`}>
            {
              page === '/'
              ? <Svg_video_bold {...iconStyle} />
              : <Svg_video {...iconStyle} />
            }
            <h2>편집각</h2>
          </NavBtn>
        </Link>
        <Link href={"/save"}>
          <NavBtn onClick={()=>{setPage("/save")}} page={`${page==="/save"}`}>
            {
              page === '/save'
              ? <Svg_box_bold {...iconStyle} />
              : <Svg_box {...iconStyle} />
            }
            <h2>찜목록</h2>
          </NavBtn>
        </Link>
        <Link href={"/result"}>
          <NavBtn onClick={()=>{setPage("/result")}} page={`${page==="/result"}`}>
            {
              page === '/result'
              ? <Svg_medal_bold {...iconStyle} />
              : <Svg_medal {...iconStyle} />
            }
            <h2>내성과</h2>
          </NavBtn>
        </Link>
        <Link href={"/thumbnail"}>
          <NavBtn onClick={()=>{setPage("/thumbnail")}} page={`${page==="/thumbnail"}`}>
            {
              page === '/thumbnail'
              ? <Svg_thumbnail_bold {...iconStyle} />
              : <Svg_thumbnail {...iconStyle} />
            }
            <h2>썸네일</h2>
          </NavBtn>
        </Link>
      </Nav>
      {
        isOver &&
        <NavOver>
          <Link href={"/"}>
            <NavBtn onClick={()=>{setPage("/")}}  page={`${page==="/"}`}>
              {
                page === '/'
                ? <Svg_video_bold {...iconStyle} />
                : <Svg_video {...iconStyle} />
              }
              <h2>편집각</h2>
            </NavBtn>
          </Link>
          <Link href={"/save"}>
            <NavBtn onClick={()=>{setPage("/save")}} page={`${page==="/save"}`}>
              {
                page === '/save'
                ? <Svg_box_bold {...iconStyle} />
                : <Svg_box {...iconStyle} />
              }
              <h2>찜목록</h2>
            </NavBtn>
          </Link>
          <Link href={"/result"}>
            <NavBtn onClick={()=>{setPage("/result")}} page={`${page==="/result"}`}>
              {
                page === '/result'
                ? <Svg_medal_bold {...iconStyle} />
                : <Svg_medal {...iconStyle} />
              }
              <h2>내성과</h2>
            </NavBtn>
          </Link>
          <Link href={"/thumbnail"}>
            <NavBtn onClick={()=>{setPage("/thumbnail")}} page={`${page==="/thumbnail"}`}>
              {
                page === '/thumbnail'
                ? <Svg_thumbnail_bold {...iconStyle} />
                : <Svg_thumbnail {...iconStyle} />
              }
              <h2>썸네일</h2>
            </NavBtn>
          </Link>
        </NavOver>
      }
    </div>
  )
}

const Top = styled.div`
  width:calc(100% - 2rem);
  padding: 1rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 20px;
  padding: 4px;
`
const Profile = styled.span`
  width:28px;
  height:28px;
  margin: 4px;
  border-radius: 100px;
  background-color:#C8D4E6;
`
const Nav = styled.div`
  padding: 1rem;
  padding-bottom: 3px;
  margin-bottom: 1rem;
  display:flex;
  overflow-x: auto;
  width:calc(100% - 2rem);
  align-items: center;
`
const NavOver = styled.div`
  background-color:#1d2127;
  padding: 1rem;
  padding-bottom: clac(1rem + 3px);
  /* margin-bottom: 1rem; */
  display:flex;
  overflow-x: auto;
  width:calc(100% - 2rem);
  align-items: center;
  position: fixed;
  top:0px;
`
const NavBtn = styled.div<{page:string}>`
  cursor: pointer;
  padding: 6px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 10px;
  margin-left: 2px;
  display:flex;
  align-items: center;
  box-shadow: ${(props)=>props.page === "true" ? "0px 3px" : "0px"};
  opacity:${(props)=>props.page === "true" ? "1" : "0.7"};
  h2{
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
  }
`

export default Navbar