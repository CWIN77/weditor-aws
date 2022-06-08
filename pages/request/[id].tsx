import { useEffect } from 'react';
import {useRouter,withRouter} from 'next/router';
import styled from 'styled-components'
import Svg_arrow from '../../src/svgs/arrow.svg';
import Svg_menu from '../../src/svgs/menu.svg';
import Svg_money from '../../src/svgs/money.svg';
import Svg_tag from '../../src/svgs/tag.svg';
import Svg_ratio from '../../src/svgs/ratio.svg';
import Svg_subtitle from '../../src/svgs/subtitle.svg';
import Svg_clock from '../../src/svgs/clock.svg';
import Svg_play from '../../src/svgs/play.svg';
import Svg_download from '../../src/svgs/download.svg';
import Svg_upload from '../../src/svgs/upload.svg';
import Svg_box from '../../src/svgs/box.svg';

import {IListRequest} from '../../src/types'

function Detail() {
  const topIconStyle = {fill:"#C8D4E6",width:20,height:20,style:{padding:"0.5rem",cursor:'pointer'}}
  const mainIconStyle = {fill:"#C8D4E6",width:18,height:18}
  const navIconStyle = {width:20,height:20}
  const router = useRouter();
  const {id} = router.query;
  const request:IListRequest|null = id ? JSON.parse(sessionStorage.getItem(`request/${id}`) || JSON.stringify(null)) : null
  return (
    <Container>
      <TopBar>
        <Svg_arrow onClick={()=>{window.history.back()}} {...topIconStyle} />
        <div style={{display:'flex',alignItems:'center'}}>
          <Svg_money width={20} height={20} />
          <h1 style={{fontSize:17,marginLeft:6}}>최소 60,000원 지급</h1>
        </div>
        <Svg_menu {...topIconStyle} />
      </TopBar>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Main>
          <Guide>
            <div style={{justifyContent: "space-between"}}>
              <div>
                <Svg_tag {...mainIconStyle} />
                {
                  request?.setting.tag.map((tag,key)=>
                    <h2 key={key}>{tag}</h2>
                  )
                }
              </div>
              <div>
                <Svg_subtitle {...mainIconStyle} />
                <h2>
                  {
                    request?.setting.subtitle === 0
                    ? "자막 불필요"
                    : request?.setting.subtitle === 1
                    ? "자막 필수"
                    : request?.setting.subtitle === 1
                    ? "자막 무상관"
                    : null
                  }
                </h2>
              </div>
            </div>
            <div style={{justifyContent:'center'}}>
              <PlayBtn href='https://youtu.be/3Wex4qJJN-s' target='_blank'>
                <Svg_play width={22} height={22} stroke="#C8D4E6" />
              </PlayBtn>
            </div>
            <div style={{justifyContent: "space-between"}}>
              <div>
                <Svg_clock {...mainIconStyle} />
                <h2>{request?.setting.length}</h2>
              </div>
              <div>
                <Svg_ratio {...mainIconStyle} />
                <h2>{request?.setting.ratio} 비율</h2>
              </div>
            </div>
          </Guide>
          <Title>{request?.title}</Title>
          <Information>
            <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/f37d5675-c11a-4564-9d8a-c8b2fca47f2d-profile_image-70x70.png'></img>
            <h2>CWIN77</h2>
            <span/>
            <h2>2022년 6월 2일</h2>
          </Information>
          <Explane>
            {
              request?.explane.split('^').map((text,key)=>
                <h2 key={key}>{text}</h2>
              )
            }
          </Explane>
        </Main>
      </div>
      <Nav>
        <NavIconWrapper>
          <NavIcon href={String(request?.videoUrl)} type="_blank">
            <Svg_play stroke="#C8D4E6" {...navIconStyle} />
            <h2>플레이</h2>
          </NavIcon>
          <NavIcon>
            <Svg_download href={String(request?.downloadUrl)} fill="#C8D4E6" {...navIconStyle} />
            <h2>다운받기</h2>
          </NavIcon>
          <NavIcon>
            <Svg_box fill="#C8D4E6" {...navIconStyle} />
            <h2>찜하기</h2>
          </NavIcon>
          <NavIcon>
            <Svg_upload fill="#C8D4E6" {...navIconStyle} />
            <h2>제작완료</h2>
          </NavIcon>
        </NavIconWrapper>
      </Nav>
    </Container>
  )
}

const PlayBtn = styled.a`
  display:flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px 8px;
  margin: 2px;
  h1{
    font-size: 16px;
    margin-left: 8px;
    color:#C8D4E6;
  }
`
const Nav = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:calc(100% - 5rem);
  margin: 2.5rem;
  margin-top: 1.5rem;
`
const NavIconWrapper = styled.div`
  display:flex;
  background-color:#272b35;
  border-radius:8px;
  padding:6px;
`
const NavIcon = styled.a`
  display:flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:10px;
  margin: 0px 2px;
  width:50px;
  h2{
    user-select: none;
    font-size: 11px;
    margin-top: 4px;
  }
`
const Explane = styled.div`
  h2{
    font-size: 16px;
    margin-top: 1.5px;
    letter-spacing: 0.75px;
  }
`
const Title = styled.h1`
  font-size: 20px;
  word-wrap: break-word;
  margin:0px;
`
const Information = styled.div`
  display:flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 14px;
  h2{
    font-size: 14px;
  }
  span{
    width:3px;
    height:3px;
    background-color: #C8D4E6;
    margin: 8px;
  }
  img{
    width:18px;
    height:18px;
    border-radius: 100px;
    padding:2px;
    margin-right: 4px;
  }
`
const Guide = styled.div`
  width:calc(100vw - 2rem - 2.4rem);
  height:calc((100vw - 2rem - 2.4rem) / 16 * 9 );
  background-color: #272b35;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:1.2rem;
  margin-bottom: 12px;
  max-width: calc(45vh / 1 * 2);
  max-height: 45vh;
  div{
    display:flex;
    align-items: center;
    h2{
        font-size: 14px;
        margin-left: 6px;
      }
  }
`
const Main = styled.div`
  margin:1rem;
  display:flex;
  flex-direction: column; 
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
`
const TopBar = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
  margin: 1rem;
`

export default withRouter(Detail)
