FROM tmvdl/android:app

WORKDIR /app

RUN cordova create anagram com.brtmvdl.anagram anagram

WORKDIR /app/anagram

COPY . .

RUN cordova platform add android

RUN cordova build android
