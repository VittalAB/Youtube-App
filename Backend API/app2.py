from time import sleep
from flask import *
from pytube import YouTube as yt
import os


folder_path = "./src/assets/"

if len(os.listdir(folder_path)) > 0:
    os.remove(folder_path + 'sample.mp4')


def download(media, link, q):
    if media == "video":
        url = yt(str(link))

        if q == "high":
            video = url.streams.get_high()
        else:
            video = url.streams.get_lowest_resolution()

        out_file = video.download(
            output_path=folder_path, filename='sample.mp4')

        sleep(1)
    else:
        url = yt(str(link))

        if q == "high":
            audio = url.streams.filter(only_audio=True).first()
        else:
            audio = url.streams.filter(only_audio=True).get_lowest_resolution()

        out_file = audio.download(
            output_path=folder_path, filename='sample.mp3')

        sleep(1)


@app.route('/submit_data', methods=['POST'])
def submit():
    media = request.form.get('media')
    url = requesy.form.get("url")
    quality = request.form.get("quality")

    download(media, url, quality)

    return jsonify({"status": "Download Complete"})


if __name__ == "__main__":
    app.run(debug=False, port=9090, host="0.0.0.0")
