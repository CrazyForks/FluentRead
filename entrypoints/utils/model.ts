import {defaultOption, services} from "./option";

interface IMapping {
    [key: string]: string;
}

// 内包，存储额外信息
interface IExtra {
    [key: string]: any
}

export class Config {
    on: boolean; // 是否开启
    from: string;
    to: string;
    hotkey: string;
    style: number;
    display: number;
    service: string;
    token: IMapping;
    ak: string;
    sk: string;
    appid: string;
    key: string;
    model: IMapping;
    customModel: IMapping;  // 自定义模型名称
    proxy: IMapping;  // 代理地址
    custom: string; // 本地服务地址
    extra: IExtra;  // 额外信息（内包信息）
    system_role: IMapping;
    user_role: IMapping;
    count: number;  // 翻译次数

    constructor() {
        this.on = true;
        this.from = defaultOption.from;
        this.to = defaultOption.to;
        this.style = defaultOption.style;
        this.display = defaultOption.display;
        this.hotkey = defaultOption.hotkey;
        this.service = defaultOption.service;
        this.token = {};
        this.ak = '';
        this.sk = '';
        this.appid = '';
        this.key = '';
        this.model = {};
        this.customModel = {};
        this.proxy = {};
        this.custom = defaultOption.custom;
        this.extra = {};
        this.system_role = {
            [services.openai]: defaultOption.system_role,
            [services.gemini]: defaultOption.system_role,
            [services.yiyan]: defaultOption.system_role,
            [services.tongyi]: defaultOption.system_role,
            [services.zhipu]: defaultOption.system_role,
            [services.moonshot]: defaultOption.system_role,
            [services.custom]: defaultOption.system_role,
            [services.claude]: defaultOption.system_role,
            [services.infini]: defaultOption.system_role,
            [services.baichuan]: defaultOption.system_role,
            [services.lingyi]: defaultOption.system_role,
            [services.deepseek]: defaultOption.system_role,
            [services.minimax]: defaultOption.system_role,

        },
            this.user_role = {
                [services.openai]: defaultOption.user_role,
                [services.gemini]: defaultOption.user_role,
                [services.yiyan]: defaultOption.user_role,
                [services.tongyi]: defaultOption.user_role,
                [services.zhipu]: defaultOption.user_role,
                [services.moonshot]: defaultOption.user_role,
                [services.custom]: defaultOption.user_role,
                [services.claude]: defaultOption.user_role,
                [services.infini]: defaultOption.user_role,
                [services.baichuan]: defaultOption.user_role,
                [services.lingyi]: defaultOption.user_role,
                [services.deepseek]: defaultOption.user_role,
                [services.minimax]: defaultOption.user_role,
            },
            this.count = 0;
    }
}