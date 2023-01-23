# screenlapse

No frills NodeJS based timelapse screen recording CLI util, largely thanks to
[screenshot-desktop](https://github.com/bencevans/screenshot-desktop). Records
screenshots as image sequence w/ configurable interval.

```bash
git clone https://github.com/postspectacular/screenlapse

cd screenlapse
yarn install

# start recording, ctrl+c to stop
./screenlapse.js <delay> <startframe>
```

All args are optional, but must be given in this order:

-   `<delay>` - number of milliseconds between each recorded frame (default: 500)
-   `<startframe>` - start frame number (default: 0)

## Editing the image sequence

Since each recorded frame is stored as separate JPG file, removing
unwanted frames is easy. However, the missing frames cause the image
sequence to be interrupted in terms of consecutive numbering and
`ffmpeg` will stop encoding at the first gap. To avoid this, use the
included `batch-rename` bash script to rename / renumber all images like
that:

```bash
./batch-rename *.jpg
```

## Build mp4

```bash
ffmpeg -r 12 -i '%04d.jpg' -vf scale=1920:-1 -movflags faststart -c:v libx264 -preset slow -crf 18 -y recording.mp4
```

## License

© 2019 - 2023 Karsten Schmidt // Apache License Version 2.0
