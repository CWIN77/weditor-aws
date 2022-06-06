import styled from 'styled-components' 
import Svg_play from '../svgs/play.svg';
import Svg_tag from '../svgs/tag.svg';
import Svg_ratio from '../svgs/ratio.svg';
import Svg_subtitle from '../svgs/subtitle.svg';
import Svg_clock from '../svgs/clock.svg';

function VideoGuide({ratio1,ratio2}:{ratio1:string,ratio2:string}) {
  const iconStyle = {fill:"#C8D4E6",width:16,height:16}
  return (
    <Guide ratio1={ratio1} ratio2={ratio2}>
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
          <Svg_play width={16} height={16} stroke="#C8D4E6" />
          <h1>Play</h1>
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
const Guide = styled.div<{ratio1:string, ratio2:string}>`
  width:calc(((100vw - 16px) / 1) - 2.4rem - 1rem);
  height:calc((((100vw - 16px) / 1) - 2.4rem - 1rem) / ${ (props)=>props.ratio1 ? props.ratio1 : 16} * ${(props)=>props.ratio2 ? props.ratio2 : 9} );
  background-color: #272b35;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:1.2rem;
  margin-bottom: 8px;
  div{
    display:flex;
    align-items: center;
    h2{
        font-size: 13px;
        margin-left: 8px;
      }
  }
  @media only screen and (min-width:780px) {
    width: calc(((100vw - 16px) / 2) - 2.4rem - 1rem);
    height:calc((((100vw - 16px) / 2) - 2.4rem - 1rem) / ${ (props)=>props.ratio1 ? props.ratio1 : 16} * ${(props)=>props.ratio2 ? props.ratio2 : 9} );
  }
  @media only screen and (min-width:1200px) {
    width: calc(((100vw - 16px) / 3) - 2.4rem - 1rem);
    height:calc((((100vw - 16px) / 3) - 2.4rem - 1rem) / ${ (props)=>props.ratio1 ? props.ratio1 : 16} * ${(props)=>props.ratio2 ? props.ratio2 : 9} );
  }
  @media only screen and (min-width:1650px) {
    width: calc(((100vw - 16px) / 4) - 2.4rem - 1rem);
    height:calc((((100vw - 16px) / 4) - 2.4rem - 1rem) / ${ (props)=>props.ratio1 ? props.ratio1 : 16} * ${(props)=>props.ratio2 ? props.ratio2 : 9} );
  }
`

export default VideoGuide
