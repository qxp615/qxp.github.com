import type { DataNode } from 'antd/es/tree';
import { hashGo } from '../../../utils';


export const treeDate = [
    {
        title: '导航',
        key: '0',
        children: [
            {
                title: 'Steps',
                key: '0-1',
                info: {
                    onClick: () => hashGo('/components/antd-mobile/steps')
                }

            }
        ]
    }
]