import Link from "next/link";
import styled from 'styled-components' 
import Svg_money from '../svgs/money.svg';
import Svg_play from '../svgs/play.svg';
import Svg_tag from '../svgs/tag.svg';
import Svg_ratio from '../svgs/ratio.svg';
import Svg_subtitle from '../svgs/subtitle.svg';
import Svg_clock from '../svgs/clock.svg';
import Svg_menu from '../svgs/menu.svg';

function Request() {
  const iconStyle = {fill:"#C8D4E6",width:18,height:18}
  return (
    <Container>
      <Guide>
        <div style={{justifyContent: "space-between"}}>
          <div>
            <Svg_tag {...iconStyle} />
            <h2>게임 / 자막</h2>
          </div>
          <div>
            <Svg_subtitle {...iconStyle} />
            <h2>자막 필수</h2> {/* 자막 불필요 */}
          </div>
        </div>
        <div style={{justifyContent:'center'}}>
          <PlayBtn href='https://youtu.be/3Wex4qJJN-s' target='_blank'>
            <Svg_play width={22} height={22} stroke="#C8D4E6" />
          </PlayBtn>
        </div>
        <div style={{justifyContent: "space-between"}}>
          <div>
            <Svg_clock {...iconStyle} />
            <h2>8분 이내</h2>
          </div>
          <div>
            <Svg_ratio {...iconStyle} />
            <h2>16 : 9 비율</h2>
          </div>
        </div>
      </Guide>
      <div style={{margin:4}}>
        <div style={{display:"flex",alignItems:'center'}}>
          <UserImg src='https://lh3.googleusercontent.com/a-/AOh14GhBIpwktw4iDwX7_dafbrn64O2wNRJbx1hivycj5A=s96-c'/>
          <StatusText>CWIN77</StatusText>
          <span style={{width:3,height:3,backgroundColor:'rgba(218, 228, 242, 0.7)',margin:6,borderRadius:"100px"}} />
          <StatusText>3시간전</StatusText>
        </div>
        <Link href="/request/Adm1sK9W">
          <div>
            <Title>간단하게 컷편집 해주세요!</Title>
            <ExplaneText>게임 플레이 영상중에서 괜찮은 장면만 적당히 골라서 컷편집으로 만들어서 올려주세요.</ExplaneText>
          </div>
        </Link>
        <div style={{display:'flex',alignItems:'center',marginTop:8,marginBottom:2,justifyContent:"space-between",width:'100%'}}>
          <div style={{display:'flex',alignItems:'center',margin:2,marginTop:6}}>
            <Svg_money width={20} height={20} fill="#C8D4E6" />
            <Payment>60,000원~</Payment>
          </div>
          <Svg_menu width={20} height={20} fill="#C8D4E6" style={{padding:6}} / >
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:calc(100vw - 2rem - 16px);
  margin: 1rem;
  border-radius: 8px;
  @media only screen and (min-width:780px) {
    margin-right:0rem;
    width: calc(((100vw - 16px) / 2) - 1rem);
  }
  @media only screen and (min-width:1200px) {
    margin-right:0rem;
    width: calc(((100vw - 16px) / 3) - 1rem);
  }
  @media only screen and (min-width:1650px) {
    margin-right:0rem;
    width: calc(((100vw - 16px) / 4) - 1rem);
  }
`
const Guide = styled.div`
  width:calc(((100vw - 16px) / 1) - 2.4rem - 1rem);
  height:calc((((100vw - 16px) / 1) - 2.4rem - 1rem) / 16 * 9 );
  background-color: #272b35;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:1.2rem;
  margin-bottom: 2px;
  div{
    display:flex;
    align-items: center;
    h2{
        font-size: 14px;
        margin-left: 8px;
      }
  }
  @media only screen and (min-width:780px) {
    width: calc(((100vw - 16px) / 2) - 2.4rem - 1rem);
    height:calc((((100vw - 16px) / 2) - 2.4rem - 1rem) / 16 * 9 );
  }
  @media only screen and (min-width:1200px) {
    width: calc(((100vw - 16px) / 3) - 2.4rem - 1rem);
    height:calc((((100vw - 16px) / 3) - 2.4rem - 1rem) / 16 * 9 );
  }
  @media only screen and (min-width:1650px) {
    width: calc(((100vw - 16px) / 4) - 2.4rem - 1rem);
    height:calc((((100vw - 16px) / 4) - 2.4rem - 1rem) / 16 * 9 );
  }
`
const UserImg = styled.img`
  width:14px;
  height:14px;
  border-radius: 100px;
  margin-right: 6px;
`
const Title = styled.h1`
  font-size: 18px;
  width:92%;
  margin-top:2px;
  margin-bottom: 4px;
`
const StatusText = styled.h4`
  font-size: 11px;
  color: rgba(218, 228, 242, 0.7);
`
const ExplaneText = styled.h2`
  font-size: 14px;
  margin-top: 4px;
  width:92%;
  color: rgba(218, 228, 242, 0.7);
`
const Tag = styled.div`
  font-size: 12px;
  background-color: #181a20;
  padding:6px 12px;
  margin-right: 10px;
  margin-top: 14px;
  border-radius: 8px;
`
const Payment = styled.div`
  font-size: 18px;
  margin-left: 5px;
`
const PlayBtn = styled.a`
  display:flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  margin: 2px;
  h1{
    font-size: 16px;
    margin-left: 8px;
    color:#C8D4E6;
  }
`

export default Request
