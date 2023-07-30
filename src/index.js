import React  from "react";
import ReactDOM from 'react-dom';

const new_date=new Date().toLocaleTimeString();
let curtime=new Date(2023,7,30,20);
let wish="Morning";
curtime=curtime.getHours();

const cssStyle={

};


if(curtime>=12 && curtime<=19)
{
  wish="Good evening";
  cssStyle.color="Orange";
}
else if(curtime>=1 && curtime<12)
{
  wish="Good Morning";
  cssStyle.color="Green";
}
else if(curtime>=19 && curtime<24)
{
  wish="Good Night";
  cssStyle.color="brown";
}


ReactDOM.render(
  <h1>
      Hello Sir,
      <span style={cssStyle}> {wish} </span>
  </h1>,
  document.getElementById('root')
)