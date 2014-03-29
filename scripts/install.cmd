@echo off
setlocal
setlocal EnableDelayedExpansion
setlocal EnableExtensions

set NG_TUBE_REPO=https://github.com/angularjs-foundation/video-app.git
set APP_DIR=application
set MODULES_DIR=hands-on-exercises
set MOD_START=1
set MOD_END=7

:CHECK_GIT_PATH
@echo Checking for Git in PATH
git > NUL 2>&1
if errorlevel 9009 if not errorlevel 9010 goto :GIT_NOT_FOUND

:NPM_INSTALL
@echo.
%COMSPEC% /C npm install

:DIR_CHECK
@echo.
@echo Checking for existing directory %MODULES_DIR%
if exist %MODULES_DIR% goto :MODULE_DIR_EXISTS
if exist %APP_DIR% goto :APP_DIR_EXISTS

@echo.
@echo Cloning ng-tube TO %APP_DIR%
git clone !NG_TUBE_REPO! !APP_DIR! -q

:APP_DIR_EXISTS
@echo.
mkdir %MODULES_DIR%

rem use git to get list of branches to cycle through (skips head)
cd %APP_DIR%
for /f "skip=1 tokens=2 delims=/" %%M in ('git branch -r') do @if "%%M" NEQ "master" ( 
 set CURRENT_MODULE_DIR=%MODULES_DIR%\%%M
 git checkout %%M -q
 mkdir ..\!CURRENT_MODULE_DIR!
 @xcopy *.* ..\!CURRENT_MODULE_DIR!\*.* /s /e /h /y /q
 @echo Downloaded %%M into !CURRENT_MODULE_DIR! 
)
cd ..

goto :DONE

:MODULE_DIR_EXISTS
@echo ..The directory %MODULES_DIR% already exists, please remove first before running the installer.
goto :DONE

:GIT_NOT_FOUND
@ECHO ..Git wasn't found. If Git is installed as bash only, run the ./scripts/install.sh from git bash.

:DONE
