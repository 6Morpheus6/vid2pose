module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [{
    method: "shell.run",
    params: {
      message: "git clone https://github.com/6Morpheus6/vid_2_pose app"
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        venv: "env",
        path: "app"
      }
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "uv pip install opencv-python gradio==3.50.2 moviepy==1.0.3 wheel",
        "uv pip install -U openmim",
        "mim install mmengine==0.10.5 mmdet==3.2.0 mmpose==1.3.2 --no-build-isolation",
        "uv pip install -r requirements.txt",
        "uv pip install mediapipe==0.10.21"
      ]
    }
  }, {
    method: "notify",
    params: {
      html: "Go back to the dashboard and launch the app!"
    }
  }]
}
