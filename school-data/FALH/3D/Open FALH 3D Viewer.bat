@echo off
setlocal
set "INFRA_ROOT=%~dp0..\..\.."
powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -Command "$root=(Resolve-Path -LiteralPath '%INFRA_ROOT%').Path; $port=8765; $listening=Get-NetTCPConnection -State Listen -LocalPort $port -ErrorAction SilentlyContinue; if(-not $listening){ Start-Process -FilePath 'python' -ArgumentList @('-m','http.server',$port,'--bind','127.0.0.1','--directory',$root) -WindowStyle Hidden }; Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:8765/school-data/FALH/3D/'"
endlocal
