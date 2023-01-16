FROM tmvdl/android:ionic-jdk8

WORKDIR /app

RUN cordova create fifty com.brtmvdl.fifty fifty

WORKDIR /app/fifty

COPY . .

RUN cordova platform add android

RUN cordova build android
