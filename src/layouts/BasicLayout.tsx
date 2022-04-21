import React, { useState } from 'react';
import 'braft-editor/dist/index.css'
import { Button, Menu } from 'antd';
import { history, Link } from 'umi';
import BraftEditor from 'braft-editor'
const BasicLayout = (props) => {

  // const [editorState, seteditorState] = useState(BraftEditor.createEditorState(null))

  const { Item } = Menu
  return (<div>
    <div style={{ position: 'absolute', marginLeft: '5%', marginTop: '15px' }}>Logo</div>
    <Button
      type='link'
      style={{
        width: '120px',
        textAlign: 'center',
        float: 'right',
        marginTop: '5px',
        marginRight: '3%'
      }}
      onClick={() => {
        history.push('/login')
      }}
    >Login</Button>
    <Menu style={{ width: '60%', marginLeft: '10%' }} mode="horizontal">
      <Item style={{ width: '120px', textAlign: 'center' }} ><Link to="/home">Home</Link></Item>
      {/* <Item style={{ width: '120px', textAlign: 'center' }} ><Link to="/">///</Link></Item> */}
      {/* <Item style={{ width: '120px', textAlign: 'center' }} ><Link to="/">///</Link></Item> */}
    </Menu>
    {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>

      <Button onClick={
        async () => { console.log('editorState save that :', editorState.toRAW(true)) }
      }
      >Save</Button>
    </div>
    <div style={{ width: '60%', marginLeft: '20%' }}>
      <BraftEditor
        value={editorState}
        onChange={editorState => seteditorState(editorState)}
      />
    </div> */}


  </div>)
}

export default BasicLayout