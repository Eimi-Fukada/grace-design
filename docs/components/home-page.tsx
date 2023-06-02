import React from 'react'
import componentlogo from '../../public/componentlogo.svg'
import './home-page.less'

export default () => {
  const features = [
    {
      title: '灵活的功能',
      emoji: '💎',
      description: '组件功能多样化，更灵活的配置',
    },
    {
      title: '轻量化',
      emoji: '🚀',
      description: '包体积极小且速度快',
    },
    {
      title: '技术栈',
      emoji: '🌈',
      description: 'react、jest、typescript、vite',
    },
  ]

  return (
    <div className="homepage">
      <div className="content">
        <div className="leftbox">
          <div className="title">Grace design</div>
          <div className="description">探索移动端 Web 的体验极限</div>
          <div className="buttonbox">
            <button className="btn">开始使用</button>
            <button className="btn">在线体验</button>
          </div>
        </div>
        <div className="rightbox">
          <div className="imagebg" />
          <img src={componentlogo} className="logo" />
        </div>
      </div>
      <div className="features">
        {features.map((i) => {
          return (
            <div className="item">
              <div className="featureitem">
                <div className="emoji">{i.emoji}</div>
                <div className="featureitem-title">{i.title}</div>
                <div className="featureitem-description">{i.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
