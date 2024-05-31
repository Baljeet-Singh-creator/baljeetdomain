import React,{useState} from 'react'


export default function Form(props) {
  // Button Handler Onclick uppercase
  const handleUpClick=()=>{
    setText(text.toUpperCase());
    props.showAlert('Converted to Upper Case!👁‍🗨', 'info')
    // console.log('Clicked')
    // setText("ABCD");
  }
  // Handle lowercase button
  const handleLoClick=()=>{
    setText(text.toLowerCase());
    props.showAlert('Converted to Lower Case!👁‍🗨', 'info')
  }
  const handleOnClick=(event)=>{
    // console.log('On Chnage'); for checking
    setText(event.target.value);
  // iska mtlb h ki jo text ki value thi usko bi jo user de ra h uski jgah put krdo
  }
  // Whenever we use input,text area like things we need to use function like handleOnClick
  // Button to handle Clear text button
const handleclear=()=>{
  setText('');
  props.showAlert('Your text has been Cleared👁‍🗨', 'info')
}
// Button to handle Palindrome
const handlepalindrome=(text)=>{
  props.showAlert('Are ye Kam ni krta pr text tera paindrome nahi hai 😂', 'info')
  let revstr="";
  for(let i=text.length-1;i>=0;i--){
    revstr+=text[i];
  }
  if(revstr===text){
    setText("YOUR TEXT IS PALINDROME")
  }else{
    setText("")
  }
};

//Handle Copy Button
const handleCopy=()=>{
  props.showAlert('Your text has been Copied👁‍🗨', 'info')
  let newtext=document.getElementById("exampleFormControlTextarea1")
  newtext.select();
  navigator.clipboard.writeText(newtext.value);
}

// Handle Remove Extra Spaces
const handleSpace=()=>{
  let textspl=text.split(/[ ]+/)
  setText(textspl.join(" "));
  props.showAlert('Extra Spaces has been Removed👁‍🗨', 'info')
}




  const[text,setText]=useState('');
  // text ki default value h Enter a text here
  // Change bi kr dega text ki value aur Page bi Reload ni hoga 
  // text ="ABCD";     WRONG WAY to change the state
  //  setText("ABCD"); CORRECT WAY to change the state
    return (
    <>
    <div style={{color: props.mode==='dark'?"white":"#120c0c"}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
                                                                                        {/* text box mein text ki value aagayi h */}
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode==='dark'?"#120c0c":"white",color: props.mode==='dark'?"white":"black"}} value={text} onChange={handleOnClick} ></textarea>
        {/* yha value jo h text area ki vo text h aur jaise hi m kuch change krunga to handleOnClick function work hoga hi aur free me ek event object bi miljega */}
      {/*notice of on change is that when we click on text box to change the text it works  */}
      {/* Remember Point -> whenever we use state variable as a value in input or text areas places we must need to make a function of handle on change to handle the change on the input boxes */}
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LOWERCASE</button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handlepalindrome}>Check PALINDROME</button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleclear}>Clear Text</button>      
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleSpace}>Remove Extra Space</button>

   </div> 
    <div className="container" style={{color: props.mode==='dark'?"white":"#120c0c"}}>
      <h3>Summary of your Text is:</h3>
      <p><b>Words : </b>{text.split(/\s/).filter((element)=>{ return element.length!==0}).length} and <b>Chacters : </b>{text.length}</p>
      <p><i>You can read the text in {0.08*text.split(' ').length-0.08 } mins</i></p>
      <h3>Preview</h3>
      <p>{text.length>0? text: "Enter Text in the Textbox to preview it here"}</p>
      
    </div>
    </>
    )
    }
