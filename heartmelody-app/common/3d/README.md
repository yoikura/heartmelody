
### 安装

        npm i mxreality.js

### 引用

        import * as THREE from 'mxreality.js/build/three';
        import {VR,AVR} from 'mxreality.js/build/mxreality';
        import * as Hls from 'mxreality.js/build/hls';

### 例子

        create-react-app hello-world
        cd hello-world

        # 修改src/App.js

        window.THREE = THREE; // 重要，不设置则会报未定义错误！！！！！！
        window.Hls = Hls;
        
        class MyComponent extends React.Component {
                constructor(props) {
                        super(props);
                        this.state = { 
                                container:createRef()
                        }
                }
                componentDidMount(){
                        console.log(THREE)
                        console.log('isMobile',AVR.OS.isMobile())
                        let scene=new THREE.Scene()
                        let renderer=new THREE.WebGLRenderer()
                        this.state.container.current.appendChild(renderer.domElement);
                        let vr=new VR(scene,renderer,this.state.container.current);
                        vr.loadProgressManager.onLoad=function () {
                        vr.VRObject.getObjectByName("__mxrealityDefault").visible = true;
                                console.log('loaded',vr.VRObject.getObjectByName("__mxrealityDefault").visible)
                                //vr.controls.enable=false;
                        }
                        vr.loadProgressManager.onProgress=function () {
                                console.log("onProgress")
                        }
                        vr.loadProgressManager.onError=function () {
                                console.log("onError")
                        }
                        vr.init(function(){

                        })
                        vr.playPanorama('http://localhost:3000/123.jpg');
                }
                onLoad(){
                
                }
                render() {
                        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
                        return (
                                <div ref={this.state.container}></div>
                        );
                }
        }

        function App() {  
                return (
                        <MyComponent />
                );
        }

        export default App;
