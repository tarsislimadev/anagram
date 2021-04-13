#!/bin/sh

cordova platform add android

cordova build android --release --buildConfig

mkdir -p /builds

cp /app/platforms/android/app/build/outputs/bundle/release/app-release.aab /builds
