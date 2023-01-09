FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create nini com.brtmvdl.nini nini

WORKDIR /app/nini

COPY . .

RUN cordova platform add android

RUN cordova build android
