const timing = performance.timing

window.onload = () => {
    console.log(
        `dom解析耗时：${timing['domComplete'] - timing['responseEnd']}毫秒`
    )
}
