import React from 'react'
import { StepProps, Steps as AntSteps, StepsProps } from 'antd-mobile'
import './index.css'
import { Collapse } from 'antd-mobile'
import {
    CheckCircleFill,
    ClockCircleFill,
    HandPayCircleOutline,
    RightOutline
} from 'antd-mobile-icons'

export type ConchStepsProps = {
    type?: string
    style?: LineColor
} & StepsProps

type LineColor = {
    /** 未完成的点的颜色 */
    '--adm-color-background-wait'?: string
    /** 当前的点的颜色 */
    '--adm-color-background-process'?: string
    /** 点的大小 */
    '--dot-size'?: string
    /** 已经完成的点的颜色 */
    '--adm-color-background-finish'?: string
    /** 连线的宽度 */
    '--line-to-next-width'?: string,
    /** 每一根项目连线的颜色 */
    '--line-to-next'?: string | string[]
    /** 每一根已经完成的项目的连线颜色，将覆盖--line-to-next */
    '--line-to-next-finish'?: string | string[]
    /** 每一根项目连线的颜色,background-image */
    '--line-to-next-image'?: string | string[]
    /** 每一根已经完成的项目的连线颜色,background-image，将覆盖--line-to-next */
    '--line-to-next-finish-image'?: string | string[]
}

export type ConchStepProps = {
    type?: 'collapse'
    /** type为collapse的时候生效，默认右箭头 */
    arrow?: React.ReactNode | undefined
    /** type为collapse的时候生效，默认不展开 */
    active?: boolean,
    style?: LineColor
} & StepProps

export default function Steps(props: ConchStepsProps) {
    return <AntSteps {...props} style={{
        '--line-to-next': '#CDCDCD',//TODO 需要填默认色
        '--line-to-next-finish': '#0067FF',
        ...(props.style || {})
    }}>
        {props.children}
    </AntSteps>

}


Steps.Step = function Step(props: ConchStepProps) {
    if (props.type === 'collapse') {
        return <AntSteps.Step {...props} title={<ColTitle arrow={<RightOutline />} {...props}></ColTitle>} description=''></AntSteps.Step>
    }
    return <AntSteps.Step {...props}></AntSteps.Step>
}
Steps.ColTitle = ColTitle

export interface ColTitleProps {
    arrow?: React.ReactNode | ((active: boolean) => React.ReactNode)
    /** 这个项目默认展开 */
    active?: boolean,
    title?: React.ReactNode,
    description?: React.ReactNode
}

function ColTitle(props: ColTitleProps) {
    return <div className='conch-ui-steps-collapse-title'>
        <Collapse defaultActiveKey={props.active ? ['0'] : undefined} arrow={props.arrow}>
            <Collapse.Panel key='0' title={props.title} >
                {props.description}
            </Collapse.Panel>
        </Collapse>
    </div>
}