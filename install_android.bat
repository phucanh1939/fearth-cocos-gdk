@echo off
setlocal

:: Define variables
set APK_PATH=build\android\proj\build\fearth-cocos-gdk\outputs\apk\release\fearth-cocos-gdk-release.apk
@REM set APK_PATH=build\android\proj\build\fearth-cocos-gdk\outputs\apk\debug\fearth-cocos-gdk-debug.apk
set PACKAGE_NAME=com.fearth.gdk.cocos

:: Install the APK
echo Installing APK...
adb install "%APK_PATH%"
IF %ERRORLEVEL% NEQ 0 (
    echo Error: APK installation failed!
    exit /b %ERRORLEVEL%
)

:: Launch the app
echo Launching the app...
adb shell monkey -p %PACKAGE_NAME% -c android.intent.category.LAUNCHER 1
IF %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to launch app!
    exit /b %ERRORLEVEL%
)

:: Run logcat with package filter
echo Running logcat for package: %PACKAGE_NAME%
adb logcat -s Cocos FearthGdk

endlocal
