import React, { useState } from "react";
import { default as Steps } from "./step";
import {
    CheckCircleFill,
    ClockCircleFill,
    HandPayCircleOutline,
    RightOutline,
} from "antd-mobile-icons";

const StepPropsT = (
    <table border={1} cellSpacing={0}>
        <thead>
            <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>description</td>
                <td>步骤的详情描述，可选</td>
                <td>
                    <code>ReactNode</code>
                </td>
                <td>-</td>
            </tr>
            <tr>
                <td>icon</td>
                <td>步骤图标的类型</td>
                <td>
                    <code>ReactNode</code>
                </td>
                <td>-</td>
            </tr>
            <tr>
                <td>status</td>
                <td>
                    指定状态。当不配置该属性时，会使用 <code>Steps</code> 的 <code>current</code>{" "}
                    来自动指定状态；
                    如果该属性与 <code>current</code> 指定的状态不匹配会覆盖自动匹配的状态。
                </td>
                <td>
                    <code>'wait' | 'process' | 'finish' | 'error'</code>
                </td>
                <td>
                    <code>'wait'</code>
                </td>
            </tr>
            <tr>
                <td>title</td>
                <td>标题</td>
                <td>
                    <code>ReactNode</code>
                </td>
                <td>-</td>
            </tr>
            <tr>
                <td>type</td>
                <td>为'collapse'的时候表示可以折叠</td>
                <td>'collapse'</td>
                <td>默认undefined，不可折叠</td>
            </tr>
            <tr>
                <td>active</td>
                <td>type为'collapse'的时候生效,表示展开这个项目</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>arrow</td>
                <td>为'collapse'的时候生效,默认右箭头,展开的时候顺时针旋转90deg</td>
                <td>ReactNode</td>
                <td>默认undefined，不可折叠</td>
            </tr>
        </tbody>
    </table>
);

export default function Demo() {
    const [current, setCurrent] = useState(2);
    const [current2, setCurrent2] = useState(5);
    const linearStep = [0, 1, 2, 3, 4, 5, 6]
    return (
        <div>
            <h3>demo</h3>
            {/* @ts-ignore */}
            <Steps
                style={{
                    "--line-to-next": "red",
                    "--line-to-next-finish": "green",
                }}
                current={current}
                direction="vertical"
            >
                <Steps.Step key={0} title="标题0" description={<div>描述1</div>} />
                <Steps.Step key={1} title="标题1-Steps.Step的props"
                    description={StepPropsT} icon={<HandPayCircleOutline />} />

                <Steps.Step
                    key={2}
                    title={<div>可以折叠的</div>}
                    active
                    icon={<ClockCircleFill />}
                    type="collapse"
                    description={<div>type="collapse"可以折叠</div>}
                />
                <Steps.Step key={3} title="标题3" />
            </Steps>
            分割线-------------
            <div style={{ width: '1200px' }}>
                <Steps style={{
                    '--dot-size': '3px',
                    '--adm-color-background-finish': '#FF0000',
                    '--line-to-next-finish': 'rgba(0,0,0,0)',
                    '--line-to-next-width': '3px'
                }} current={current2} direction="horizontal">
                    {linearStep.map((v, index) => <Steps.Step style={{
                        '--line-to-next-finish-image': `linear-gradient(90deg,rgba(255,0,0,${index / linearStep.length}),rgba(255,0,0,${(index + 1) / linearStep.length}) )`
                    }} key={1} title={`标题${v}`} />)}
                </Steps>
            </div>



        </div>
    );
}
