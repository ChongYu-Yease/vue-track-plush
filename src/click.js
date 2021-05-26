import request from './fetch'

export default class Click {
    constructor(trackPlusConfig) {
        this.trackPlusConfig = trackPlusConfig || null
    }
    handleClickEvent(entry) {
        if (entry.type === 'customize') {
            this.track({
                buttonName: entry.buttonName,
                userAgent:
                    this.trackPlusConfig.userAgent || navigator.userAgent, //客户端设备
                pageUrl: this.trackPlusConfig.pageUrl || window.location.href, //当前页面路径
                projectName: this.trackPlusConfig.projectName, //项目名称
                actionType: '点击事件',
                param: this.trackPlusConfig.param || null, //业务参数
            })
        } else {
            const trackParams = entry.el.attributes['track-params']
            const buttonName = trackParams ? trackParams.value : null
            entry.el.addEventListener('click', () => {
                this.track({
                    buttonName,
                    userAgent:
                        this.trackPlusConfig.userAgent || navigator.userAgent, //客户端设备
                    pageUrl:
                        this.trackPlusConfig.pageUrl || window.location.href, //当前页面路径
                    projectName: this.trackPlusConfig.projectName, //项目名称
                    actionType: '点击事件',
                    param: this.trackPlusConfig.param || null, //业务参数
                })
            })
        }
    }
    /**
     * 事件上报
     * @param {Object} data
     */
    track(data) {
        new request({
            timeout: 10000,
            baseURL: this.trackPlusConfig.baseURL,
            withCredentials: true,
            url: this.trackPlusConfig.url,
            method: this.trackPlusConfig.method || 'post',
            data,
        })
    }
}
