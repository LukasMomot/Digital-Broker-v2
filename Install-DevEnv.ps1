function Install-Software {
    Write-Host 'Installing Software...'
    $Packages = 'nodejs','git', 'vscode'
    ForEach ($PackageName in $Packages) {
        choco install $PackageName -y
    }
    Write-Host 'Installing completed'
}

function Install-Choco {
    Write-Host 'Installing Chocolatey...'
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    Write-Host 'Chocolatey Installation completed'
}

If (Get-Command choco.exe -ErrorAction SilentlyContinue) {
    Write-Host 'Choco already installed'    
    Install-Software
}
Else {
    Install-Choco
    Install-Software
}
