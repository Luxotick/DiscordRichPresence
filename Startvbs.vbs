Dim WinScriptHost
Set WinScriptHost = CreateObject("WScript.Shell")
WinScriptHost.Run Chr(34) & "change it to your folder directory" & Chr(34), 0
Set WinScriptHost = Nothing