# screenlapse

No thrills NodeJS based timelapse screen recording CLI util, largely
thanks to
[screenshot-desktop](https://github.com/bencevans/screenshot-desktop).

```bash
git clone https://github.com/postspectacular/screenlapse

cd screenlapse
yarn install

# start recording, ctrl+c to stop
./timelapse <delay> <startframe>
```

All args are optional, but must be given in this order:

- `<delay>` - number of milliseconds between each recorded frame (default: 500)
- `<startframe>` - start frame number (default: 0)

## Build mp4

```bash
ffmpeg -r 12 -i '%04d.jpg' -vf scale=1920:-1 -movflags faststart -c:v libx264 -preset slow -crf 20 -y recording.mp4
```
