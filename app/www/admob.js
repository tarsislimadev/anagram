
// admob id format ca-app-pub-xxxxxxxxxxxxxxxxxxx/xxxxxxxxxx
admob.initAdmob('admob banner ID', 'admob interstitial ID')

// show banner at the top of app  
const admobParam = new admob.Params()
admobParam.extra = { 'keyword': 'letters' }
admob.showBanner(admob.BannerSize.BANNER, admob.Position.TOP_CENTER, admobParam)

// show event messages
const onAdmobEvent = message => window.alert(JSON.stringify(message))
document.addEventListener(admob.Event.onAdmobBannerDismiss, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobBannerFailedReceive, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobBannerLeaveApplication, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobBannerPresent, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobBannerReceive, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobInterstitialDismiss, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobInterstitialFailedReceive, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobInterstitialLeaveApplication, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobInterstitialPresent, onAdmobEvent, false)
document.addEventListener(admob.Event.onAdmobInterstitialReceive, onAdmobEvent, false)
