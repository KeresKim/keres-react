# React 기능 확인을 위한 Node Web Server 및 Web Application. 

React 의 다양한 기능 확인을 위한 Node Web Server 및 Web Application.

## 서버에서 바로 확인

Heroku 무료 서버에서 동작함으로 Sleep mode 중 이라면 깨어나는데 10초 정도 소요 됩니다.
* https://keres-react.herokuapp.com

## 메뉴 설명 
* About 메뉴에서 tooltip 기능 과 music 등 기능 동작 확인. 
* Movie 메뉴에서 Redux 기능 확인. 서버의 json 파일 접근 확인. 
* Shopping Mall 메뉴에서 modal 기능 확인.  
* 메시지보드 메뉴는 Node 와 express 를 사용 웹서버를 만들고 클라우드 mongo DB를 연결 (여기서는 mlab).  
  client 인 웹어플리케이션과 RESTful 통신으로 메시지를 DB로 부터 읽어서 표시.
* 전체적으로 Route 사용하여 메뉴를 구성.
* node 서버는 heroku 라는 클라우드 서비스에 구성(현재는 무료서비스 사용으로 15초 정도 sleep에서 wakeup time이 필요).
* 프로젝트 소스는 github 에서 확인 가능. ( git@github.com:KeresKim/keres-react.git )

## 소스 설치 및 로컬에서 서비스 시작 확인. 

    git clone git@github.com:KeresKim/keres-react.git
    cd keres-react
    npm install
    npm start
* http://localhost:3000/
