FROM tmvdl/android:cordova

WORKDIR /app

RUN cordova create nini com.brtmvdl.nini nini

WORKDIR /app/nini

COPY app www

COPY cp.sh .

RUN cordova platform add android

RUN cordova build android
