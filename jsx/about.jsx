const React = require('react')

// added Tool-tip utility. 
const Utiltip = require('./tooltip.jsx')
const MusicPlay = require('./MusicPlay.jsx')

module.exports = function About() {
  return <div>
    <table><tbody><tr>
      <td><img src="image/ani-keres.jpg" width="100"/> </td>
      <td>
      <ul><h3> Name: Kiyoong Kim </h3></ul> 
      <ul>Career:
      Approximately, 17 years developing experience of <Utiltip text="Tooltip기능 확인용:대부분의 경력은 핸드폰개발 이며 MPU, MCU 를 사용한 Embedded Linux 프로젝트 경험이 있음.">
          Embedded Software. </Utiltip>Plus, Studying 
          <Utiltip text="Tooltip기능 확인용: 아직은 웹프로그램 분야에 실무경험이 없지만 바로 업무를 할 수 있는 준비는 되어 있음">
          React.js, Node.js</Utiltip> and being ready to expand software career widely.</ul>  
          <ul>Home Page : <a href src="https://keres-react.herokuapp.com" target="_blank">
                  https://keres-react.herokuapp.com/ </a></ul>  
          <ul>github : <a href src="git@github.com:KeresKim/keres-react.git" target="_blank">
                  git@github.com:KeresKim/keres-react.git </a></ul>                  
      </td>
      </tr></tbody></table>

      <ul>
      <li><h3>메뉴 설명</h3> </li>
      <li>About 은 tooltip 기능 확인 페이지. 아래 Music play 테스트, 화면 아래 전자시계표시. </li>
      <li>Movie 메뉴는 Redux의 기능 확인. json파일을 node 서버에서 접근 기능 확인.</li>
      <li>쇼핑몰 메뉴는 Modal의 기능 확인.  </li>
      <li>메시지보드 메뉴는 Node 에서 express 를 사용 웹서버를 만들고 클라우드 mongo DB를 연결(여기서는 mlab). 
        client 인 웹어플리케이션과 RESTful 통신으로 메시지를 DB로 부터 읽어서 표시.</li>
      <li>전체적으로 Route 사용하여 메뉴를 구성.  </li>
      <li>node 서버는 heroku 라는 클라우드 서비스에 구성(현재는 무료서비스 사용으로 15초 정도 sleep에서 wakeup하는 시간이 필요 함).  </li>  
      <hr/>        
    </ul> 
    <MusicPlay/>     
  </div>
}