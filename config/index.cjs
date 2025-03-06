/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx864ada7b81629be1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8392caef91201a450377c840c114c310',

  PROVINCE: '辽宁',
  CITY: '大连',

  USERS: [
    {
      // 想要发送的人的名字
      name: '贝利亚大帝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orCb27FKbE8gee6sZHgyPt9iE2GA'
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lXQFLblTqLSubPVA8HgceVXkLjbLWv4g8jrenSWIFCE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-06',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*阴历出克日', name: '小王', year: '2006', date: '03-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '阳历出壳日', name: '小王', year: '2006', date: '04-06',
        },
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'lXQFLblTqLSubPVA8HgceVXkLjbLWv4g8jrenSWIFCE',

  CALLBACK_USERS: [
    {
      name: '小王⌯>ᴗo⌯ಣ',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orCb27HUv449AgQz7livsWx-sfUM',
    }
  ],

}

module.exports = USER_CONFIG

