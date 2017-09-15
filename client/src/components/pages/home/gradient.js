import React from 'react';
import {Link} from 'react-router-dom';

export default class Gradient extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x:70,
      y:60
    }
  }

  componentWillMount(){
    setTimeout(()=> {
      try{
        this.hoverBlock.className = 'gridNav container show'
      }
      catch(e){
        return;
      }
    }, 3000)
  }

  gradientFollow(e){
    let grid = this.grid;
    let x = Math.ceil(((e.screenX - grid.offsetLeft) / grid.offsetWidth) * 100);
    let y = Math.ceil(((e.screenY - grid.offsetTop) / grid.offsetHeight) * 100);
    this.setState({
      x,
      y
    });
  }
  
  render(){
    return(
      <div className="grid" 
        onMouseMove={e=> this.gradientFollow(e)} 
        ref={ grid=> this.grid = grid } 
        style={{
          background:`radial-gradient(circle 600px at ${this.state.x}% ${this.state.y}%, #75DBCD 20%, #C04CFD 100%)`
        }}>
          <Link to="/skills">
            <div className="gridNav container" ref={hoverBlock=> this.hoverBlock = hoverBlock}>
              <img alt="navigation arrow top" className="top" src="./assets/gridNav.svg"/>
              <img alt="navigation arrow bottom" className="bottom" src="./assets/gridNav.svg"/>
            </div>
          </Link>
          <img alt="grid" src="./assets/Grid.svg"/>

      </div>
    );
  }
}