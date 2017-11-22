// play.js
Page({
    data: {
        content: ''
    },
    bindInput (e) {
        this.setData({
            content: e.detail.value
        })
    },
    clearPlayInfo () {
        this.setData({
            content: ''
        })
    }
})