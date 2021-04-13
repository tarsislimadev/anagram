FROM tmvdl/android:cordova

ENV ORG_GRADLE_PROJECT_cdvMinSdkVersion=22

EXPOSE 8000

# RUN keytool -genkey -v -alias alias -keystore keystore.jks -keyalg RSA -storepass password -keypass password -validity 1 -keysize 2048

COPY . .

RUN cordova telemetry off

CMD sh ./build.sh

# CMD sh ./run.sh
