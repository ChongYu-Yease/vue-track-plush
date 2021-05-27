// import Exposure from './exposure'
import Click from './click'
import Browse from './browse'
import './page-event.js'
// 指令 触发
const install = function (Vue, trackPlusConfig) {
    Vue.directive('track', {
        bind(el, binding) {
            const { arg } = binding
            arg.split('|').forEach((item) => {
                // 点击
                if (item === 'click') {
                    new Click(trackPlusConfig).handleClickEvent({
                        el,
                        type: 'instruction',
                    })
                }
                // 曝光
                // else if (item === 'exposure') {
                //     new Exposure(trackPlusConfig).handleExposureEvent({
                //         el,
                //     })
                // }
                // 浏览
                else if (item === 'browse') {
                    new Browse(trackPlusConfig).handleBrowseEvent({
                        type: 'instruction',
                        el,
                    })
                }
            })
        },
    })
}

const clickEvent = (trackPlusConfig) => {
    new Click(trackPlusConfig).handleClickEvent({
        buttonName: trackPlusConfig.buttonName,
        type: 'customize',
    })
}
const browseEvent = (trackPlusConfig) => {
    new Browse(trackPlusConfig).handleBrowseEvent({
        pageName: trackPlusConfig.pageName,
        type: 'customize',
    })
}

export default { browseEvent, clickEvent, install }
