npm install
#ionic serve --lab
rm -R ios
rm -R platforms
ionic cordova platform add ios
ionic cordova build ios