FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create swipe com.brtmvdl.swipe swipe

WORKDIR /app/swipe

COPY . .

RUN cordova platform add android

RUN cordova build android
