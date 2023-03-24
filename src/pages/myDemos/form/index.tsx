import React from 'react'
import { Collapse } from 'antd'
import styles from './styles.less'

export default function Form() {
  return (
    <div className={styles.root}>
      <h3>表单相关</h3>
      通过form1 = document.forms.form1可以看到具有name:form1属性的表单form1 <br />
      通过form1.elements.a（或者form1.a,前提是不可以修改name属性）可以获取到所有具有name:a属性的表单控件； <br />
      通过form1.elements.a.form === form1
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel header="input类型" key="1">
          <form onFocusCapture={(e) => {
            console.log('form捕获focus：', e)
          }} name='form1' action="" onInput={(v) => console.log('onInput事件触发:', v)}>
            <code>range：</code>
            <input name='a' id="a" type="range" min="0" max="100" />100+
            <input name='b' id="b" type="text" value="50" />=
            <output name="x" htmlFor="a b"></output>
            <br />
            <br />
            checkbox: checkbox1.checked 获取checkbox的值为true/false，value则一直是'on'
            <input name='checkbox1' type="checkbox" />

            <br /><br />

            <select name='select1' id="select">
              <option value="apple">Apple</option>
              <option value="pear">Pear</option>
              <option value="banana">Banana</option>
            </select>
            <br /><br /><br />
            <h4>focus：与tabIndex</h4>
            tabIndex使任何元素都可以使用ele.focus（）,以及伪类:focus等，并且点击它也可使它聚焦
            <div onFocus={() => {
              console.log('div的普通onFocus')
            }} tabIndex={-1}>
              <div>
                tabIndex使任何元素都可以点击聚焦
                <br />
                focus,blur无法冒泡，但是可以捕获,react通过onFocusCapture即可(form用这个即可)
              </div>
            </div>
          </form>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 2" key="2">

        </Collapse.Panel >
        <Collapse.Panel header="This is panel header 3" key="3">

        </Collapse.Panel >
      </Collapse>
    </div>
  )
}
