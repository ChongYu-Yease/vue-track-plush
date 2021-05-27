import Vue from 'vue'

interface Arg {
    buttonName?: string

    pageName?: string

    userAgent?: string

    pageUrl?: string

    projectName: string

    param: any
}

type handleEvent = (arg: Arg) => void

type install = (vue: Vue, arg: Arg) => void

export interface VueTrackPlush {
    install: install
    clickEvent: handleEvent
    browseEvent: handleEvent
}

export declare global {
    const vueTrackPlush: VueTrackPlush
}
// declare var vueTrackPlush: VueTrackPlush

// declare namespace VueTrackPlush {
//     export type clickEvent = (arg: Arg) => void
//     export type browseEvent = (arg: Arg) => void
//     export type install = (vue: Vue, arg: Arg) => void
// }

// export = VueTrackPlush

// export as namespace VueTrackPlush
