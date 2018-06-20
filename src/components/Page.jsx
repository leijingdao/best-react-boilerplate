import React, { Component } from 'react';
import Collapse, { Panel } from './collapse';
import './collapse/index.g.less';
import styles from './Page.scss';
// const PanelList = Panel.PanelList;
const Header = (props) => (
  <div className={styles.header}>
    <div className="circle">
      <span>{props.index}</span>
    </div>
    <div className="txt" >{props.txt}</div>
    {props.isActive ? <i className="iconfont icon-shouqishang"></i> : <i className="iconfont icon-zhankaixia"></i>}
  </div>
)
const PanelList = (props) => (
  <div className={styles.panelList} style={{
    borderBottom: props.last && 'none'
  }} >
    <div style={{
      width:'87%'
    }}> {props.txt}</div>
    {props.isActive ? <i className="iconfont icon-shouqishang"></i> : <i className="iconfont icon-zhankaixia"></i>}

  </div>
)
export default class Page extends Component {
  render() {
    return (
      <div>
        <Collapse>
          <Panel showArrow={false} header={(props) => (
            <Header index={1} txt="评估流程操作指引" isActive={props.isActive} />
          )}>
            <Collapse>
              <Panel child showArrow={false} header={(props) => (
                <PanelList txt="如何进行身份验证？" isActive={props.isActive} />
              )} >
                <div className={styles.childPanelConent}>
                  <p>身份验证，分为两个部分：</p>
                  <p>1.扫描身份证正反面</p>
                  <img src="./static/shenfenyanzheng1@2x.png" alt="" />
                  <p>2.验证手机号码</p>
                  <img src="./static/shenfenyanzheng2@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => (
                <PanelList index={1} txt="如何上传征信信息？" isActive={props.isActive} />
              )} >
                <div className={styles.childPanelConent}>
                  <p>在评估流程中需要上传客户的征信信息，此时需要中介人员拍摄用户的纸质征信报告。</p>
                  <img src="./static/shangchuanzhengxin@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => (
                <PanelList index={1} txt="如何录入补充信息？" isActive={props.isActive} />
              )} >
                <div className={styles.childPanelConent}>
                  <p>补充信息页面中，有*号的为必填字段，其余为选填字段；信息填写越完整越能匹配更多优质产品和提高预估可贷额度。</p>
                  <img src="./static/buchongxinxi@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => (
                <PanelList last index={1} txt="如何查询评估进度？" isActive={props.isActive} />
              )} >
                <div className={styles.childPanelConent}>
                  <p>提交客户信息后，可在提交成功的页面可点击【查看进度】查看客户的业务进度，或返回在首页中点击进入【查询进度】查看该客户进度详情。</p>
                  <img src="./static/pinggujindu@2x.png" alt="" />
                </div>
              </Panel>
            </Collapse>
          </Panel>
          <Panel showArrow={false} header={(props) => <Header index={2} txt="查询进度操作指引" isActive={props.isActive} />}>
            <Collapse>
              <Panel child showArrow={false} header={(props) => <PanelList txt="如何按业务状态筛选客户列表？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>默认显示全部状态的客户列表</p>
                  <img src="./static/shaixuankehulibiao1@2x.png" alt="" />
                  <img src="./static/shaixuankehulibiao2@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => <PanelList index={1} txt="如何精准搜索客户？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>在【查询进度】页面，点击右上方搜索按钮进入搜索</p>
                  <img src="./static/jingzhunsousuokehu@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => <PanelList index={1} txt="如何查看客户进度详情？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>在【查询进度】页面，选择需要查看的客户，进入该客户进度详情页面</p>
                  <img src="./static/kehujinduxiangqing@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => <PanelList last index={1} txt="如何查看推荐产品？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>当客户评估完成后，在客户的进度明细中可查看成功匹配的产品</p>
                  <img src="./static/tuijianchanpin1@2x.png" alt="" />
                  <img src="./static/tuijianchanpin2@2x.png" alt="" />
                </div>
              </Panel>
            </Collapse>
          </Panel>
          <Panel showArrow={false} header={(props) => <Header index={3} txt="团队管理操作指引" isActive={props.isActive} />}>
            <Collapse>
              <Panel child showArrow={false} header={(props) => <PanelList txt="如何查找团队成员的联系方式？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>在【团队成员通讯录】中点击搜索，输入团队成员的姓名可搜索团队成员的联系方式</p>
                  <img src="./static/tuanduichengyuan@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => <PanelList index={1} txt="如何筛选总客户列表？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>可通过选择日期，筛选客户列表</p>
                  <img src="./static/shaixuanzongkehuliebiao1@2x.png" alt="" />
                  <p>可通过选择状态，筛选客户列表</p>
                  <img src="./static/shaixuanzongkehuliebiao2@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => <PanelList index={1} txt="如何查看团队业绩详情？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>在【团队个人业绩报表】中，可以从日、周、月、多维度比较团队中个人的业绩</p>
                  <img src="./static/tuanduiyejixiangqing1@2x.png" alt="" />
                  <img src="./static/tuanduiyejixiangqing2@2x.png" alt="" />
                </div>
              </Panel>
              <Panel child showArrow={false} header={(props) => <PanelList last index={1} txt="如何查看产品方业绩详情？" isActive={props.isActive} />} >
                <div className={styles.childPanelConent}>
                  <p>在【产品运营监测】中，可以从日、周、月多维度比较产品方的运营情况</p>
                  <img src="./static/chanpinfangyeji1@2x.png" alt="" />
                  <img src="./static/chanpinfangyeji2@2x.png" alt="" />
                </div>
              </Panel>
            </Collapse>
          </Panel>
        </Collapse >
      </div >
    )
  }
}
