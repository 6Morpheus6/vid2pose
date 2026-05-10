module.exports = {
  run: [
    // nvidia windows 
    {
      "when": "{{gpu === 'nvidia' && platform === 'win32'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 {{args && args.xformers ? 'xformers==0.0.30' : ''}} --index-url https://download.pytorch.org/whl/cu128 --force-reinstall --no-deps",
          "uv pip install ../wheels/mmcv-2.1.0-cp310-cp310-win_amd64.whl"
        ]
      },
      "next": null
    },
    // nvidia linux
    {
      "when": "{{gpu === 'nvidia' && platform === 'linux'}}",
      "method": "shell.run",
      "params": {
        "bluefairy": "off",
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 {{args && args.xformers ? 'xformers==0.0.30' : ''}} --index-url https://download.pytorch.org/whl/cu121 --force-reinstall",
          "uv pip install mmcv==2.1.0 -f https://download.openmmlab.com/mmcv/dist/cu121/torch2.1/index.html"
        ]
      },
      "next": null
    },
    // amd windows
    {
      "when": "{{gpu === 'amd' && platform === 'win32'}}",
      "method": "shell.run",
      "params": {
        "bluefairy": "off",
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "uv pip install torch torch-directml torchaudio torchvision numpy==1.26.4 --force-reinstall"
      },
      "next": null
    },
    // amd linux (rocm)
    {
      "when": "{{gpu === 'amd' && platform === 'linux'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/rocm6.3 --force-reinstall --no-deps"
      },
      "next": null
    },
    // apple silicon mac
    {
      "when": "{{platform === 'darwin' && arch === 'arm64'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/cpu --force-reinstall --no-deps",
          "uv pip install ../wheels/mmcv-2.1.0-cp310-cp310-win_amd64.whl"
        ]
      },
      "next": null
    },
    // intel mac
    {
      "when": "{{platform === 'darwin' && arch !== 'arm64'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 --index-url https://download.pytorch.org/whl/cpu --force-reinstall --no-deps",
          "uv pip install mmcv==2.1.0 -f https://download.openmmlab.com/mmcv/dist/cu121/torch2.1/index.html"
        ]
      }
    },
    // cpu
    {
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0  --index-url https://download.pytorch.org/whl/cpu --force-reinstall --no-deps",
          "uv pip install ../wheels/mmcv-2.1.0-cp310-cp310-win_amd64.whl"
        ]
      }
    }
  ]
}
