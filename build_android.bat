@echo off
setlocal

:: Define build path
set BUILD_PATH=build\android\proj

:: Check if build path exists
if not exist "%BUILD_PATH%" (
    echo Error: Build path "%BUILD_PATH%" not found!
    exit /b 1
)

cd "%BUILD_PATH%"

echo Building APK...
call gradlew clean assembleRelease
@REM call gradlew assembleRelease
@REM call gradlew assembleDebug
IF %ERRORLEVEL% NEQ 0 (
    echo Error: Build failed!
    exit /b %ERRORLEVEL%
)

:: Locate the output APK
set APK_DIR=build\fearth-cocos-gdk\outputs\apk\release
if exist "%APK_DIR%" (
    echo Build succeeded! APK location: %CD%\%APK_DIR%
) else (
    echo Error: APK output directory not found!
)

endlocal
