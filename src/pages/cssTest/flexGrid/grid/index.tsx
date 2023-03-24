import React from 'react'
import styles from './styles.less'

export default function Grid() {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.right}>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem1}>1</div>
                    <div className={styles.gridItem2}>2</div>
                    <div className={styles.gridItem3}>3</div>
                    <div className={styles.gridItem4}>4</div>
                    <div className={styles.gridItem5}>5</div>
                    <div className={styles.gridItem6}>6</div>
                    <div className={styles.gridItem7}>7</div>
                    <div className={styles.gridItem8}>8</div>
                    <div className={styles.gridItem9}>9</div>
                </div>
            </div>
            <div className={styles.left}>
                控制台打开布局中的网格，勾选网格覆盖，可以看到网格的行列；
                <b>首先，没有元素，也可看到网格区域，是先有网格区域，然后再把项目放到网格区域中去</b>
                <h2>grid容器的属性：</h2>
                <div>
                    <h4>设置列数与列宽度</h4>
                    使用 grid-template-columns: 2fr 10px 10% 1fr auto; 5个值，表示5列：
                    <br /> 第一列宽度2fr：除掉10px 10% auto之后，容器宽度的2/3，修改1的宽度超过这个值，将会撑开第一列的宽度,这里的auto就是适应子元素宽度；
                    <br /><br />
                    还可以给每一列起名，使用c1表示第一列...：<br />
                    grid-template-columns: [c1] 2fr [c2] 10px [c3] 10% [c4] 1fr [c5] auto;
                    <br /><br />
                    值max-content、min-content
                    <br />max-content表示以该列宽度刚好包裹该列最大的元素；似乎没什么区别
                    <br /><br />
                    值minmax(min, max)
                    <br />设置列宽度的范围，参数可以调换位置；

                    <br />
                    grid-template-[columns/rows]  会覆盖掉下面： <br />
                    <strong>grid-auto-columns可以设置每一列的默认宽度（隐式网格），列数由子元素的grid-column决定</strong><br />
                    <strong>grid-auto-rows可以设置每一行的默认高度（隐式网格），行数由子元素的grid-row决定</strong> <br />
                    这两个属性是配合子元素的gird-column，或者grid容器的grid-template-areas使用的(因为他们都可以创建指定数量的行列)，而grid-template-[columns|rows]则可以详细的指定每条行/列的高/宽


                    <h4>grid-template-rows 设置行的高度，值与列一样</h4><br />
                    <h4>网格区域grid-template-areas</h4>
                    勾选布局，网格区域，可以看到网格区域，并且可以使用css选中这个网格区域（与网格元素无关）;
                    相邻的网格区域可以使用相同的名字，表示合并这2个区域，然后对子元素使用grid-area:[值从网格命名中去选]；就可以将子元素放到这个网格区域中去了；详情看gridItem1和gridItem5的样式代码
                    <br /><br />
                    <h4>网格的间隙</h4>
                    grid-column-gap: 10px;列的间隙为10px<br />
                    grid-row-gap:10px;<br />
                    grid-gap：上面两个的缩写
                    <br /><br />
                    <h4>justify-items</h4>
                    各网格区域内，元素的水平对齐方式;<br />
                    start: 内容与网格区域的左端对齐<br />
                    end: 内容与网格区域的右端对齐<br />
                    center: 内容位于网格区域的中间位置<br />
                    stretch: 内容宽度占据整个网格区域空间(这是默认值) <br /><br />
                    <div style={{ border: '1px solid red', padding: '30px' }}>
                        <b>与flex相同的属性</b>

                        <h4>align-items</h4>
                        各个网格区域内纵向对齐方式，同flex <br /><br />
                        <h4>justify-content</h4>
                        整个网格于它父元素的水平对齐方式，当整个网格宽度小于它父元素的时候就有用了
                        <br /><br />
                        <h4>align-content</h4>
                        网格的行相对父元素的对齐方式，同flex的多行是一样的
                    </div>

                </div>

                <h2>grid元素的属性：</h2>
                <h4>grid-area</h4>
                比如对2加上这个属性，发现2放到aa网格区域去了，是grid-[column|row]-[start|end]四个属性的缩写

                <br />
                <h4>grid-[column|row]-[start|end]</h4>
                用它来指定这个元素占据第几行的与第几列，是gird-[column|row]-[start|end]的缩写，
                它的值为网格线的名称|行号（表示第几个网格线，布局-网格-显示覆盖设置选中行号，可以看到行号、行名称）；<br />
                比如： <br />
                gird-column:1/4; 表示它从占据行号1到行号4的3列宽，这就隐式说明gird容器至少有3列；
                <div>

                </div>
            </div>
        </div>
    )
}
