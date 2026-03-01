@echo off
REM ========================================
REM React Native Windows 编译修复脚本
REM 修复 Microsoft.WindowsAppSDK 1.7.x 路径问题
REM ========================================

echo 正在修复 Microsoft.WindowsAppSDK 路径问题...

REM 设置 NuGet 包路径
set NUGET_PKG_ROOT=C:\Users\Administrator\.nuget\packages\microsoft.windowsappsdk\1.7.250401001

REM 检查目录是否存在
if not exist "%NUGET_PKG_ROOT%" (
    echo 错误：找不到 WindowsAppSDK 包目录：%NUGET_PKG_ROOT%
    exit /b 1
)

REM 创建符号链接 win10- -> win10-x64
echo 创建符号链接：%NUGET_PKG_ROOT%\lib\win10- -^> win10-x64
if exist "%NUGET_PKG_ROOT%\lib\win10-" (
    echo 符号链接已存在，跳过...
) else (
    mklink /D "%NUGET_PKG_ROOT%\lib\win10-" "%NUGET_PKG_ROOT%\lib\win10-x64"
    if errorlevel 1 (
        echo 创建符号链接失败，请确保以管理员身份运行
        exit /b 1
    )
)

REM 创建符号链接 runtimes\win- -> runtimes\win-x64
echo 创建符号链接：%NUGET_PKG_ROOT%\runtimes\win- -^> win-x64
if exist "%NUGET_PKG_ROOT%\runtimes\win-" (
    echo 符号链接已存在，跳过...
) else (
    mklink /D "%NUGET_PKG_ROOT%\runtimes\win-" "%NUGET_PKG_ROOT%\runtimes\win-x64"
    if errorlevel 1 (
        echo 创建符号链接失败，请确保以管理员身份运行
        exit /b 1
    )
)

echo.
echo 符号链接创建成功！
echo.
echo 现在可以开始编译了：
echo cd E:\atbinstallerultra\windows
echo "D:\Program Files\Microsoft Visual Studio\18\Community\MSBuild\Current\Bin\MSBuild.exe" atbinstallerultra.sln /t:Build /p:Configuration=Debug /p:Platform=x64 /m:4 /p:CL_MPCount=3
echo.
