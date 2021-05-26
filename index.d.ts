import Vue from 'vue'

interface Arg {
    buttonName: string

    userAgent?: string

    pageUrl?: string

    projectName: string

    param: any
}

type handleEvent = (arg: Arg) => void

type install = (vue: Vue, arg: Arg) => void

interface VueTrackPlush {
    install(): install
    clickEvent: handleEvent
    browseEvent: handleEvent
}

declare var VueTrackPlush: {
    prototype: VueTrackPlush
}
